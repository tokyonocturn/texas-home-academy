import { useState } from 'react';
import type { AssessmentSet, Project } from '../../types';
import { finalId, getCourse, projectId, quizId } from '../../content';
import { attemptsFor, canRetake } from '../../grading/progression';
import { percent } from '../../grading/gradebook';
import { useApp } from '../../state/store';
import { Badge, Empty, Link, PageHead } from '../parts';
import { QuizRunner } from '../quiz';

type Kind = 'quiz' | 'project' | 'final' | 'capstone';

export function AssessmentPage({
  courseId,
  kind,
  unitId,
}: {
  courseId: string;
  kind: Kind;
  unitId?: string;
}) {
  const course = getCourse(courseId);
  const unit = unitId ? course?.units.find((u) => u.id === unitId) : undefined;

  if (!course || (kind !== 'final' && kind !== 'capstone' && !unit)) {
    return (
      <>
        <PageHead title="Assessment not found" />
        <Empty title="That assessment is not available">
          <Link to="/catalog">Back to the catalog</Link>
        </Empty>
      </>
    );
  }

  if (kind === 'project' || kind === 'capstone') {
    const project = kind === 'capstone' ? course.project : unit?.project;
    if (!project) {
      return (
        <>
          <PageHead title="Project not found" />
          <Empty title="This course has no project here" />
        </>
      );
    }
    return (
      <ProjectPage
        courseId={course.id}
        courseTitle={course.title}
        assessmentId={kind === 'capstone' ? projectId(course.id) : projectId(course.id, unit!.id)}
        project={project}
        returnTo={`/course/${course.id}`}
      />
    );
  }

  const assessment: AssessmentSet = kind === 'final' ? course.finalExam : unit!.quiz;
  const assessmentId = kind === 'final' ? finalId(course.id) : quizId(course.id, unit!.id);
  const category = kind === 'final' ? 'exam' : 'quiz';

  return (
    <AssessmentRunner
      courseId={course.id}
      courseTitle={course.title}
      assessment={assessment}
      assessmentId={assessmentId}
      category={category}
      title={kind === 'final' ? course.finalExam.title : `${unit!.title} quiz`}
      returnTo={`/course/${course.id}`}
    />
  );
}

function AssessmentRunner({
  courseId,
  courseTitle,
  assessment,
  assessmentId,
  category,
  title,
  returnTo,
}: {
  courseId: string;
  courseTitle: string;
  assessment: AssessmentSet;
  assessmentId: string;
  category: 'quiz' | 'exam';
  title: string;
  returnTo: string;
}) {
  const { state, recordGrade } = useApp();
  const [recorded, setRecorded] = useState<{ score: number; max: number } | null>(null);

  const attempts = attemptsFor(state.grades, assessmentId);
  const retake = canRetake(state.grades, assessmentId, category);
  const max = assessment.questions.reduce((sum, q) => sum + q.points, 0);

  return (
    <>
      <PageHead
        eyebrow={courseTitle}
        title={title}
        lede={`${assessment.questions.length} questions · ${max} points · attempt ${recorded ? Math.max(1, attempts) : attempts + 1}`}
        actions={
          <Link to={returnTo} className="btn ghost">
            Back to course
          </Link>
        }
      />

      <div className="card">
        <div className="spread">
          <div className="small">
            <strong>Instructions.</strong> {assessment.instructions}
          </div>
          {recorded ? (
            <Badge tone={recorded.max > 0 && (recorded.score / recorded.max) * 100 >= 70 ? 'pass' : 'fail'}>
              {percent(recorded.score, recorded.max).toFixed(1)}%
            </Badge>
          ) : (
            <Badge tone="info">{attempts === 0 ? 'First attempt' : `Retake ${attempts}`}</Badge>
          )}
        </div>
        {attempts > 0 ? (
          <div className="callout" style={{ marginBottom: 0 }}>
            {retake.allowed
              ? retake.reason
              : retake.reason}{' '}
            A retake score replaces the earlier attempt but is capped at 80. Document the
            remediation in the box on the gradebook page.
          </div>
        ) : null}
      </div>

      {!retake.allowed ? (
        <div className="callout navy">
          Both attempts for this assessment are used. A written alternative assessment can be
          scored by a parent and recorded as a project instead.
        </div>
      ) : (
        <QuizRunner
          questions={assessment.questions}
          submitLabel={category === 'exam' ? 'Submit examination' : 'Submit quiz'}
          onComplete={(outcome) => {
            recordGrade({
              courseId,
              assessmentId,
              title,
              category,
              score: outcome.score,
              max: outcome.max,
              gradedBy: outcome.gradedBy,
            });
            setRecorded({ score: outcome.score, max: outcome.max });
          }}
        />
      )}

      {recorded ? (
        <div className="callout navy" style={{ marginTop: 16 }}>
          Score recorded in the gradebook under {category === 'exam' ? 'Exams' : 'Unit quizzes'}.{' '}
          <Link to="/gradebook">View gradebook</Link> · <Link to={returnTo}>Return to course</Link>
        </div>
      ) : null}
    </>
  );
}

