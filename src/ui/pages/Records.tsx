import { useState } from 'react';
import { CATEGORY_LABELS, type CategoryId } from '../../types';
import { COURSES, courseGradeLabel, getCourse, gradeLabel } from '../../content';
import { auditGraduation } from '../../grading/graduation';
import { splitGpa } from '../../grading/gpa';
import { courseResult, displayGrade, percent } from '../../grading/gradebook';
import { attendanceSummary } from '../../grading/progression';
import { GRADE_POLICY } from '../../grading/scale';
import { useApp } from '../../state/store';
import { formatDate, formatShortDate, todayISO } from '../../state/schoolYear';
import { Badge, Empty, Link, PageHead } from '../parts';

export function GradebookPage() {
  const { state, dispatch, periodId } = useApp();
  const [courseId, setCourseId] = useState('');

  // Only courses the student is enrolled in or has work for; a 72-item list is
  // not useful in a gradebook dropdown.
  const selectable = COURSES.filter(
    (c) =>
      state.enrollments.some((e) => e.courseId === c.id) ||
      state.grades.some((g) => g.courseId === c.id),
  );
  const selected = courseId ? getCourse(courseId) : undefined;

  const records = state.grades
    .filter((g) => (selected ? g.courseId === selected.id : true))
    .slice()
    .sort((a, b) => (a.recordedAt < b.recordedAt ? 1 : -1));

  return (
    <>
      <PageHead
        eyebrow="Records"
        title="Gradebook"
        lede={`Every score below came from a submitted assessment. Current grading period: ${periodId}.`}
        actions={
          <Link to="/report-card" className="btn ghost">
            Report card
          </Link>
        }
      />

      <div className="card">
        <label className="field" style={{ maxWidth: 420 }}>
          <span>Course</span>
          <select value={courseId} onChange={(event) => setCourseId(event.target.value)}>
            <option value="">All graded courses</option>
            {selectable.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selected ? (
        <>
          <div className="grid two">
            <div className="card">
              <h2 style={{ marginTop: 0 }}>{selected.title}</h2>
              <div className="note">
                {courseGradeLabel(selected)} · {selected.credits > 0 ? `${selected.credits} credit` : 'no credit'}
              </div>
              <table style={{ marginTop: 10 }}>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th className="num">Weight</th>
                    <th className="num">Average</th>
                    <th className="num">Items</th>
                  </tr>
                </thead>
                <tbody>
                  {courseResult(selected, state.grades).categories.map((category) => (
                    <tr key={category.id}>
                      <td>{category.label}</td>
                      <td className="num">{category.weight}%</td>
                      <td className="num">{displayGrade(category.average)}</td>
                      <td className="num">{category.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card">
              <h2 style={{ marginTop: 0 }}>Semester and final grades</h2>
              <table>
                <thead>
                  <tr>
                    <th>Period</th>
                    <th className="num">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {courseResult(selected, state.grades).periods.map((period) => (
                    <tr key={period.period}>
                      <td>{period.period}</td>
                      <td className="num">{displayGrade(period.grade)}</td>
                    </tr>
                  ))}
                  {courseResult(selected, state.grades).semesters.map((semester) => (
                    <tr key={semester.semester}>
                      <td>
                        Semester {semester.semester} average ({semester.periodGrades.filter((g) => g !== null).length}{' '}
                        of 3 periods graded)
                      </td>
                      <td className="num">
                        <strong>{displayGrade(semester.grade)}</strong>
                      </td>
                    </tr>
                  ))}
                  {selected.semesters === 2 ? (
                    <tr>
                      <td>Semester 1 midterm</td>
                      <td className="num">
                        {displayGrade(courseResult(selected, state.grades).semesters[0]?.examGrade ?? null)}
                      </td>
                    </tr>
                  ) : null}
                  <tr>
                    <td>Coursework average (graded periods)</td>
                    <td className="num">{displayGrade(courseResult(selected, state.grades).courseworkAverage)}</td>
                  </tr>
                  <tr>
                    <td>Cumulative final examination</td>
                    <td className="num">{displayGrade(courseResult(selected, state.grades).examGrade)}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Current standing</strong>
                    </td>
                    <td className="num">
                      <strong>{displayGrade(courseResult(selected, state.grades).currentGrade)}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Final grade</strong>
                      <div className="note">Official once the final exam is recorded</div>
                    </td>
                    <td className="num">
                      <strong>{displayGrade(courseResult(selected, state.grades).finalGrade)}</strong>{' '}
                      {courseResult(selected, state.grades).letter}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : null}

      <div className="card">
        <div className="spread">
          <h2 style={{ marginTop: 0 }}>Recorded scores</h2>
          <span className="note">{records.length} records</span>
        </div>
        {records.length === 0 ? (
          <Empty title="No scores recorded yet">
            Open a lesson to take its practice set, or take a unit quiz from a course page.
          </Empty>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Course</th>
                <th>Assessment</th>
                <th>Category</th>
                <th>Period</th>
                <th className="num">Score</th>
                <th className="num">%</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {records.map((record) => {
                const course = getCourse(record.courseId);
                return (
                  <tr key={record.id}>
                    <td className="tiny">{formatShortDate(record.recordedAt)}</td>
                    <td className="small">{course?.title ?? record.courseId}</td>
                    <td className="small">
                      {record.title}
                      {record.attempt > 1 ? <span className="note"> · attempt {record.attempt}</span> : null}
                    </td>
                    <td className="tiny">{CATEGORY_LABELS[record.category as CategoryId]}</td>
                    <td className="tiny">{record.period}</td>
                    <td className="num">
                      {record.score}/{record.max}
                    </td>
                    <td className="num">
                      <Badge tone={percent(record.score, record.max) >= 70 ? 'pass' : 'fail'}>
                        {percent(record.score, record.max).toFixed(0)}
                      </Badge>
                    </td>
                    <td>
                      <button
                        className="btn danger small no-print"
                        onClick={() => {
                          if (
                            window.confirm(
                              `Delete this score? ${record.title} (${record.score}/${record.max}) will be removed and the course average recalculated.`,
                            )
                          ) {
                            dispatch({ type: 'grade/delete', id: record.id });
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Grading policy</h2>
        <ul className="small">
          <li>Passing grade {GRADE_POLICY.passing} ({GRADE_POLICY.passingCitation}).</li>
          <li>{GRADE_POLICY.semesterFormula}</li>
          <li>{GRADE_POLICY.finalFormula}</li>
          <li>{GRADE_POLICY.missingWork}</li>
          <li>{GRADE_POLICY.retake}</li>
          <li>{GRADE_POLICY.lateWork}</li>
        </ul>
      </div>
    </>
  );
}

export function ReportCardPage() {
  const { state, year, periodId } = useApp();
  const enrolled = state.enrollments
    .map((e) => getCourse(e.courseId))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const profile = state.profile;

  return (
    <>
      <PageHead
        eyebrow="Records"
        title="Report card"
        lede={`${year.label} · ${enrolled.length} enrolled courses · current period ${periodId}`}
        actions={
          <>
            <Link to="/transcript" className="btn ghost">
              Transcript
            </Link>
            <button className="btn" onClick={() => window.print()}>
              Print report card
            </button>
          </>
        }
      />

      <div className="transcript">
        <div className="transcript-head">
          <h1>{profile.schoolName || 'Texas Home Academy'}</h1>
          <div className="sub">Parent-issued home-school report card</div>
        </div>

        <div className="spread small" style={{ marginBottom: 14 }}>
          <div>
            <strong>
              {profile.firstName} {profile.lastName}
            </strong>
            <div className="note">{gradeLabel(profile.gradeLevel)}</div>
          </div>
          <div>
            School year <strong>{year.label}</strong>
            <div className="note">
              {formatDate(year.start)} – {formatDate(year.end)}
            </div>
          </div>
        </div>

        {enrolled.length === 0 ? (
          <Empty title="No courses enrolled">
            Enroll courses in the <Link to="/catalog">catalog</Link> to build a report card.
          </Empty>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Credit</th>
                <th className="num">Q1</th>
                <th className="num">Q2</th>
                <th className="num">Q3</th>
                <th className="num">Q4</th>
                <th className="num">Q5</th>
                <th className="num">Q6</th>
                <th className="num">S1</th>
                <th className="num">S2</th>
                <th className="num">Midterm</th>
                <th className="num">Exam</th>
                <th className="num">Final</th>
                <th className="num">Letter</th>
              </tr>
            </thead>
            <tbody>
              {enrolled.map((course) => {
                const result = courseResult(course, state.grades);
                const byPeriod = new Map(result.periods.map((p) => [p.period, p.grade]));
                const s1 = result.semesters.find((s) => s.semester === 1);
                const s2 = result.semesters.find((s) => s.semester === 2);
                return (
                  <tr key={course.id}>
                    <td>
                      <strong>{course.title}</strong>
                      <div className="note">
                        {courseGradeLabel(course)} · {course.semesters === 2 ? 'full year' : 'one semester'}
                      </div>
                    </td>
                    <td className="num">{course.credits || '—'}</td>
                    {['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'].map((period) => (
                      <td key={period} className="num">
                        {displayGrade(byPeriod.get(period) ?? null)}
                      </td>
                    ))}
                    <td className="num">{displayGrade(s1?.grade ?? null)}</td>
                    <td className="num">{displayGrade(s2?.grade ?? null)}</td>
                    <td className="num">
                      {displayGrade(course.semesters === 2 ? (s1?.examGrade ?? null) : null)}
                    </td>
                    <td className="num">{displayGrade(result.examGrade)}</td>
                    <td className="num">
                      <strong>{displayGrade(result.finalGrade)}</strong>
                    </td>
                    <td className="num">{result.letter}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        <div className="transcript-foot">
          Six-week period grade = weighted average of the graded categories in that period, with
          empty categories excluded and their weight renormalized. Semester average = average of its
          three periods. Final grade = 80% of the graded-period average plus 20% of the cumulative
          final examination, and it is issued only after that examination is recorded. Passing is 70
          on a 100-point scale (19 TAC §74.26(c)). Absences and make-up work are recorded in the
          attendance log. This is a parent-issued record; it is not issued by TEA or an accredited
          institution.
        </div>
      </div>
    </>
  );
}

export function TranscriptPage() {
  const { state, year } = useApp();
  const profile = state.profile;
  const gpa = splitGpa(COURSES, state.grades);
  const audit = auditGraduation(COURSES, state.grades);

  const courses = COURSES.filter((c) => c.credits > 0)
    .map((course) => ({ course, result: courseResult(course, state.grades) }))
    .filter(({ result }) => result.finalGrade !== null)
    .sort((a, b) => a.course.grade - b.course.grade);

  return (
    <>
      <PageHead
        eyebrow="Records"
        title="Cumulative transcript"
        lede="High-school credit courses only. K–8 coursework appears on report cards, not this transcript."
        actions={
          <button className="btn" onClick={() => window.print()}>
            Print transcript
          </button>
        }
      />

      <div className="disclaimer no-print">
        <strong>Not an accredited transcript.</strong> This document is prepared and issued by the
        student’s parent or guardian as a home-school record. It is not issued by the Texas Education
        Agency, by any school district, or by an accredited institution, and it does not confer a
        state diploma. Colleges, the NCAA, employers, and other schools each decide independently
        whether to accept it.{' '}
        <Link to="/policies">Read the full records policy</Link>.
      </div>

      <div className="transcript">
        <div className="transcript-head">
          <h1>{profile.schoolName || 'Texas Home Academy'}</h1>
          <div className="sub">Official home-school academic transcript</div>
          <div className="note" style={{ marginTop: 6 }}>
            {[profile.city, profile.state].filter(Boolean).join(', ') || 'Texas'} · Issued{' '}
            {formatDate(todayISO())}
          </div>
        </div>

        <div className="spread small" style={{ marginBottom: 14 }}>
          <div>
            <strong>
              {profile.firstName || 'Student'} {profile.lastName}
            </strong>
            <div className="note">Student</div>
          </div>
          <div>
            <div className="note">Parent / administrator</div>
            <strong>{profile.parentName || '—'}</strong>
          </div>
          <div>
            <div className="note">Program</div>
            <strong>Texas Foundation High School Program pattern</strong>
          </div>
        </div>

        {courses.length === 0 ? (
          <Empty title="No high-school credit has been recorded yet">
            Enroll in a high-school course and complete graded work to build a transcript.
          </Empty>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th className="num">Credit</th>
                <th className="num">S1</th>
                <th className="num">S2</th>
                <th className="num">Midterm</th>
                <th className="num">Exam</th>
                <th className="num">Final</th>
                <th>Letter</th>
                <th className="num">Quality pts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="year-row">
                <td colSpan={9}>
                  {year.label} · Grade {profile.gradeLevel} · {profile.schoolName || 'Texas Home Academy'}
                </td>
              </tr>
              {courses.map(({ course, result }) => (
                <tr key={course.id}>
                  <td>
                    <strong>{course.title}</strong>
                    {course.advanced ? <span className="note"> · advanced</span> : null}
                    <div className="note">
                      {course.semesters === 2 ? 'Two semesters' : 'One semester'} ·{' '}
                      {course.credits} credit
                    </div>
                  </td>
                  <td className="num">{course.credits}</td>
                  <td className="num">{displayGrade(result.semesters[0]?.grade ?? null)}</td>
                  <td className="num">{displayGrade(result.semesters[1]?.grade ?? null)}</td>
                  <td className="num">
                    {displayGrade(course.semesters === 2 ? (result.semesters[0]?.examGrade ?? null) : null)}
                  </td>
                  <td className="num">{displayGrade(result.examGrade)}</td>
                  <td className="num">
                    <strong>{displayGrade(result.finalGrade)}</strong>
                  </td>
                  <td>{result.letter}</td>
                  <td className="num">{result.passing ? result.points.toFixed(1) : '0.0'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="grid two" style={{ marginTop: 18 }}>
          <div>
            <h3 style={{ marginTop: 0 }}>Cumulative summary</h3>
            <table>
              <tbody>
                <tr>
                  <td>Credits attempted</td>
                  <td className="num">{gpa.summary.creditsAttempted.toFixed(1)}</td>
                </tr>
                <tr>
                  <td>Credits earned</td>
                  <td className="num">{gpa.summary.creditsEarned.toFixed(1)}</td>
                </tr>
                <tr>
                  <td>Unweighted GPA (4.0 scale)</td>
                  <td className="num">{gpa.unweighted.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Weighted GPA (4.5 scale)</td>
                  <td className="num">{gpa.weighted.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>FHSP credit pattern</td>
                  <td className="num">{audit.fhspMet ? 'Complete' : 'In progress'}</td>
                </tr>
                <tr>
                  <td>Distinguished Level of Achievement</td>
                  <td className="num">{audit.dlaEligible ? 'Eligible' : 'Not yet'}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 style={{ marginTop: 0 }}>Grading scale</h3>
            <table>
              <tbody>
                <tr>
                  <td>A · 90–100</td>
                  <td className="num">4.0</td>
                </tr>
                <tr>
                  <td>B · 80–89</td>
                  <td className="num">3.0</td>
                </tr>
                <tr>
                  <td>C · 70–79</td>
                  <td className="num">2.0</td>
                </tr>
                <tr>
                  <td>D · 60–69</td>
                  <td className="num">1.0</td>
                </tr>
                <tr>
                  <td>F · below 60</td>
                  <td className="num">0.0</td>
                </tr>
                <tr>
                  <td>Advanced courses</td>
                  <td className="num">+0.5, max 4.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="transcript-foot">
          <strong>Notice.</strong> This transcript is a parent-issued record of home-school
          coursework completed in this program. It is not an official record of the State of Texas,
          the Texas Education Agency, a school district, or an accredited school; this program is not
          accredited. Meeting the Foundation High School Program credit pattern shown above is an
          internal audit against published Texas requirements (19 TAC §§74.12–74.13) and does not
          confer a Texas diploma. Acceptance of credits, admission, and athletic eligibility are
          determined solely by the receiving institution. Grades are computed from assessments
          recorded in the accompanying gradebook; a retake is capped at 80. Passing requires 70 (19
          TAC §74.26(c)). Keep course descriptions, reading lists, and samples of graded work.
        </div>
      </div>
    </>
  );
}

export function AttendancePage() {
  const { state, logAttendance, dispatch, year } = useApp();
  const [date, setDate] = useState(todayISO());
  const [minutes, setMinutes] = useState(String(state.settings.fullDayMinutes));
  const [note, setNote] = useState('');

  const summary = attendanceSummary(state, year.instructionalDays);
  const sorted = state.attendance.slice().sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHead
        eyebrow="Records"
        title="Attendance"
        lede={`${year.instructionalDays} instructional days · a full day is ${state.settings.fullDayMinutes} minutes (change in Settings) · 90% standard`}
      />

      <div className="grid four">
        <div className="stat">
          <div className="label">Full days</div>
          <div className="value">{summary.daysAttended}</div>
          <div className="sub">of {year.instructionalDays}</div>
        </div>
        <div className="stat">
          <div className="label">Attendance rate</div>
          <div className="value">{(summary.rate * 100).toFixed(1)}%</div>
          <div className="sub">90% required</div>
        </div>
        <div className="stat">
          <div className="label">Days needed for 90%</div>
          <div className="value">{summary.requiredDays}</div>
          <div className="sub">Tex. Educ. Code §25.092 standard</div>
        </div>
        <div className="stat">
          <div className="label">Days logged</div>
          <div className="value">{state.attendance.length}</div>
          <div className="sub">including partial days</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 18 }}>
        <h2 style={{ marginTop: 0 }}>Log a day</h2>
        <div className="inline-fields">
          <label className="field">
            <span>Date</span>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </label>
          <label className="field">
            <span>Instructional minutes</span>
            <input
              type="number"
              min={0}
              value={minutes}
              onChange={(event) => setMinutes(event.target.value)}
            />
          </label>
          <label className="field">
            <span>Note (optional)</span>
            <input type="text" value={note} onChange={(event) => setNote(event.target.value)} />
          </label>
        </div>
        <button
          className="btn"
          onClick={() => {
            logAttendance(date, Number(minutes) || 0, note || undefined);
            setNote('');
          }}
        >
          Save attendance
        </button>
        <span className="note" style={{ marginLeft: 10 }}>
          Logging the same date again replaces the earlier entry.
        </span>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Attendance log</h2>
        {sorted.length === 0 ? (
          <Empty title="No attendance logged yet" />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th className="num">Minutes</th>
                <th>Counts as</th>
                <th>Note</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {sorted.map((entry) => (
                <tr key={entry.date}>
                  <td>{formatDate(entry.date)}</td>
                  <td className="num">{entry.minutes}</td>
                  <td>
                    {entry.minutes >= state.settings.fullDayMinutes ? (
                      <Badge tone="pass">Full day</Badge>
                    ) : (
                      <Badge tone="muted">Partial</Badge>
                    )}
                  </td>
                  <td className="small">{entry.note ?? ''}</td>
                  <td>
                    <button
                      className="btn danger small no-print"
                      onClick={() => dispatch({ type: 'attendance/remove', date: entry.date })}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>School calendar</h2>
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>Semester</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            {year.periods.map((period) => (
              <tr key={period.id}>
                <td>{period.id}</td>
                <td>{period.semester}</td>
                <td>{formatDate(period.start)}</td>
                <td>{formatDate(period.end)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="note" style={{ marginTop: 8 }}>
          Breaks: {year.breaks.map((b) => `${b.label} (${formatShortDate(b.start)})`).join(' · ')}
        </div>
      </div>
    </>
  );
}

export function GraduationPage() {
  const { state } = useApp();
  const audit = auditGraduation(COURSES, state.grades);

  return (
    <>
      <PageHead
        eyebrow="Records"
        title="Graduation audit"
        lede="An internal check against the published Foundation High School Program credit pattern. It is a planning tool, not a state diploma."
      />

      <div className="grid four">
        <div className="stat">
          <div className="label">Credits earned</div>
          <div className="value">{audit.totalCredits}</div>
          <div className="sub">of 26 for the endorsement plan</div>
        </div>
        <div className="stat">
          <div className="label">FHSP pattern</div>
          <div className="value">{audit.fhspMet ? 'Met' : 'Open'}</div>
          <div className="sub">22-credit foundation plan</div>
        </div>
        <div className="stat">
          <div className="label">Endorsement</div>
          <div className="value">{audit.hasEndorsement ? 'Yes' : 'No'}</div>
          <div className="sub">
            {audit.endorsements.filter((e) => e.met).map((e) => e.label).join(', ') || 'none complete'}
          </div>
        </div>
        <div className="stat">
          <div className="label">Distinguished level</div>
          <div className="value">{audit.dlaEligible ? 'Eligible' : 'Not yet'}</div>
          <div className="sub">26 credits, endorsement, Algebra II, 4 math / 4 science</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 18 }}>
        <h2 style={{ marginTop: 0 }}>Credit requirements</h2>
        <table>
          <thead>
            <tr>
              <th>Requirement</th>
              <th className="num">Required</th>
              <th className="num">Earned</th>
              <th>Status</th>
              <th>Citation</th>
            </tr>
          </thead>
          <tbody>
            {audit.requirements.map((req) => (
              <tr key={req.id}>
                <td>
                  {req.label}
                  {req.note ? <div className="note">{req.note}</div> : null}
                </td>
                <td className="num">{req.credits}</td>
                <td className="num">{req.earned}</td>
                <td>
                  {req.satisfied ? <Badge tone="pass">Met</Badge> : <Badge tone="muted">Open</Badge>}
                </td>
                <td className="tiny">{req.citation}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {audit.notes.length > 0 ? (
          <ul className="small" style={{ marginTop: 10 }}>
            {audit.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Endorsements</h2>
        <p className="small muted">
          Summaries follow TEA’s Graduation Toolkit 2025 and 19 TAC §74.13. Each line below shows
          which condition is still open.
        </p>
        {audit.endorsements.map((endorsement) => (
          <div key={endorsement.id} className="unit-block">
            <div className="spread">
              <h3>{endorsement.label}</h3>
              {endorsement.met ? <Badge tone="pass">Complete</Badge> : <Badge tone="muted">Open</Badge>}
            </div>
            <div className="note">{endorsement.summary}</div>
            <ul className="small" style={{ marginTop: 6 }}>
              {endorsement.lines.map((line) => (
                <li key={line.label}>
                  <span className={line.met ? 'check' : 'x'}>{line.met ? '✓' : '✗'}</span> {line.label} —{' '}
                  {line.detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Completed credit courses</h2>
        {audit.completed.length === 0 ? (
          <Empty title="No completed high-school credits yet" />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th className="num">Grade</th>
                <th className="num">Credits</th>
              </tr>
            </thead>
            <tbody>
              {audit.completed.map((course) => (
                <tr key={course.courseId}>
                  <td>{course.title}</td>
                  <td className="num">{displayGrade(course.grade)}</td>
                  <td className="num">{course.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="disclaimer">
        <strong>What this audit is and is not.</strong> It compares your recorded credits with the
        published Foundation High School Program (19 TAC §§74.12–74.13; TEA Graduation Toolkit 2025).
        Completing it does not award a Texas diploma, does not make this program accredited, and does
        not guarantee admission, credit transfer, or athletic eligibility. A home school may issue
        its own diploma and transcript; TEA does not accredit or monitor home schools.{' '}
        <Link to="/policies">Sources and full policy</Link>.
      </div>
    </>
  );
}
