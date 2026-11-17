import { describe, expect, it } from 'vitest';
import type { AppState, Course, GradeRecord } from '../types';
import { auditGraduation } from './graduation';
import { courseResult, displayGrade } from './gradebook';
import { computeGpa, splitGpa } from './gpa';
import { reportedGrade } from './scale';
import { defaultState, parseImportedState, serializeState } from '../state/persistence';
import { GRADE_CSV_HEADERS, gradesCsv, parseCsv } from '../state/export';

/**
 * Academic-record fixtures.
 *
 * Every expected number below was computed by hand from the raw scores using
 * the documented policy: category weights renormalized over graded work,
 * semester = 80% period average + 20% exam, final = average of semesters,
 * reported to one decimal before letter/credit decisions.
 */

function makeCourse(overrides: Partial<Course> = {}): Course {
  return {
    id: 'alg',
    title: 'Algebra I',
    subject: 'math',
    grade: 9,
    credits: 1,
    semesters: 2,
    description: '',
    essentialQuestions: [],
    teks: [],
    weights: { practice: 10, quiz: 25, exam: 40, project: 25 },
    units: [],
    midterm: { title: 'Midterm', instructions: '', questions: [] },
    finalExam: { title: 'Final', instructions: '', questions: [] },
    ...overrides,
  };
}

let counter = 0;

function rec(partial: Partial<GradeRecord>): GradeRecord {
  counter += 1;
  return {
    id: `record-${counter}`,
    courseId: 'alg',
    assessmentId: `assessment-${counter}`,
    title: 'Assessment',
    category: 'quiz',
    score: 0,
    max: 100,
    attempt: 1,
    recordedAt: '2026-09-15',
    period: 'Q1',
    gradedBy: 'auto',
    ...partial,
  };
}

/** Q1 92.857 + Q2 85 + Q3 70, midterm 60; Q4/Q5/Q6 100, final 90. */
function twoSemesterRecords(): GradeRecord[] {
  return [
    rec({ category: 'quiz', period: 'Q1', score: 90 }),
    rec({ category: 'practice', period: 'Q1', score: 10, max: 10 }),
    rec({ category: 'quiz', period: 'Q2', score: 80 }),
    rec({ category: 'project', period: 'Q2', score: 90 }),
    rec({ category: 'quiz', period: 'Q3', score: 70 }),
    rec({
      category: 'exam',
      period: 'Q3',
      assessmentId: 'alg:midterm',
      title: 'Midterm',
      score: 60,
    }),
    rec({ category: 'quiz', period: 'Q4', score: 100 }),
    rec({ category: 'project', period: 'Q5', score: 100 }),
    rec({ category: 'quiz', period: 'Q6', score: 100 }),
    rec({
      category: 'exam',
      period: 'Q6',
      assessmentId: 'alg:final',
      title: 'Final',
      score: 90,
    }),
  ];
}

function oneSemester(score: number, exam: number, courseId = 'one'): {
  course: Course;
  records: GradeRecord[];
} {
  const course = makeCourse({ id: courseId, title: 'One semester', semesters: 1 });
  return {
    course,
    records: [
      rec({ courseId, assessmentId: `${courseId}:quiz`, category: 'quiz', period: 'Q1', score }),
      rec({
        courseId,
        assessmentId: `${courseId}:final`,
        category: 'exam',
        period: 'Q3',
        title: 'Final',
        score: exam,
      }),
    ],
  };
}

