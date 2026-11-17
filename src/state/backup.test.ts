import { describe, expect, it } from 'vitest';
import type { AppState, GradeRecord, StudentRecord } from '../types';
import {
  BackupError,
  appStateFromHousehold,
  backupCounts,
  createHouseholdBackup,
  createStudentBackup,
  householdBackupFilename,
  importHouseholdBackup,
  importStudentBackup,
  parseBackupText,
  serializeBackup,
  studentBackupFilename,
} from './backup';
import {
  SCHEMA_VERSION,
  defaultProfile,
  defaultState,
  parseImportedState,
  serializeState,
} from './persistence';
import { hydrateAppState } from './students';

function grade(studentId: string, suffix = '1'): GradeRecord {
  return {
    id: `grade-${studentId}-${suffix}`,
    courseId: 'hs-alg1',
    assessmentId: `hs-alg1:u${suffix}:quiz`,
    title: `Unit ${suffix} quiz`,
    category: 'quiz',
    score: 18,
    max: 18,
    attempt: 1,
    recordedAt: '2026-09-15',
    period: 'Q2',
    gradedBy: 'auto',
  };
}

function student(id: string, firstName: string): StudentRecord {
  return {
    id,
    profile: {
      ...defaultProfile,
      firstName,
      lastName: 'Learner',
      gradeLevel: 9,
      schoolName: 'Home Academy',
      parentName: 'Parent Learner',
      city: 'Austin',
      state: 'Texas',
      startYear: 2026,
    },
    enrollments: [
      {
        courseId: 'hs-alg1',
        yearId: '2026-2027',
        startedAt: '2026-08-24',
      },
    ],
    grades: [grade(id)],
    attendance: [{ date: '2026-09-15', minutes: 240, note: 'Full day' }],
    lessonProgress: {
      'hs-alg1/alg1-u1-l1': {
        completedAt: '2026-09-15',
        practiceScore: 18,
        practiceMax: 20,
      },
    },
  };
}

function stateOf(
  students: StudentRecord[],
  activeStudentId = students[0].id,
  settings = defaultState.settings,
): AppState {
  return hydrateAppState(SCHEMA_VERSION, settings, students, activeStudentId, 3);
}

function householdState(): AppState {
  const first = student('first-student', 'Avery');
  first.grades.push({ ...grade('first-student', '2'), id: 'grade-first-2' });
  const second = student('second-student', 'Maya');
  second.enrollments.push({
    courseId: 'hs-bio',
    yearId: '2026-2027',
    startedAt: '2026-08-24',
  });
  return stateOf([first, second], 'second-student', {
    showAdultEd: false,
    fullDayMinutes: 300,
  });
}

describe('backup export', () => {
  it('exports one student with only that student’s complete academic record', () => {
    const source = householdState();
    const backup = createStudentBackup(source, 'first-student', '2026-11-17T12:00:00.000Z');

    expect(backup.format).toBe('texas-home-academy-student');
    expect(backup.formatVersion).toBe(1);
    expect(backup.student.id).toBe('first-student');
    expect(backup.student.profile.firstName).toBe('Avery');
    expect(backup.student.enrollments).toEqual(source.students[0].enrollments);
    expect(backup.student.grades).toHaveLength(2);
    expect(backup.student.attendance).toEqual(source.students[0].attendance);
    expect(backup.student.lessonProgress).toEqual(source.students[0].lessonProgress);
    expect(backup.settings).toEqual(source.settings);
    expect(backup.student.id).not.toBe('second-student');
    expect(backupCounts(backup.student)).toEqual({
      grades: 2,
      attendance: 1,
      enrollments: 1,
      lessons: 1,
    });
  });

  it('exports and parses a household without changing IDs or the active student', () => {
    const source = householdState();
    const backup = createHouseholdBackup(source, '2026-11-17T12:00:00.000Z');
    const parsed = parseBackupText(serializeBackup(backup));

    expect(parsed.kind).toBe('household');
    if (parsed.kind !== 'household') throw new Error('wrong kind');
    expect(parsed.formatVersion).toBe(1);
    expect(parsed.legacy).toBe(false);
    expect(parsed.activeStudentId).toBe('second-student');
    expect(parsed.students).toEqual(source.students);
    expect(parsed.settings).toEqual(source.settings);
    expect(appStateFromHousehold(parsed, source.revision)).toEqual(
      stateOf(source.students, source.activeStudentId, source.settings),
    );
  });

  it('round-trips the full student record through JSON', () => {
    const source = householdState();
    const backup = createStudentBackup(source, 'second-student');
    const parsed = parseBackupText(serializeBackup(backup));
    expect(parsed.kind).toBe('student');
    if (parsed.kind !== 'student') throw new Error('wrong kind');
    expect(parsed.student).toEqual(source.students[1]);
    expect(parsed.settings).toEqual(source.settings);
  });

  it('creates portable, stable filenames', () => {
    const source = householdState();
    expect(studentBackupFilename(source.students[0], '2026-11-17')).toBe(
      'texas-home-academy-avery-learner-2026-11-17.json',
    );
    expect(householdBackupFilename('2026-11-17')).toBe(
      'texas-home-academy-household-2026-11-17.json',
    );
  });
});

