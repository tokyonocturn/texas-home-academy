import type { CategoryId, Course, GradeRecord } from '../types';
import { CATEGORY_LABELS } from '../types';
import {
  PASSING_GRADE,
  clampGrade,
  letterGrade,
  qualityPoints,
  reportedGrade,
  round1,
  type LetterGrade,
} from './scale';

/**
 * Gradebook engine.
 *
 * Nothing here awards points for opening a lesson. A grade exists only when an
 * assessment produces a numeric score (auto-graded or parent-scored against a
 * published rubric).
 */

export interface CategoryResult {
  id: CategoryId;
  label: string;
  weight: number;
  average: number | null;
  earned: number;
  possible: number;
  count: number;
}

export interface SemesterResult {
  semester: 1 | 2;
  periodGrades: (number | null)[];
  courseWorkAverage: number | null;
  examGrade: number | null;
  examTitle: string | null;
  grade: number | null;
}

export interface CourseResult {
  courseId: string;
  categories: CategoryResult[];
  periods: { period: string; grade: number | null }[];
  semesters: SemesterResult[];
  /** Average of the graded six-week periods (coursework only). */
  courseworkAverage: number | null;
  /** Cumulative final examination score, if recorded. */
  examGrade: number | null;
  /** Running weighted average across all graded work; for display only. */
  currentGrade: number | null;
  /** Official final grade. Null until the cumulative final exam is recorded. */
  finalGrade: number | null;
  letter: LetterGrade;
  points: number;
  creditsEarned: number;
  passing: boolean;
  gradedItems: number;
  totalWeight: number;
}

export function percent(score: number, max: number): number {
  if (!Number.isFinite(score) || !Number.isFinite(max) || max <= 0) return 0;
  return clampGrade((score / max) * 100);
}

export function recordsForCourse(records: GradeRecord[], courseId: string): GradeRecord[] {
  return records.filter((r) => r.courseId === courseId);
}

/**
 * The attempt that counts for each assessment.
 *
 * Summative assessments (quizzes, projects, exams) keep the latest attempt,
 * which is already capped when the record is written. Practice is formative:
 * the best percentage counts, so a lower retake can never pull a course grade
 * down. The UI promises exactly this on the lesson page.
 */
export function latestAttempts(records: GradeRecord[]): GradeRecord[] {
  const best = new Map<string, GradeRecord>();
  const ratio = (record: GradeRecord) => (record.max > 0 ? record.score / record.max : 0);
  for (const record of records) {
    const key = record.assessmentId;
    const existing = best.get(key);
    if (!existing) {
      best.set(key, record);
      continue;
    }
    const formative = existing.category === 'practice' || record.category === 'practice';
    if (formative) {
      const better = ratio(record) > ratio(existing);
      const tiedAndLater = ratio(record) === ratio(existing) && record.attempt >= existing.attempt;
      if (better || tiedAndLater) best.set(key, record);
      continue;
    }
    if (record.attempt >= existing.attempt) best.set(key, record);
  }
  return [...best.values()];
}

export function categoryResults(course: Course, records: GradeRecord[]): CategoryResult[] {
  const attempts = latestAttempts(records);
  const ids = Object.keys(course.weights) as CategoryId[];
  return ids.map((id) => {
    const scoped = attempts.filter((r) => r.category === id);
    const earned = scoped.reduce((sum, r) => sum + r.score, 0);
    const possible = scoped.reduce((sum, r) => sum + r.max, 0);
    const weight = course.weights[id] ?? 0;
    return {
      id,
      label: CATEGORY_LABELS[id],
      weight,
      average: possible > 0 ? (earned / possible) * 100 : null,
      earned,
      possible,
      count: scoped.length,
    };
  });
}

/** Weighted mean of categories that contain graded work, renormalized. */
export function weightedAverage(categories: CategoryResult[]): number | null {
  let weightSum = 0;
  let total = 0;
  for (const category of categories) {
    if (category.average === null || category.weight <= 0) continue;
    weightSum += category.weight;
    total += category.average * category.weight;
  }
  if (weightSum === 0) return null;
  return total / weightSum;
}

export function periodRecords(records: GradeRecord[], period: string): GradeRecord[] {
  return records.filter((r) => r.period === period);
}

export function periodGrade(course: Course, records: GradeRecord[], period: string): number | null {
  // Semester exams are stored with the period in which they were taken, but
  // they are weighted separately (20%) and must not also inflate that period.
  const scoped = periodRecords(latestAttempts(records), period).filter(
    (r) => r.category !== 'exam',
  );
  if (scoped.length === 0) return null;
  return weightedAverage(categoryResults(course, scoped));
}

