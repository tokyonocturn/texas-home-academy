import { describe, expect, it } from 'vitest';
import { COURSES } from '../index';
import type { Lesson } from '../../types';

/**
 * Arithmetic regression tests for the adult-education curriculum.
 *
 * These exist because a worked example once converted a per-$1 property tax
 * rate to a per-$100 rate by dividing when it should have multiplied, reporting
 * $0.0019 per $100 instead of $0.192 — an error of two orders of magnitude.
 * The tests recompute the figures from the example's own stated assumptions and
 * compare them with the published text, so the arithmetic and the unit
 * conversion are both checked, not just the wording.
 */

const ADULT = COURSES.filter((course) => course.subject === 'adult-education');
const adultLessons = ADULT.flatMap((course) =>
  course.units.flatMap((unit) => unit.lessons.map((lesson) => ({ courseId: course.id, lesson }))),
);

function lessonText(lesson: Lesson): string {
  return [
    lesson.title,
    ...lesson.objectives,
    ...lesson.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ...(lesson.example ? [lesson.example.prompt, ...lesson.example.steps, lesson.example.answer] : []),
    ...(lesson.extraExample ? [lesson.extraExample.prompt, ...lesson.extraExample.steps, lesson.extraExample.answer] : []),
    ...(lesson.examples ?? []).flatMap((example) => [example.prompt, ...example.steps, example.answer]),
    ...(lesson.keyTerms ?? []).flatMap((term) => [term.term, term.definition]),
    ...lesson.practice.map((item) => item.prompt),
    ...(lesson.review ?? []).flatMap((item) => [item.prompt, item.answer]),
    ...(lesson.assignments ?? []),
  ].join('\n');
}

function lessonById(id: string): Lesson {
  const found = adultLessons.find((entry) => entry.lesson.id === id);
  if (!found) throw new Error(`${id} is missing from the adult-education catalogue`);
  return found.lesson;
}

function allExamples(lesson: Lesson) {
  return [lesson.example, lesson.extraExample, ...(lesson.examples ?? [])].filter(
    (example): example is NonNullable<Lesson['example']> => Boolean(example),
  );
}

describe('adult education arithmetic', () => {
  it('measures every adult lesson, so these checks cover the whole course', () => {
    expect(ADULT.length).toBeGreaterThan(0);
    expect(adultLessons.length).toBe(16);
  });

  it('converts the school bond rate to dollars per $100 correctly', () => {
    const lesson = lessonById('adult-u6-l1');
    const bond = allExamples(lesson).find((example) => /school bond/i.test(example.prompt));
    if (!bond) throw new Error('the school bond worked example is missing from adult-u6-l1');

    // Recompute from the assumptions stated in the example.
    const principal = 90_000_000;
    const rate = 0.04;
    const years = 25;
    const taxableValue = 3_000_000_000;
    const annualDebtService = (principal * rate) / (1 - Math.pow(1 + rate, -years));
    const perDollar = annualDebtService / taxableValue;
    const perHundred = perDollar * 100;

    expect(perHundred).toBeCloseTo(0.192, 3);

    const text = [bond.prompt, ...bond.steps, bond.answer].join('\n');
    expect(text).toMatch(/per \$100/i);
    expect(text).toContain('0.192');
    expect(text).toContain('19.2 cents');
    // The unit conversion must be shown, not just asserted.
    expect(text).toMatch(/0\.00192/);
    expect(text).toMatch(/×\s*100/);

    // The published rate must equal the recomputed rate, and must not be the
    // per-$1 rate mislabelled as a per-$100 rate.
    const stated = Number(/([0-9.]+)\s*per \$100/i.exec(text)?.[1]);
    expect(stated).toBeCloseTo(perHundred, 3);
    expect(text).not.toMatch(/\$0\.0019\b/);
    expect(text).not.toMatch(/\btwo cents\b/i);
  });

  it('never labels a per-$1 rate as a rate per $100 anywhere in the course', () => {
    for (const { lesson } of adultLessons) {
      const text = lessonText(lesson);
      const matcher = /([0-9]+(?:\.[0-9]+)?)\s*(?:\$)?\s*per\s*\$100/gi;
      for (const match of text.matchAll(matcher)) {
        const value = Number(match[1]);
        // A genuine per-$100 property tax rate is expressed in dollars and
        // cents, e.g. $0.192; anything below one cent is a per-$1 figure.
        expect(value, `${lesson.id} quotes ${match[0]}`).toBeGreaterThanOrEqual(0.01);
      }
    }
  });

  it('reports the expense-ratio drag consistently with its assumptions', () => {
    const lesson = lessonById('adult-u7-l2');
    const balance = 50_000;
    const netLow = 0.05;
    const netHigh = 0.0595;
    const years = 30;
    const withFee = balance * Math.pow(1 + netLow, years);
    const withoutFee = balance * Math.pow(1 + netHigh, years);
    const drag = withoutFee - withFee;

    expect(Math.round(withFee / 1000) * 1000).toBe(216_000);
    expect(Math.round(withoutFee / 1000) * 1000).toBe(283_000);
    expect(Math.round(drag / 1000) * 1000).toBe(67_000);

    const text = lessonText(lesson);
    expect(text).toContain('216,000');
    expect(text).toContain('283,000');
    expect(text).toContain('67,000');
    expect(text).not.toContain('287,000');
    expect(text).not.toContain('71,000');
  });
});
