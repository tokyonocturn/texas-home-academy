import type {
  AppState,
  AttendanceEntry,
  CategoryId,
  GradeRecord,
  LessonProgress,
  Profile,
  Settings,
  StudentRecord,
} from '../types';
import { SCHEMA_VERSION, normalizeAppState } from './persistence';
import { hydrateAppState, studentData, studentName } from './students';
import { todayISO } from './schoolYear';

/**
 * Portable student and household backups.
 *
 * A file is validated completely before any state changes. Student files can be
 * merged without touching other students; household files can be merged or used
 * to replace the whole device. IDs are kept whenever they are not ambiguous.
 */

export const STUDENT_BACKUP_FORMAT = 'texas-home-academy-student';
export const HOUSEHOLD_BACKUP_FORMAT = 'texas-home-academy-household';
export const BACKUP_FORMAT_VERSION = 1;
export const MAX_BACKUP_CHARACTERS = 10_000_000;

export class BackupError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BackupError';
  }
}

export interface StudentBackup {
  kind: 'student';
  format: typeof STUDENT_BACKUP_FORMAT;
  formatVersion: number;
  exportedAt: string;
  schemaVersion: number;
  student: StudentRecord;
  settings: Settings;
}

export interface HouseholdBackup {
  kind: 'household';
  format: typeof HOUSEHOLD_BACKUP_FORMAT;
  formatVersion: number;
  exportedAt: string;
  schemaVersion: number;
  activeStudentId: string;
  students: StudentRecord[];
  settings: Settings;
  /** True for a pre-format full-state backup from an older release. */
  legacy: boolean;
}

export type ParsedBackup = StudentBackup | HouseholdBackup;
export type DuplicateStrategy = 'replace' | 'keep-both';
export type HouseholdImportMode = 'merge-replace' | 'merge-keep-both' | 'replace';

export interface ImportResult {
  state: AppState;
  message: string;
}

type Obj = Record<string, unknown>;

const CATEGORIES = new Set<CategoryId>(['practice', 'quiz', 'exam', 'project', 'participation']);
const GRADED_BY = new Set(['auto', 'parent']);
const DATE = /^\d{4}-\d{2}-\d{2}$/;

function fail(message: string): never {
  throw new BackupError(message);
}

function isObj(value: unknown): value is Obj {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function obj(value: unknown, path: string): Obj {
  if (!isObj(value)) fail(`${path} must be an object.`);
  return value;
}

function array(value: unknown, path: string): unknown[] {
  if (!Array.isArray(value)) fail(`${path} must be a list.`);
  return value;
}

function text(value: unknown, path: string, allowEmpty = true): string {
  if (typeof value !== 'string' || (!allowEmpty && !value.trim())) {
    fail(`${path} must be ${allowEmpty ? 'text' : 'non-empty text'}.`);
  }
  return value;
}

function numberValue(
  value: unknown,
  path: string,
  options: { min?: number; max?: number; integer?: boolean } = {},
): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) fail(`${path} must be a number.`);
  if (options.integer && !Number.isInteger(value)) fail(`${path} must be a whole number.`);
  if (options.min !== undefined && value < options.min) fail(`${path} is below the allowed minimum.`);
  if (options.max !== undefined && value > options.max) fail(`${path} is above the allowed maximum.`);
  return value;
}

function dateText(value: unknown, path: string): string {
  const date = text(value, path, false);
  if (!DATE.test(date)) fail(`${path} must be a valid YYYY-MM-DD date.`);
  const [year, month, day] = date.split('-').map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  if (
    parsed.getUTCFullYear() !== year ||
    parsed.getUTCMonth() !== month - 1 ||
    parsed.getUTCDate() !== day
  ) {
    fail(`${path} must be a valid YYYY-MM-DD date.`);
  }
  return date;
}

function optionalText(value: unknown, path: string): string | undefined {
  if (value === undefined || value === null) return undefined;
  return text(value, path);
}

function optionalNumber(
  value: unknown,
  path: string,
  options: { min?: number; max?: number } = {},
): number | undefined {
  if (value === undefined || value === null) return undefined;
  return numberValue(value, path, options);
}

