import type { AssessmentSet, Course, Question } from '../types';
import { short } from './builders';

/**
 * Semester 1 midterm examinations.
 *
 * A midterm is generated from the course's own authored material for the units
 * that fall in semester 1: the unit quizzes (summative items students have
 * already met) plus one practice item per lesson, plus a written explanation of
 * a worked example. Nothing is invented here; every item already exists in the
 * course, and the written item is scored by a parent against model work.
 *
 * Courses that run a single semester have no midterm; their final examination is
 * the only cumulative exam.
 */
export function buildMidterm(course: Course): AssessmentSet | undefined {
  if (course.semesters !== 2) return undefined;

  const half = Math.ceil(course.units.length / 2);
  const covered = course.units.slice(0, half);
  if (covered.length === 0) return undefined;

  const questions: Question[] = [];
  const seen = new Set<string>();

  const push = (q: Question) => {
    if (questions.length >= 14) return;
    if (seen.has(q.prompt)) return;
    seen.add(q.prompt);
    questions.push({ ...q, id: `${course.id}-mid-${q.id}` });
  };

  // Summative items from the covered units first, then lesson practice.
  for (const unit of covered) {
    for (const q of unit.quiz.questions) push(q);
  }
  for (const unit of covered) {
    for (const lesson of unit.lessons) {
      for (const q of lesson.practice) push(q);
    }
  }

  const example = covered
    .flatMap((unit) => unit.lessons)
    .map((lesson) => lesson.example)
    .find((value): value is NonNullable<typeof value> => Boolean(value));

  if (example) {
    questions.push(
      short(
        `Show your work and explain your reasoning: ${example.prompt}`,
        `${example.answer} Work: ${example.steps.join(' ')}`,
        [
          'Shows each step, not just the answer.',
          'Explains why each step is valid.',
          'States the result with units or a complete sentence.',
        ],
        10,
      ),
    );
  }

  return {
    title: `${course.title} — semester 1 midterm`,
    instructions:
      'Closed-note midterm covering the first half of the course. Show your work on paper for calculations. Multiple-choice and numeric items are auto-graded; the written item is scored by a parent or teacher against the model response and criteria.',
    questions,
    minutes: 60,
  };
}
