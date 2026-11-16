import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';
import type {
  AppState,
  AttendanceEntry,
  CategoryId,
  GradeRecord,
  LessonProgress,
  Profile,
  SchoolYear,
} from '../types';
import { buildSchoolYear, periodForDate, todayISO } from '../state/schoolYear';
import { applyRetakeCap } from '../grading/progression';

const STORAGE_KEY = 'texas-home-academy/state/v1';
export const SCHEMA_VERSION = 1;

const defaultState: AppState = {
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

function newId(prefix: string): string {
  const random =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${prefix}-${random}`;
}

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

function enroll(state: AppState, courseId: string): AppState {
  if (state.enrollments.some((e) => e.courseId === courseId)) return state;
  return {
    ...state,
    enrollments: [
      ...state.enrollments,
      { courseId, yearId: `${state.profile.startYear}-${state.profile.startYear + 1}`, startedAt: todayISO() },
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
      const existing = state.grades.filter(
        (g) => g.assessmentId === action.record.assessmentId,
      );
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
      return { ...defaultState };
    default:
      return state;
  }
}

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
    return { ...defaultState, ...parsed, settings: { ...defaultState.settings, ...parsed.settings } };
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
  return { ...defaultState, ...parsed, schemaVersion: SCHEMA_VERSION };
}

interface StoreValue {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  year: SchoolYear;
  periodId: string;
  recordGrade: (input: {
    courseId: string;
    assessmentId: string;
    title: string;
    category: CategoryId;
    score: number;
    max: number;
    gradedBy?: 'auto' | 'parent';
    feedback?: string;
    remediationNote?: string;
    period?: string;
  }) => void;
  logAttendance: (date: string, minutes: number, note?: string) => void;
  completeLesson: (
    courseId: string,
    lessonId: string,
    practiceScore?: number,
    practiceMax?: number,
  ) => void;
  exportBackup: () => void;
  importBackup: (file: File) => Promise<void>;
}

const StoreContext = createContext<StoreValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState);
  const year = useMemo(() => buildSchoolYear(state.profile.startYear), [state.profile.startYear]);
  const periodId = useMemo(() => periodForDate(year, todayISO()), [year]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Storage can fail in private browsing; the app still works for the session.
    }
  }, [state]);

  const recordGrade = useCallback<StoreValue['recordGrade']>(
    (input) => {
      dispatch({
        type: 'grade/record',
        record: {
          courseId: input.courseId,
          assessmentId: input.assessmentId,
          title: input.title,
          category: input.category,
          score: input.score,
          max: input.max,
          gradedBy: input.gradedBy ?? 'auto',
          feedback: input.feedback,
          remediationNote: input.remediationNote,
          period: input.period ?? periodId,
        },
      });
    },
    [periodId],
  );

  const logAttendance = useCallback((date: string, minutes: number, note?: string) => {
    dispatch({ type: 'attendance/log', entry: { date, minutes, note } });
  }, []);

  const completeLesson = useCallback(
    (courseId: string, lessonId: string, practiceScore?: number, practiceMax?: number) => {
      dispatch({ type: 'lesson/complete', courseId, lessonId, practiceScore, practiceMax });
    },
    [],
  );

  const exportBackup = useCallback(() => {
    const blob = new Blob([serializeState(state)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `texas-home-academy-backup-${todayISO()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }, [state]);

  const importBackup = useCallback(async (file: File) => {
    const text = await file.text();
    const next = parseImportedState(text);
    dispatch({ type: 'state/replace', state: next });
  }, []);

  const value = useMemo<StoreValue>(
    () => ({
      state,
      dispatch,
      year,
      periodId,
      recordGrade,
      logAttendance,
      completeLesson,
      exportBackup,
      importBackup,
    }),
    [state, year, periodId, recordGrade, logAttendance, completeLesson, exportBackup, importBackup],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useApp(): StoreValue {
  const value = useContext(StoreContext);
  if (!value) throw new Error('useApp must be used inside AppProvider');
  return value;
}