describe('weighted averages across a full year', () => {
  const result = courseResult(makeCourse(), twoSemesterRecords());

  it('renormalizes each six-week period over the categories with work', () => {
    expect(result.periods.map((period) => period.grade)).toEqual([
      expect.closeTo(92.857142857, 5),
      expect.closeTo(85, 5),
      expect.closeTo(70, 5),
      expect.closeTo(100, 5),
      expect.closeTo(100, 5),
      expect.closeTo(100, 5),
    ]);
  });

  it('computes semester grades as 80% periods + 20% exam', () => {
    expect(result.semesters[0].courseWorkAverage).toBeCloseTo(82.619047619, 5);
    expect(result.semesters[0].examGrade).toBe(60);
    expect(result.semesters[0].grade).toBeCloseTo(78.095238095, 5);
    expect(result.semesters[1].courseWorkAverage).toBeCloseTo(100, 5);
    expect(result.semesters[1].grade).toBeCloseTo(98, 5);
  });

  it('averages the semester grades into the final grade', () => {
    expect(result.finalGrade).toBeCloseTo(88.047619048, 5);
    expect(displayGrade(result.finalGrade)).toBe('88.0');
    expect(result.letter).toBe('B');
    expect(result.points).toBe(3);
    expect(result.passing).toBe(true);
    expect(result.creditsEarned).toBe(1);
  });

  it('keeps semester exams out of the period average they were taken in', () => {
    // Q3 is 70 even though the midterm (60) was recorded in Q3.
    expect(result.periods[2].grade).toBeCloseTo(70, 5);
  });
});

describe('reported-grade boundaries', () => {
  it('turns 89.95 into a reported 90.0 and an A', () => {
    const { course, records } = oneSemester(89.9375, 90);
    const result = courseResult(course, records);
    expect(result.finalGrade).toBeCloseTo(89.95, 5);
    expect(displayGrade(result.finalGrade)).toBe('90.0');
    expect(result.letter).toBe('A');
    expect(result.points).toBe(4);
    expect(result.creditsEarned).toBe(1);
  });

  it('turns 69.95 into a reported 70.0 with credit', () => {
    const { course, records } = oneSemester(69.9375, 70);
    const result = courseResult(course, records);
    expect(displayGrade(result.finalGrade)).toBe('70.0');
    expect(result.letter).toBe('C');
    expect(result.passing).toBe(true);
    expect(result.creditsEarned).toBe(1);
  });

  it('keeps 69.94 below passing after reporting', () => {
    const { course, records } = oneSemester(69.925, 69.925);
    const result = courseResult(course, records);
    expect(displayGrade(result.finalGrade)).toBe('69.9');
    expect(result.letter).toBe('D');
    expect(result.passing).toBe(false);
    expect(result.creditsEarned).toBe(0);
  });

  it('reports one decimal consistently through reportedGrade', () => {
    expect(reportedGrade(89.95)).toBe(90);
    expect(reportedGrade(69.95)).toBe(70);
    expect(reportedGrade(null)).toBeNull();
    expect(displayGrade(87.35)).toBe('87.4');
  });
});

