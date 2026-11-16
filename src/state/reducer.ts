import type { AppState, AttendanceEntry, GradeRecord, LessonProgress, Profile } from '../types';
import { todayISO } from './schoolYear';
import { defaultState } from './persistence';
import { applyRetakeCap } from '../grading/progression';

export type Action =
  | { type: 'profile/update'; patch: Partial<Profile> }
  | { type: 'settings/update'; patch: Partial<AppState['settings']> }
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
  return {
    ...state,
    enrollments: [
      ...state.enrollments,
      {
        courseId,
        yearId: `${state.profile.startYear}-${state.profile.startYear + 1}`,
        startedAt: todayISO(),
      },
    ],
  };
}

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'profile/update':
      return { ...state, profile: { ...state.profile, ...action.patch } };
    case 'settings/update':
      return { ...state, settings: { ...state.settings, ...action.patch } };
    case 'enroll':
      return enroll(state, action.courseId);
    case 'unenroll':
      return {
        ...state,
        enrollments: state.enrollments.filter((e) => e.courseId !== action.courseId),
      };
    case 'grade/record': {
      const existing = state.grades.filter((g) => g.assessmentId === action.record.assessmentId);
      const attempt = action.record.attempt ?? existing.length + 1;
      const capped =
        action.record.category === 'practice'
          ? action.record.score
          : applyRetakeCap(action.record.score, attempt);
      const record: GradeRecord = {
        ...action.record,
        score: Math.min(capped, action.record.max),
        attempt,
        id: newId('grade'),
        recordedAt: todayISO(),
      };
      return { ...state, grades: [...state.grades, record] };
    }
    case 'grade/delete':
      return { ...state, grades: state.grades.filter((g) => g.id !== action.id) };
    case 'attendance/log': {
      const others = state.attendance.filter((a) => a.date !== action.entry.date);
      return { ...state, attendance: [...others, action.entry] };
    }
    case 'attendance/remove':
      return { ...state, attendance: state.attendance.filter((a) => a.date !== action.date) };
    case 'lesson/complete': {
      const key = `${action.courseId}/${action.lessonId}`;
      const progress: LessonProgress = {
        completedAt: todayISO(),
        practiceScore: action.practiceScore,
        practiceMax: action.practiceMax,
      };
      return { ...state, lessonProgress: { ...state.lessonProgress, [key]: progress } };
    }
    case 'state/replace':
      return action.state;
    case 'state/reset':
      return structuredClone(defaultState);
    default:
      return state;
  }
}