function validateProfile(value: unknown, path: string): Profile {
  const raw = obj(value, path);
  return {
    firstName: text(raw.firstName, `${path}.firstName`),
    lastName: text(raw.lastName, `${path}.lastName`),
    gradeLevel: numberValue(raw.gradeLevel, `${path}.gradeLevel`, {
      integer: true,
      min: 0,
      max: 12,
    }),
    schoolName: text(raw.schoolName, `${path}.schoolName`),
    parentName: text(raw.parentName, `${path}.parentName`),
    city: text(raw.city, `${path}.city`),
    state: text(raw.state, `${path}.state`),
    startYear: numberValue(raw.startYear, `${path}.startYear`, {
      integer: true,
      min: 1900,
      max: 2200,
    }),
  };
}

function validateEnrollments(value: unknown, path: string): StudentRecord['enrollments'] {
  const seen = new Set<string>();
  return array(value, path).map((entry, index) => {
    const item = obj(entry, `${path}[${index}]`);
    const courseId = text(item.courseId, `${path}[${index}].courseId`, false);
    if (seen.has(courseId)) {
      fail(`${path} contains more than one enrollment for course ${courseId}.`);
    }
    seen.add(courseId);
    return {
      courseId,
      yearId: text(item.yearId, `${path}[${index}].yearId`, false),
      startedAt: dateText(item.startedAt, `${path}[${index}].startedAt`),
      completedAt:
        item.completedAt === undefined || item.completedAt === null
          ? undefined
          : dateText(item.completedAt, `${path}[${index}].completedAt`),
    };
  });
}

function validateGrades(value: unknown, path: string): GradeRecord[] {
  const seen = new Set<string>();
  return array(value, path).map((entry, index) => {
    const item = obj(entry, `${path}[${index}]`);
    const id = text(item.id, `${path}[${index}].id`, false);
    if (seen.has(id)) fail(`${path} contains a duplicate grade ID (${id}).`);
    seen.add(id);
    const category = text(item.category, `${path}[${index}].category`, false) as CategoryId;
    if (!CATEGORIES.has(category)) fail(`${path}[${index}].category is not recognized.`);
    const gradedBy = text(item.gradedBy, `${path}[${index}].gradedBy`, false);
    if (!GRADED_BY.has(gradedBy)) fail(`${path}[${index}].gradedBy is not recognized.`);
    const score = numberValue(item.score, `${path}[${index}].score`, { min: 0 });
    const max = numberValue(item.max, `${path}[${index}].max`, { min: 0.000001 });
    if (score > max) fail(`${path}[${index}].score cannot exceed max.`);
    return {
      id,
      courseId: text(item.courseId, `${path}[${index}].courseId`, false),
      assessmentId: text(item.assessmentId, `${path}[${index}].assessmentId`, false),
      title: text(item.title, `${path}[${index}].title`, false),
      category,
      score,
      max,
      attempt: numberValue(item.attempt, `${path}[${index}].attempt`, {
        integer: true,
        min: 1,
      }),
      recordedAt: dateText(item.recordedAt, `${path}[${index}].recordedAt`),
      period: text(item.period, `${path}[${index}].period`, false),
      gradedBy: gradedBy as GradeRecord['gradedBy'],
      feedback: optionalText(item.feedback, `${path}[${index}].feedback`),
      remediationNote: optionalText(
        item.remediationNote,
        `${path}[${index}].remediationNote`,
      ),
    };
  });
}

function validateAttendance(value: unknown, path: string): AttendanceEntry[] {
  const seen = new Set<string>();
  return array(value, path).map((entry, index) => {
    const item = obj(entry, `${path}[${index}]`);
    const date = dateText(item.date, `${path}[${index}].date`);
    if (seen.has(date)) fail(`${path} contains more than one entry for ${date}.`);
    seen.add(date);
    return {
      date,
      minutes: numberValue(item.minutes, `${path}[${index}].minutes`, { min: 0 }),
      note: optionalText(item.note, `${path}[${index}].note`),
    };
  });
}

