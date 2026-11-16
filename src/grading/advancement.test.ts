import { describe, expect, it } from 'vitest';
import type { AppState, AttendanceEntry, GradeRecord } from '../types';
import { COURSES } from '../content';
import { defaultState } from '../state/persistence';
import { addDays } from '../state/schoolYear';
import { checkAdvancement, coreCoursesForGrade } from './progression';

/**
 * K-8 promotion check.
 *
 * Texas leaves promotion decisions to the family; this program's default is
 * that the four core subjects are complete and passing and attendance meets the
 * 90% standard it adopts. These tests pin that policy and the enrollment
 * requirement, because the check is shown to parents as a recommendation.
 */

const grade3Core = coreCoursesForGrade(COURSES, 3);

function attendance(days: number): AttendanceEntry[] {
  return Array.from({ length: days }, (_, i) => ({
    date: addDays('2026-08-24', i),
    minutes: 240,
  }));
}

function passingRecords(courseId: string, quizScore = 90): GradeRecord[] {
  return [
    {
      id: `${courseId}-q1`,
      courseId,
      assessmentId: `${courseId}:u1:quiz`,
      title: 'Unit 1 quiz',
      category: 'quiz',
      score: quizScore,
      max: 100,
      attempt: 1,
      recordedAt: '2026-09-10',
      period: 'Q1',
      gradedBy: 'auto',
    },
    {
      id: `${courseId}-final`,
      courseId,
      assessmentId: `${courseId}:final`,
      title: 'Final check',
      category: 'exam',
      score: 90,
      max: 100,
      attempt: 1,
      recordedAt: '2026-10-01',
      period: 'Q1',
      gradedBy: 'auto',
    },
  ];
}

function stateFor(
  grade: number,
  options: { enroll?: boolean; days?: number; quiz?: number; exam?: number } = {},
): AppState {
  const { enroll = true, days = 170, quiz = 90, exam = 90 } = options;
  const records = grade3Core.flatMap((course) =>
    passingRecords(course.id, quiz).map((record) =>
      record.category === 'exam' ? { ...record, score: exam } : record,
    ),
  );
  return {
    ...structuredClone(defaultState),
    profile: { ...defaultState.profile, gradeLevel: grade },
    enrollments: enroll
      ? grade3Core.map((course) => ({ courseId: course.id, yearId: '2026-2027', startedAt: '2026-08-24' }))
      : [],
    grades: records,
    attendance: attendance(days),
  };
}

describe('promotion check', () => {
  it('finds the four grade-3 core courses in the catalog', () => {
    expect(grade3Core.map((c) => c.subject).sort()).toEqual([
      'ela',
      'math',
      'science',
      'social-studies',
    ]);
  });

  it('blocks promotion when no core courses are enrolled', () => {
    const check = checkAdvancement(stateFor(3, { enroll: false }), COURSES, 180);
    expect(check.eligible).toBe(false);
    expect(check.blockers.join(' ')).toMatch(/Enroll in English/);
  });

  it('recommends promotion when all four cores pass and attendance meets 90%', () => {
    const check = checkAdvancement(stateFor(3), COURSES, 180);
    expect(check.eligible).toBe(true);
    expect(check.blockers).toEqual([]);
    expect(check.lines.every((line) => line.met)).toBe(true);
  });

  it('blocks promotion when a core final grade is below 70', () => {
    // 0.8(60) + 0.2(50) = 58, below the 70 passing floor for every core course.
    const check = checkAdvancement(stateFor(3, { quiz: 60, exam: 50 }), COURSES, 180);
    expect(check.eligible).toBe(false);
    expect(check.blockers.join(' ')).toMatch(/remediation required/);
  });

  it('blocks promotion when attendance is below 90%', () => {
    const check = checkAdvancement(stateFor(3, { days: 10 }), COURSES, 180);
    expect(check.eligible).toBe(false);
    expect(check.blockers.join(' ')).toMatch(/Attendance is below 90%/);
  });

  it('does not apply to grade 12, which uses the graduation audit', () => {
    const check = checkAdvancement(stateFor(12), COURSES, 180);
    expect(check.eligible).toBe(false);
    expect(check.blockers.join(' ')).toMatch(/graduation audit/);
  });
});
