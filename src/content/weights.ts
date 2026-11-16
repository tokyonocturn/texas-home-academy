import type { CategoryId } from '../types';

/** Category weights by level. Each set totals 100. */
export const ELEMENTARY_WEIGHTS: Partial<Record<CategoryId, number>> = {
  participation: 10,
  practice: 30,
  quiz: 25,
  exam: 20,
  project: 15,
};

export const MIDDLE_WEIGHTS: Partial<Record<CategoryId, number>> = {
  practice: 20,
  quiz: 30,
  exam: 30,
  project: 20,
};

export const HIGH_WEIGHTS: Partial<Record<CategoryId, number>> = {
  practice: 10,
  quiz: 25,
  exam: 40,
  project: 25,
};

export const ADULT_WEIGHTS: Partial<Record<CategoryId, number>> = {
  practice: 15,
  quiz: 20,
  exam: 25,
  project: 40,
};