function validateLessonProgress(
  value: unknown,
  path: string,
): Record<string, LessonProgress> {
  const raw = obj(value, path);
  const progress: Record<string, LessonProgress> = {};
  for (const [key, entry] of Object.entries(raw)) {
    if (!key.trim()) fail(`${path} contains an empty lesson key.`);
    const item = obj(entry, `${path}.${key}`);
    progress[key] = {
      completedAt: dateText(item.completedAt, `${path}.${key}.completedAt`),
      practiceScore: optionalNumber(item.practiceScore, `${path}.${key}.practiceScore`, {
        min: 0,
      }),
      practiceMax: optionalNumber(item.practiceMax, `${path}.${key}.practiceMax`, {
        min: 0.000001,
      }),
    };
  }
  return progress;
}

function validateStudent(value: unknown, path: string): StudentRecord {
  const raw = obj(value, path);
  return {
    id: text(raw.id, `${path}.id`, false),
    profile: validateProfile(raw.profile, `${path}.profile`),
    enrollments: validateEnrollments(raw.enrollments, `${path}.enrollments`),
    grades: validateGrades(raw.grades, `${path}.grades`),
    attendance: validateAttendance(raw.attendance, `${path}.attendance`),
    lessonProgress: validateLessonProgress(raw.lessonProgress, `${path}.lessonProgress`),
  };
}

function validateStudents(value: unknown, path: string): StudentRecord[] {
  const students = array(value, path).map((student, index) =>
    validateStudent(student, `${path}[${index}]`),
  );
  if (students.length === 0) fail(`${path} must contain at least one student.`);
  const ids = new Set<string>();
  for (const student of students) {
    if (ids.has(student.id)) fail(`${path} contains a duplicate student ID (${student.id}).`);
    ids.add(student.id);
  }
  return students;
}

function validateSettings(value: unknown, path: string): Settings {
  const raw = obj(value, path);
  if (typeof raw.showAdultEd !== 'boolean') fail(`${path}.showAdultEd must be true or false.`);
  return {
    showAdultEd: raw.showAdultEd,
    fullDayMinutes: numberValue(raw.fullDayMinutes, `${path}.fullDayMinutes`, {
      min: 0.000001,
    }),
  };
}

function validateHeader(value: Obj, expectedFormat: string, label: string): void {
  if (value.format !== expectedFormat) fail(`This is not a ${label} backup.`);
  const version = numberValue(value.formatVersion, 'formatVersion', {
    integer: true,
    min: 1,
  });
  if (version > BACKUP_FORMAT_VERSION) {
    fail('This backup was made by a newer version of Texas Home Academy and cannot be imported.');
  }
  if (version !== BACKUP_FORMAT_VERSION) fail('This backup format is not supported.');
  const schema = numberValue(value.schemaVersion, 'schemaVersion', {
    integer: true,
    min: 1,
  });
  if (schema > SCHEMA_VERSION) {
    fail('This backup uses a newer data schema and cannot be imported.');
  }
  if (schema < SCHEMA_VERSION) {
    fail('This backup predates the per-student format. Import it as a household backup instead.');
  }
  if (value.exportedAt !== undefined && typeof value.exportedAt !== 'string') {
    fail('exportedAt must be text.');
  }
}

function parseStudent(value: Obj): StudentBackup {
  validateHeader(value, STUDENT_BACKUP_FORMAT, 'student');
  return {
    kind: 'student',
    format: STUDENT_BACKUP_FORMAT,
    formatVersion: BACKUP_FORMAT_VERSION,
    exportedAt: typeof value.exportedAt === 'string' ? value.exportedAt : '',
    schemaVersion: SCHEMA_VERSION,
    student: validateStudent(value.student, 'student'),
    settings: validateSettings(value.settings, 'settings'),
  };
}

function parseHousehold(value: Obj): HouseholdBackup {
  validateHeader(value, HOUSEHOLD_BACKUP_FORMAT, 'household');
  const students = validateStudents(value.students, 'students');
  const activeStudentId = text(value.activeStudentId, 'activeStudentId', false);
  if (!students.some((student) => student.id === activeStudentId)) {
    fail('activeStudentId does not match a student in this backup.');
  }
  return {
    kind: 'household',
    format: HOUSEHOLD_BACKUP_FORMAT,
    formatVersion: BACKUP_FORMAT_VERSION,
    exportedAt: typeof value.exportedAt === 'string' ? value.exportedAt : '',
    schemaVersion: SCHEMA_VERSION,
    activeStudentId,
    students,
    settings: validateSettings(value.settings, 'settings'),
    legacy: false,
  };
}

