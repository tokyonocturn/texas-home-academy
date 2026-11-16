import { describe, expect, it } from 'vitest';
import type { Course, GradeRecord } from '../types';
import {
  categoryResults,
  courseResult,
  displayGrade,
  latestAttempts,
  percent,
  semesterResult,
  weightedAverage,
} from './gradebook';

const course: Course = {
  id: 'test',
  title: 'Test course',
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
};

let counter = 0;

function rec(partial: Partial<GradeRecord>): GradeRecord {
  counter += 1;
  return {
    id: `g${counter}`,
    courseId: 'test',
    assessmentId: `a${counter}`,
    title: 'Assessment',
    category: 'quiz',
    score: 80,
    max: 100,
    attempt: 1,
    recordedAt: '2026-09-01',
    period: 'Q1',
    gradedBy: 'auto',
    ...partial,
  };
}

describe('percent', () => {
  it('converts a score to a clamped percentage', () => {
    expect(percent(45, 50)).toBe(90);
    expect(percent(0, 0)).toBe(0);
    expect(percent(120, 100)).toBe(100);
  });
});

describe('latestAttempts', () => {
  it('keeps the highest attempt for each assessment', () => {
    const records = [
      rec({ assessmentId: 'quiz-1', attempt: 1, score: 60 }),
      rec({ assessmentId: 'quiz-1', attempt: 2, score: 80 }),
      rec({ assessmentId: 'quiz-2', score: 70 }),
    ];
    const latest = latestAttempts(records);
    expect(latest).toHaveLength(2);
    expect(latest.find((r) => r.assessmentId === 'quiz-1')?.score).toBe(80);
  });
});

describe('category weighting', () => {
  it('renormalizes weights when a category has no graded work', () => {
    const records = [rec({ category: 'quiz', score: 80 }), rec({ category: 'exam', score: 90 })];
    const categories = categoryResults(course, records);
    const average = weightedAverage(categories);
    expect(average).toBeCloseTo((80 * 25 + 90 * 40) / 65, 5);
  });
});

describe('semester grade', () => {
  it('is 80% of the three periods plus 20% of the semester exam', () => {
    const records = [
      rec({ category: 'quiz', period: 'Q4', score: 80 }),
      rec({ category: 'quiz', period: 'Q5', score: 90 }),
      rec({ category: 'quiz', period: 'Q6', score: 70 }),
      rec({ category: 'exam', period: 'Q6', assessmentId: 'test:final', score: 100 }),
    ];
    const result = semesterResult(course, records, 2, ['Q4', 'Q5', 'Q6']);
    expect(result.courseWorkAverage).toBeCloseTo(80, 5);
    expect(result.examGrade).toBe(100);
    expect(result.grade).toBeCloseTo(84, 5);
  });

  it('counts a midterm in semester 1 and an exam-only semester on its own', () => {
    const withMidterm = [
      rec({ category: 'quiz', period: 'Q1', score: 80 }),
      rec({ category: 'quiz', period: 'Q2', score: 90 }),
      rec({ category: 'quiz', period: 'Q3', score: 70 }),
      rec({ category: 'exam', period: 'Q3', assessmentId: 'test:midterm', score: 60 }),
    ];
    const first = semesterResult(course, withMidterm, 1, ['Q1', 'Q2', 'Q3']);
    expect(first.examGrade).toBe(60);
    expect(first.grade).toBeCloseTo(0.8 * 80 + 0.2 * 60, 5);

    const examOnly = semesterResult(
      course,
      [rec({ category: 'exam', period: 'Q6', assessmentId: 'test:final', score: 95 })],
      2,
      ['Q4', 'Q5', 'Q6'],
    );
    expect(examOnly.grade).toBe(95);
  });
});

describe('course result', () => {
  it('does not issue a final grade before the final exam', () => {
    const records = [rec({ category: 'quiz', period: 'Q1', score: 80 })];
    const result = courseResult(course, records);
    expect(result.currentGrade).toBeCloseTo(80, 5);
    expect(result.finalGrade).toBeNull();
    expect(result.creditsEarned).toBe(0);
  });

  it('averages the two semester grades once the final exam exists', () => {
    const records = [
      rec({ category: 'quiz', period: 'Q1', score: 80 }),
      rec({ category: 'quiz', period: 'Q2', score: 90 }),
      rec({ category: 'quiz', period: 'Q3', score: 70 }),
      rec({ category: 'quiz', period: 'Q4', score: 80 }),
      rec({ category: 'quiz', period: 'Q5', score: 90 }),
      rec({ category: 'quiz', period: 'Q6', score: 70 }),
      rec({ category: 'exam', period: 'Q6', assessmentId: 'test:final', score: 100 }),
    ];
    const result = courseResult(course, records);
    // Semester 1 has no midterm, so it reports coursework (80).
    // Semester 2 = 0.8(80) + 0.2(100) = 84. Final = 82.
    expect(result.courseworkAverage).toBeCloseTo(80, 5);
    expect(result.examGrade).toBe(100);
    expect(result.semesters[0].grade).toBeCloseTo(80, 5);
    expect(result.semesters[1].grade).toBeCloseTo(84, 5);
    expect(result.finalGrade).toBeCloseTo(82, 5);
    expect(result.passing).toBe(true);
    expect(result.creditsEarned).toBe(1);
    expect(result.letter).toBe('B');
  });

  it('withholds credit below 70', () => {
    const records = [
      rec({ category: 'quiz', period: 'Q1', score: 50 }),
      rec({ category: 'quiz', period: 'Q2', score: 50 }),
      rec({ category: 'quiz', period: 'Q3', score: 50 }),
      rec({ category: 'exam', period: 'Q6', assessmentId: 'test:final', score: 50 }),
    ];
    const result = courseResult(course, records);
    expect(result.finalGrade).toBeCloseTo(50, 5);
    expect(result.passing).toBe(false);
    expect(result.creditsEarned).toBe(0);
    expect(result.letter).toBe('F');
  });
});

describe('displayGrade', () => {
  it('rounds to one decimal and shows a dash for null', () => {
    expect(displayGrade(87.35)).toBe('87.4');
    expect(displayGrade(null)).toBe('—');
  });
});
