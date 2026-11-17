import { describe, expect, it } from 'vitest';
import type { GradeRecord } from '../types';
import { COURSES } from '../content';
import { FHSP_REQUIREMENTS, auditGraduation } from './graduation';

function record(courseId: string, suffix: string, category: 'quiz' | 'exam', period: string, score: number): GradeRecord {
  return {
    id: `${courseId}-${suffix}`,
    courseId,
    assessmentId: `${courseId}:${suffix}`,
    title: suffix,
    category,
    score,
    max: 100,
    attempt: 1,
    recordedAt: '2027-05-01',
    period,
    gradedBy: 'auto',
  };
}

/** Coursework in both semesters plus the cumulative final exam. */
function finalExam(courseId: string, score = 90): GradeRecord[] {
  return [
    record(courseId, 'q1', 'quiz', 'Q1', score),
    record(courseId, 'q6', 'quiz', 'Q6', score),
    record(courseId, 'final', 'exam', 'Q6', score),
  ];
}

const coreIds = FHSP_REQUIREMENTS.filter((r) => r.id !== 'electives').flatMap((r) => r.courseIds);
const electiveIds = [
  'hs-cs1',
  'hs-speech',
  'hs-health',
  'hs-pfl',
  'hs-cte-business',
  'hs-cte-health',
  'hs-adulting',
];

describe('graduation audit', () => {
  it('starts empty with no credits', () => {
    const audit = auditGraduation(COURSES, []);
    expect(audit.totalCredits).toBe(0);
    expect(audit.fhspMet).toBe(false);
    expect(audit.dlaEligible).toBe(false);
    expect(audit.completed).toHaveLength(0);
  });

  it('satisfies every FHSP requirement when the required courses are passed', () => {
    const records = [...coreIds, ...electiveIds].flatMap((id) => finalExam(id));
    const audit = auditGraduation(COURSES, records);

    for (const requirement of audit.requirements) {
      expect(requirement.satisfied, requirement.label).toBe(true);
    }
    expect(audit.fhspMet).toBe(true);
    expect(audit.totalCredits).toBeGreaterThanOrEqual(22);
    expect(audit.endorsements.length).toBe(5);
  });

  it('counts a reported 70.0 as passing credit', () => {
    // A raw 69.96 reports as 70.0; the gradebook awards credit, so the audit must too.
    const audit = auditGraduation(COURSES, finalExam('hs-alg1', 69.96));
    expect(audit.totalCredits).toBe(1);
    expect(audit.requirements.find((r) => r.id === 'math')?.earned).toBe(1);
    expect(audit.completed.map((c) => c.courseId)).toEqual(['hs-alg1']);
  });

  it('does not count a failed course toward a requirement', () => {
    const records = coreIds.flatMap((id) => finalExam(id, id === 'hs-eng1' ? 55 : 90));
    const audit = auditGraduation(COURSES, records);
    const english = audit.requirements.find((r) => r.id === 'ela');
    expect(english?.earned).toBe(3);
    expect(english?.satisfied).toBe(false);
  });

  it('requires the math sequence, not just three math credits', () => {
    const records = ['hs-alg1', 'hs-alg2', 'hs-precalc'].flatMap((id) => finalExam(id));
    const audit = auditGraduation(COURSES, records);
    const math = audit.requirements.find((requirement) => requirement.id === 'math');
    expect(math?.earned).toBe(3);
    expect(math?.sequenceMet).toBe(false);
    expect(math?.missingSequence).toContain('Geometry');
    expect(math?.satisfied).toBe(false);
  });

  it('requires the government and economics social-studies sequence', () => {
    const records = ['hs-world-geo', 'hs-world-hist', 'hs-us-hist'].flatMap((id) =>
      finalExam(id),
    );
    const audit = auditGraduation(COURSES, records);
    const social = audit.requirements.find((requirement) => requirement.id === 'social');
    expect(social?.earned).toBe(3);
    expect(social?.sequenceMet).toBe(false);
    expect(social?.missingSequence).toEqual(['U.S. Government', 'Economics']);
    expect(social?.satisfied).toBe(false);
  });

  it('requires Algebra II, four math, four science, and 26 credits for the DLA', () => {
    const records = [...coreIds, ...electiveIds].flatMap((id) => finalExam(id));
    const audit = auditGraduation(COURSES, records);
    expect(audit.algebra2).toBe(true);
    expect(audit.mathCredits).toBeGreaterThanOrEqual(4);
    expect(audit.scienceCredits).toBeGreaterThanOrEqual(4);
    expect(audit.hasEndorsement).toBe(true);
    expect(audit.dlaEligible).toBe(audit.totalCredits >= 26);
  });
});
