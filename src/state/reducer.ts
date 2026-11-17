import type { AppState, AttendanceEntry, GradeRecord, GradeLevel, LessonProgress, Profile } from '../types';
import { todayISO } from './schoolYear';
import { defaultState } from './persistence';
import { applyRetakeCap } from '../grading/progression';
import {
  emptyStudent,
  hydrateAppState,
  replaceStudentData,
  studentData,
} from './students';

export type Action =
  | { type: 'profile/update'; patch: Partial<Profile> }
  | { type: 'settings/update'; patch: Partial<AppState['settings']> }
  | { type: 'student/switch'; id: string }
  | {
      type: 'student/create';
      firstName: string;
      lastName: string;
      gradeLevel?: GradeLevel;
    }
  | { type: 'student/delete'; id: string }
  | { type: 'enroll'; courseId: string }
  | { type: 'unenroll'; courseId: string }
  | {
      type: 'grade/record';
      record: Omit<GradeRecord, 'id' | 'recordedAt' | 'attempt'> & { attempt?: number };
    }
  | { type: 'grade/delete'; id: string }
  | { type: 'attendance/log'; entry: AttendanceEntry }
  | { type: 'attendance/remove'; date: string }
  | {
      type: 'lesson/complete';
      courseId: string;
      lessonId: string;
      practiceScore?: number;
      practiceMax?: number;
    }
  | { type: 'state/replace'; state: AppState }
  | { type: 'state/reset' };

function newId(prefix: string): string {
  const random =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${prefix}-${random}`;
}

function enroll(state: AppState, courseId: string): AppState {
  if (state.enrollments.some((e) => e.courseId === courseId)) return state;
  return replaceStudentData(state, {
    enrollments: [
      ...state.enrollments,
      {
        courseId,
        yearId: `${state.profile.startYear}-${state.profile.startYear + 1}`,
        startedAt: todayISO(),
      },
    ],
  });
}

/** Save the active mirror before hydrating another student. */
function syncedStudents(state: AppState) {
  return state.students.map((student) =>
    student.id === state.activeStudentId ? { ...student, ...studentData(state) } : student,
  );
}

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'profile/update':
      return replaceStudentData(state, {
        profile: { ...state.profile, ...action.patch },
      });
    case 'settings/update':
      return { ...state, settings: { ...state.settings, ...action.patch } };
    case 'student/switch': {
      if (action.id === state.activeStudentId) return state;
      const target = state.students.find((student) => student.id === action.id);
      if (!target) return state;
      return hydrateAppState(
        state.schemaVersion,
        state.settings,
        syncedStudents(state),
        target.id,
        state.revision,
      );
    }
    case 'student/create': {
      const student = emptyStudent(newId('student'), {
        ...state.profile,
        firstName: action.firstName.trim(),
        lastName: action.lastName.trim(),
        gradeLevel: action.gradeLevel ?? 9,
      });
      return hydrateAppState(
        state.schemaVersion,
        state.settings,
        [...syncedStudents(state), student],
        student.id,
        state.revision,
      );
    }
    case 'student/delete': {
      if (state.students.length <= 1) return state;
      if (!state.students.some((student) => student.id === action.id)) return state;
      const remaining = syncedStudents(state).filter((student) => student.id !== action.id);
      const activeStudentId =
        state.activeStudentId === action.id ? remaining[0].id : state.activeStudentId;
      return hydrateAppState(
        state.schemaVersion,
        state.settings,
        remaining,
        activeStudentId,
        state.revision,
      );
    }
    case 'enroll':
      return enroll(state, action.courseId);
    case 'unenroll':
      return replaceStudentData(state, {
        enrollments: state.enrollments.filter((e) => e.courseId !== action.courseId),
      });
    case 'grade/record': {
      const existing = state.grades.filter((g) => g.assessmentId === action.record.assessmentId);
      const attempt = action.record.attempt ?? existing.length + 1;
      const capped =
        action.record.category === 'practice'
          ? action.record.score
          : applyRetakeCap(action.record.score, action.record.max, attempt);
      const record: GradeRecord = {
        ...action.record,
        score: Math.min(capped, action.record.max),
        attempt,
        id: newId('grade'),
        recordedAt: todayISO(),
      };
      return replaceStudentData(state, { grades: [...state.grades, record] });
    }
    case 'grade/delete':
      return replaceStudentData(state, {
        grades: state.grades.filter((g) => g.id !== action.id),
      });
    case 'attendance/log': {
      const others = state.attendance.filter((a) => a.date !== action.entry.date);
      return replaceStudentData(state, { attendance: [...others, action.entry] });
    }
    case 'attendance/remove':
      return replaceStudentData(state, {
        attendance: state.attendance.filter((a) => a.date !== action.date),
      });
    case 'lesson/complete': {
      const key = `${action.courseId}/${action.lessonId}`;
      const prior = state.lessonProgress[key];
      // Practice is formative: a later, weaker retake must not make a completed
      // lesson look worse than the best score the gradebook is actually using.
      const priorRatio =
        prior?.practiceScore !== undefined && prior.practiceMax
          ? prior.practiceScore / prior.practiceMax
          : -1;
      const nextRatio =
        action.practiceScore !== undefined && action.practiceMax
          ? action.practiceScore / action.practiceMax
          : -1;
      const keepPrior = prior !== undefined && priorRatio >= nextRatio;
      const progress: LessonProgress = {
        completedAt: todayISO(),
        practiceScore: keepPrior ? prior.practiceScore : action.practiceScore,
        practiceMax: keepPrior ? prior.practiceMax : action.practiceMax,
      };
      return replaceStudentData(state, {
        lessonProgress: { ...state.lessonProgress, [key]: progress },
      });
    }
    case 'state/replace':
      return action.state;
    case 'state/reset':
      return structuredClone(defaultState);
    default:
      return state;
  }
}
