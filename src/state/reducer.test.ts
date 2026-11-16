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
