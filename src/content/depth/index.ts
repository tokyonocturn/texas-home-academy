import type { LessonDepth } from './types';
import { DEPTH_K1 } from './k1';
import { DEPTH_G2 } from './g2';
import { DEPTH_G35 } from './g35';
import { DEPTH_G68 } from './g68';
import { DEPTH_HS_A } from './hsA';
import { DEPTH_HS_B } from './hsB';
import { DEPTH_HS_C } from './hsC';

/**
 * Lesson depth registry, keyed by lesson id. Entries are merged into the catalog
 * by `expandLesson` in `src/content/index.ts`. The curriculum-depth test fails if
 * a lesson is below the standard and not listed in the checked-in shortfall
 * ledger, so the gap is tracked instead of quietly ignored.
 */
export const DEPTH: Record<string, LessonDepth> = {
  ...DEPTH_K1,
  ...DEPTH_G2,
  ...DEPTH_G35,
  ...DEPTH_G68,
  ...DEPTH_HS_A,
  ...DEPTH_HS_B,
  ...DEPTH_HS_C,
};

export type { LessonDepth };
