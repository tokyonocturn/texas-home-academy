import type { WorkedExample } from '../../types';

/**
 * Authored depth for one lesson. Every field is specific to the lesson it
 * belongs to: no shared boilerplate, no generated filler. The curriculum-depth
 * test checks the resulting lesson against `DEPTH_STANDARD`, and the Sources
 * page reports any lesson that is still below it.
 */
export interface LessonDepth {
  /** Topic tags; each must appear in the lesson text so tags cannot drift. */
  topics: string[];
  /** Heading for the application section. */
  applicationTitle: string;
  /** Real-world application of this lesson's specific idea. */
  application: string;
  /** A second worked example, different from the lesson's own. */
  example: WorkedExample;
  /** Two or more terms with real definitions. */
  terms: [string, string][];
  /** Review questions with model answers. */
  review: { prompt: string; answer: string }[];
  /** Off-screen exercises, verified by a parent. */
  exercises: string[];
}
