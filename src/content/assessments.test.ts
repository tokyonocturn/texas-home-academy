import { describe, expect, it } from 'vitest';
import { COURSES } from './index';
import type { Question } from '../types';

/**
 * Assessment integrity checks.
 *
 * These are structural, not semantic: they cannot prove that 5x - 4 = 21 has the
 * answer 5, but they do prove that every item is answerable and auto-gradable —
 * a numeric item with a non-numeric answer, an MC key outside its choices, or a
 * written item without a model answer and rubric would produce a grade the
 * family cannot trust.
 */

interface Item {
  where: string;
  question: Question;
}

const items: Item[] = [];
const prompts: { where: string; prompt: string }[] = [];

function collect(where: string, questions: Question[]) {
  for (const question of questions) {
    items.push({ where, question });
    prompts.push({ where, prompt: question.prompt.trim().toLowerCase() });
  }
}

for (const course of COURSES) {
  for (const unit of course.units) {
    collect(`${course.id}/${unit.id}/quiz`, unit.quiz.questions);
    if (unit.project) {
      for (const row of unit.project.rubric) {
        prompts.push({ where: `${course.id}/${unit.id}/project`, prompt: row.criterion.toLowerCase() });
      }
    }
    for (const lesson of unit.lessons) {
      collect(`${course.id}/${lesson.id}/practice`, lesson.practice);
    }
  }
  if (course.midterm) collect(`${course.id}/midterm`, course.midterm.questions);
  collect(`${course.id}/final`, course.finalExam.questions);
  if (course.project) {
    for (const row of course.project.rubric) {
      prompts.push({ where: `${course.id}/capstone`, prompt: row.criterion.toLowerCase() });
    }
  }
}

describe('assessment integrity', () => {
  it('walks a substantial set of items across the whole catalog', () => {
    expect(COURSES.length).toBe(72);
    expect(items.length).toBeGreaterThan(2500);
  });

  it('gives every item a positive point value and a prompt', () => {
    const bad = items.filter(({ question }) => !(question.points > 0) || !question.prompt.trim());
    expect(bad.map((item) => item.where)).toEqual([]);
  });

  it('keys every multiple-choice item inside its own choices, without duplicate choices', () => {
    const problems: string[] = [];
    for (const { where, question } of items) {
      if (question.kind !== 'mc') continue;
      if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.choices.length) {
        problems.push(`${where}: answer index ${question.answer} outside ${question.choices.length} choices`);
      }
      if (new Set(question.choices).size !== question.choices.length) {
        problems.push(`${where}: duplicate choices in "${question.prompt.slice(0, 40)}"`);
      }
      if (question.choices.some((choice) => !choice.trim())) {
        problems.push(`${where}: blank choice in "${question.prompt.slice(0, 40)}"`);
      }
    }
    expect(problems.slice(0, 10)).toEqual([]);
  });

  it('gives every numeric item a finite numeric answer', () => {
    const problems = items
      .filter(({ question }) => question.kind === 'numeric')
      .filter(({ question }) => question.kind === 'numeric' && !Number.isFinite(question.answer))
      .map((item) => `${item.where}: non-numeric answer in "${item.question.prompt.slice(0, 40)}"`);
    expect(problems).toEqual([]);
  });

  it('gives every written item a model answer and scoring criteria', () => {
    const problems: string[] = [];
    for (const { where, question } of items) {
      if (question.kind !== 'short') continue;
      if (question.modelAnswer.trim().split(/\s+/).length < 5) {
        problems.push(`${where}: model answer too short for "${question.prompt.slice(0, 40)}"`);
      }
      if (!question.rubric || question.rubric.length === 0) {
        problems.push(`${where}: no rubric for "${question.prompt.slice(0, 40)}"`);
      }
    }
    expect(problems.slice(0, 10)).toEqual([]);
  });

  it('never includes the identical question twice in one assessment', () => {
    // A repeated stem with different options is a deliberate second look at the
    // same skill; an identical stem *and* identical answer key is an accidental
    // copy that wastes a practice slot.
    const seen = new Map<string, string>();
    const problems: string[] = [];
    for (const { where, question } of items) {
      const signature = JSON.stringify([
        where,
        question.prompt.trim().toLowerCase(),
        question.kind,
        question.kind === 'mc' ? question.choices : question.kind === 'numeric' ? question.answer : question.modelAnswer,
      ]);
      if (seen.has(signature)) problems.push(`${where}: duplicated item "${question.prompt.slice(0, 40)}"`);
      seen.set(signature, where);
    }
    expect(problems.slice(0, 10)).toEqual([]);
  });
});
