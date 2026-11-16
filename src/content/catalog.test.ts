import { describe, expect, it } from 'vitest';
import { SUBJECT_LABELS, type SubjectId } from '../types';
import { COURSES, COURSE_MAP, recommendedForGrade, validateCatalog } from './index';

const CORE: SubjectId[] = ['ela', 'math', 'science', 'social-studies'];

describe('catalog integrity', () => {
  it('passes its own validation', () => {
    expect(validateCatalog(COURSES)).toEqual([]);
  });

  it('has unique ids and every id resolves', () => {
    expect(new Set(COURSES.map((c) => c.id)).size).toBe(COURSES.length);
    for (const course of COURSES) {
      expect(COURSE_MAP[course.id]).toBe(course);
    }
  });

  it('uses only known subjects', () => {
    for (const course of COURSES) {
      expect(SUBJECT_LABELS[course.subject]).toBeTruthy();
    }
  });
});

describe('grade coverage', () => {
  it('provides all four core subjects in every grade K-8', () => {
    for (let grade = 0; grade <= 8; grade += 1) {
      const subjects = new Set(recommendedForGrade(grade).map((c) => c.subject));
      for (const subject of CORE) {
        expect(subjects.has(subject), `grade ${grade} missing ${subject}`).toBe(true);
      }
    }
  });

  it('provides fine arts, health or PE, and technology in every K-8 grade', () => {
    for (let grade = 0; grade <= 8; grade += 1) {
      const subjects = new Set(recommendedForGrade(grade).map((c) => c.subject));
      expect(subjects.has('fine-arts'), `grade ${grade} missing fine arts`).toBe(true);
      expect(subjects.has('technology'), `grade ${grade} missing technology`).toBe(true);
      expect(
        subjects.has('pe') || subjects.has('health'),
        `grade ${grade} missing health/PE`,
      ).toBe(true);
    }
  });

  it('provides languages other than English in grades 6-8 and high school', () => {
    expect(recommendedForGrade(7).some((c) => c.subject === 'lote')).toBe(true);
    expect(COURSES.filter((c) => c.subject === 'lote' && c.credits > 0).length).toBeGreaterThanOrEqual(2);
  });

  it('offers at least 25 credit-bearing high-school courses', () => {
    expect(COURSES.filter((c) => c.credits > 0).length).toBeGreaterThanOrEqual(25);
  });
});
