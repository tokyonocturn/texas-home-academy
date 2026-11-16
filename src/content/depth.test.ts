import { describe, expect, it } from 'vitest';
import { COURSES } from './index';
import { DEPTH } from './depth';
import { DEPTH_STANDARD, curriculumDepthReport, lessonDepthStatus } from './depth/standard';
import { KNOWN_DEPTH_SHORTFALLS } from './depth/shortfalls';

/**
 * Curriculum-depth gate.
 *
 * The standard: every K-12 lesson teaches its own topic with at least two
 * objectives, two sections, 190 words of taught prose, two worked examples of
 * two or more steps, two defined terms, two practice items, two off-screen
 * exercises, and two review questions with real model answers.
 *
 * Lessons authored to the standard pass outright. Lessons not yet authored are
 * listed in `shortfalls.ts`; that ledger is checked in both directions, so a
 * short lesson cannot be added silently and an expanded lesson cannot stay on
 * the list.
 */

const K12 = COURSES.filter((course) => course.subject !== 'adult-education');
const lessons = K12.flatMap((course) =>
  course.units.flatMap((unit) => unit.lessons.map((lesson) => ({ course, lesson }))),
);

describe('curriculum depth standard', () => {
  it('walks the entire K-12 catalog', () => {
    expect(lessons.length).toBeGreaterThan(190);
    expect(new Set(lessons.map((entry) => entry.lesson.id)).size).toBe(lessons.length);
  });

  it('passes every lesson that has authored depth', () => {
    const authored = lessons.filter((entry) => DEPTH[entry.lesson.id]);
    expect(authored.length).toBeGreaterThan(60);
    for (const { course, lesson } of authored) {
      expect(lessonDepthStatus(course.id, lesson).failures, lesson.id).toEqual([]);
    }
  });

  it('records every remaining shortfall in the checked-in ledger', () => {
    const actual = lessons
      .filter((entry) => !lessonDepthStatus(entry.course.id, entry.lesson).ok)
      .map((entry) => entry.lesson.id)
      .sort();
    expect(actual).toEqual([...KNOWN_DEPTH_SHORTFALLS].sort());
  });

  it('does not leave an expanded lesson on the shortfall ledger', () => {
    for (const id of KNOWN_DEPTH_SHORTFALLS) {
      expect(DEPTH[id], `${id} is expanded but still listed as short`).toBeUndefined();
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
      [...KNOWN_DEPTH_SHORTFALLS].sort(),
    );
  });

  it('keeps the standard meaningful', () => {
    expect(DEPTH_STANDARD.minTeachingWords).toBeGreaterThanOrEqual(190);
    expect(DEPTH_STANDARD.minExamples).toBeGreaterThanOrEqual(2);
    expect(DEPTH_STANDARD.minReview).toBeGreaterThanOrEqual(2);
  });

  it('does not pad a lesson with copy-pasted applications', () => {
    const applications = Object.values(DEPTH).map((entry) => entry.application);
    expect(new Set(applications).size).toBe(applications.length);
    const applicationsByTopic = new Map<string, string[]>();
    for (const [id, entry] of Object.entries(DEPTH)) {
      const title = entry.applicationTitle.toLowerCase();
      const seen = applicationsByTopic.get(title) ?? [];
      seen.push(id);
      applicationsByTopic.set(title, seen);
    }
    for (const [title, ids] of applicationsByTopic) {
      expect(ids.length, `application title reused: ${title}`).toBe(1);
    }
  });
});