describe('individual student import', () => {
  it('adds a student to a household without changing anyone else', () => {
    const target = stateOf([student('existing-student', 'Existing')]);
    const imported = createStudentBackup(householdState(), 'first-student');
    const before = structuredClone(target);

    const result = importStudentBackup(target, imported, 'replace');

    expect(result.state.students.map((entry) => entry.id)).toEqual([
      'existing-student',
      'first-student',
    ]);
    expect(result.state.activeStudentId).toBe('first-student');
    expect(result.state.students[0]).toEqual(before.students[0]);
    expect(result.state.students[1].grades).toHaveLength(2);
    expect(result.state.settings).toEqual(target.settings);
    expect(target).toEqual(before);
  });

  it('replaces only the matching ID when explicitly chosen', () => {
    const old = student('same-student', 'Old name');
    old.grades = [];
    const other = student('other-student', 'Other');
    const target = stateOf([old, other], 'other-student');
    const imported = createStudentBackup(householdState(), 'first-student');
    const matching = { ...imported, student: { ...imported.student, id: 'same-student' } };

    const result = importStudentBackup(target, matching, 'replace');

    expect(result.state.students).toHaveLength(2);
    expect(result.state.students.find((entry) => entry.id === 'same-student')?.grades).toHaveLength(
      2,
    );
    expect(result.state.students.find((entry) => entry.id === 'other-student')).toEqual(other);
    expect(result.state.activeStudentId).toBe('other-student');
    expect(result.message).toMatch(/Other students were not changed/);
  });

  it('keeps both copies and assigns a new ID when a duplicate is kept', () => {
    const old = student('same-student', 'Old name');
    old.grades = [];
    const target = stateOf([old, student('other-student', 'Other')]);
    const imported = createStudentBackup(householdState(), 'first-student');
    const matching = { ...imported, student: { ...imported.student, id: 'same-student' } };

    const result = importStudentBackup(target, matching, 'keep-both');

    expect(result.state.students).toHaveLength(3);
    expect(result.state.students.find((entry) => entry.id === 'same-student')).toEqual(old);
    const copy = result.state.students.find((entry) => entry.id !== 'same-student' && entry.id !== 'other-student');
    expect(copy?.id).toBe('same-student-copy');
    expect(copy?.grades).toHaveLength(2);
    expect(result.state.activeStudentId).toBe('same-student-copy');
    expect(result.message).toMatch(/new ID/);
  });

  it('restores a single-student backup into an empty household and applies its settings', () => {
    const imported = createStudentBackup(householdState(), 'first-student');
    const result = importStudentBackup(structuredClone(defaultState), imported, 'replace');

    expect(result.state.students).toHaveLength(1);
    expect(result.state.students[0].id).toBe('first-student');
    expect(result.state.profile.firstName).toBe('Avery');
    expect(result.state.settings).toEqual(imported.settings);
    expect(result.state.students[0].lessonProgress).toEqual(
      imported.student.lessonProgress,
    );
  });

  it('rejects an export for a student that is no longer present', () => {
    expect(() => createStudentBackup(householdState(), 'gone')).toThrow(BackupError);
  });
});

