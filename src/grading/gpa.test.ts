import { describe, expect, it } from 'vitest';
import type { Course, GradeRecord } from '../types';
import { computeGpa, splitGpa } from './gpa';
import { baseQualityPoints, letterGrade, qualityPoints } from './scale';

function makeCourse(overrides: Partial<Course>): Course {
  return {
    id: 'c',
    title: 'Course',
    subject: 'math',
    grade: 9,
    credits: 1,
    semesters: 2,
    description: '',
    essentialQuestions: [],
    teks: [],
    weights: { practice: 10, quiz: 25, exam: 40, project: 25 },
    units: [],
    finalExam: { title: 'Final', instructions: '', questions: [] },
    ...overrides,
  };
}

function record(
  courseId: string,
  assessmentId: string,
  category: 'quiz' | 'exam',
  period: string,
  score: number,
): GradeRecord {
  return {
    id: `${courseId}-${assessmentId}`,
    courseId,
    assessmentId,
    title: assessmentId,
    category,
    score,
    max: 100,
    attempt: 1,
    recordedAt: '2027-05-01',
    period,
    gradedBy: 'auto',
  };
}

/** Coursework in both semesters plus the cumulative final. */
function finalExam(courseId: string, score: number): GradeRecord[] {
  return [
    record(courseId, `${courseId}:q1`, 'quiz', 'Q1', score),
    record(courseId, `${courseId}:q6`, 'quiz', 'Q6', score),
    record(courseId, `${courseId}:final`, 'exam', 'Q6', score),
  ];
}

describe('quality points', () => {
  it('maps the 100-point scale to a 4.0 scale', () => {
    expect(baseQualityPoints(95)).toBe(4);
    expect(baseQualityPoints(85)).toBe(3);
    expect(baseQualityPoints(75)).toBe(2);
    expect(baseQualityPoints(65)).toBe(1);
    expect(baseQualityPoints(50)).toBe(0);
  });

  it('adds half a point for advanced courses but not for failing grades', () => {
    expect(qualityPoints(95, true)).toBe(4.5);
    expect(qualityPoints(85, true)).toBe(3.5);
    expect(qualityPoints(55, true)).toBe(0);
  });

  it('assigns letter grades at the documented boundaries', () => {
    expect(letterGrade(90)).toBe('A');
    expect(letterGrade(89.9)).toBe('B');
    expect(letterGrade(70)).toBe('C');
    expect(letterGrade(69.9)).toBe('D');
    expect(letterGrade(59.9)).toBe('F');
    expect(letterGrade(null)).toBe('—');
  });
});

describe('GPA', () => {
  const algebra = makeCourse({ id: 'alg', title: 'Algebra I', credits: 1 });
  const advanced = makeCourse({
    id: 'adv',
    title: 'Advanced Math',
    credits: 1,
    advanced: true,
  });
  const noCredit = makeCourse({ id: 'k', title: 'Kindergarten', grade: 0, credits: 0 });
  const records = [
    ...finalExam('alg', 95),
    ...finalExam('adv', 85),
    ...finalExam('k', 100),
  ];

  it('weights by credit and excludes non-credit courses', () => {
    const summary = computeGpa([algebra, advanced, noCredit], records);
    expect(summary.courses).toHaveLength(2);
    expect(summary.creditsAttempted).toBe(2);
    // 4.0 and 3.5 (advanced bonus) average to 3.75.
    expect(summary.weighted).toBe(3.75);
  });

  it('reports an unweighted GPA without the advanced bonus', () => {
    const { unweighted, weighted } = splitGpa([algebra, advanced], records);
    expect(unweighted).toBe(3.5);
    expect(weighted).toBe(3.75);
  });

  it('counts only passing courses as earned credits', () => {
    const failing = makeCourse({ id: 'fail' });
    const summary = computeGpa([algebra, failing], [...finalExam('alg', 95), ...finalExam('fail', 55)]);
    expect(summary.creditsAttempted).toBe(2);
    expect(summary.creditsEarned).toBe(1);
  });
});