export function examIdForSemester(course: Course, semester: 1 | 2): string {
  if (course.semesters === 1) return `${course.id}:final`;
  return semester === 1 ? `${course.id}:midterm` : `${course.id}:final`;
}

function examRecord(
  course: Course,
  records: GradeRecord[],
  semester: 1 | 2,
): { grade: number | null; title: string | null } {
  const id = examIdForSemester(course, semester);
  const record = latestAttempts(records).find((r) => r.assessmentId === id);
  if (!record) return { grade: null, title: null };
  return { grade: percent(record.score, record.max), title: record.title };
}

export function semesterResult(
  course: Course,
  records: GradeRecord[],
  semester: 1 | 2,
  periodIds: string[],
): SemesterResult {
  const grades = periodIds.map((p) => periodGrade(course, records, p));
  const present = grades.filter((g): g is number => g !== null);
  const courseWorkAverage =
    present.length > 0 ? present.reduce((a, b) => a + b, 0) / present.length : null;
  const exam = examRecord(course, records, semester);
  // Semester = 80% coursework + 20% its exam (the semester 1 midterm or the
  // cumulative final). If only one side exists, that side stands alone so a
  // student who has finished the exam is not penalized for a missing period.
  let grade: number | null = null;
  if (courseWorkAverage !== null && exam.grade !== null) {
    grade = courseWorkAverage * 0.8 + exam.grade * 0.2;
  } else if (courseWorkAverage !== null) {
    grade = courseWorkAverage;
  } else if (exam.grade !== null) {
    grade = exam.grade;
  }
  return {
    semester,
    periodGrades: grades,
    courseWorkAverage,
    examGrade: exam.grade,
    examTitle: exam.title,
    grade,
  };
}

export function courseResult(
  course: Course,
  allRecords: GradeRecord[],
  periodIdsBySemester: { semester: 1 | 2; periods: string[] }[] = [
    { semester: 1, periods: ['Q1', 'Q2', 'Q3'] },
    { semester: 2, periods: ['Q4', 'Q5', 'Q6'] },
  ],
): CourseResult {
  const records = recordsForCourse(allRecords, course.id);
  const categories = categoryResults(course, records);
  const semesters = periodIdsBySemester
    .slice(0, course.semesters)
    .map((s) => semesterResult(course, records, s.semester, s.periods));
  const gradedPeriods = semesters
    .flatMap((s) => s.periodGrades)
    .filter((g): g is number => g !== null);
  const courseworkAverage =
    gradedPeriods.length > 0
      ? gradedPeriods.reduce((a, b) => a + b, 0) / gradedPeriods.length
      : null;

  const currentGrade = weightedAverage(categories);
  // A final grade is official only once the cumulative final exam exists; until
  // then the course is in progress and cannot earn credit or enter the GPA.
  const finalExamRecord = latestAttempts(records).find(
    (r) => r.assessmentId === `${course.id}:final`,
  );
  const examGrade = finalExamRecord ? percent(finalExamRecord.score, finalExamRecord.max) : null;
  const allSemestersGraded =
    semesters.length === course.semesters &&
    semesters.every((semester) => semester.grade !== null);
  // The final grade is the average of every semester grade, and it does not
  // exist until the cumulative final examination and all coursework semesters
  // have a grade. Filtering null semesters let a full-year course issue credit
  // from semester 2 alone when semester 1 was never started.
  const finalGrade =
    finalExamRecord && allSemestersGraded
      ? semesters.reduce((sum, semester) => sum + (semester.grade ?? 0), 0) /
        semesters.length
      : null;

  // Decisions follow the grade the family actually sees (one decimal), so a
  // report card can never display 90.0 with a B or 70.0 with credit withheld.
  const reported = reportedGrade(finalGrade);
  const passing = reported !== null && reported >= PASSING_GRADE;
  const points = reported !== null ? qualityPoints(reported, course.advanced) : 0;

  return {
    courseId: course.id,
    categories,
    periods: [
      ...periodIdsBySemester.slice(0, course.semesters).flatMap((s) => s.periods),
    ].map((period) => ({ period, grade: periodGrade(course, records, period) })),
    semesters,
    courseworkAverage,
    examGrade,
    currentGrade,
    finalGrade,
    letter: letterGrade(reported),
    points,
    creditsEarned: passing ? course.credits : 0,
    passing,
    gradedItems: latestAttempts(records).length,
    totalWeight: categories.reduce((sum, c) => sum + (c.average !== null ? c.weight : 0), 0),
  };
}

/** Display helper: 87.35 -> "87.4". */
export function displayGrade(value: number | null): string {
  return value === null ? '—' : round1(value).toFixed(1);
}
