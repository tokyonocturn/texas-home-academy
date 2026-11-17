import type { AppState } from '../types';
import { reducer, type Action } from './reducer';

/**
 * Cross-tab synchronization primitives.
 *
 * AppState carries a monotonic revision. Every local mutation increments it;
 * adopting a snapshot from another tab keeps that tab's revision. A tab may
 * only write a snapshot at least as new as the one already in localStorage, so
 * a stale tab cannot clobber newer records. These helpers are pure so the
 * conflict policy is testable without a second browser tab.
 */

export type StoreAction = Action | { type: 'state/sync'; state: AppState };

/** Root reducer: revision only changes on local mutations, never on sync. */
export function rootReducer(state: AppState, action: StoreAction): AppState {
  if (action.type === 'state/sync') return action.state;
  if (action.type === 'state/replace') {
    return {
      ...action.state,
      revision: Math.max(state.revision ?? 0, action.state.revision ?? 0) + 1,
    };
  }
  const next = reducer(state, action);
  if (next === state) return state;
  return { ...next, revision: (state.revision ?? 0) + 1 };
}

/**
 * Decide what to do with a snapshot found in localStorage before dispatch.
 * When another tab is newer, adopt it. Applying the pending local action is
 * safe only while the same student is active; a stale tab must not write a
 * grade or attendance entry against a student that was selected elsewhere.
 * Profile edits are also dropped, because they could overwrite a newer rename.
 */
export function actionDecision(
  local: AppState,
  stored: AppState | null,
  action: Action,
): { sync: boolean; apply: boolean } {
  if (!stored || stored.revision <= local.revision) {
    return { sync: false, apply: true };
  }
  return {
    sync: true,
    apply: stored.activeStudentId === local.activeStudentId && action.type !== 'profile/update',
  };
}

/**
 * Decide whether the persistence effect may write. A stored revision at or
 * above the local one wins; adopting it is handled by the store. Only a
 * genuinely newer local revision is written back.
 */
export function snapshotDecision(
  local: AppState,
  stored: AppState | null,
): 'write' | 'adopt' {
  if (!stored) return 'write';
  return stored.revision >= local.revision ? 'adopt' : 'write';
}

/** The state an import or export should be based on: never an older tab copy. */
export function newestSnapshot(local: AppState, stored: AppState | null): AppState {
  return stored && stored.revision >= local.revision ? stored : local;
}
