import { useMemo, useState } from 'react';
import { SUBJECT_LABELS, type SubjectId } from '../../types';
import {
  COURSES,
  SUBJECT_ORDER,
  courseGradeLabel,
  getCourse,
  practiceId,
  quizId,
  projectId,
} from '../../content';
import { courseResult, displayGrade, latestAttempts, percent } from '../../grading/gradebook';
import { useApp } from '../../state/store';
import { Badge, Empty, Link, PageHead, Progress } from '../parts';
import { PracticeBlock } from '../quiz';

export function CatalogPage() {
  const { state, dispatch } = useApp();
  const [query, setQuery] = useState('');
  const [grade, setGrade] = useState('all');
  const [subject, setSubject] = useState('all');

  const enrolled = new Set(state.enrollments.map((e) => e.courseId));

  const filtered = useMemo(() => {
    const terms = query
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    return COURSES.filter((course) => {
      const haystack = `${course.title} ${course.description}`.toLowerCase();
      // A one- or two-letter term ("Algebra I") must match a whole word, so
      // searching for Algebra I does not also return Algebra II.
      const matchesQuery = terms.every((term) =>
        new RegExp(term.length <= 2 ? `\\b${term}\\b` : `\\b${term}`, 'i').test(haystack),
      );
      if (terms.length > 0 && !matchesQuery) return false;
      if (subject !== 'all' && course.subject !== subject) return false;
      if (grade !== 'all') {
        if (grade === 'K' && course.grade !== 0) return false;
        if (grade !== 'K' && course.grade !== Number(grade)) return false;
      }
      return true;
    }).sort((a, b) => {
      if (a.grade !== b.grade) return a.grade - b.grade;
      return SUBJECT_ORDER.indexOf(a.subject) - SUBJECT_ORDER.indexOf(b.subject);
    });
  }, [query, grade, subject]);

  return (
    <>
      <PageHead
        eyebrow="Curriculum"
        title="Course catalog"
        lede={`${COURSES.length} courses from kindergarten through grade 12, plus adult life education. Every course lists its TEKS alignment, units, graded assessments, and rubrics.`}
      />

      <div className="card">
        <div className="inline-fields">
          <label className="field">
            <span>Search</span>
            <input
              type="text"
              value={query}
              placeholder="Course or topic"
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <label className="field">
            <span>Grade</span>
            <select value={grade} onChange={(e) => setGrade(e.target.value)}>
              <option value="all">All grades</option>
              <option value="K">Kindergarten</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((g) => (
                <option key={g} value={g}>
                  Grade {g}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Subject</span>
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="all">All subjects</option>
              {SUBJECT_ORDER.map((id) => (
                <option key={id} value={id}>
                  {SUBJECT_LABELS[id as SubjectId]}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="note">
          {filtered.length} course{filtered.length === 1 ? '' : 's'} shown
        </div>
      </div>

      {filtered.length === 0 ? (
        <Empty title="No courses match those filters" />
      ) : (
        <div className="grid two">
          {filtered.map((course) => {
            const isEnrolled = enrolled.has(course.id);
            return (
              <div key={course.id} className="course-card">
                <div className="spread">
                  <h3>
                    <Link to={`/course/${course.id}`}>{course.title}</Link>
                  </h3>
                  {isEnrolled ? <Badge tone="pass">Enrolled</Badge> : null}
                </div>
                <div className="meta">
                  {courseGradeLabel(course)} · {SUBJECT_LABELS[course.subject]}
                  {course.credits > 0 ? ` · ${course.credits} credit` : ''}
                </div>
                <p>{course.description}</p>
                <div className="row" style={{ marginTop: 4 }}>
                  <span className="note">
                    {course.units.length} units ·{' '}
                    {course.units.reduce((s, u) => s + u.lessons.length, 0)} lessons
                  </span>
                  <Link to={`/course/${course.id}`} className="btn small ghost">
                    View
                  </Link>
                  {isEnrolled ? null : (
                    <button
                      className="btn small"
                      onClick={() => dispatch({ type: 'enroll', courseId: course.id })}
                    >
                      Enroll
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export function CoursePage({ courseId }: { courseId: string }) {
  const { state, dispatch } = useApp();
  const course = getCourse(courseId);

  if (!course) {
    return (
      <>
        <PageHead title="Course not found" />
        <Empty title="That course id is not in the catalog">
          <Link to="/catalog">Back to the catalog</Link>
        </Empty>
      </>
    );
  }

  const enrolled = state.enrollments.some((e) => e.courseId === course.id);
  const result = courseResult(course, state.grades);
  const attempts = latestAttempts(state.grades.filter((g) => g.courseId === course.id));

  const lessons = course.units.flatMap((u) => u.lessons);
  const done = lessons.filter((l) => state.lessonProgress[`${course.id}/${l.id}`]).length;
  const projectCount = course.units.filter((u) => u.project).length + (course.project ? 1 : 0);
  const rubric = course.project?.rubric ?? course.units.find((u) => u.project)?.project?.rubric;

  return (
    <>
      <PageHead
        eyebrow={`${courseGradeLabel(course)} · ${SUBJECT_LABELS[course.subject]}`}
        title={course.title}
        lede={course.description}
        actions={
          <>
            <Link to="/catalog" className="btn ghost">
              Catalog
            </Link>
            {enrolled ? (
              <button
                className="btn ghost"
                onClick={() => {
                  if (
                    window.confirm(
                      `Unenroll from ${course.title}? Scores already recorded stay in the gradebook and transcript.`,
                    )
                  ) {
                    dispatch({ type: 'unenroll', courseId: course.id });
                  }
                }}
              >
                Unenroll
              </button>
            ) : (
              <button className="btn gold" onClick={() => dispatch({ type: 'enroll', courseId: course.id })}>
                Enroll in course
              </button>
            )}
          </>
        }
      />

      <div className="grid three">
        <div className="stat">
          <div className="label">Credit</div>
          <div className="value">{course.credits > 0 ? course.credits : '—'}</div>
          <div className="sub">{course.semesters === 2 ? 'Full year · 2 semesters' : 'One semester'}</div>
        </div>
        <div className="stat">
          <div className="label">Progress</div>
          <div className="value">
            {done}/{lessons.length}
          </div>
          <div className="sub">lessons completed</div>
        </div>
        <div className="stat">
          <div className="label">Current grade</div>
          <div className="value">{displayGrade(result.currentGrade)}</div>
          <div className="sub">
            {result.finalGrade === null
              ? 'In progress · final exam not recorded'
              : `Final ${displayGrade(result.finalGrade)} · ${result.letter}`}
          </div>
        </div>
      </div>

      <div className="grid two" style={{ marginTop: 18 }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>How this course is graded</h2>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th className="num">Weight</th>
                <th className="num">Average</th>
              </tr>
            </thead>
            <tbody>
              {result.categories
                .filter((c) => c.weight > 0)
                .map((c) => (
                  <tr key={c.id}>
                    <td>{c.label}</td>
                    <td className="num">{c.weight}%</td>
                    <td className="num">{displayGrade(c.average)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="note" style={{ marginTop: 8 }}>
            A category with no graded work is excluded and the remaining weights are renormalized.
            Passing is 70 (19 TAC §74.26(c)). A retake is capped at 80.
          </div>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Standards alignment</h2>
          {course.teks.map((ref) => (
            <div key={ref.citation} style={{ marginBottom: 10 }}>
              <div className="small">
                <strong>{ref.citation}</strong>
              </div>
              <div className="note">{ref.summary}</div>
            </div>
          ))}
          <h3>Essential questions</h3>
          <ul className="small">
            {course.essentialQuestions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Assessment plan and rubrics</h2>
        <table>
          <thead>
            <tr>
              <th>Assessment</th>
              <th className="num">Count</th>
              <th>Category</th>
              <th>Scoring</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Practice sets</td>
              <td className="num">{lessons.length}</td>
              <td>Practice and daily work</td>
              <td>Auto-graded; best attempt counts</td>
            </tr>
            <tr>
              <td>Unit quizzes</td>
              <td className="num">{course.units.length}</td>
              <td>Unit quizzes</td>
              <td>Auto-graded; written items scored by rubric</td>
            </tr>
            <tr>
              <td>Projects</td>
              <td className="num">{projectCount}</td>
              <td>Projects and writing</td>
              <td>Parent-scored against a 100-point rubric</td>
            </tr>
            {course.midterm ? (
              <tr>
                <td>Semester 1 midterm</td>
                <td className="num">1</td>
                <td>Exams</td>
                <td>Auto-graded plus a written response</td>
              </tr>
            ) : null}
            <tr>
              <td>Cumulative final examination</td>
              <td className="num">1</td>
              <td>Exams</td>
              <td>Auto-graded plus a written response</td>
            </tr>
          </tbody>
        </table>
        {rubric ? (
          <>
            <h3>Project rubric</h3>
            <table>
              <thead>
                <tr>
                  <th>Criterion</th>
                  <th className="num">Points</th>
                  <th>Levels</th>
                </tr>
              </thead>
              <tbody>
                {rubric.map((row) => (
                  <tr key={row.criterion}>
                    <td>{row.criterion}</td>
                    <td className="num">{row.points}</td>
                    <td className="tiny">{row.levels.map((level) => level.label).join(' / ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        <p className="note">
          No grade is awarded for opening a lesson. Practice is formative and recorded as the best
          attempt; quizzes, projects, the midterm, and the final are summative. A final grade is
          issued only after the cumulative final examination is recorded.
        </p>
      </div>

      <h2>Units</h2>
      {course.units.map((unit) => {
        const quizAttempt = attempts.find((a) => a.assessmentId === quizId(course.id, unit.id));
        return (
          <div key={unit.id} className="unit-block">
            <h3>{unit.title}</h3>
            <div className="note">{unit.bigIdea}</div>
            <div style={{ marginTop: 8 }}>
              {unit.lessons.map((lesson) => {
                const progress = state.lessonProgress[`${course.id}/${lesson.id}`];
                return (
                  <div key={lesson.id} className="lesson-row">
                    <div>
                      <div className="title">
                        <Link to={`/lesson/${course.id}/${lesson.id}`}>{lesson.title}</Link>
                      </div>
                      <div className="note">
                        {lesson.minutes} min · {lesson.practice.length} practice items
                      </div>
                    </div>
                    {progress ? (
                      <Badge tone="pass">
                        ✓ {progress.practiceScore !== undefined && progress.practiceMax
                          ? `${Math.round((progress.practiceScore / progress.practiceMax) * 100)}%`
                          : 'Complete'}
                      </Badge>
                    ) : (
                      <Badge tone="muted">Not started</Badge>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="btn-row" style={{ marginTop: 10 }}>
              <Link to={`/assessment/${course.id}/quiz/${unit.id}`} className="btn small">
                Unit quiz
              </Link>
              {quizAttempt ? (
                <span className="note">
                  Recorded: {percent(quizAttempt.score, quizAttempt.max).toFixed(1)}%
                </span>
              ) : (
                <span className="note">Not yet taken</span>
              )}
              {unit.project ? (
                <Link to={`/assessment/${course.id}/project/${unit.id}`} className="btn small ghost">
                  Project: {unit.project.title}
                </Link>
              ) : null}
            </div>
          </div>
        );
      })}

      <div className="grid two">
        {course.midterm ? (
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Semester 1 midterm</h2>
            <p className="small">
              {course.midterm.title} · {course.midterm.questions.length} questions ·{' '}
              {course.midterm.questions.reduce((s, q) => s + q.points, 0)} points
            </p>
            <Link to={`/assessment/${course.id}/midterm`} className="btn gold">
              Open midterm
            </Link>
          </div>
        ) : null}
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Final examination</h2>
          <p className="small">
            {course.finalExam.title} · {course.finalExam.questions.length} questions ·{' '}
            {course.finalExam.questions.reduce((s, q) => s + q.points, 0)} points
          </p>
          <Link to={`/assessment/${course.id}/final`} className="btn">
            Open final exam
          </Link>
        </div>
        {course.project ? (
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Course capstone</h2>
            <p className="small">
              {course.project.title} — {course.project.deliverable}
            </p>
            <Link to={`/assessment/${course.id}/capstone`} className="btn ghost">
              Open capstone project
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
}

export function LessonPage({ courseId, lessonId }: { courseId: string; lessonId: string }) {
  const { state, recordGrade, completeLesson } = useApp();
  const course = getCourse(courseId);
  const found = course
    ? course.units.flatMap((u) => u.lessons.map((l) => ({ unit: u, lesson: l }))).find((x) => x.lesson.id === lessonId)
    : undefined;

  if (!course || !found) {
    return (
      <>
        <PageHead title="Lesson not found" />
        <Empty title="That lesson is not in this course">
          <Link to="/catalog">Back to the catalog</Link>
        </Empty>
      </>
    );
  }

  const { lesson } = found;
  const flat = course.units.flatMap((u) => u.lessons);
  const index = flat.findIndex((l) => l.id === lesson.id);
  const previous = index > 0 ? flat[index - 1] : undefined;
  const next = index < flat.length - 1 ? flat[index + 1] : undefined;
  const progress = state.lessonProgress[`${course.id}/${lesson.id}`];

  return (
    <>
      <PageHead
        eyebrow={`${course.title} · ${found.unit.title}`}
        title={lesson.title}
        lede={`${lesson.minutes} minutes · ${lesson.objectives.length} learning objectives`}
        actions={
          <Link to={`/course/${course.id}`} className="btn ghost">
            Back to course
          </Link>
        }
      />

      <div className="lesson-body">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Objectives</h2>
          <ul>
            {lesson.objectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </div>

        {lesson.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        {lesson.example ? (
          <div className="callout">
            <strong>Worked example.</strong> {lesson.example.prompt}
            <ol>
              {lesson.example.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div>
              <strong>Answer:</strong> {lesson.example.answer}
            </div>
          </div>
        ) : null}

        {(lesson.examples ?? []).map((example) => (
          <div className="callout" key={example.prompt}>
            <strong>Worked example.</strong> {example.prompt}
            <ol>
              {example.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div>
              <strong>Answer:</strong> {example.answer}
            </div>
          </div>
        ))}

        {lesson.extraExample ? (
          <div className="callout">
            <strong>Second worked example.</strong> {lesson.extraExample.prompt}
            <ol>
              {lesson.extraExample.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div>
              <strong>Answer:</strong> {lesson.extraExample.answer}
            </div>
          </div>
        ) : null}

        {lesson.keyTerms && lesson.keyTerms.length > 0 ? (
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Key terms</h3>
            <dl>
              {lesson.keyTerms.map((term) => (
                <div key={term.term} style={{ marginBottom: 8 }}>
                  <dt style={{ fontWeight: 600 }}>{term.term}</dt>
                  <dd style={{ margin: 0 }} className="small">
                    {term.definition}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}

        {lesson.review && lesson.review.length > 0 ? (
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Review questions</h3>
            <p className="small muted">
              Answer in your own words, then compare with the model answer. These are for
              self-checking; they do not create a grade.
            </p>
            {lesson.review.map((item) => (
              <details key={item.prompt} style={{ marginBottom: 10 }}>
                <summary className="small" style={{ cursor: 'pointer', fontWeight: 600 }}>
                  {item.prompt}
                </summary>
                <p className="small" style={{ marginTop: 6 }}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        ) : null}

        {lesson.assignments && lesson.assignments.length > 0 ? (
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Assignments</h3>
            <ul className="small">
              {lesson.assignments.map((assignment) => (
                <li key={assignment}>{assignment}</li>
              ))}
            </ul>
            <div className="note">
              Assignments are completed away from the screen and checked by a parent. They are
              recorded through the related project rubric, not by clicking a box.
            </div>
          </div>
        ) : null}

        {lesson.furtherReading && lesson.furtherReading.length > 0 ? (
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Further reading</h3>
            <ul className="small">
              {lesson.furtherReading.map((reading) => (
                <li key={reading.url}>
                  <a href={reading.url} target="_blank" rel="noreferrer">
                    {reading.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <PracticeBlock
        questions={lesson.practice}
        onRecorded={(outcome) => {
          recordGrade({
            courseId: course.id,
            assessmentId: practiceId(course.id, lesson.id),
            title: `${lesson.title} — practice`,
            category: 'practice',
            score: outcome.score,
            max: outcome.max,
            gradedBy: outcome.gradedBy,
          });
          completeLesson(course.id, lesson.id, outcome.score, outcome.max);
        }}
      />

      {progress ? (
        <div className="callout navy">
          Lesson recorded complete on {progress.completedAt}. Progress is only recorded after the
          practice set is submitted.
        </div>
      ) : (
        <div className="callout">
          This lesson is complete once you submit the practice set. Reading alone does not create a
          grade or a completion record.
        </div>
      )}

      <div className="btn-row no-print" style={{ marginTop: 16 }}>
        {previous ? (
          <Link to={`/lesson/${course.id}/${previous.id}`} className="btn ghost">
            ← {previous.title}
          </Link>
        ) : null}
        {next ? (
          <Link to={`/lesson/${course.id}/${next.id}`} className="btn">
            Next: {next.title} →
          </Link>
        ) : (
          <Link to={`/course/${course.id}`} className="btn">
            Finish unit
          </Link>
        )}
      </div>
    </>
  );
}