describe('household import', () => {
  it('replaces the whole household exactly when chosen', () => {
    const target = stateOf([student('existing-student', 'Existing')], 'existing-student', {
      showAdultEd: true,
      fullDayMinutes: 240,
    });
    const backup = createHouseholdBackup(householdState());

    const result = importHouseholdBackup(target, backup, 'replace');
    const parsed = parseBackupText(serializeBackup(backup));
    if (parsed.kind !== 'household') throw new Error('wrong kind');

    expect(result.state.students).toEqual(parsed.students);
    expect(result.state.activeStudentId).toBe('second-student');
    expect(result.state.settings).toEqual(parsed.settings);
    expect(appStateFromHousehold(parsed, target.revision)).toEqual(result.state);
  });

  it('merges and replaces matching IDs while keeping unrelated students', () => {
    const target = stateOf([
      student('keep-student', 'Keep'),
      { ...student('second-student', 'Old Maya'), grades: [] },
    ]);
    const backup = createHouseholdBackup(householdState());

    const result = importHouseholdBackup(target, backup, 'merge-replace');

    expect(result.state.students.map((entry) => entry.id)).toEqual([
      'keep-student',
      'second-student',
      'first-student',
    ]);
    expect(result.state.students.find((entry) => entry.id === 'keep-student')).toEqual(
      target.students[0],
    );
    expect(result.state.students.find((entry) => entry.id === 'second-student')?.enrollments).toHaveLength(
      2,
    );
    expect(result.state.activeStudentId).toBe('second-student');
    expect(result.state.settings).toEqual(target.settings);
  });

  it('keeps both copies wherever an ID already exists', () => {
    const target = stateOf([
      student('keep-student', 'Keep'),
      { ...student('second-student', 'Old Maya'), grades: [] },
    ]);
    const backup = createHouseholdBackup(householdState());

    const result = importHouseholdBackup(target, backup, 'merge-keep-both');

    expect(result.state.students).toHaveLength(4);
    expect(new Set(result.state.students.map((entry) => entry.id)).size).toBe(4);
    expect(result.state.students.find((entry) => entry.id === 'second-student')?.grades).toEqual(
      [],
    );
    const importedSecond = result.state.students.find(
      (entry) => entry.profile.firstName === 'Maya' && entry.id !== 'second-student',
    );
    expect(importedSecond?.enrollments).toHaveLength(2);
    expect(result.state.activeStudentId).toBe(importedSecond?.id);
  });

  it('preserves target settings when merging a household', () => {
    const target = stateOf([student('keep-student', 'Keep')], 'keep-student', {
      showAdultEd: true,
      fullDayMinutes: 180,
    });
    const result = importHouseholdBackup(
      target,
      createHouseholdBackup(householdState()),
      'merge-replace',
    );
    expect(result.state.settings).toEqual(target.settings);
  });
});

