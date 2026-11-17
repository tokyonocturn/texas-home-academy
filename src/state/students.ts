import type { AppState, Profile, StudentRecord } from '../types';

/**
 * Multi-student state helpers.
 *
 * AppState keeps the active student's data in the original top-level fields so
 * every existing screen, calculation, and export keeps working unchanged. The
 * students array is the persisted source of truth; these helpers keep the two
 * representations in sync and hydrate the active mirror on switch or load.
 */

export const PRIMARY_STUDENT_ID = 'student-1';

export type ActiveStudentData = Pick<
  AppState,
  'profile' | 'enrollments' | 'grades' | 'attendance' | 'lessonProgress'
>;

export function studentName(profile: Profile): string {
  const name = `${profile.firstName} ${profile.lastName}`.trim();
  return name || 'Unnamed student';
}

export function studentData(student: ActiveStudentData): ActiveStudentData {
  return {
    profile: student.profile,
    enrollments: student.enrollments,
    grades: student.grades,
    attendance: student.attendance,
    lessonProgress: student.lessonProgress,
  };
}

export function emptyStudent(id: string, profile: Profile): StudentRecord {
  return {
    id,
    profile,
    enrollments: [],
    grades: [],
    attendance: [],
    lessonProgress: {},
  };
}

/** Build an AppState whose active mirrors match the selected student. */
export function hydrateAppState(
  schemaVersion: number,
  settings: AppState['settings'],
  students: StudentRecord[],
  activeStudentId: string,
  revision = 0,
): AppState {
  const active = students.find((student) => student.id === activeStudentId) ?? students[0];
  return {
    schemaVersion,
    revision,
    activeStudentId: active.id,
    students,
    settings,
    ...studentData(active),
  };
}

/** Update the active student's data in both the mirror and students array. */
export function replaceStudentData(
  state: AppState,
  patch: Partial<ActiveStudentData>,
): AppState {
  const data: ActiveStudentData = {
    profile: patch.profile ?? state.profile,
    enrollments: patch.enrollments ?? state.enrollments,
    grades: patch.grades ?? state.grades,
    attendance: patch.attendance ?? state.attendance,
    lessonProgress: patch.lessonProgress ?? state.lessonProgress,
  };
  return {
    ...state,
    ...data,
    students: state.students.map((student) =>
      student.id === state.activeStudentId ? { ...student, ...data } : student,
    ),
  };
}
