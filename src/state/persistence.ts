import type { AppState } from '../types';

/**
 * Persistence for the local record store.
 *
 * Kept separate from the React store so the store module exports only
 * components and hooks. That keeps Fast Refresh from recreating the context
 * during development (which would briefly break useApp) and makes the storage
 * format easy to test on its own.
 */

export const STORAGE_KEY = 'texas-home-academy/state/v1';
export const SCHEMA_VERSION = 1;

export const defaultState: AppState = {
  schemaVersion: SCHEMA_VERSION,
  profile: {
    firstName: '',
    lastName: '',
    gradeLevel: 9,
    schoolName: 'Texas Home Academy',
    parentName: '',
    city: '',
    state: 'Texas',
    startYear: 2026,
  },
  enrollments: [],
  grades: [],
  attendance: [],
  lessonProgress: {},
  settings: { showAdultEd: true, fullDayMinutes: 240 },
};

function isAppState(value: unknown): value is AppState {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<AppState>;
  return (
    typeof candidate.schemaVersion === 'number' &&
    Boolean(candidate.profile) &&
    Array.isArray(candidate.enrollments) &&
    Array.isArray(candidate.grades) &&
    Array.isArray(candidate.attendance)
  );
}

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    if (!isAppState(parsed)) return defaultState;
    return {
      ...defaultState,
      ...parsed,
      // Merge nested objects so a record written by an older build (or a partial
      // import) cannot leave the calendar without a start year.
      profile: { ...defaultState.profile, ...(parsed.profile ?? {}) },
      settings: { ...defaultState.settings, ...(parsed.settings ?? {}) },
      lessonProgress: { ...(parsed.lessonProgress ?? {}) },
    };
  } catch {
    return defaultState;
  }
}

export function serializeState(state: AppState): string {
  return JSON.stringify(state, null, 2);
}

export function parseImportedState(raw: string): AppState {
  const parsed = JSON.parse(raw);
  if (!isAppState(parsed)) throw new Error('That file is not a Texas Home Academy backup.');
  return {
    ...defaultState,
    ...parsed,
    schemaVersion: SCHEMA_VERSION,
    profile: { ...defaultState.profile, ...(parsed.profile ?? {}) },
    settings: { ...defaultState.settings, ...(parsed.settings ?? {}) },
    lessonProgress: { ...(parsed.lessonProgress ?? {}) },
  };
}