function parseLegacy(value: Obj): HouseholdBackup {
  const normalized = normalizeAppState(value);
  if (!normalized) fail('This file is not a Texas Home Academy backup.');
  const ids = new Set<string>();
  for (const student of normalized.students) {
    if (ids.has(student.id)) fail('This backup contains a duplicate student ID.');
    ids.add(student.id);
  }
  return {
    kind: 'household',
    format: HOUSEHOLD_BACKUP_FORMAT,
    formatVersion: 0,
    exportedAt: '',
    schemaVersion: normalized.schemaVersion,
    activeStudentId: normalized.activeStudentId,
    students: normalized.students,
    settings: normalized.settings,
    legacy: true,
  };
}

export function parseBackupText(raw: string): ParsedBackup {
  if (raw.length > MAX_BACKUP_CHARACTERS) {
    fail('This file is too large to import safely.');
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    fail('That file is not valid JSON. No records were changed.');
  }
  if (!isObj(parsed)) fail('This file is not a Texas Home Academy backup.');
  if (parsed.format === STUDENT_BACKUP_FORMAT) return parseStudent(parsed);
  if (parsed.format === HOUSEHOLD_BACKUP_FORMAT) return parseHousehold(parsed);
  if (typeof parsed.format === 'string') {
    fail(`This backup uses an unsupported format (${parsed.format}).`);
  }
  // Older releases exported the complete AppState with no format marker.
  return parseLegacy(parsed);
}

export function createStudentBackup(
  state: AppState,
  studentId: string,
  exportedAt = new Date().toISOString(),
): StudentBackup {
  const student = state.students.find((entry) => entry.id === studentId);
  if (!student) throw new BackupError('That student is no longer in this browser.');
  return {
    kind: 'student',
    format: STUDENT_BACKUP_FORMAT,
    formatVersion: BACKUP_FORMAT_VERSION,
    exportedAt,
    schemaVersion: SCHEMA_VERSION,
    student: structuredClone(student),
    settings: structuredClone(state.settings),
  };
}

export function createHouseholdBackup(
  state: AppState,
  exportedAt = new Date().toISOString(),
): HouseholdBackup {
  return {
    kind: 'household',
    format: HOUSEHOLD_BACKUP_FORMAT,
    formatVersion: BACKUP_FORMAT_VERSION,
    exportedAt,
    schemaVersion: SCHEMA_VERSION,
    activeStudentId: state.activeStudentId,
    students: structuredClone(state.students),
    settings: structuredClone(state.settings),
    legacy: false,
  };
}

export function serializeBackup(backup: ParsedBackup): string {
  return JSON.stringify(backup, null, 2);
}

function slug(value: string): string {
  return (
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'student'
  );
}

export function studentBackupFilename(student: StudentRecord, date = todayISO()): string {
  return `texas-home-academy-${slug(studentName(student.profile))}-${date}.json`;
}

export function householdBackupFilename(date = todayISO()): string {
  return `texas-home-academy-household-${date}.json`;
}

export function backupCounts(student: StudentRecord): {
  grades: number;
  attendance: number;
  enrollments: number;
  lessons: number;
} {
  return {
    grades: student.grades.length,
    attendance: student.attendance.length,
    enrollments: student.enrollments.length,
    lessons: Object.keys(student.lessonProgress).length,
  };
}

function synced(state: AppState): StudentRecord[] {
  return state.students.map((student) =>
    student.id === state.activeStudentId
      ? { ...student, ...studentData(state) }
      : student,
  );
}

function uniqueId(base: string, used: Set<string>): string {
  let candidate = `${base}-copy`;
  let index = 2;
  while (used.has(candidate)) {
    candidate = `${base}-copy-${index}`;
    index += 1;
  }
  return candidate;
}

function isPristine(state: AppState): boolean {
  if (state.students.length !== 1) return false;
  const student = state.students[0];
  return (
    !student.profile.firstName.trim() &&
    !student.profile.lastName.trim() &&
    student.enrollments.length === 0 &&
    student.grades.length === 0 &&
    student.attendance.length === 0 &&
    Object.keys(student.lessonProgress).length === 0
  );
}

