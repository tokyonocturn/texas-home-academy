import { useMemo, useState } from 'react';
import type { Question } from '../types';
import { Badge } from './parts';

/**
 * Assessment runner.
 *
 * Multiple choice and numeric items are graded automatically. Written items are
 * never auto-graded: the program shows the model answer and the published
 * rubric, and a parent or teacher enters the points. Nothing is recorded until
 * the student has actually answered.
 */

export interface QuizOutcome {
  score: number;
  max: number;
  gradedBy: 'auto' | 'parent';
  answers: Record<string, string>;
}

interface Props {
  questions: Question[];
  onComplete?: (outcome: QuizOutcome) => void;
  submitLabel?: string;
  compact?: boolean;
  /** Retake label, shown above the questions. */
  note?: string;
}

function isAnswered(q: Question, raw: string | undefined): boolean {
  if (raw === undefined) return false;
  if (q.kind === 'numeric') return raw.trim() !== '' && Number.isFinite(Number(raw));
  return raw.trim() !== '';
}

function autoCorrect(q: Question, raw: string | undefined): boolean {
  if (raw === undefined) return false;
  if (q.kind === 'mc') return Number(raw) === q.answer;
  if (q.kind === 'numeric') {
    const value = Number(raw);
    if (!Number.isFinite(value)) return false;
    return Math.abs(value - q.answer) <= (q.tolerance ?? 0.01);
  }
  return false;
}

