import { describe, expect, it } from 'vitest';
import type { AppState, GradeRecord } from '../types';
import { defaultState, parseImportedState, serializeState } from './persistence';
import { reducer, type Action } from './reducer';

/**
 * Store-level fixtures.
 *
 * These exercise the reducer directly, which is where enrollment, attempts,
 * retake caps, and lesson completion actually change state. A regression here
 * affects every screen that reads the store.
 */

function state(): AppState {
  return structuredClone(defaultState);
}

function grade(partial: Partial<Omit<GradeRecord, 'id' | 'recordedAt' | 'attempt'>> = {}): Extract<
  Action,
  { type: 'grade/record' }
>['record'] {
  return {
    courseId: 'hs-alg1',
    assessmentId: 'hs-alg1:u1:quiz',
    title: 'Unit 1 quiz',
    category: 'quiz',
    score: 18,
    max: 18,
    gradedBy: 'auto',
    period: 'Q2',
    ...partial,
  };
}

describe('enrollment', () => {
  it('enrolls once and stamps the current school year', () => {
    const once = reducer(state(), { type: 'enroll', courseId: 'hs-alg1' });
    expect(once.enrollments).toHaveLength(1);
    expect(once.enrollments[0]).toMatchObject({
      courseId: 'hs-alg1',
      yearId: '2026-2027',
    });

    const twice = reducer(once, { type: 'enroll', courseId: 'hs-alg1' });
    expect(twice.enrollments).toHaveLength(1);
    expect(twice).toBe(once);
  });

  it('unenrolls without deleting grades, attendance, or lesson progress', () => {
    let next = reducer(state(), { type: 'enroll', courseId: 'hs-alg1' });
    next = reducer(next, { type: 'grade/record', record: grade() });
    next = reducer(next, {
      type: 'lesson/complete',
      courseId: 'hs-alg1',
      lessonId: 'alg1-u1-l1',
      practiceScore: 20,
      practiceMax: 20,
    });
    const removed = reducer(next, { type: 'unenroll', courseId: 'hs-alg1' });
    expect(removed.enrollments).toEqual([]);
    expect(removed.grades).toHaveLength(1);
    expect(removed.lessonProgress['hs-alg1/alg1-u1-l1'].practiceScore).toBe(20);
  });
});

