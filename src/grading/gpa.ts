import type { Course, GradeRecord } from '../types';
import { courseResult } from './gradebook';
import { PASSING_GRADE, baseQualityPoints, reportedGrade, round2 } from './scale';

/**
 * GPA is credit-weighted and computed only from high-school courses that carry
 * credit and have at least one recorded grade. K-8 courses never enter the GPA.
 */

export interface GpaLine {
  courseId: string;
  title: string;
  credits: number;
  grade: number;
  letter: string;
  points: number;
  weightedPoints: number;
  advanced: boolean;
}

export interface GpaSummary {
  unweighted: number;
  weighted: number;
  creditsAttempted: number;
  creditsEarned: number;
  courses: GpaLine[];
}

export function computeGpa(courses: Course[], records: GradeRecord[]): GpaSummary {
  const lines: GpaLine[] = [];
  for (const course of courses) {
    if (course.credits <= 0) continue;
    const result = courseResult(course, records);
    if (result.finalGrade === null || result.gradedItems === 0) continue;
    lines.push({
      courseId: course.id,
      title: course.title,
      credits: course.credits,
      grade: result.finalGrade,
      letter: result.letter,
      points: result.points,
      weightedPoints: result.points,
      advanced: Boolean(course.advanced),
    });
  }

  const creditsAttempted = lines.reduce((sum, l) => sum + l.credits, 0);
  const creditsEarned = lines.reduce(
    (sum, l) => sum + ((reportedGrade(l.grade) ?? 0) >= PASSING_GRADE ? l.credits : 0),
    0,
  );
  // Weighted uses the advanced bonus in each line's points; unweighted must
  // recompute base points, or an advanced course would inflate both GPAs.
  const weightedSum = lines.reduce((sum, l) => sum + l.points * l.credits, 0);
  // Both GPAs must use the same reported one-decimal grade. Using the hidden
  // full-precision final here let an 89.96 course report 90.0 (A, 4.0) in the
  // weighted GPA while the unweighted GPA used B points.
  const baseSum = lines.reduce(
    (sum, l) => sum + baseQualityPoints(reportedGrade(l.grade) ?? 0) * l.credits,
    0,
  );

  return {
    unweighted: creditsAttempted > 0 ? round2(baseSum / creditsAttempted) : 0,
    weighted: creditsAttempted > 0 ? round2(weightedSum / creditsAttempted) : 0,
    creditsAttempted: round2(creditsAttempted),
    creditsEarned: round2(creditsEarned),
    courses: lines,
  };
}

/** Unweighted GPA uses base quality points even for advanced courses. */
export function splitGpa(courses: Course[], records: GradeRecord[]): {
  unweighted: number;
  weighted: number;
  summary: GpaSummary;
} {
  const summary = computeGpa(courses, records);
  return {
    unweighted: summary.unweighted,
    weighted: summary.weighted,
    summary,
  };
}
