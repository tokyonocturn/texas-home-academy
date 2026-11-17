import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import type { AppState, AttendanceEntry, CategoryId, Profile, SchoolYear } from '../types';
import { buildSchoolYear, periodForDate, todayISO } from './schoolYear';
import { type Action } from './reducer';
import {
  loadState,
  normalizeAppState,
  serializeState,
  STORAGE_KEY,
} from './persistence';
import { actionDecision, newestSnapshot, rootReducer, snapshotDecision } from './sync';
import { downloadText } from './export';
import {
  createHouseholdBackup,
  createStudentBackup,
  householdBackupFilename,
  importHouseholdBackup as applyHouseholdBackup,
  importStudentBackup as applyStudentBackup,
  serializeBackup,
  studentBackupFilename,
  type DuplicateStrategy,
  type HouseholdBackup,
  type HouseholdImportMode,
  type StudentBackup,
} from './backup';

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
  exportStudentBackup: (studentId: string) => void;
  importStudentBackup: (
    backup: StudentBackup,
    duplicate: DuplicateStrategy,
  ) => string;
  importHouseholdBackup: (
    backup: HouseholdBackup,
    mode: HouseholdImportMode,
  ) => string;
  backupNotice: { tone: 'success' | 'error'; message: string } | null;
  clearBackupNotice: () => void;
}

const StoreContext = createContext<StoreValue | null>(null);

function readStoredState(): AppState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? normalizeAppState(JSON.parse(raw)) : null;
  } catch {
    return null;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, rawDispatch] = useReducer(rootReducer, undefined, loadState);
  const stateRef = useRef(state);
  stateRef.current = state;
  const [backupNotice, setBackupNotice] = useState<StoreValue['backupNotice']>(null);
  const year = useMemo(() => buildSchoolYear(state.profile.startYear), [state.profile.startYear]);
  const periodId = useMemo(() => periodForDate(year, todayISO()), [year]);

  /** The newest snapshot available, including a newer write from another tab. */
  const latestState = useCallback(() => {
    return newestSnapshot(stateRef.current, readStoredState());
  }, []);

  /**
   * Every UI mutation first checks localStorage for a newer snapshot from
   * another tab. If one exists, this tab adopts it; an action is replayed only
   * when it still targets the same active student, so a stale form can never
   * write a grade or attendance entry against a student selected elsewhere.
   */
  const dispatch = useCallback<React.Dispatch<Action>>((action) => {
    const local = stateRef.current;
    const stored = readStoredState();
    // Equal revisions with different contents are the simultaneous-write
    // conflict case; adopt the stored copy before replaying a safe action.
    const sameRevisionConflict =
      stored !== null &&
      stored.revision === local.revision &&
      serializeState(stored) !== serializeState(local);
    const decision = actionDecision(local, stored, action);
    if ((decision.sync || sameRevisionConflict) && stored) {
      rawDispatch({ type: 'state/sync', state: stored });
      if (
        decision.apply &&
        stored.activeStudentId === local.activeStudentId &&
        action.type !== 'profile/update'
      ) {
        rawDispatch(action);
      }
      return;
    }
    rawDispatch(action);
  }, []);

  // A single canonical snapshot is written only when this tab is at least as
  // new as the copy already in storage. Equal/older storage is adopted instead
  // of overwritten.
  useEffect(() => {
    try {
      const snapshot = serializeState(state);
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === snapshot) return;
      const stored = raw ? normalizeAppState(JSON.parse(raw)) : null;
      if (stored && snapshotDecision(state, stored) === 'adopt') {
        if (serializeState(stored) !== snapshot) {
          rawDispatch({ type: 'state/sync', state: stored });
        }
        return;
      }
      localStorage.setItem(STORAGE_KEY, snapshot);
    } catch {
      // Storage can fail in private browsing; the app still works for the session.
    }
  }, [state]);

  // Other tabs publish every local mutation through the same key. Re-hydrate
  // immediately, ignoring an out-of-order event older than current state.
  useEffect(() => {
    function onStorage(event: StorageEvent) {
      if (event.key !== STORAGE_KEY) return;
      if (!event.newValue) {
        rawDispatch({ type: 'state/reset' });
        return;
      }
      try {
        const incoming = normalizeAppState(JSON.parse(event.newValue));
        if (incoming && incoming.revision >= stateRef.current.revision) {
          rawDispatch({ type: 'state/sync', state: incoming });
        }
      } catch {
        // Ignore a malformed write from an older or external tool.
      }
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

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
    const backup = createHouseholdBackup(latestState());
    downloadText(
      householdBackupFilename(),
      serializeBackup(backup),
      'application/json',
    );
  }, [latestState]);

  const exportStudentBackup = useCallback(
    (studentId: string) => {
      const backup = createStudentBackup(latestState(), studentId);
      downloadText(
        studentBackupFilename(backup.student),
        serializeBackup(backup),
        'application/json',
      );
    },
    [latestState],
  );

  // Imports are computed from the newest snapshot, then replace it atomically.
  // A stale tab therefore merges into the latest records instead of writing its
  // old copy back over them.
  const importStudentBackup = useCallback(
    (backup: StudentBackup, duplicate: DuplicateStrategy) => {
      const result = applyStudentBackup(latestState(), backup, duplicate);
      rawDispatch({ type: 'state/replace', state: result.state });
      setBackupNotice({ tone: 'success', message: result.message });
      return result.message;
    },
    [latestState],
  );

  const importHouseholdBackup = useCallback(
    (backup: HouseholdBackup, mode: HouseholdImportMode) => {
      const result = applyHouseholdBackup(latestState(), backup, mode);
      rawDispatch({ type: 'state/replace', state: result.state });
      setBackupNotice({ tone: 'success', message: result.message });
      return result.message;
    },
    [latestState],
  );

  const clearBackupNotice = useCallback(() => setBackupNotice(null), []);

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
      exportStudentBackup,
      importStudentBackup,
      importHouseholdBackup,
      backupNotice,
      clearBackupNotice,
    }),
    [
      state,
      dispatch,
      year,
      periodId,
      recordGrade,
      logAttendance,
      completeLesson,
      updateProfile,
      exportBackup,
      exportStudentBackup,
      importStudentBackup,
      importHouseholdBackup,
      backupNotice,
      clearBackupNotice,
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
