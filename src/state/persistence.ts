import type { AppState, Profile, Settings, StudentRecord } from '../types';
import {
  emptyStudent,
  hydrateAppState,
  PRIMARY_STUDENT_ID,
} from './students';

/**
 * Persistence for the local record store.
 *
 * Kept separate from the React store so the store module exports only
 * components and hooks. That keeps Fast Refresh from recreating the context
 * during development (which would briefly break useApp) and makes the storage
 * format easy to test on its own.
 *
 * Schema 2 adds multiple students. A schema-1 object (one profile plus its
 * records at the top level) is migrated in memory into the first student, with
 * no prompt and no data loss. The localStorage key is unchanged so an existing
 * browser upgrades on load.
 */

export const STORAGE_KEY = 'texas-home-academy/state/v1';
export const SCHEMA_VERSION = 2;

export const defaultProfile: Profile = {
  firstName: '',
  lastName: '',
  gradeLevel: 9,
  schoolName: 'Texas Home Academy',
  parentName: '',
  city: '',
  state: 'Texas',
  startYear: 2026,
};

const defaultSettings: Settings = { showAdultEd: true, fullDayMinutes: 240 };

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function normalizeProfile(raw: unknown): Profile {
  return { ...defaultProfile, ...(isObject(raw) ? (raw as Partial<Profile>) : {}) };
}

function normalizeStudent(raw: unknown, fallbackId: string): StudentRecord {
  const candidate = isObject(raw) ? raw : {};
  const profile = normalizeProfile(candidate.profile);
  return {
    id:
      typeof candidate.id === 'string' && candidate.id.trim()
        ? candidate.id
        : fallbackId,
    profile,
    enrollments: (Array.isArray(candidate.enrollments)
      ? candidate.enrollments
      : []) as StudentRecord['enrollments'],
    grades: (Array.isArray(candidate.grades) ? candidate.grades : []) as StudentRecord['grades'],
    attendance: (Array.isArray(candidate.attendance)
      ? candidate.attendance
      : []) as StudentRecord['attendance'],
    lessonProgress: (isObject(candidate.lessonProgress)
      ? candidate.lessonProgress
      : {}) as StudentRecord['lessonProgress'],
  };
}

/**
 * Accept both the current multi-student schema and the legacy single-student
 * shape. Returns null for anything that is not a recognizable backup/state.
 */
export function normalizeAppState(value: unknown): AppState | null {
  if (!isObject(value)) return null;
  const settings: Settings = {
    ...defaultSettings,
    ...(isObject(value.settings) ? (value.settings as Partial<Settings>) : {}),
  };

  if (Array.isArray(value.students) && value.students.length > 0) {
    const students = value.students.map((student, index) =>
      normalizeStudent(student, `${PRIMARY_STUDENT_ID}-${index + 1}`),
    );
    const activeStudentId =
      typeof value.activeStudentId === 'string' &&
      students.some((student) => student.id === value.activeStudentId)
        ? value.activeStudentId
        : students[0].id;
    return hydrateAppState(SCHEMA_VERSION, settings, students, activeStudentId);
  }

  // Schema 1: one student's data lived at the top level of the object.
  const legacy =
    isObject(value.profile) &&
    Array.isArray(value.enrollments) &&
    Array.isArray(value.grades) &&
    Array.isArray(value.attendance);
  if (!legacy) return null;

  const student = normalizeStudent(
    {
      profile: value.profile,
      enrollments: value.enrollments,
      grades: value.grades,
      attendance: value.attendance,
      lessonProgress: value.lessonProgress,
    },
    PRIMARY_STUDENT_ID,
  );
  return hydrateAppState(SCHEMA_VERSION, settings, [student], student.id);
}

export const defaultState: AppState = hydrateAppState(
  SCHEMA_VERSION,
  defaultSettings,
  [emptyStudent(PRIMARY_STUDENT_ID, defaultProfile)],
  PRIMARY_STUDENT_ID,
);

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return normalizeAppState(JSON.parse(raw)) ?? defaultState;
  } catch {
    return defaultState;
  }
}

export function serializeState(state: AppState): string {
  return JSON.stringify(state, null, 2);
}

export function parseImportedState(raw: string): AppState {
  const parsed = JSON.parse(raw);
  const normalized = normalizeAppState(parsed);
  if (!normalized) throw new Error('That file is not a Texas Home Academy backup.');
  return normalized;
}
