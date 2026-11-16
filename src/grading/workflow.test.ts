import { describe, expect, it } from 'vitest';
import type { GradeRecord } from '../types';
import { COURSES } from '../content';
import { courseResult } from './gradebook';
import { auditGraduation, completedCourses } from './graduation';

/**
 * End-to-end grading workflow for a full-year course: six graded periods, a
 * semester 1 midterm, and a cumulative final. These tests walk the same path
 * the UI uses, so a change to the semester or final formula fails here first.
 */

const algebra = COURSES.find((c) => c.id === 'hs-alg1')!;
let counter = 0;

function record(partial: Partial<GradeRecord> & { period: string; score: number }): GradeRecord {
  counter += 1;
  return {
    id: `w${counter}`,
    courseId: algebra.id,
    assessmentId: `quiz-${counter}`,
    title: 'Quiz',
    category: 'quiz',
    max: 100,
    attempt: 1,
    recordedAt: '2026-09-01',
    gradedBy: 'auto',
    ...partial,
  };
}

function fullYear(): GradeRecord[] {
  const periods = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'];
  return [
    ...periods.map((period) => record({ period, score: 90, assessmentId: `quiz-${period}` })),
    record({ period: 'Q3', score: 80, max: 100, category: 'exam', assessmentId: `${algebra.id}:midterm`, title: 'Midterm' }),
    record({ period: 'Q6', score: 90, max: 100, category: 'exam', assessmentId: `${algebra.id}:final`, title: 'Final' }),
  ];
}

describe('full-year grading workflow', () => {
  it('has a midterm in the catalog', () => {
    expect(algebra.semesters).toBe(2);
    expect(algebra.midterm).toBeTruthy();
  });

  it('blends each semester with its exam and averages them for the final grade', () => {
    const result = courseResult(algebra, fullYear());
    // S1 = 0.8(90) + 0.2(80) = 88; S2 = 0.8(90) + 0.2(90) = 90; final = 89.
    expect(result.semesters[0].examGrade).toBe(80);
    expect(result.semesters[0].grade).toBeCloseTo(88, 5);
    expect(result.semesters[1].examGrade).toBe(90);
    expect(result.semesters[1].grade).toBeCloseTo(90, 5);
    expect(result.finalGrade).toBeCloseTo(89, 5);
    expect(result.letter).toBe('B');
    expect(result.creditsEarned).toBe(algebra.credits);
    expect(result.passing).toBe(true);
  });

  it('withholds the final grade and credit until the final exam is recorded', () => {
    const records = fullYear().filter((r) => r.assessmentId !== `${algebra.id}:final`);
    const result = courseResult(algebra, records);
    expect(result.semesters[1].examGrade).toBeNull();
    expect(result.finalGrade).toBeNull();
    expect(result.letter).toBe('—');
    expect(result.creditsEarned).toBe(0);
    expect(completedCourses(COURSES, records).some((c) => c.courseId === algebra.id)).toBe(false);
  });

  it('counts a midterm in a semester that has no graded periods yet', () => {
    const midtermOnly = [
      record({ period: 'Q3', score: 100, category: 'exam', assessmentId: `${algebra.id}:midterm`, title: 'Midterm' }),
      record({ period: 'Q6', score: 100, category: 'exam', assessmentId: `${algebra.id}:final`, title: 'Final' }),
    ];
    const result = courseResult(algebra, midtermOnly);
    expect(result.semesters[0].grade).toBe(100);
    expect(result.finalGrade).toBe(100);
  });

  it('withholds credit below 70 and reports it to the graduation audit', () => {
    const records = fullYear().map((r) =>
      r.category === 'exam' ? r : { ...r, score: 60 },
    );
    const result = courseResult(algebra, records);
    expect(result.finalGrade).toBeLessThan(70);
    expect(result.passing).toBe(false);
    expect(result.creditsEarned).toBe(0);
    const audit = auditGraduation(COURSES, records);
    expect(audit.totalCredits).toBe(0);
    expect(audit.fhspMet).toBe(false);
  });

  it('awards the credit to the graduation audit once the course is complete', () => {
    const records = fullYear();
    const audit = auditGraduation(COURSES, records);
    expect(audit.totalCredits).toBe(algebra.credits);
    const math = audit.requirements.find((r) => r.id === 'math')!;
    expect(math.earned).toBe(algebra.credits);
  });
});