describe('backup validation', () => {
  it('rejects invalid JSON without changing records', () => {
    const target = householdState();
    const snapshot = structuredClone(target);
    expect(() => parseBackupText('{"format":')).toThrow(/not valid JSON/);
    expect(target).toEqual(snapshot);
  });

  it('rejects unknown formats and newer versions', () => {
    expect(() => parseBackupText(JSON.stringify({ format: 'other-app', students: [] }))).toThrow(
      /unsupported format/,
    );
    const backup = createStudentBackup(householdState(), 'first-student');
    backup.formatVersion = 99;
    expect(() => parseBackupText(serializeBackup(backup))).toThrow(/newer version/);
  });

  it('rejects malformed students, grades, and dates', () => {
    const backup = createStudentBackup(householdState(), 'first-student');
    const badGrades = structuredClone(backup) as unknown as Record<string, unknown>;
    (badGrades.student as Record<string, unknown>).grades = 'not a list';
    expect(() => parseBackupText(JSON.stringify(badGrades))).toThrow(/grades must be a list/);

    const badDate = structuredClone(backup);
    badDate.student.attendance[0].date = '2026-99-99';
    expect(() => parseBackupText(serializeBackup(badDate))).toThrow(/valid YYYY-MM-DD/);

    const impossibleDate = structuredClone(backup);
    impossibleDate.student.attendance[0].date = '2026-02-30';
    expect(() => parseBackupText(serializeBackup(impossibleDate))).toThrow(/valid YYYY-MM-DD/);

    const badProfile = structuredClone(backup);
    badProfile.student.profile.gradeLevel = 44;
    expect(() => parseBackupText(serializeBackup(badProfile))).toThrow(/allowed maximum/);
  });

  it('rejects duplicate student IDs in a household', () => {
    const backup = createHouseholdBackup(householdState());
    backup.students[1].id = backup.students[0].id;
    expect(() => parseBackupText(serializeBackup(backup))).toThrow(/duplicate student ID/);
  });

  it('rejects duplicate grade IDs and attendance dates', () => {
    const backup = createStudentBackup(householdState(), 'first-student');
    backup.student.grades[1].id = backup.student.grades[0].id;
    expect(() => parseBackupText(serializeBackup(backup))).toThrow(/duplicate grade ID/);

    const attendance = createStudentBackup(householdState(), 'first-student');
    attendance.student.attendance.push({ ...attendance.student.attendance[0] });
    expect(() => parseBackupText(serializeBackup(attendance))).toThrow(/more than one entry/);
  });

  it('rejects a household active ID that is not in the file', () => {
    const backup = createHouseholdBackup(householdState());
    backup.activeStudentId = 'missing';
    expect(() => parseBackupText(serializeBackup(backup))).toThrow(/activeStudentId/);
  });

  it('rejects a bad practice maximum', () => {
    const backup = createStudentBackup(householdState(), 'first-student');
    backup.student.lessonProgress['hs-alg1/alg1-u1-l1'].practiceMax = 0;
    expect(() => parseBackupText(serializeBackup(backup))).toThrow(/allowed minimum/);
  });
});

describe('legacy compatibility', () => {
  it('still imports a schema-1 backup through the household path', () => {
    const legacy = {
      schemaVersion: 1,
      profile: {
        ...defaultProfile,
        firstName: 'Avery',
        lastName: 'Chen',
        schoolName: 'Chen Home Academy',
      },
      enrollments: [
        { courseId: 'hs-alg1', yearId: '2026-2027', startedAt: '2026-08-24' },
      ],
      grades: [
        {
          ...grade('legacy', '1'),
          id: 'legacy-grade',
          attempt: 1,
          recordedAt: '2026-09-15',
        },
      ],
      attendance: [{ date: '2026-09-15', minutes: 240 }],
      lessonProgress: {
        'hs-alg1/alg1-u1-l1': {
          completedAt: '2026-09-15',
          practiceScore: 18,
          practiceMax: 20,
        },
      },
      settings: { showAdultEd: false, fullDayMinutes: 300 },
    };

    const parsed = parseBackupText(JSON.stringify(legacy));
    expect(parsed.kind).toBe('household');
    if (parsed.kind !== 'household') throw new Error('wrong kind');
    expect(parsed.legacy).toBe(true);
    expect(parsed.students).toHaveLength(1);
    expect(parsed.students[0].grades[0].id).toBe('legacy-grade');
    expect(parsed.settings.fullDayMinutes).toBe(300);

    const result = importHouseholdBackup(
      stateOf([student('existing-student', 'Existing')]),
      parsed,
      'replace',
    );
    expect(result.state.students).toHaveLength(1);
    expect(result.state.profile.firstName).toBe('Avery');
    expect(result.state.lessonProgress['hs-alg1/alg1-u1-l1'].practiceScore).toBe(18);
  });

  it('still accepts an existing full-state export as a legacy household backup', () => {
    const source = householdState();
    const parsed = parseBackupText(serializeState(source));
    expect(parsed.kind).toBe('household');
    if (parsed.kind !== 'household') throw new Error('wrong kind');
    expect(parsed.legacy).toBe(true);
    expect(parsed.students).toEqual(source.students);
    expect(parsed.activeStudentId).toBe(source.activeStudentId);
    expect(parsed.settings).toEqual(source.settings);
  });

  it('does not disturb existing parseImportedState round trips', () => {
    const source = householdState();
    expect(parseImportedState(serializeState(source))).toEqual(source);
  });
});