describe('grade recording', () => {
  it('numbers attempts per assessment and caps a summative retake at 80%', () => {
    let next = reducer(state(), { type: 'grade/record', record: grade({ score: 18, max: 18 }) });
    next = reducer(next, { type: 'grade/record', record: grade({ score: 18, max: 18 }) });
    expect(next.grades.map((record) => record.attempt)).toEqual([1, 2]);
    expect(next.grades[0].score).toBe(18);
    // 80% of 18 points is 14.4, not 80 raw points.
    expect(next.grades[1].score).toBeCloseTo(14.4, 5);
  });

  it('does not cap practice retakes but still clamps to the maximum', () => {
    const practice = grade({ assessmentId: 'practice', category: 'practice', score: 25, max: 20 });
    const next = reducer(state(), { type: 'grade/record', record: practice });
    expect(next.grades[0].score).toBe(20);
    const retry = reducer(next, {
      type: 'grade/record',
      record: { ...practice, score: 20, max: 20 },
    });
    expect(retry.grades[1].score).toBe(20);
    expect(retry.grades[1].attempt).toBe(2);
  });

  it('records distinct ids and a date for every attempt', () => {
    let next = reducer(state(), { type: 'grade/record', record: grade() });
    next = reducer(next, { type: 'grade/record', record: grade() });
    expect(new Set(next.grades.map((record) => record.id)).size).toBe(2);
    for (const record of next.grades) {
      expect(record.recordedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it('deletes only the selected record', () => {
    let next = reducer(state(), { type: 'grade/record', record: grade() });
    next = reducer(next, {
      type: 'grade/record',
      record: grade({ assessmentId: 'hs-alg1:u2:quiz' }),
    });
    const removed = reducer(next, { type: 'grade/delete', id: next.grades[0].id });
    expect(removed.grades).toHaveLength(1);
    expect(removed.grades[0].assessmentId).toBe('hs-alg1:u2:quiz');
  });
});

describe('lesson completion', () => {
  const complete = (
    score: number,
    max: number,
  ): Extract<Action, { type: 'lesson/complete' }> => ({
    type: 'lesson/complete',
    courseId: 'hs-alg1',
    lessonId: 'alg1-u1-l1',
    practiceScore: score,
    practiceMax: max,
  });

  it('keeps the best practice score when a later retake is weaker', () => {
    let next = reducer(state(), complete(20, 20));
    next = reducer(next, complete(0, 20));
    expect(next.lessonProgress['hs-alg1/alg1-u1-l1']).toMatchObject({
      practiceScore: 20,
      practiceMax: 20,
    });
  });

  it('raises the recorded score when a retake is better', () => {
    let next = reducer(state(), complete(5, 20));
    next = reducer(next, complete(18, 20));
    expect(next.lessonProgress['hs-alg1/alg1-u1-l1'].practiceScore).toBe(18);
  });

  it('creates progress for a new lesson and refreshes the completion date', () => {
    const next = reducer(state(), complete(15, 20));
    expect(next.lessonProgress['hs-alg1/alg1-u1-l1'].completedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const other = reducer(next, {
      ...complete(10, 20),
      lessonId: 'alg1-u1-l2',
    });
    expect(Object.keys(other.lessonProgress).sort()).toEqual([
      'hs-alg1/alg1-u1-l1',
      'hs-alg1/alg1-u1-l2',
    ]);
  });
});

describe('multiple students', () => {
  function withFirstStudentRecords() {
    let next = reducer(state(), { type: 'enroll', courseId: 'hs-alg1' });
    next = reducer(next, { type: 'grade/record', record: grade() });
    next = reducer(next, {
      type: 'lesson/complete',
      courseId: 'hs-alg1',
      lessonId: 'alg1-u1-l1',
      practiceScore: 20,
      practiceMax: 20,
    });
    next = reducer(next, {
      type: 'attendance/log',
      entry: { date: '2026-09-15', minutes: 240 },
    });
    return next;
  }

  it('creates a second student with empty records and preserves the first', () => {
    let next = withFirstStudentRecords();
    const firstId = next.activeStudentId;
    const firstGrades = next.grades;

    next = reducer(next, {
      type: 'student/create',
      firstName: 'Maya',
      lastName: 'Chen',
      gradeLevel: 6,
    });
    expect(next.students).toHaveLength(2);
    expect(next.activeStudentId).not.toBe(firstId);
    expect(next.profile).toMatchObject({ firstName: 'Maya', lastName: 'Chen', gradeLevel: 6 });
    expect(next.enrollments).toEqual([]);
    expect(next.grades).toEqual([]);
    expect(next.attendance).toEqual([]);
    expect(next.lessonProgress).toEqual({});

    next = reducer(next, { type: 'enroll', courseId: 'hs-bio' });
    next = reducer(next, {
      type: 'grade/record',
      record: grade({ courseId: 'hs-bio', assessmentId: 'hs-bio:u1:quiz' }),
    });
    next = reducer(next, {
      type: 'attendance/log',
      entry: { date: '2026-09-16', minutes: 120 },
    });
    const secondId = next.activeStudentId;

    next = reducer(next, { type: 'student/switch', id: firstId });
    expect(next.profile.firstName).toBe('');
    expect(next.enrollments.map((entry) => entry.courseId)).toEqual(['hs-alg1']);
    expect(next.grades).toEqual(firstGrades);
    expect(next.attendance.map((entry) => entry.date)).toEqual(['2026-09-15']);
    expect(next.lessonProgress['hs-alg1/alg1-u1-l1'].practiceScore).toBe(20);
    expect(next.students.find((student) => student.id === secondId)?.grades).toHaveLength(1);

    next = reducer(next, { type: 'student/switch', id: secondId });
    expect(next.enrollments.map((entry) => entry.courseId)).toEqual(['hs-bio']);
    expect(next.grades.map((record) => record.courseId)).toEqual(['hs-bio']);
    expect(next.attendance.map((entry) => entry.date)).toEqual(['2026-09-16']);
    expect(next.lessonProgress).toEqual({});
  });

  it('renames only the active student', () => {
    let next = reducer(state(), {
      type: 'student/create',
      firstName: 'Maya',
      lastName: 'Chen',
      gradeLevel: 6,
    });
    const firstId = next.students[0].id;
    const secondId = next.activeStudentId;

    next = reducer(next, { type: 'profile/update', patch: { firstName: 'Avery' } });
    expect(next.students.find((s) => s.id === secondId)?.profile.firstName).toBe('Avery');
    expect(next.students.find((s) => s.id === firstId)?.profile.firstName).toBe('');

    next = reducer(next, { type: 'student/switch', id: firstId });
    expect(next.profile.firstName).toBe('');
  });

  it('never deletes the last student and selects another after deleting the active one', () => {
    let next = state();
    const onlyId = next.activeStudentId;
    expect(reducer(next, { type: 'student/delete', id: onlyId })).toBe(next);

    next = reducer(next, {
      type: 'student/create',
      firstName: 'Maya',
      lastName: 'Chen',
    });
    const firstId = next.students[0].id;
    const secondId = next.activeStudentId;
    next = reducer(next, { type: 'student/delete', id: secondId });
    expect(next.students).toHaveLength(1);
    expect(next.activeStudentId).toBe(firstId);
    expect(reducer(next, { type: 'student/delete', id: firstId })).toBe(next);

    // Deleting a non-active student leaves the current selection alone.
    let withTwo = reducer(state(), {
      type: 'student/create',
      firstName: 'Maya',
      lastName: 'Chen',
    });
    const activeId = withTwo.activeStudentId;
    const otherId = withTwo.students[0].id;
    withTwo = reducer(withTwo, { type: 'student/delete', id: otherId });
    expect(withTwo.activeStudentId).toBe(activeId);
    expect(withTwo.students).toHaveLength(1);
  });

  it('keeps the active selection and every student record across a backup round trip', () => {
    let next = reducer(state(), { type: 'enroll', courseId: 'hs-alg1' });
    next = reducer(next, {
      type: 'student/create',
      firstName: 'Maya',
      lastName: 'Chen',
    });
    next = reducer(next, { type: 'enroll', courseId: 'hs-bio' });
    const active = next.activeStudentId;

    const restored = parseImportedState(serializeState(next));
    expect(restored.activeStudentId).toBe(active);
    expect(restored.students).toHaveLength(2);
    expect(restored.students[0].enrollments.map((e) => e.courseId)).toEqual(['hs-alg1']);
    expect(restored.students[1].enrollments.map((e) => e.courseId)).toEqual(['hs-bio']);
    expect(restored.enrollments.map((e) => e.courseId)).toEqual(['hs-bio']);
  });

  it('migrates a legacy single-student backup into the first profile without data loss', () => {
    const legacy = {
      schemaVersion: 1,
      profile: {
        ...defaultState.profile,
        firstName: 'Avery',
        lastName: 'Chen',
        schoolName: 'Chen Home Academy',
      },
      enrollments: [
        { courseId: 'hs-alg1', yearId: '2026-2027', startedAt: '2026-08-24' },
      ],
      grades: [
        {
          ...grade(),
          id: 'legacy-grade',
          attempt: 1,
          recordedAt: '2026-09-15',
        },
      ],
      attendance: [{ date: '2026-09-15', minutes: 240 }],
      lessonProgress: {
        'hs-alg1/alg1-u1-l1': { completedAt: '2026-09-15', practiceScore: 18, practiceMax: 20 },
      },
      settings: { showAdultEd: false, fullDayMinutes: 300 },
    };

    const migrated = parseImportedState(JSON.stringify(legacy));
    expect(migrated.schemaVersion).toBe(2);
    expect(migrated.students).toHaveLength(1);
    expect(migrated.activeStudentId).toBe(migrated.students[0].id);
    expect(migrated.profile.firstName).toBe('Avery');
    expect(migrated.enrollments).toHaveLength(1);
    expect(migrated.grades[0].id).toBe('legacy-grade');
    expect(migrated.attendance).toHaveLength(1);
    expect(migrated.lessonProgress['hs-alg1/alg1-u1-l1'].practiceScore).toBe(18);
    expect(migrated.settings.fullDayMinutes).toBe(300);
  });
});

describe('state lifecycle', () => {
  it('resets to a clean default without mutating the shared default object', () => {
    const used = reducer(state(), { type: 'enroll', courseId: 'hs-alg1' });
    const reset = reducer(used, { type: 'state/reset' });
    expect(reset.enrollments).toEqual([]);
    expect(defaultState.enrollments).toEqual([]);
    expect(reset).not.toBe(defaultState);
  });

  it('replaces state from an imported backup and survives a serialize round trip', () => {
    let next = reducer(state(), { type: 'enroll', courseId: 'hs-alg1' });
    next = reducer(next, { type: 'grade/record', record: grade() });
    next = reducer(next, {
      type: 'lesson/complete',
      courseId: 'hs-alg1',
      lessonId: 'alg1-u1-l1',
      practiceScore: 20,
      practiceMax: 20,
    });
    const restored = parseImportedState(serializeState(next));
    expect(restored).toEqual(next);
    expect(restored.lessonProgress['hs-alg1/alg1-u1-l1'].practiceScore).toBe(20);

    const replaced = reducer(state(), { type: 'state/replace', state: restored });
    expect(replaced).toEqual(restored);
  });
});
