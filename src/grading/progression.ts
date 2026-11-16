import type { AppState, Course, GradeRecord } from '../types';
import { courseResult } from './gradebook';
import { PASSING_GRADE, reportedGrade } from './scale';

/**
 * Promotion and remediation policy for K-8, plus retake eligibility.
 *
 * Promotion is a family decision under Texas law (home schools are private
 * schools and TEA does not accredit or monitor them). This program's policy is
 * a defensible default that families can review and override in writing.
 */

export const CORE_SUBJECTS = ['ela', 'math', 'science', 'social-studies'] as const;

export interface CheckLine {
  label: string;
  met: boolean;
  detail: string;
}

export interface AdvancementCheck {
  eligible: boolean;
  lines: CheckLine[];
  blockers: string[];
}

export function coreCoursesForGrade(courses: Course[], grade: number): Course[] {
  return courses.filter(
    (c) => c.grade === grade && (CORE_SUBJECTS as readonly string[]).includes(c.subject),
  );
}

export function attendanceSummary(state: AppState, totalDays: number): {
  daysAttended: number;
  rate: number;
  requiredDays: number;
} {
  const days = state.attendance.filter((a) => a.minutes >= state.settings.fullDayMinutes).length;
  const rate = totalDays > 0 ? days / totalDays : 0;
  return { daysAttended: days, rate, requiredDays: Math.ceil(totalDays * 0.9) };
}

export function checkAdvancement(
  state: AppState,
  courses: Course[],
  totalInstructionalDays: number,
): AdvancementCheck {
  const grade = state.profile.gradeLevel;
  const lines: CheckLine[] = [];
  const blockers: string[] = [];
  // Only courses the family actually enrolled in count. Without this filter the
  // check would report on every catalog course for the grade, including ones the
  // student never started, and could never be satisfied honestly.
  const enrolled = new Set(state.enrollments.map((entry) => entry.courseId));
  const core = coreCoursesForGrade(courses, grade).filter((course) => enrolled.has(course.id));

  if (grade >= 12) {
    lines.push({
      label: 'Grade 12',
      met: false,
      detail: 'Grade 12 completes with graduation eligibility rather than promotion to another grade.',
    });
    return { eligible: false, lines, blockers: ['Use the graduation audit for grade 12.'] };
  }

  if (core.length === 0) {
    lines.push({
      label: 'Core courses enrolled',
      met: false,
      detail: 'No core courses are enrolled for this grade yet.',
    });
    blockers.push('Enroll in English, math, science, and social studies for this grade.');
  } else {
    for (const subject of CORE_SUBJECTS) {
    const courses = core.filter((c) => c.subject === subject);
    const label =
      subject === 'ela'
        ? 'English language arts'
        : subject === 'math'
          ? 'Mathematics'
          : subject === 'science'
            ? 'Science'
            : 'Social studies';
    if (courses.length === 0) {
      lines.push({ label, met: false, detail: 'Not enrolled.' });
      blockers.push(`${label}: enroll and complete a course.`);
      continue;
    }
    const results = courses.map((c) => courseResult(c, state.grades));
    const complete = results.every((r) => r.finalGrade !== null);
    const passing = results.every(
      (r) => (reportedGrade(r.finalGrade) ?? -1) >= PASSING_GRADE,
    );
    const worst = Math.min(...results.map((r) => r.finalGrade ?? 0));
    lines.push({
      label,
      met: complete && passing,
      detail:
        results.length === 1
          ? `${courses[0].title}: ${complete ? `${worst.toFixed(1)} final` : 'in progress'}`
          : `${results.length} courses; lowest final ${complete ? worst.toFixed(1) : 'in progress'}`,
    });
      if (!complete) blockers.push(`${label}: finish the final assessment.`);
      else if (!passing) blockers.push(`${label}: final grade below 70; remediation required.`);
    }
  }

  const attendance = attendanceSummary(state, totalInstructionalDays);
  const attendanceMet = attendance.rate >= 0.9;
  lines.push({
    label: 'Attendance',
    met: attendanceMet,
    detail: `${attendance.daysAttended} full days logged of ${totalInstructionalDays} (${(attendance.rate * 100).toFixed(1)}%); 90% is the credit standard (Tex. Educ. Code §25.092).`,
  });
  if (!attendanceMet) {
    blockers.push(
      `Attendance is below 90% (${attendance.requiredDays} full days needed). Log make-up days or document equivalent instruction.`,
    );
  }

  return { eligible: lines.every((l) => l.met), lines, blockers };
}

/**
 * Retakes: one retake per assessment, requires a remediation note, and the
 * retake is capped at 80 (see GRADE_POLICY). Practice sets may be retried
 * freely because they are formative and recorded as the best attempt.
 */
export const RETAKE_CAP = 80;
export const MAX_ATTEMPTS = 2;

export function attemptsFor(records: GradeRecord[], assessmentId: string): number {
  return records.filter((r) => r.assessmentId === assessmentId).length;
}

export function canRetake(records: GradeRecord[], assessmentId: string, category: string): {
  allowed: boolean;
  reason: string;
} {
  if (category === 'practice') return { allowed: true, reason: 'Practice sets may be retried.' };
  const attempts = attemptsFor(records, assessmentId);
  if (attempts >= MAX_ATTEMPTS) {
    return {
      allowed: false,
      reason: `Both attempts are used. Log remediation and use a written alternative assessment.`,
    };
  }
  return { allowed: true, reason: 'One retake is available after documented remediation.' };
}

/**
 * Cap a retake at 80 percent of the assessment's maximum, in points.
 *
 * The cap is a percentage, not a point value: an 18-point quiz retake tops out
 * at 14.4 points and a 100-point exam at 80 points. Comparing raw points to 80
 * silently exempted every assessment worth less than 80 points.
 */
export function applyRetakeCap(rawScore: number, max: number, attempt: number): number {
  if (attempt <= 1) return rawScore;
  if (!Number.isFinite(max) || max <= 0) return rawScore;
  return Math.min(rawScore, (RETAKE_CAP / 100) * max);
}
