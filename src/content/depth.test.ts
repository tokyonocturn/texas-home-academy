import { describe, expect, it } from 'vitest';
import { COURSES } from './index';
import { DEPTH } from './depth';
import {
  DEPTH_STANDARD,
  curriculumDepthReport,
  lessonDepthStatus,
  proseMinimum,
  templateViolations,
} from './depth/standard';
import { KNOWN_DEPTH_SHORTFALLS } from './depth/shortfalls';
import type { Lesson } from '../types';

/**
 * Curriculum-depth gate, version 2.
 *
 * A lesson is compliant only when it is self-teaching: four objectives, three
 * explanatory sections, grade-scaled prose, three worked examples, eight defined
 * terms, five practice items, four exercises, four reviewed questions, and three
 * discussed topics. Lessons that do not meet it must appear in the checked-in
 * shortfall ledger with their measured counts; the ledger is verified against a
 * fresh measurement, so it cannot drift into a comfortable lie.
 */

const K12 = COURSES.filter((course) => course.subject !== 'adult-education');
const lessons = K12.flatMap((course) =>
  course.units.flatMap((unit) =>
    unit.lessons.map((lesson) => ({ course, lesson, status: lessonDepthStatus(course.id, lesson, course.grade) })),
  ),
);

describe('curriculum depth standard', () => {
  it('walks the entire K-12 catalog', () => {
    expect(lessons.length).toBeGreaterThan(190);
    expect(new Set(lessons.map((entry) => entry.lesson.id)).size).toBe(lessons.length);
  });

  it('is a self-teaching minimum, scaled by grade band', () => {
    expect(DEPTH_STANDARD.minObjectives).toBeGreaterThanOrEqual(4);
    expect(DEPTH_STANDARD.minSections).toBeGreaterThanOrEqual(3);
    expect(DEPTH_STANDARD.minProseWords).toBeGreaterThanOrEqual(450);
    expect(DEPTH_STANDARD.minExamples).toBeGreaterThanOrEqual(3);
    expect(DEPTH_STANDARD.minTerms).toBeGreaterThanOrEqual(8);
    expect(DEPTH_STANDARD.minPractice).toBeGreaterThanOrEqual(5);
    expect(DEPTH_STANDARD.minExercises).toBeGreaterThanOrEqual(4);
    expect(DEPTH_STANDARD.minReview).toBeGreaterThanOrEqual(4);
    expect(DEPTH_STANDARD.minTopics).toBeGreaterThanOrEqual(3);
    expect(proseMinimum(0)).toBeGreaterThanOrEqual(350);
    expect(proseMinimum(4)).toBeGreaterThanOrEqual(400);
    expect(proseMinimum(7)).toBeGreaterThanOrEqual(500);
    expect(proseMinimum(10)).toBeGreaterThanOrEqual(600);
  });

  it('names the lesson and the criterion when a lesson is shallow', () => {
    const shallow: Lesson = {
      id: 'synthetic-shallow',
      title: 'Shallow lesson',
      minutes: 5,
      objectives: ['One objective'],
      sections: [{ heading: 'Intro', paragraphs: ['A short paragraph.'] }],
      practice: [],
    };
    const status = lessonDepthStatus('synthetic-course', shallow, 9);
    expect(status.ok).toBe(false);
    expect(status.lessonId).toBe('synthetic-shallow');
    expect(status.failures.join(' ')).toContain('objectives');
    expect(status.failures.join(' ')).toContain('prose words');
    expect(status.failures.join(' ')).toContain('worked examples');
    expect(status.failures.join(' ')).toContain('defined terms');
  });

  it('records every lesson below the bar in the ledger, with measured counts', () => {
    const actual = lessons.filter((entry) => !entry.status.ok);

    const ledger = new Map(KNOWN_DEPTH_SHORTFALLS.map((entry) => [entry.lessonId, entry]));
    expect(ledger.size).toBe(KNOWN_DEPTH_SHORTFALLS.length);
    // The ledger is a bijection with the measured shortfalls: every short lesson is
    // listed with its counts, and every listed lesson is still short. When the whole
    // curriculum meets the bar this is 0 = 0, which is the intended end state.
    expect(ledger.size).toBe(actual.length);

    for (const { status } of actual) {
      const entry = ledger.get(status.lessonId);
      expect(entry, `${status.lessonId} is below the bar but missing from shortfalls.ts`).toBeTruthy();
      expect(entry!.prose, `${status.lessonId} ledger prose drifted`).toBe(status.prose);
      expect(entry!.requiredProse, `${status.lessonId} ledger requirement drifted`).toBe(
        status.requiredProse,
      );
      expect(entry!.teaching).toBe(status.teaching);
    }

    const actualIds = new Set(actual.map((entry) => entry.status.lessonId));
    for (const id of ledger.keys()) {
      expect(actualIds.has(id), `${id} is listed as short but meets the bar`).toBe(true);
    }
  });

  it('attaches every depth entry to a real lesson', () => {
    const ids = new Set(lessons.map((entry) => entry.lesson.id));
    for (const id of Object.keys(DEPTH)) expect(ids.has(id), `${id} has no lesson`).toBe(true);
  });

  it('reports the same counts the Sources page shows', () => {
    const report = curriculumDepthReport(COURSES);
    expect(report.total).toBe(lessons.length);
    expect(report.met + report.shortfalls.length).toBe(report.total);
    expect(report.shortfalls.map((s) => s.lessonId).sort()).toEqual(
      KNOWN_DEPTH_SHORTFALLS.map((s) => s.lessonId).sort(),
    );
  });

  it('rejects duplicated or near-duplicated prose across lessons', () => {
    const violations = templateViolations(COURSES);
    expect(violations, violations.slice(0, 5).join('; ')).toEqual([]);
  });

  it('holds expanded lessons to the grade-scaled prose count', () => {
    for (const { status } of lessons) {
      if (status.ok) {
        expect(status.prose, status.lessonId).toBeGreaterThanOrEqual(status.requiredProse);
      }
    }
  });
});