function ProjectPage({
  courseId,
  courseTitle,
  assessmentId,
  project,
  returnTo,
}: {
  courseId: string;
  courseTitle: string;
  assessmentId: string;
  project: Project;
  returnTo: string;
}) {
  const { state, recordGrade } = useApp();
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [feedback, setFeedback] = useState('');
  const [saved, setSaved] = useState<number | null>(null);

  const total = project.rubric.reduce((sum, row, index) => sum + (picks[index] ?? 0), 0);
  const complete = project.rubric.every((_, index) => picks[index] !== undefined);
  const attempts = attemptsFor(state.grades, assessmentId);

  return (
    <>
      <PageHead
        eyebrow={`${courseTitle} · project`}
        title={project.title}
        lede={project.prompt}
        actions={
          <Link to={returnTo} className="btn ghost">
            Back to course
          </Link>
        }
      />

      <div className="grid two">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Deliverable</h2>
          <p className="small">{project.deliverable}</p>
          <h3>What to look for</h3>
          <ul className="small">
            {project.guidance.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <div className="note">
            Projects are scored by a parent or teacher against the rubric. There is no auto-grade
            for a project, and no points are given for starting one.
          </div>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Score against the rubric</h2>
          {project.rubric.map((row, index) => (
            <div key={row.criterion} style={{ marginBottom: 12 }}>
              <div className="small">
                <strong>{row.criterion}</strong> — {row.points} points
              </div>
              <select
                value={picks[index] ?? ''}
                onChange={(event) =>
                  setPicks((prev) => ({ ...prev, [index]: Number(event.target.value) }))
                }
              >
                <option value="">Select a level…</option>
                {row.levels.map((level) => (
                  <option key={level.label} value={level.points}>
                    {level.label} ({level.points} pts) — {level.description}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <label className="field">
            <span>Feedback (optional)</span>
            <textarea value={feedback} onChange={(event) => setFeedback(event.target.value)} />
          </label>
          <div className="spread">
            <strong>{total} / 100</strong>
            <button
              className="btn"
              disabled={!complete}
              onClick={() => {
                recordGrade({
                  courseId,
                  assessmentId,
                  title: project.title,
                  category: 'project',
                  score: total,
                  max: 100,
                  gradedBy: 'parent',
                  feedback: feedback || undefined,
                });
                setSaved(total);
              }}
            >
              Record project score
            </button>
          </div>
          {saved !== null ? (
            <div className="callout" style={{ marginBottom: 0 }}>
              Recorded {saved} of 100 for {project.title}. Attempt {Math.max(1, attempts)}.{' '}
              <Link to="/gradebook">Gradebook</Link>
            </div>
          ) : null}
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Rubric detail</h2>
        <table>
          <thead>
            <tr>
              <th>Criterion</th>
              <th>Excellent</th>
              <th>Proficient</th>
              <th>Developing</th>
              <th>Beginning</th>
            </tr>
          </thead>
          <tbody>
            {project.rubric.map((row) => (
              <tr key={row.criterion}>
                <td>
                  <strong>{row.criterion}</strong>
                  <div className="note">{row.points} pts</div>
                </td>
                {row.levels.map((level) => (
                  <td key={level.label} className="tiny">
                    {level.description}
                    <div className="note">{level.points} pts</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
