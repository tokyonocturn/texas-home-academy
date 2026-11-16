import { useState } from 'react';
import { FEDERAL_FRAMEWORK, REQUIRED_SUBJECTS, TEXAS_HOMESCHOOL_LAW, TRANSCRIPT_POLICY } from '../../content/frameworks';
import { SOURCES } from '../../content/sources';
import { COURSES, getCourse } from '../../content';
import { curriculumDepthReport } from '../../content/depth/standard';
import { GRADE_POLICY } from '../../grading/scale';
import { useApp } from '../../state/store';
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
  const { state, dispatch, exportBackup, importBackup } = useApp();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const profile = state.profile;

  return (
    <>
      <PageHead
        eyebrow="Reference"
        title="Settings"
        lede="Profile, calendar, attendance rules, and backups. All records live in this browser unless you export them."
      />

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Student and school</h2>
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
          Records are stored in this browser only. Export a JSON backup before clearing browser data
          or moving to another computer.
        </p>
        <div className="btn-row">
          <button className="btn" onClick={exportBackup}>
            Export backup
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
                setError('');
                setMessage('');
                try {
                  await importBackup(file);
                  setMessage('Backup restored.');
                } catch (err) {
                  setError(err instanceof Error ? err.message : 'Import failed.');
                }
                event.target.value = '';
              }}
            />
          </label>
          <button
            className="btn danger"
            onClick={() => {
              if (window.confirm('Erase all enrollment, grades, attendance, and profile data on this device?')) {
                dispatch({ type: 'state/reset' });
                setMessage('All records erased.');
              }
            }}
          >
            Erase all records
          </button>
        </div>
        {error ? <div className="callout">{error}</div> : null}
        {message ? <div className="note">{message}</div> : null}
        <div className="note">
          {state.grades.length} grade records · {state.attendance.length} attendance entries ·{' '}
          {state.enrollments.length} enrollments
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
