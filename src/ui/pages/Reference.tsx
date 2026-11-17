import { useState } from 'react';
import { FEDERAL_FRAMEWORK, REQUIRED_SUBJECTS, TEXAS_HOMESCHOOL_LAW, TRANSCRIPT_POLICY } from '../../content/frameworks';
import { SOURCES } from '../../content/sources';
import { COURSES, getCourse } from '../../content';
import { curriculumDepthReport } from '../../content/depth/standard';
import { GRADE_POLICY } from '../../grading/scale';
import { useApp } from '../../state/store';
import { studentName } from '../../state/students';
import {
  backupCounts,
  parseBackupText,
  type DuplicateStrategy,
  type HouseholdImportMode,
  type ParsedBackup,
} from '../../state/backup';
import { Badge, Empty, Link, PageHead } from '../parts';

/** Computed once from the assembled catalog; the depth test asserts the same numbers. */
const depth = curriculumDepthReport(COURSES);

export function AdultEdPage() {
  const course = getCourse('hs-adulting');
  if (!course) {
    return (
      <>
        <PageHead title="Adult life education" />
        <Empty title="The adult life course is missing from this build" />
      </>
    );
  }

  return (
    <>
      <PageHead
        eyebrow="Practical education"
        title="Adult life education"
        lede={course.description}
        actions={
          <Link to={`/course/${course.id}`} className="btn gold">
            Open the course
          </Link>
        }
      />

      <div className="card">
        <h2 style={{ marginTop: 0 }}>What this course covers</h2>
        <div className="grid two">
          <ul className="small">
            <li>Federal and Texas taxes: W-2, 1099-NEC, 1099-K, Form 1040, withholding</li>
            <li>Paychecks, FICA, overtime, and take-home pay</li>
            <li>Budgets, banking, credit reports, and credit scores</li>
            <li>Loans, interest, debt, investing, and retirement accounts</li>
          </ul>
          <ul className="small">
            <li>Renting, security deposits, repairs, and eviction notices</li>
            <li>Home and renters insurance; buying and registering a vehicle</li>
            <li>Starting a business: sole proprietorship, LLC, EIN, franchise tax</li>
            <li>Contracts, employment rights, government services, and civic duties</li>
          </ul>
        </div>
        <div className="note">
          Every factual claim is tied to a current IRS, Texas Workforce Commission, Texas
          Comptroller, Texas Department of Insurance, or Texas statute source listed on the{' '}
          <Link to="/sources">sources page</Link>. Dollar thresholds and rates carry the year they
          apply to, because they change.
        </div>
      </div>

      {course.units.map((unit) => (
        <div key={unit.id} className="unit-block">
          <h3>{unit.title}</h3>
          <div className="note">{unit.bigIdea}</div>
          <div style={{ marginTop: 8 }}>
            {unit.lessons.map((lesson) => (
              <div key={lesson.id} className="lesson-row">
                <div>
                  <div className="title">
                    <Link to={`/lesson/${course.id}/${lesson.id}`}>{lesson.title}</Link>
                  </div>
                  <div className="note">
                    {lesson.minutes} min · {lesson.objectives.length} objectives
                  </div>
                </div>
                <Link to={`/lesson/${course.id}/${lesson.id}`} className="btn small ghost">
                  Open
                </Link>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: 8 }}>
            <Link to={`/assessment/${course.id}/quiz/${unit.id}`} className="btn small">
              Unit quiz
            </Link>
            {unit.project ? (
              <Link to={`/assessment/${course.id}/project/${unit.id}`} className="btn small ghost">
                {unit.project.title}
              </Link>
            ) : null}
          </div>
        </div>
      ))}

      <div className="callout navy">
        <strong>Scope note.</strong> This course teaches how these systems work and how to read the
        primary documents. It is not legal, tax, or investment advice, and it does not replace a
        licensed professional or the current instructions for a form.
      </div>
    </>
  );
}

export function SourcesPage() {
  return (
    <>
      <PageHead
        eyebrow="Reference"
        title="Sources"
        lede="Every legal, statistical, and program claim in this curriculum points to a public source. If a fact is not listed here or in a lesson’s further reading, it is not asserted."
      />

      <div className="card">
        <div className="spread">
          <h2 style={{ marginTop: 0 }}>Curriculum depth</h2>
          <Badge tone={depth.shortfalls.length === 0 ? 'pass' : 'info'}>
            {depth.met} of {depth.total} lessons at standard
          </Badge>
        </div>
        <p className="small muted">
          A lesson meets the standard when it has four objectives, three explanatory sections, three
          worked examples with multi-step reasoning and stated answers, eight defined terms, five
          practice items, four off-screen exercises, four review questions with model answers, and
          three discussed topics. Taught prose must reach 350 words in grades K–2, 400 in 3–5, 500
          in 6–8, and 600 in high school. The automated depth test enforces the same numbers and
          reports the lesson and the criterion that failed.
        </p>
        <p className="small muted">
          {depth.met} of {depth.total} lessons across the whole catalogue meet it, adult education
          included, so the shortfall ledger holds {depth.shortfalls.length}{' '}
          {depth.shortfalls.length === 1 ? 'entry' : 'entries'}. This badge and{' '}
          <code>src/content/depth/shortfalls.ts</code> are both computed from{' '}
          <code>curriculumDepthReport</code>, the same function the depth test calls, so no count here
          is maintained by hand. Adult learners are not grade-scaled, so the Adult Life Education
          course is held to the 600-word top band rather than a weaker scale of its own. Meeting it is
          an internal curriculum standard, not a claim of TEKS compliance, accreditation, or
          institutional credit.
        </p>
        {depth.shortfalls.length > 0 ? (
          <details>
            <summary className="small" style={{ cursor: 'pointer', fontWeight: 600 }}>
              {depth.shortfalls.length} lessons still below standard
            </summary>
            <ul className="small" style={{ marginTop: 8 }}>
              {depth.shortfalls.slice(0, 200).map((shortfall) => (
                <li key={shortfall.lessonId}>
                  <strong>{shortfall.courseId}</strong> · {shortfall.lessonId}: {shortfall.title} —{' '}
                  {shortfall.prose}/{shortfall.requiredProse} prose words;{' '}
                  {shortfall.failures.filter((f) => !f.includes('prose words')).slice(0, 2).join('; ')}
                </li>
              ))}
            </ul>
          </details>
        ) : null}
      </div>

      <div className="card">
        <div className="spread">
          <h2 style={{ marginTop: 0 }}>Source registry</h2>
          <Badge tone="info">{SOURCES.length} sources</Badge>
        </div>
        <p className="small muted">
          Accessed 2026-11-16. Statutes and agency pages change; verify a citation before relying on
          it for a legal decision.
        </p>
        {SOURCES.map((source) => (
          <div key={source.id} className="source-item">
            <div className="src-title">
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.title}
              </a>
            </div>
            <div className="src-meta">
              {source.publisher} · accessed {source.accessed}
            </div>
            <div className="small" style={{ marginTop: 3 }}>
              {source.supports}
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>How citations are used</h2>
        <ul className="small">
          <li>
            A lesson cites a chapter or section number only when that number was verified against
            the published rule or statute. Course pages list the TEKS chapter, not invented section
            numbers.
          </li>
          <li>
            Quoted statutory language appears in quotation marks and is attributed. Everything else
            is our own summary.
          </li>
          <li>
            Rates, thresholds, and dollar amounts are labeled with the tax year or effective date
            they belong to.
          </li>
        </ul>
      </div>
    </>
  );
}

export function PoliciesPage() {
  return (
    <>
      <PageHead
        eyebrow="Reference"
        title="Law, standards, and records policy"
        lede="What Texas and federal law actually require, what this program chooses to do, and where the two differ."
      />

      <div className="disclaimer">
        <strong>This is not legal advice.</strong> It is a summary with citations so a family can
        read the primary sources. Homeschool requirements can change; verify with TEA and the Texas
        Legislature before relying on any statement here.
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Texas home-school law</h2>
        {TEXAS_HOMESCHOOL_LAW.map((note) => (
          <div key={note.id} style={{ marginBottom: 16 }}>
            <h3 style={{ marginBottom: 4 }}>{note.title}</h3>
            <ul className="small">
              {note.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="note">Sources: {note.sources.join(', ')}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Federal framework</h2>
        {FEDERAL_FRAMEWORK.map((note) => (
          <div key={note.id} style={{ marginBottom: 16 }}>
            <h3 style={{ marginBottom: 4 }}>{note.title}</h3>
            <ul className="small">
              {note.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="note">Sources: {note.sources.join(', ')}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Required subjects</h2>
        {REQUIRED_SUBJECTS.map((note) => (
          <div key={note.id} style={{ marginBottom: 16 }}>
            <h3 style={{ marginBottom: 4 }}>{note.title}</h3>
            <ul className="small">
              {note.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="note">Sources: {note.sources.join(', ')}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>{TRANSCRIPT_POLICY.title}</h2>
        {TRANSCRIPT_POLICY.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="small">
            {paragraph}
          </p>
        ))}
        <div className="note">Sources: {TRANSCRIPT_POLICY.sources.join(', ')}</div>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Grading and credit policy</h2>
        <table>
          <tbody>
            <tr>
              <td>Passing grade</td>
              <td>{GRADE_POLICY.passing} ({GRADE_POLICY.passingCitation})</td>
            </tr>
            <tr>
              <td>Letter scale</td>
              <td>A 90–100 · B 80–89 · C 70–79 · D 60–69 · F below 60</td>
            </tr>
            <tr>
              <td>GPA</td>
              <td>{GRADE_POLICY.gpaScale}</td>
            </tr>
            <tr>
              <td>Semester grade</td>
              <td>{GRADE_POLICY.semesterFormula}</td>
            </tr>
            <tr>
              <td>Final grade</td>
              <td>{GRADE_POLICY.finalFormula}</td>
            </tr>
            <tr>
              <td>Missing category</td>
              <td>{GRADE_POLICY.missingWork}</td>
            </tr>
            <tr>
              <td>Retakes</td>
              <td>{GRADE_POLICY.retake}</td>
            </tr>
            <tr>
              <td>Late work</td>
              <td>{GRADE_POLICY.lateWork}</td>
            </tr>
            <tr>
              <td>Credit</td>
              <td>{GRADE_POLICY.creditRule}</td>
            </tr>
            <tr>
              <td>Attendance</td>
              <td>{GRADE_POLICY.attendanceRule}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="small">
        Full citations are on the <Link to="/sources">sources page</Link>.
      </p>
    </>
  );
}

export function SettingsPage() {
  const {
    state,
    dispatch,
    exportBackup,
    exportStudentBackup,
    importStudentBackup,
    importHouseholdBackup,
    backupNotice,
    clearBackupNotice,
  } = useApp();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [newFirst, setNewFirst] = useState('');
  const [newLast, setNewLast] = useState('');
  const [newGrade, setNewGrade] = useState(state.profile.gradeLevel);
  const [pending, setPending] = useState<ParsedBackup | null>(null);
  const [duplicate, setDuplicate] = useState<DuplicateStrategy>('keep-both');
  const [householdMode, setHouseholdMode] =
    useState<HouseholdImportMode>('merge-replace');
  const profile = state.profile;
  const canAdd = Boolean(newFirst.trim() || newLast.trim());
  const conflictingStudent =
    pending?.kind === 'student'
      ? state.students.find((student) => student.id === pending.student.id)
      : undefined;
  const householdTotals = state.students.reduce(
    (totals, student) => ({
      grades: totals.grades + student.grades.length,
      attendance: totals.attendance + student.attendance.length,
      enrollments: totals.enrollments + student.enrollments.length,
    }),
    { grades: 0, attendance: 0, enrollments: 0 },
  );

  function confirmPendingImport() {
    if (!pending) return;
    if (
      pending.kind === 'household' &&
      householdMode === 'replace' &&
      !window.confirm(
        'Replace every student and record currently in this browser with this household backup? This cannot be undone.',
      )
    ) {
      return;
    }
    if (
      pending.kind === 'student' &&
      conflictingStudent &&
      duplicate === 'replace' &&
      !window.confirm(
        `Replace ${studentName(conflictingStudent.profile)} with this backup? Other students will not be changed.`,
      )
    ) {
      return;
    }
    try {
      if (pending.kind === 'student') {
        importStudentBackup(pending, duplicate);
      } else {
        importHouseholdBackup(pending, householdMode);
      }
      setError('');
      setPending(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Import failed. No records were changed.');
    }
  }

  return (
    <>
      <PageHead
        eyebrow="Reference"
        title="Settings"
        lede="Students, profile, calendar, attendance rules, and backups. All records live in this browser unless you export them."
      />

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Students</h2>
        <p className="small">
          Each student has separate enrollments, lesson progress, grades, attendance, and records.
          Switching students changes every dashboard and report to the selected student.
        </p>
        {state.students.map((student) => {
          const active = student.id === state.activeStudentId;
          return (
            <div
              className="spread"
              key={student.id}
              style={{ padding: '10px 0', borderTop: '1px solid var(--line)' }}
            >
              <div>
                <strong>{studentName(student.profile)}</strong>{' '}
                {active ? <Badge tone="info">Active</Badge> : null}
                <div className="note">
                  {student.profile.gradeLevel === 0
                    ? 'Kindergarten'
                    : `Grade ${student.profile.gradeLevel}`}{' '}
                  · {student.enrollments.length} enrollments · {student.grades.length} grade records
                </div>
              </div>
              <div className="btn-row">
                <button
                  className="btn ghost small"
                  onClick={() => {
                    try {
                      clearBackupNotice();
                      exportStudentBackup(student.id);
                      setMessage(`${studentName(student.profile)} backup downloaded.`);
                      setError('');
                    } catch (err) {
                      setError(err instanceof Error ? err.message : 'Export failed.');
                    }
                  }}
                >
                  Export
                </button>
                {!active ? (
                  <button
                    className="btn ghost small"
                    onClick={() => dispatch({ type: 'student/switch', id: student.id })}
                  >
                    Switch
                  </button>
                ) : null}
                {state.students.length > 1 ? (
                  <button
                    className="btn danger small"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Delete ${studentName(student.profile)} and all of their enrollments, grades, attendance, and lesson progress? This cannot be undone.`,
                        )
                      ) {
                        dispatch({ type: 'student/delete', id: student.id });
                      }
                    }}
                  >
                    Delete
                  </button>
                ) : (
                  <span className="note">Required</span>
                )}
              </div>
            </div>
          );
        })}
        <div className="inline-fields" style={{ marginTop: 14 }}>
          <label className="field">
            <span>New student first name</span>
            <input type="text" value={newFirst} onChange={(e) => setNewFirst(e.target.value)} />
          </label>
          <label className="field">
            <span>New student last name</span>
            <input type="text" value={newLast} onChange={(e) => setNewLast(e.target.value)} />
          </label>
          <label className="field">
            <span>Grade level</span>
            <select value={newGrade} onChange={(e) => setNewGrade(Number(e.target.value))}>
              <option value={0}>Kindergarten</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((g) => (
                <option key={g} value={g}>
                  Grade {g}
                </option>
              ))}
            </select>
          </label>
          <div className="field">
            <span aria-hidden="true">&nbsp;</span>
            <button
              className="btn"
              disabled={!canAdd}
              onClick={() => {
                dispatch({
                  type: 'student/create',
                  firstName: newFirst,
                  lastName: newLast,
                  gradeLevel: newGrade,
                });
                setNewFirst('');
                setNewLast('');
              }}
            >
              Add student
            </button>
          </div>
        </div>
        <div className="note">
          A new student starts with no enrollments or grades. School details are copied from the
          active student and can be edited below.
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Active student and school</h2>
        <div className="note" style={{ marginTop: -6, marginBottom: 12 }}>
          These details save to {studentName(profile)}.
        </div>
        <div className="inline-fields">
          <label className="field">
            <span>First name</span>
            <input
              type="text"
              value={profile.firstName}
              onChange={(e) => dispatch({ type: 'profile/update', patch: { firstName: e.target.value } })}
            />
          </label>
          <label className="field">
            <span>Last name</span>
            <input
              type="text"
              value={profile.lastName}
              onChange={(e) => dispatch({ type: 'profile/update', patch: { lastName: e.target.value } })}
            />
          </label>
          <label className="field">
            <span>Parent / administrator</span>
            <input
              type="text"
              value={profile.parentName}
              onChange={(e) => dispatch({ type: 'profile/update', patch: { parentName: e.target.value } })}
            />
          </label>
          <label className="field">
            <span>School name on records</span>
            <input
              type="text"
              value={profile.schoolName}
              onChange={(e) => dispatch({ type: 'profile/update', patch: { schoolName: e.target.value } })}
            />
          </label>
          <label className="field">
            <span>City</span>
            <input
              type="text"
              value={profile.city}
              onChange={(e) => dispatch({ type: 'profile/update', patch: { city: e.target.value } })}
            />
          </label>
          <label className="field">
            <span>State</span>
            <input
              type="text"
              value={profile.state}
              onChange={(e) => dispatch({ type: 'profile/update', patch: { state: e.target.value } })}
            />
          </label>
        </div>
        <div className="inline-fields">
          <label className="field">
            <span>Current grade level</span>
            <select
              value={profile.gradeLevel}
              onChange={(e) =>
                dispatch({ type: 'profile/update', patch: { gradeLevel: Number(e.target.value) } })
              }
            >
              <option value={0}>Kindergarten</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((g) => (
                <option key={g} value={g}>
                  Grade {g}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>School year starts in</span>
            <select
              value={profile.startYear}
              onChange={(e) =>
                dispatch({ type: 'profile/update', patch: { startYear: Number(e.target.value) } })
              }
            >
              {Array.from({ length: 6 }, (_, i) => 2024 + i).map((y) => (
                <option key={y} value={y}>
                  {y}–{y + 1}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Minutes that count as a full day</span>
            <input
              type="number"
              min={30}
              step={15}
              value={state.settings.fullDayMinutes}
              onChange={(e) =>
                dispatch({
                  type: 'settings/update',
                  patch: { fullDayMinutes: Math.max(30, Number(e.target.value) || 30) },
                })
              }
            />
          </label>
        </div>
        <div className="note">
          The calendar is generated from the fourth Monday in August (Tex. Educ. Code §25.0811) and
          180 instructional days (§25.081), with six six-week grading periods.
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Data</h2>
        <p className="small">
          Records are stored in this browser only. Backups are portable JSON files. Export one
          student from the list above, or export every student as a household backup before clearing
          browser data or moving to another computer.
        </p>
        <div className="btn-row">
          <button
            className="btn"
            onClick={() => {
              try {
                clearBackupNotice();
                exportBackup();
                setMessage('Household backup downloaded.');
                setError('');
              } catch (err) {
                setError(err instanceof Error ? err.message : 'Export failed.');
              }
            }}
          >
            Export household backup
          </button>
          <label className="btn ghost" style={{ cursor: 'pointer' }}>
            Import backup
            <input
              type="file"
              accept="application/json"
              style={{ display: 'none' }}
              onChange={async (event) => {
                const file = event.target.files?.[0];
                if (!file) return;
                clearBackupNotice();
                setError('');
                setMessage('');
                try {
                  const parsed = parseBackupText(await file.text());
                  setPending(parsed);
                  // Keep-both is the safe default even when no conflict is
                  // visible: another tab may add a matching ID before confirm.
                  setDuplicate('keep-both');
                  setHouseholdMode('merge-replace');
                } catch (err) {
                  setPending(null);
                  setError(
                    err instanceof Error
                      ? err.message
                      : 'Import failed. No records were changed.',
                  );
                }
                event.target.value = '';
              }}
            />
          </label>
          <button
            className="btn danger"
            onClick={() => {
              if (
                window.confirm(
                  'Erase every student profile, enrollment, grade, attendance entry, and lesson record on this device?',
                )
              ) {
                dispatch({ type: 'state/reset' });
                setMessage('All records erased.');
                setPending(null);
                clearBackupNotice();
              }
            }}
          >
            Erase all records
          </button>
        </div>

        {pending ? (
          <div
            style={{
              borderTop: '1px solid var(--line)',
              marginTop: 16,
              paddingTop: 14,
            }}
          >
            <strong>
              Review {pending.kind === 'student' ? 'student' : 'household'} backup
            </strong>
            {pending.kind === 'student' ? (
              <>
                <div className="note" style={{ marginTop: 6 }}>
                  {studentName(pending.student.profile)} · grade{' '}
                  {pending.student.profile.gradeLevel === 0
                    ? 'K'
                    : pending.student.profile.gradeLevel}{' '}
                  · {backupCounts(pending.student).grades} grade records ·{' '}
                  {backupCounts(pending.student).attendance} attendance entries ·{' '}
                  {backupCounts(pending.student).enrollments} enrollments ·{' '}
                  {backupCounts(pending.student).lessons} completed lessons
                </div>
                {conflictingStudent ? (
                  <div className="callout" style={{ marginTop: 10 }}>
                    A student with the same ID already exists:{' '}
                    <strong>{studentName(conflictingStudent.profile)}</strong>. Choose whether to
                    replace that profile or keep both.
                  </div>
                ) : null}
                {conflictingStudent ? (
                  <div style={{ marginTop: 10, display: 'grid', gap: 6 }}>
                    <label className="small">
                      <input
                        type="radio"
                        name="student-duplicate"
                        checked={duplicate === 'keep-both'}
                        onChange={() => setDuplicate('keep-both')}
                      />{' '}
                      Keep both — import as a separate student with a new ID
                    </label>
                    <label className="small">
                      <input
                        type="radio"
                        name="student-duplicate"
                        checked={duplicate === 'replace'}
                        onChange={() => setDuplicate('replace')}
                      />{' '}
                      Replace the existing profile with the same ID
                    </label>
                  </div>
                ) : null}
              </>
            ) : (
              <>
                <div className="note" style={{ marginTop: 6 }}>
                  {pending.students.length} student
                  {pending.students.length === 1 ? '' : 's'} ·{' '}
                  {pending.students.reduce(
                    (count, student) => count + student.grades.length,
                    0,
                  )}{' '}
                  grade records ·{' '}
                  {pending.students.reduce(
                    (count, student) => count + student.attendance.length,
                    0,
                  )}{' '}
                  attendance entries
                  {pending.legacy ? ' · older full-state backup' : ''}
                </div>
                <div style={{ marginTop: 10, display: 'grid', gap: 6 }}>
                  <label className="small">
                    <input
                      type="radio"
                      name="household-mode"
                      checked={householdMode === 'merge-replace'}
                      onChange={() => setHouseholdMode('merge-replace')}
                    />{' '}
                    Merge — keep other students and replace students with matching IDs
                  </label>
                  <label className="small">
                    <input
                      type="radio"
                      name="household-mode"
                      checked={householdMode === 'merge-keep-both'}
                      onChange={() => setHouseholdMode('merge-keep-both')}
                    />{' '}
                    Merge — keep both copies wherever an ID already exists
                  </label>
                  <label className="small">
                    <input
                      type="radio"
                      name="household-mode"
                      checked={householdMode === 'replace'}
                      onChange={() => setHouseholdMode('replace')}
                    />{' '}
                    Replace everything — remove current students and restore this backup exactly
                  </label>
                </div>
              </>
            )}
            <div className="btn-row" style={{ marginTop: 12 }}>
              <button className="btn" onClick={confirmPendingImport}>
                {pending.kind === 'household'
                  ? householdMode === 'replace'
                    ? 'Replace all records'
                    : 'Merge household'
                  : conflictingStudent && duplicate === 'replace'
                    ? 'Replace matching student'
                    : conflictingStudent
                      ? 'Import as a second student'
                      : 'Import student'}
              </button>
              <button
                className="btn ghost"
                onClick={() => {
                  setPending(null);
                  clearBackupNotice();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}

        {backupNotice ? (
          <div className={backupNotice.tone === 'error' ? 'callout' : 'note'}>
            {backupNotice.message}
          </div>
        ) : null}
        {error ? <div className="callout">{error}</div> : null}
        {message ? <div className="note">{message}</div> : null}
        <div className="note">
          {state.students.length} student{state.students.length === 1 ? '' : 's'} ·{' '}
          {householdTotals.grades} grade records · {householdTotals.attendance} attendance entries ·{' '}
          {householdTotals.enrollments} enrollments
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>About</h2>
        <p className="small">
          Texas Home Academy is a free, open-source, self-hostable K–12 home education program. It
          runs entirely in the browser, works offline after the first load, and contains no
          advertising, tracking, or accounts. Code is MIT licensed; curriculum text is CC BY-SA 4.0.
        </p>
        <p className="small">
          It is not accredited, does not issue a state diploma, and does not replace a parent’s
          responsibility under Texas law for the instruction provided.{' '}
          <Link to="/policies">Read the policy page</Link>.
        </p>
      </div>
    </>
  );
}
