import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';
import type { AppState, AttendanceEntry, CategoryId, Profile, SchoolYear } from '../types';
import { buildSchoolYear, periodForDate, todayISO } from './schoolYear';
import { reducer, type Action } from './reducer';
import { loadState, parseImportedState, serializeState, STORAGE_KEY } from './persistence';

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
  updateProfile: (patch: Partial<Profile>) => void;
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
    const entry: AttendanceEntry = { date, minutes, note };
    dispatch({ type: 'attendance/log', entry });
  }, []);

  const completeLesson = useCallback(
    (courseId: string, lessonId: string, practiceScore?: number, practiceMax?: number) => {
      dispatch({ type: 'lesson/complete', courseId, lessonId, practiceScore, practiceMax });
    },
    [],
  );

  const updateProfile = useCallback((patch: Partial<Profile>) => {
    dispatch({ type: 'profile/update', patch });
  }, []);

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
      updateProfile,
      exportBackup,
      importBackup,
    }),
    [
      state,
      year,
      periodId,
      recordGrade,
      logAttendance,
      completeLesson,
      updateProfile,
      exportBackup,
      importBackup,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useApp(): StoreValue {
  const value = useContext(StoreContext);
  if (!value) throw new Error('useApp must be used inside AppProvider');
  return value;
}

/**
 * Development-only guard.
 *
 * When a module this file imports changes, Fast Refresh re-evaluates this
 * module and creates a new context object while the mounted tree still holds
 * the old one, which makes every useApp call throw until the page reloads. A
 * full reload is instant here and cannot lose data, because state is written to
 * localStorage on every change.
 */
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    window.location.reload();
  });
}