export function QuizRunner({ questions, onComplete, submitLabel, compact, note }: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [parentPoints, setParentPoints] = useState<Record<string, string>>({});
  const [phase, setPhase] = useState<'answer' | 'score' | 'done'>('answer');
  const [outcome, setOutcome] = useState<QuizOutcome | null>(null);

  const max = useMemo(() => questions.reduce((sum, q) => sum + q.points, 0), [questions]);
  const shortQuestions = useMemo(() => questions.filter((q) => q.kind === 'short'), [questions]);
  const unanswered = questions.filter((q) => !isAnswered(q, answers[q.id])).length;

  const autoScore = questions.reduce((sum, q) => {
    if (q.kind === 'short') return sum;
    return sum + (autoCorrect(q, answers[q.id]) ? q.points : 0);
  }, 0);

  const parentTotal = shortQuestions.reduce((sum, q) => {
    const raw = parentPoints[q.id];
    const value = Number(raw);
    if (!Number.isFinite(value) || raw === undefined || raw === '') return sum;
    return sum + Math.min(q.points, Math.max(0, value));
  }, 0);

  const scoringComplete =
    shortQuestions.length === 0 ||
    shortQuestions.every((q) => parentPoints[q.id] !== undefined && parentPoints[q.id] !== '');

  function finish() {
    const finalScore = shortQuestions.length === 0 ? autoScore : autoScore + parentTotal;
    const result: QuizOutcome = {
      score: Math.min(finalScore, max),
      max,
      gradedBy: shortQuestions.length > 0 ? 'parent' : 'auto',
      answers,
    };
    setOutcome(result);
    setPhase('done');
    onComplete?.(result);
  }

  function submitAnswers() {
    if (shortQuestions.length > 0) setPhase('score');
    else finish();
  }

  if (phase === 'done' && outcome) {
    const pct = outcome.max > 0 ? (outcome.score / outcome.max) * 100 : 0;
    return (
      <div className="stack">
        <div className="card" style={{ marginBottom: 0 }}>
          <div className="spread">
            <div>
              <h3 style={{ margin: 0 }}>Recorded result</h3>
              <div className="note">
                {outcome.score} of {outcome.max} points ({pct.toFixed(1)}%) ·{' '}
                {outcome.gradedBy === 'parent' ? 'written work scored by a parent' : 'auto-graded'}
              </div>
            </div>
            <Badge tone={pct >= 70 ? 'pass' : 'fail'}>{pct >= 70 ? 'Passing' : 'Below 70'}</Badge>
          </div>
        </div>
        {questions.map((q) => {
          const raw = answers[q.id];
          if (q.kind === 'short') {
            const earned = Number(parentPoints[q.id] ?? 0);
            return (
              <div key={q.id} className="question">
                <div className="prompt">{q.prompt}</div>
                <div className="small">
                  <strong>Your answer:</strong> {raw || '(blank)'}
                </div>
                <div className="feedback">
                  <strong>Model answer:</strong> {q.modelAnswer}
                  <div className="note" style={{ marginTop: 4 }}>
                    Scored {earned} of {q.points} by rubric.
                  </div>
                </div>
              </div>
            );
          }
          const ok = autoCorrect(q, raw);
          return (
            <div key={q.id} className={`question ${ok ? 'correct' : 'incorrect'}`}>
              <div className="prompt">{q.prompt}</div>
              <div className="small">
                {q.kind === 'mc'
                  ? `Your answer: ${raw !== undefined ? q.choices[Number(raw)] : '(blank)'}`
                  : `Your answer: ${raw || '(blank)'}`}
              </div>
              <div className="feedback">
                <strong className={ok ? 'ok' : 'bad'}>{ok ? 'Correct' : 'Not correct'}</strong>
                <div>
                  {q.kind === 'mc' ? `Correct answer: ${q.choices[q.answer]}. ` : `Correct answer: ${q.answer}. `}
                  {q.explanation}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (phase === 'score') {
    return (
      <div className="stack">
        <div className="callout navy">
          <strong>Parent scoring step.</strong> The auto-graded items earned {autoScore} of{' '}
          {max} points. Read each written response, compare it with the model answer and the
          criteria below, and enter the points earned. Nothing has been recorded yet.
        </div>
        {shortQuestions.map((q) => (
          <div key={q.id} className="question">
            <div className="prompt">{q.prompt}</div>
            <div className="small" style={{ whiteSpace: 'pre-wrap' }}>
              <strong>Student response:</strong> {answers[q.id] || '(blank)'}
            </div>
            <div className="feedback">
              <strong>Model answer:</strong> {q.modelAnswer}
              <div className="note" style={{ margin: '6px 0 2px' }}>Scoring criteria:</div>
              <ul className="small" style={{ margin: 0, paddingLeft: 18 }}>
                {q.rubric.map((row) => (
                  <li key={row}>{row}</li>
                ))}
              </ul>
            </div>
            <label className="field" style={{ marginTop: 10, maxWidth: 220 }}>
              <span>Points earned (max {q.points})</span>
              <input
                type="number"
                min={0}
                max={q.points}
                step="0.5"
                value={parentPoints[q.id] ?? ''}
                onChange={(event) =>
                  setParentPoints((prev) => ({ ...prev, [q.id]: event.target.value }))
                }
              />
            </label>
          </div>
        ))}
        <div className="btn-row">
          <button className="btn" disabled={!scoringComplete} onClick={finish}>
            Record score
          </button>
          <span className="note">
            {scoringComplete
              ? `Total: ${autoScore + parentTotal} of ${max}`
              : 'Enter points for every written response.'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="stack">
      {note ? <div className="callout">{note}</div> : null}
      {questions.map((q, index) => (
        <div key={q.id} className={`question${compact ? ' small' : ''}`}>
          <div className="prompt">
            {index + 1}. {q.prompt}{' '}
            <span className="note">
              ({q.points} {q.points === 1 ? 'point' : 'points'})
            </span>
          </div>
          {q.kind === 'mc' ? (
            <div>
              {q.choices.map((choice, choiceIndex) => (
                <label className="choice" key={choice}>
                  <input
                    type="radio"
                    name={`${q.id}-choice`}
                    checked={answers[q.id] === String(choiceIndex)}
                    onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: String(choiceIndex) }))}
                  />
                  <span>{choice}</span>
                </label>
              ))}
            </div>
          ) : null}
          {q.kind === 'numeric' ? (
            <label className="field" style={{ maxWidth: 260 }}>
              <span>{q.unit ? `Answer in ${q.unit}` : 'Answer'}</span>
              <input
                type="number"
                step="any"
                value={answers[q.id] ?? ''}
                onChange={(event) => setAnswers((prev) => ({ ...prev, [q.id]: event.target.value }))}
              />
            </label>
          ) : null}
          {q.kind === 'short' ? (
            <label className="field">
              <span>Written response</span>
              <textarea
                value={answers[q.id] ?? ''}
                onChange={(event) => setAnswers((prev) => ({ ...prev, [q.id]: event.target.value }))}
                placeholder="Answer in complete sentences. This item is scored by a parent or teacher against the rubric."
              />
            </label>
          ) : null}
        </div>
      ))}
      <div className="btn-row">
        <button className="btn" disabled={unanswered > 0} onClick={submitAnswers}>
          {submitLabel ?? 'Submit answers'}
        </button>
        <span className="note">
          {unanswered > 0 ? `${unanswered} question(s) still unanswered.` : 'All questions answered.'}
        </span>
      </div>
    </div>
  );
}

/** Small wrapper used on lesson pages so retries remount cleanly. */
export function PracticeBlock({
  questions,
  onRecorded,
}: {
  questions: Question[];
  onRecorded: (outcome: QuizOutcome) => void;
}) {
  const [round, setRound] = useState(0);
  const [recorded, setRecorded] = useState<QuizOutcome | null>(null);

  return (
    <div className="card">
      <div className="spread">
        <h2 style={{ margin: 0 }}>Practice</h2>
        <span className="note">Auto-graded · {questions.reduce((s, q) => s + q.points, 0)} points</span>
      </div>
      <p className="small muted">
        Practice is formative. Your best attempt counts toward the course practice category, and
        you may try again as often as you like.
      </p>
      {recorded ? (
        <div className="callout" style={{ marginBottom: 12 }}>
          Attempt recorded: {recorded.score} of {recorded.max}. A new attempt will replace it only
          if it is higher.
        </div>
      ) : null}
      <QuizRunner
        key={round}
        questions={questions}
        compact
        submitLabel="Check answers"
        onComplete={(outcome) => {
          setRecorded(outcome);
          onRecorded(outcome);
        }}
      />
      <div className="btn-row" style={{ marginTop: 12 }}>
        <button className="btn ghost small" onClick={() => setRound((r) => r + 1)}>
          Try again
        </button>
      </div>
    </div>
  );
}
