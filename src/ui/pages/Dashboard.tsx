import { auditGraduation } from '../../grading/graduation';
import { splitGpa } from '../../grading/gpa';
import { courseResult, displayGrade } from '../../grading/gradebook';
import { attendanceSummary, checkAdvancement } from '../../grading/progression';
import { COURSES, courseGradeLabel, getCourse, gradeLabel, recommendedForGrade } from '../../content';
import { useApp } from '../../state/store';
import { formatDate, todayISO } from '../../state/schoolYear';
import { Badge, Empty, Link, PageHead, Progress, Stat } from '../parts';

export function DashboardPage() {
  const { state, year, periodId } = useApp();
  const profile = state.profile;
  const name = profile.firstName ? profile.firstName : 'Student';
  const grade = profile.gradeLevel;

  const enrolled = state.enrollments
    .filter((enrollment) => enrollment.yearId === year.id)
    .map((e) => getCourse(e.courseId))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const gpa = splitGpa(COURSES, state.grades);
  const audit = auditGraduation(COURSES, state.grades);
  const attendance = attendanceSummary(state, year.instructionalDays);
  // K-8 families get an annual promotion recommendation; high school uses the
  // graduation audit instead.
  const advancement = grade <= 8 ? checkAdvancement(state, COURSES, year.instructionalDays) : null;

  const totalLessons = enrolled.reduce(
    (sum, c) => sum + c.units.reduce((s, u) => s + u.lessons.length, 0),
    0,
  );
  const doneLessons = enrolled.reduce(
    (sum, c) =>
      sum +
      c.units.reduce(
        (s, u) =>
          s + u.lessons.filter((l) => state.lessonProgress[`${c.id}/${l.id}`]).length,
        0,
      ),
    0,
  );

  const today = todayISO();
  const loggedToday = state.attendance.some((a) => a.date === today);
  const gradedCount = state.grades.length;

  const tasks = [
    {
      label: 'Complete your student profile',
      detail: 'Name, grade level, and school year appear on every report card and transcript.',
      to: '/settings',
      done: Boolean(profile.firstName && profile.lastName),
    },
    {
      label: 'Enroll in this year’s courses',
      detail: 'Enrollment is what puts a course on your report card and transcript.',
      to: '/catalog',
      done: enrolled.length > 0,
    },
    {
      label: 'Log today’s attendance',
      detail: `A full instructional day is ${state.settings.fullDayMinutes} minutes in Settings.`,
      to: '/attendance',
      done: loggedToday,
    },
    {
      label: 'Complete a graded assessment',
      detail: 'Practice sets, unit quizzes, and exams are the only source of grades.',
      to: '/gradebook',
      done: gradedCount > 0,
    },
  ];

  return (
    <>
      <PageHead
        eyebrow={`${year.label} · ${periodId}`}
        title={`Welcome back, ${name}`}
        lede={`${gradeLabel(grade)} · ${profile.schoolName || 'Texas Home Academy'} · ${year.instructionalDays} instructional days`}
        actions={
          <>
            <Link to="/catalog" className="btn gold">
              Course catalog
            </Link>
            <Link to="/transcript" className="btn ghost">
              Transcript
            </Link>
          </>
        }
      />

      <div className="grid four">
        <Stat
          label="Weighted GPA"
          value={grade >= 9 ? gpa.weighted.toFixed(2) : '—'}
          sub={grade >= 9 ? `Unweighted ${gpa.unweighted.toFixed(2)}` : 'High school courses only'}
        />
        <Stat
          label="Credits earned"
          value={`${audit.totalCredits}`}
          sub="of 26 for the endorsement plan"
        />
        <Stat
          label="Attendance"
          value={`${(attendance.rate * 100).toFixed(1)}%`}
          sub={`${attendance.daysAttended} full days · 90% standard`}
        />
        <Stat
          label="Lessons complete"
          value={`${doneLessons}/${totalLessons}`}
          sub={enrolled.length > 0 ? `${enrolled.length} courses enrolled` : 'No courses enrolled yet'}
        />
      </div>

      <div className="grid two" style={{ marginTop: 18 }}>
        <div className="card">
          <div className="spread">
            <h2 style={{ margin: 0 }}>Next steps</h2>
            <Badge tone={tasks.every((t) => t.done) ? 'pass' : 'info'}>
              {tasks.filter((t) => t.done).length}/{tasks.length} done
            </Badge>
          </div>
          <div className="stack" style={{ marginTop: 10 }}>
            {tasks.map((task) => (
              <div key={task.label} className="lesson-row">
                <div>
                  <div className="title">
                    {task.done ? <span className="check">✓ </span> : null}
                    <Link to={task.to}>{task.label}</Link>
                  </div>
                  <div className="note">{task.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>This school year</h2>
          <table>
            <tbody>
              <tr>
                <td>First instructional day</td>
                <td className="num">{formatDate(year.start)}</td>
              </tr>
              <tr>
                <td>Last instructional day</td>
                <td className="num">{formatDate(year.end)}</td>
              </tr>
              <tr>
                <td>Grading periods</td>
                <td className="num">{year.periods.length} six-week periods</td>
              </tr>
              <tr>
                <td>Current period</td>
                <td className="num">{periodId}</td>
              </tr>
              <tr>
                <td>Full days logged</td>
                <td className="num">
                  {attendance.daysAttended} of {year.instructionalDays}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="note" style={{ marginTop: 8 }}>
            180-day calendar anchored on Tex. Educ. Code §25.081 and §25.0811.
          </div>
        </div>
      </div>

      {advancement ? (
        <div className="card">
          <div className="spread">
            <h2 style={{ marginTop: 0 }}>Promotion check for this grade</h2>
            <Badge tone={advancement.eligible ? 'pass' : 'info'}>
              {advancement.eligible ? 'Ready to advance' : 'Open items'}
            </Badge>
          </div>
          <table>
            <tbody>
              {advancement.lines.map((line) => (
                <tr key={line.label}>
                  <td>
                    <span className={line.met ? 'check' : 'x'}>{line.met ? '✓' : '✗'}</span>{' '}
                    {line.label}
                  </td>
                  <td className="small">{line.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {advancement.blockers.length > 0 ? (
            <ul className="small" style={{ marginTop: 10 }}>
              {advancement.blockers.map((blocker) => (
                <li key={blocker}>{blocker}</li>
              ))}
            </ul>
          ) : (
            <div className="note" style={{ marginTop: 8 }}>
              The four core subjects are complete and passing and attendance meets the 90% standard
              this program adopts.
            </div>
          )}
          <div className="note" style={{ marginTop: 8 }}>
            Promotion in a Texas home school is a family decision; this is a recommendation, not a
            state determination. See the <Link to="/policies">records policy</Link>.
          </div>
        </div>
      ) : null}

      <h2>Your courses</h2>
      {enrolled.length === 0 ? (
        <Empty title="Nothing enrolled yet">
          Choose grade-appropriate courses in the <Link to="/catalog">catalog</Link>. Recommended
          for this grade:
          <div className="grid two" style={{ marginTop: 12, textAlign: 'left' }}>
            {recommendedForGrade(grade)
              .slice(0, 4)
              .map((course) => (
                <div key={course.id} className="course-card">
                  <h3>{course.title}</h3>
                  <div className="meta">
                    {courseGradeLabel(course)} · {course.units.length} units
                  </div>
                  <Link to={`/course/${course.id}`} className="btn small ghost">
                    Open course
                  </Link>
                </div>
              ))}
          </div>
        </Empty>
      ) : (
        <div className="grid two">
          {enrolled.map((course) => {
            const result = courseResult(course, state.grades);
            const lessons = course.units.reduce((s, u) => s + u.lessons.length, 0);
            const done = course.units.reduce(
              (s, u) =>
                s + u.lessons.filter((l) => state.lessonProgress[`${course.id}/${l.id}`]).length,
              0,
            );
            return (
              <div key={course.id} className="course-card">
                <div className="spread">
                  <h3>
                    <Link to={`/course/${course.id}`}>{course.title}</Link>
                  </h3>
                  <Badge tone={result.passing ? 'pass' : result.finalGrade === null ? 'muted' : 'fail'}>
                    {result.finalGrade === null
                      ? `In progress · ${displayGrade(result.currentGrade)}`
                      : `${displayGrade(result.finalGrade)} ${result.letter}`}
                  </Badge>
                </div>
                <div className="meta">
                  {courseGradeLabel(course)}
                  {course.credits > 0 ? ` · ${course.credits} credit` : ''} · {course.units.length} units
                </div>
                <Progress value={done} max={lessons} />
                <div className="note">
                  {done} of {lessons} lessons complete
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="callout navy" style={{ marginTop: 22 }}>
        <strong>Records, honestly labeled.</strong> Everything here is a parent-issued home-school
        record kept on this device. This program is not accredited by TEA or any regional
        accreditor, and it does not award a state diploma.{' '}
        <Link to="/policies">Read the records policy and citations</Link>.
      </div>
    </>
  );
}