describe('GPA variants', () => {
  const regular = makeCourse({ id: 'alg', title: 'Algebra I' });
  const advanced = makeCourse({ id: 'adv', title: 'Advanced Math', advanced: true });
  const regularRecords = twoSemesterRecords();
  const advancedRecords = [
    rec({ courseId: 'adv', assessmentId: 'adv:quiz', category: 'quiz', period: 'Q1', score: 85 }),
    rec({
      courseId: 'adv',
      assessmentId: 'adv:final',
      category: 'exam',
      period: 'Q6',
      score: 85,
    }),
  ];

  it('computes credit-weighted unweighted and weighted GPAs independently', () => {
    const summary = computeGpa([regular, advanced], [...regularRecords, ...advancedRecords]);
    expect(summary.courses).toHaveLength(2);
    expect(summary.creditsAttempted).toBe(2);
    expect(summary.creditsEarned).toBe(2);
    // 88.0 -> 3.0; 85 -> 3.5 weighted / 3.0 unweighted.
    expect(summary.unweighted).toBe(3);
    expect(summary.weighted).toBe(3.25);
  });

  it('matches splitGpa to the summary rather than recomputing differently', () => {
    const split = splitGpa([regular, advanced], [...regularRecords, ...advancedRecords]);
    expect(split.unweighted).toBe(3);
    expect(split.weighted).toBe(3.25);
    expect(split.summary.unweighted).toBe(split.unweighted);
    expect(split.summary.weighted).toBe(split.weighted);
  });

  it('excludes non-credit and ungraded courses', () => {
    const kindergarten = makeCourse({ id: 'k', title: 'Kindergarten', grade: 0, credits: 0 });
    const ungraded = makeCourse({ id: 'ungraded', title: 'Ungraded' });
    const summary = computeGpa([kindergarten, ungraded], []);
    expect(summary.courses).toEqual([]);
    expect(summary.creditsAttempted).toBe(0);
    expect(summary.unweighted).toBe(0);
    expect(summary.weighted).toBe(0);
  });

  it('counts a failed course as attempted but not earned, with zero quality points', () => {
    const failing = makeCourse({ id: 'fail', title: 'Failed course' });
    const failingRecords = [
      rec({ courseId: 'fail', assessmentId: 'fail:final', category: 'exam', period: 'Q6', score: 55 }),
      rec({ courseId: 'fail', assessmentId: 'fail:q', category: 'quiz', period: 'Q1', score: 55 }),
    ];
    const summary = computeGpa([failing], failingRecords);
    expect(summary.creditsAttempted).toBe(1);
    expect(summary.creditsEarned).toBe(0);
    expect(summary.unweighted).toBe(0);
    expect(summary.weighted).toBe(0);
  });

  it('weights a half-credit course at half a credit', () => {
    const half = makeCourse({ id: 'half', title: 'Half', credits: 0.5 });
    const halfRecords = [
      rec({ courseId: 'half', assessmentId: 'half:q', category: 'quiz', period: 'Q1', score: 95 }),
      rec({
        courseId: 'half',
        assessmentId: 'half:final',
        category: 'exam',
        period: 'Q3',
        score: 95,
      }),
    ];
    const summary = computeGpa([half], halfRecords);
    expect(summary.creditsAttempted).toBe(0.5);
    expect(summary.creditsEarned).toBe(0.5);
    expect(summary.unweighted).toBe(4);
  });

  it('uses the reported one-decimal grade in both GPAs at a rounding boundary', () => {
    // 0.8(89.9375) + 0.2(90) = 89.95, reported as 90.0 and awarded A points.
    const { course, records } = oneSemester(89.9375, 90, 'boundary');
    const summary = computeGpa([course], records);
    expect(summary.courses[0].grade).toBeCloseTo(89.95, 5);
    expect(summary.courses[0].letter).toBe('A');
    expect(summary.unweighted).toBe(4);
    expect(summary.weighted).toBe(4);

    // 69.96 reports as 70.0, so both GPAs must use C points rather than D.
    const passing = oneSemester(69.9375, 70, 'passing');
    const passingSummary = computeGpa([passing.course], passing.records);
    expect(passingSummary.courses[0].letter).toBe('C');
    expect(passingSummary.unweighted).toBe(2);
    expect(passingSummary.weighted).toBe(2);
  });
});

