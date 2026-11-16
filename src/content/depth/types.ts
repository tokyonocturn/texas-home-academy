import type { Question, WorkedExample } from '../../types';

/**
 * Authored depth for one lesson. Everything is specific to that lesson; the
 * depth gate measures the merged result, and the in-app report shows the same
 * measured numbers.
 *
 * v1 entries supplied an application, a second worked example, terms, review,
 * and exercises. v2 entries may add objectives, full sections, further worked
 * examples, and practice items to reach the self-teaching standard.
 */
export interface LessonDepth {
  /** Topic tags; each must appear in the lesson text so tags cannot drift. */
  topics: string[];
  /** Real-world application section. */
  applicationTitle?: string;
  application?: string;
  /** A further worked example, different from the lesson's own. */
  example?: WorkedExample;
  /** Terms with real definitions. */
  terms?: [string, string][];
  /** Review questions with model answers. */
  review?: { prompt: string; answer: string }[];
  /** Off-screen exercises, verified by a parent. */
  exercises?: string[];
  /** Additional learning objectives. */
  objectives?: string[];
  /** Additional explanatory sections of taught prose. */
  sections?: { heading: string; paragraphs: string[] }[];
  /** Additional worked examples with multi-step reasoning. */
  examples?: WorkedExample[];
  /** Additional practice items. */
  practice?: Question[];
}