function countMessage(student: StudentRecord): string {
  const counts = backupCounts(student);
  return `${counts.grades} grade records, ${counts.attendance} attendance entries, ${counts.enrollments} enrollments, and ${counts.lessons} completed lessons`;
}

/**
 * Merge one student into the current household. Existing students other than a
 * deliberately replaced matching ID are never changed. On a completely empty
 * household the imported student and its settings replace the placeholder.
 */
export function importStudentBackup(
  state: AppState,
  backup: StudentBackup,
  duplicate: DuplicateStrategy,
): ImportResult {
  const incoming = structuredClone(backup.student);
  if (isPristine(state)) {
    return {
      state: hydrateAppState(
        SCHEMA_VERSION,
        structuredClone(backup.settings),
        [incoming],
        incoming.id,
        state.revision,
      ),
      message: `Restored ${studentName(incoming.profile)} into this empty household with ${countMessage(incoming)}.`,
    };
  }

  const current = synced(state);
  const existingIndex = current.findIndex((student) => student.id === incoming.id);
  if (existingIndex >= 0 && duplicate === 'replace') {
    const students = current.slice();
    students[existingIndex] = incoming;
    return {
      state: hydrateAppState(
        state.schemaVersion,
        state.settings,
        students,
        state.activeStudentId,
        state.revision,
      ),
      message: `Restored ${studentName(incoming.profile)} and replaced the existing profile with the same ID. Other students were not changed.`,
    };
  }

  if (existingIndex >= 0) {
    const used = new Set(current.map((student) => student.id));
    const imported = { ...incoming, id: uniqueId(incoming.id, used) };
    const students = [...current, imported];
    return {
      state: hydrateAppState(
        state.schemaVersion,
        state.settings,
        students,
        imported.id,
        state.revision,
      ),
      message: `Imported ${studentName(imported.profile)} as a separate student with a new ID. Other students were not changed.`,
    };
  }

  return {
    state: hydrateAppState(
      state.schemaVersion,
      state.settings,
      [...current, incoming],
      incoming.id,
      state.revision,
    ),
    message: `Imported ${studentName(incoming.profile)} with ${countMessage(incoming)}. Other students were not changed.`,
  };
}

/** Restore or merge an entire household, preserving IDs unless a duplicate is kept. */
export function importHouseholdBackup(
  state: AppState,
  backup: HouseholdBackup,
  mode: HouseholdImportMode,
): ImportResult {
  const incoming = structuredClone(backup.students);
  if (mode === 'replace') {
    return {
      state: hydrateAppState(
        SCHEMA_VERSION,
        structuredClone(backup.settings),
        incoming,
        backup.activeStudentId,
        state.revision,
      ),
      message: `Restored all ${incoming.length} students and household settings from this backup.`,
    };
  }

  const current = synced(state);
  if (mode === 'merge-replace') {
    const replacements = new Map(incoming.map((student) => [student.id, student]));
    const existingIds = new Set(current.map((student) => student.id));
    const students = current.map((student) => replacements.get(student.id) ?? student);
    for (const student of incoming) {
      if (!existingIds.has(student.id)) students.push(student);
    }
    return {
      state: hydrateAppState(
        state.schemaVersion,
        state.settings,
        students,
        backup.activeStudentId,
        state.revision,
      ),
      message: `Merged ${incoming.length} students from the household backup. Students with matching IDs were replaced; everyone else was kept.`,
    };
  }

  const used = new Set(current.map((student) => student.id));
  for (const student of incoming) used.add(student.id);
  const idMap = new Map<string, string>();
  const students = current.slice();
  for (const student of incoming) {
    const id = used.has(student.id) ? uniqueId(student.id, used) : student.id;
    used.add(id);
    idMap.set(student.id, id);
    students.push({ ...student, id });
  }
  return {
    state: hydrateAppState(
      state.schemaVersion,
      state.settings,
      students,
      idMap.get(backup.activeStudentId) ?? state.activeStudentId,
      state.revision,
    ),
    message: `Merged ${incoming.length} students and kept both copies wherever an ID already existed.`,
  };
}

export function appStateFromHousehold(
  backup: HouseholdBackup,
  revision = 0,
): AppState {
  return hydrateAppState(
    SCHEMA_VERSION,
    structuredClone(backup.settings),
    structuredClone(backup.students),
    backup.activeStudentId,
    revision,
  );
}