describe('edge cases', () => {
  it('returns empty, non-passing results for a student with zero grades', () => {
    const result = courseResult(makeCourse(), []);
    expect(result.periods.every((period) => period.grade === null)).toBe(true);
    expect(result.semesters.every((semester) => semester.grade === null)).toBe(true);
    expect(result.currentGrade).toBeNull();
    expect(result.finalGrade).toBeNull();
    expect(result.letter).toBe('—');
    expect(result.creditsEarned).toBe(0);
    expect(result.gradedItems).toBe(0);
  });

  it('tracks a single graded item without inventing a final grade', () => {
    const result = courseResult(makeCourse(), [
      rec({ assessmentId: 'only', category: 'quiz', period: 'Q1', score: 75 }),
    ]);
    expect(result.currentGrade).toBeCloseTo(75, 5);
    expect(result.finalGrade).toBeNull();
    expect(result.creditsEarned).toBe(0);
  });

  it('withholds a full-year final when one semester has no grade', () => {
    const course = makeCourse();
    const records = [
      rec({ assessmentId: 'q4', category: 'quiz', period: 'Q4', score: 95 }),
      rec({ assessmentId: 'q5', category: 'quiz', period: 'Q5', score: 95 }),
      rec({ assessmentId: 'q6', category: 'quiz', period: 'Q6', score: 95 }),
      rec({ assessmentId: 'alg:final', category: 'exam', period: 'Q6', score: 95 }),
    ];
    const result = courseResult(course, records);
    expect(result.semesters[0].grade).toBeNull();
    expect(result.semesters[1].grade).not.toBeNull();
    expect(result.finalGrade).toBeNull();
    expect(result.creditsEarned).toBe(0);
    expect(computeGpa([course], records).courses).toEqual([]);
    expect(auditGraduation([course], records).totalCredits).toBe(0);
  });

  it('uses only the latest failed attempt for a repeated final exam', () => {
    const course = makeCourse({ semesters: 1 });
    const records = [
      rec({ assessmentId: 'alg:q', category: 'quiz', period: 'Q1', score: 70 }),
      rec({ assessmentId: 'alg:final', category: 'exam', period: 'Q3', attempt: 1, score: 55 }),
      rec({ assessmentId: 'alg:final', category: 'exam', period: 'Q3', attempt: 2, score: 75 }),
    ];
    const result = courseResult(course, records);
    expect(result.examGrade).toBe(75);
    expect(result.finalGrade).toBeCloseTo(0.8 * 70 + 0.2 * 75, 5);
    expect(result.creditsEarned).toBe(1);
  });

  it('keeps term data separate when periods differ', () => {
    const course = makeCourse({ semesters: 1 });
    const result = courseResult(course, [
      rec({ assessmentId: 'q1', category: 'quiz', period: 'Q1', score: 90 }),
      rec({ assessmentId: 'q3', category: 'quiz', period: 'Q3', score: 80 }),
    ]);
    expect(result.periods).toEqual([
      { period: 'Q1', grade: 90 },
      { period: 'Q2', grade: null },
      { period: 'Q3', grade: 80 },
    ]);
  });

  it('honors non-standard category weights and renormalizes missing work', () => {
    const course = makeCourse({ weights: { quiz: 60, project: 40 } });
    const both = courseResult(course, [
      rec({ category: 'quiz', score: 100 }),
      rec({ category: 'project', score: 50 }),
    ]);
    expect(both.currentGrade).toBeCloseTo(80, 5);
    const quizOnly = courseResult(course, [rec({ category: 'quiz', score: 100 })]);
    expect(quizOnly.currentGrade).toBeCloseTo(100, 5);
  });

  it('counts core credits beyond a requirement toward electives', () => {
    const mathIds = ['hs-alg1', 'hs-geom', 'hs-alg2', 'hs-precalc'];
    const mathCourses = mathIds.map((id) => makeCourse({ id, title: id, credits: 1 }));
    const mathRecords = mathIds.flatMap((id) => [
      rec({ courseId: id, assessmentId: `${id}:q`, category: 'quiz', period: 'Q1', score: 90 }),
      rec({
        courseId: id,
        assessmentId: `${id}:final`,
        category: 'exam',
        period: 'Q6',
        score: 90,
      }),
    ]);
    const audit = auditGraduation(mathCourses, mathRecords);
    expect(audit.requirements.find((r) => r.id === 'math')?.earned).toBe(4);
    expect(audit.requirements.find((r) => r.id === 'math')?.satisfied).toBe(true);
    // Three math credits apply to the requirement; the fourth is an elective.
    expect(audit.requirements.find((r) => r.id === 'electives')?.earned).toBe(1);
    expect(audit.totalCredits).toBe(4);
  });

  it('keeps GPA, the graduation audit, and the course result on the same credit', () => {
    const course = makeCourse({ title: 'Algebra I' });
    const records = twoSemesterRecords();
    const result = courseResult(course, records);
    const gpa = computeGpa([course], records);
    const audit = auditGraduation([course], records);
    expect(result.finalGrade).not.toBeNull();
    expect(result.creditsEarned).toBe(course.credits);
    expect(gpa.courses.map((line) => line.courseId)).toEqual([course.id]);
    expect(gpa.creditsEarned).toBe(course.credits);
    expect(audit.completed.map((entry) => entry.courseId)).toEqual([course.id]);
    expect(audit.totalCredits).toBe(course.credits);
    expect(audit.completed[0].grade).toBe(reportedGrade(result.finalGrade));
  });

  it('credits FHSP requirements only for passing completed courses', () => {
    const algebra = makeCourse({ id: 'hs-alg1', title: 'Algebra I', credits: 1 });
    const english = makeCourse({ id: 'hs-eng1', title: 'English I', credits: 1, subject: 'ela' });
    const records = [
      rec({ courseId: 'hs-alg1', assessmentId: 'hs-alg1:q', category: 'quiz', period: 'Q1', score: 85 }),
      rec({
        courseId: 'hs-alg1',
        assessmentId: 'hs-alg1:final',
        category: 'exam',
        period: 'Q6',
        score: 85,
      }),
      rec({ courseId: 'hs-eng1', assessmentId: 'hs-eng1:q', category: 'quiz', period: 'Q1', score: 65 }),
      rec({
        courseId: 'hs-eng1',
        assessmentId: 'hs-eng1:final',
        category: 'exam',
        period: 'Q6',
        score: 65,
      }),
    ];
    const audit = auditGraduation([algebra, english], records);
    expect(audit.requirements.find((r) => r.id === 'math')?.earned).toBe(1);
    expect(audit.requirements.find((r) => r.id === 'ela')?.earned).toBe(0);
    expect(audit.totalCredits).toBe(1);
    expect(audit.fhspMet).toBe(false);
  });
});

