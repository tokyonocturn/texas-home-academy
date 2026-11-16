import { describe, expect, it } from 'vitest';
import type { AppState } from '../types';
import { reducer } from '../state/reducer';
import { defaultState } from '../state/persistence';
import { applyRetakeCap } from './progression';

/**
 * Retake cap regression tests.
 *
 * The cap is 80 percent of the assessment maximum. A previous implementation
 * compared raw points with 80, so an 18-point quiz retake was never capped and
 * a 100-point exam retake happened to look correct. These tests pin the cap to
 * a percentage so the two cases cannot diverge again.
 */

function state(): AppState {
  return { ...structuredClone(defaultState), profile: { ...defaultState.profile, gradeLevel: 9 } };
}

function record(stateIn: AppState, score: number, max: number, attempt?: number): AppState {
  return reducer(stateIn, {
    type: 'grade/record',
    record: {
      courseId: 'hs-alg1',
      assessmentId: 'hs-alg1:u1:quiz',
      title: 'Unit 1 quiz',
      category: 'quiz',
      score,
      max,
      attempt,
      period: 'Q2',
      gradedBy: 'auto',
    },
  });
}

describe('retake cap', () => {
  it('caps a retake at 80 percent of the maximum, not 80 points', () => {
    // 80 percent of 18 is 14.4 points, so a perfect retake earns 14.4, not 18.
    expect(applyRetakeCap(18, 18, 2)).toBeCloseTo(14.4, 5);
    expect(applyRetakeCap(17, 18, 2)).toBeCloseTo(14.4, 5);
    // A score already below the cap is unchanged, and a high score is capped.
    expect(applyRetakeCap(18, 100, 2)).toBeCloseTo(18, 5);
    expect(applyRetakeCap(95, 100, 2)).toBeCloseTo(80, 5);
  });

  it('leaves a first attempt untouched', () => {
    expect(applyRetakeCap(95, 100, 1)).toBe(95);
    expect(applyRetakeCap(18, 18, 1)).toBe(18);
  });

  it('applies the percentage cap when the reducer stores a retake', () => {
    let s = record(state(), 17, 18);
    expect(s.grades[0].attempt).toBe(1);
    expect(s.grades[0].score).toBe(17);

    s = record(s, 18, 18);
    expect(s.grades[1].attempt).toBe(2);
    expect(s.grades[1].score).toBeCloseTo(14.4, 5);
  });

  it('never awards a practice retake cap, because practice is formative', () => {
    let s = reducer(state(), {
      type: 'grade/record',
      record: {
        courseId: 'hs-alg1',
        assessmentId: 'hs-alg1:alg1-u1-l1:practice',
        title: 'Practice',
        category: 'practice',
        score: 8,
        max: 20,
        period: 'Q2',
        gradedBy: 'auto',
      },
    });
    s = reducer(s, {
      type: 'grade/record',
      record: {
        courseId: 'hs-alg1',
        assessmentId: 'hs-alg1:alg1-u1-l1:practice',
        title: 'Practice',
        category: 'practice',
        score: 20,
        max: 20,
        period: 'Q2',
        gradedBy: 'auto',
      },
    });
    expect(s.grades[1].score).toBe(20);
  });
});
