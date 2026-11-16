import type { RubricRow } from '../types';
import { rubricRow } from './builders';

/**
 * Shared analytic rubrics (100 points each). Reusing a documented rubric across
 * courses keeps grading consistent and makes the criteria visible to students
 * before they begin.
 */

export const WRITING_PROJECT: RubricRow[] = [
  rubricRow('Ideas and content', 35, [
    ['Excellent', 'Clear focus with specific, relevant detail.', 35],
    ['Proficient', 'Clear focus with some detail.', 28],
    ['Developing', 'Topic present but general.', 19],
    ['Beginning', 'Off topic or missing.', 8],
  ]),
  rubricRow('Organization', 25, [
    ['Excellent', 'Logical order with effective introduction and conclusion.', 25],
    ['Proficient', 'Clear order.', 20],
    ['Developing', 'Order hard to follow.', 14],
    ['Beginning', 'No discernible order.', 6],
  ]),
  rubricRow('Language and conventions', 30, [
    ['Excellent', 'Precise words; few errors.', 30],
    ['Proficient', 'Clear language; minor errors.', 24],
    ['Developing', 'Errors distract in places.', 16],
    ['Beginning', 'Errors impede meaning.', 7],
  ]),
  rubricRow('Presentation', 10, [
    ['Excellent', 'Neat, labeled, and complete.', 10],
    ['Proficient', 'Readable.', 8],
    ['Developing', 'Disorganized.', 5],
    ['Beginning', 'Unusable.', 2],
  ]),
];

export const INQUIRY_PROJECT: RubricRow[] = [
  rubricRow('Question and prediction', 25, [
    ['Excellent', 'Testable question and reasoned prediction.', 25],
    ['Proficient', 'Clear question and prediction.', 20],
    ['Developing', 'Vague question.', 14],
    ['Beginning', 'No question.', 6],
  ]),
  rubricRow('Investigation and data', 35, [
    ['Excellent', 'Careful method; organized, accurate data.', 35],
    ['Proficient', 'Sound method; usable data.', 28],
    ['Developing', 'Inconsistent data.', 19],
    ['Beginning', 'No data.', 8],
  ]),
  rubricRow('Explanation', 30, [
    ['Excellent', 'Explains results with evidence and limits.', 30],
    ['Proficient', 'Reasonable explanation.', 24],
    ['Developing', 'Restates data only.', 16],
    ['Beginning', 'No explanation.', 7],
  ]),
  rubricRow('Safety and care', 10, [
    ['Excellent', 'Followed all precautions.', 10],
    ['Proficient', 'Minor lapse.', 8],
    ['Developing', 'Careless.', 4],
    ['Beginning', 'Unsafe.', 0],
  ]),
];

export const MATH_PROJECT: RubricRow[] = [
  rubricRow('Model and reasoning', 35, [
    ['Excellent', 'Correct model with reasoning shown.', 35],
    ['Proficient', 'Correct model, reasoning thin.', 28],
    ['Developing', 'Partially correct.', 19],
    ['Beginning', 'Incorrect.', 8],
  ]),
  rubricRow('Accuracy', 35, [
    ['Excellent', 'Accurate throughout.', 35],
    ['Proficient', 'Minor error.', 28],
    ['Developing', 'Several errors.', 19],
    ['Beginning', 'Mostly incorrect.', 8],
  ]),
  rubricRow('Explanation and units', 20, [
    ['Excellent', 'Explains in context with correct units.', 20],
    ['Proficient', 'Adequate.', 16],
    ['Developing', 'Missing units.', 11],
    ['Beginning', 'Unclear.', 4],
  ]),
  rubricRow('Presentation', 10, [
    ['Excellent', 'Clear and organized.', 10],
    ['Proficient', 'Readable.', 8],
    ['Developing', 'Disorganized.', 5],
    ['Beginning', 'Unusable.', 2],
  ]),
];

export const CREATIVE_PROJECT: RubricRow[] = [
  rubricRow('Craft and technique', 35, [
    ['Excellent', 'Controlled technique serving the idea.', 35],
    ['Proficient', 'Competent technique.', 28],
    ['Developing', 'Rushed or inconsistent.', 19],
    ['Beginning', 'Careless.', 8],
  ]),
  rubricRow('Creativity and choices', 30, [
    ['Excellent', 'Deliberate, original choices.', 30],
    ['Proficient', 'Some deliberate choices.', 24],
    ['Developing', 'Conventional or random.', 16],
    ['Beginning', 'No evident choices.', 7],
  ]),
  rubricRow('Explanation of process', 25, [
    ['Excellent', 'Specific reflection on decisions.', 25],
    ['Proficient', 'General reflection.', 20],
    ['Developing', 'Minimal.', 14],
    ['Beginning', 'None.', 6],
  ]),
  rubricRow('Presentation', 10, [
    ['Excellent', 'Complete and labeled.', 10],
    ['Proficient', 'Readable.', 8],
    ['Developing', 'Disorganized.', 5],
    ['Beginning', 'Unusable.', 2],
  ]),
];