function fixtureState(): AppState {
  const base = structuredClone(defaultState);
  const profile = {
    ...base.profile,
    firstName: 'Avery',
    lastName: 'Chen',
    gradeLevel: 9,
    schoolName: 'Chen Home Academy',
  };
  const enrollments = [
    { courseId: 'hs-alg1', yearId: '2026-2027', startedAt: '2026-08-24' },
    { courseId: 'hs-eng1', yearId: '2026-2027', startedAt: '2026-08-24' },
  ];
  const grades = [
      rec({
        courseId: 'hs-alg1',
        assessmentId: 'hs-alg1:q1',
        title: 'Quiz, "Chapter 1"',
        category: 'quiz',
        period: 'Q1',
        score: 90,
      }),
      rec({
        courseId: 'hs-eng1',
        assessmentId: 'hs-eng1:q1',
        title: 'Essay',
        category: 'project',
        period: 'Q2',
        score: 89.95,
        max: 100,
      }),
  ];
  return {
    ...base,
    profile,
    enrollments,
    grades,
    students: [{ ...base.students[0], profile, enrollments, grades }],
  };
}

describe('exports', () => {
  it('round-trips the full JSON backup without losing values', () => {
    const state = fixtureState();
    const restored = parseImportedState(serializeState(state));
    expect(restored).toEqual(state);
    expect(restored.grades[1].score).toBe(89.95);
    expect(restored.enrollments).toHaveLength(2);
  });

  it('writes a grade CSV with headers, every stored row, and correct percentages', () => {
    const state = fixtureState();
    const text = gradesCsv(state, [
      makeCourse({ id: 'hs-alg1', title: 'Algebra I' }),
      makeCourse({ id: 'hs-eng1', title: 'English I' }),
    ]);
    const rows = parseCsv(text);
    expect(rows[0]).toEqual([...GRADE_CSV_HEADERS]);
    expect(rows).toHaveLength(state.grades.length + 1);
    const quiz = rows.find((row) => row[1] === 'Algebra I')!;
    const essay = rows.find((row) => row[1] === 'English I')!;
    expect(quiz[7]).toBe('90');
    expect(essay[7]).toBe('89.95');
    // Commas and quotes survive a round trip through the CSV reader.
    expect(essay[2]).toBe('Essay');
    expect(quiz[2]).toBe('Quiz, "Chapter 1"');
  });

  it('does not truncate a large gradebook', () => {
    const state = fixtureState();
    state.grades = Array.from({ length: 5000 }, (_, index) =>
      rec({
        id: `bulk-${index}`,
        courseId: 'hs-alg1',
        assessmentId: `bulk-${index}`,
        title: `Item ${index}`,
        score: index % 101,
      }),
    );
    const rows = parseCsv(gradesCsv(state, [makeCourse({ id: 'hs-alg1' })]));
    expect(rows).toHaveLength(5001);
    expect(rows.some((row) => row[2] === 'Item 4999')).toBe(true);
    expect(rows.some((row) => row[2] === 'Item 0')).toBe(true);
  });
});
