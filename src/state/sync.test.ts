import { describe, expect, it } from 'vitest';
import type { AppState } from '../types';
import { defaultState, normalizeAppState, serializeState } from './persistence';
import { rootReducer, actionDecision, snapshotDecision } from './sync';
import type { Action } from './reducer';

function state(revision = 0): AppState {
  return { ...structuredClone(defaultState), revision };
}

const grade: Action = {
  type: 'grade/record',
  record: {
    courseId: 'hs-alg1',
    assessmentId: 'hs-alg1:u1:quiz',
    title: 'Unit 1 quiz',
    category: 'quiz',
    score: 18,
    max: 18,
    gradedBy: 'auto',
    period: 'Q2',
  },
};

describe('cross-tab revisions', () => {
  it('increments only when a local action changes state', () => {
    const base = state();
    const created = rootReducer(base, {
      type: 'student/create',
      firstName: 'Maya',
      lastName: 'Chen',
      gradeLevel: 6,
    });
    expect(created.revision).toBe(1);
    expect(created.students).toHaveLength(2);

    const noOp = rootReducer(created, { type: 'student/delete', id: 'missing-student' });
    expect(noOp).toBe(created);

    const reset = rootReducer(created, { type: 'state/reset' });
    expect(reset.revision).toBe(2);
    expect(reset.students).toHaveLength(1);
  });

  it('adopts a synced snapshot without changing its revision', () => {
    const incoming = state(9);
    const synced = rootReducer(state(2), { type: 'state/sync', state: incoming });
    expect(synced).toBe(incoming);
    expect(synced.revision).toBe(9);
  });

  it('publishes an imported backup above both revisions', () => {
    const imported = state(4);
    const replaced = rootReducer(state(7), { type: 'state/replace', state: imported });
    expect(replaced.revision).toBe(8);
  });

  it('replays a stale action only for the same active student', () => {
    const local = state(5);
    const otherStudent = {
      ...state(6),
      activeStudentId: 'student-2',
    };
    const decision = actionDecision(local, otherStudent, grade);
    expect(decision).toEqual({ sync: true, apply: false });

    const sameStudent = state(6);
    expect(actionDecision(local, sameStudent, grade)).toEqual({ sync: true, apply: true });

    // A stale profile field must not overwrite a newer rename.
    expect(
      actionDecision(local, sameStudent, {
        type: 'profile/update',
        patch: { firstName: 'Old name' },
      }),
    ).toEqual({ sync: true, apply: false });
  });

  it('does not overwrite an equal or newer snapshot, and writes only when local is newer', () => {
    expect(snapshotDecision(state(5), null)).toBe('write');
    expect(snapshotDecision(state(5), state(4))).toBe('write');
    expect(snapshotDecision(state(5), state(5))).toBe('adopt');
    expect(snapshotDecision(state(5), state(6))).toBe('adopt');
  });

  it('keeps a record from a stale tab off the student selected in the newer tab', () => {
    const staleTab = state(0);
    const newerTab = rootReducer(staleTab, {
      type: 'student/create',
      firstName: 'Maya',
      lastName: 'Chen',
      gradeLevel: 6,
    });
    const decision = actionDecision(staleTab, newerTab, grade);
    expect(decision.sync).toBe(true);
    expect(decision.apply).toBe(false);

    // The stale tab may have locally applied the record, but its snapshot is
    // adopted rather than written because the other tab is newer.
    const staleWithRecord = rootReducer(staleTab, grade);
    expect(snapshotDecision(staleWithRecord, newerTab)).toBe('adopt');
    expect(newerTab.grades).toEqual([]);
    expect(newerTab.students.every((student) => student.grades.length === 0)).toBe(true);
  });

  it('moves every tab off a deleted active student and refuses to delete the last one', () => {
    const withTwo = rootReducer(state(), {
      type: 'student/create',
      firstName: 'Maya',
      lastName: 'Chen',
      gradeLevel: 6,
    });
    const deletedActive = rootReducer(withTwo, {
      type: 'student/delete',
      id: withTwo.activeStudentId,
    });
    expect(deletedActive.students).toHaveLength(1);
    expect(deletedActive.activeStudentId).toBe('student-1');
    expect(deletedActive.profile.firstName).toBe(deletedActive.students[0].profile.firstName);

    const staleLastDelete = rootReducer(deletedActive, {
      type: 'student/delete',
      id: deletedActive.activeStudentId,
    });
    expect(staleLastDelete.students).toHaveLength(1);
    expect(staleLastDelete.activeStudentId).toBe('student-1');
  });

  it('round-trips the revision used for conflict resolution', () => {
    const parsed = normalizeAppState(JSON.parse(serializeState(state(12))));
    expect(parsed?.revision).toBe(12);
  });

  it('merges a safe stale action into the newest snapshot', () => {
    const staleTab = state(0);
    const newerTab = rootReducer(staleTab, { type: 'enroll', courseId: 'hs-bio' });
    expect(actionDecision(staleTab, newerTab, grade)).toEqual({ sync: true, apply: true });
    const replayed = rootReducer(newerTab, grade);
    expect(replayed.revision).toBe(2);
    expect(replayed.enrollments.map((entry) => entry.courseId)).toEqual(['hs-bio']);
    expect(replayed.grades).toHaveLength(1);
  });
});
