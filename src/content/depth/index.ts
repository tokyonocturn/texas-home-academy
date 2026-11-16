import type { LessonDepth } from './types';
import { DEPTH_K1 } from './k1';
import { DEPTH_G2 } from './g2';
import { DEPTH_G35 } from './g35';
import { DEPTH_G68 } from './g68';
import { DEPTH_HS_A } from './hsA';
import { DEPTH_HS_B } from './hsB';
import { DEPTH_HS_C } from './hsC';
import { DEPTH_KINDER } from './deepK';
import { DEPTH_G1 } from './deepG1';
import { DEPTH_G2A } from './deepG2a';
import { DEPTH_G2B } from './deepG2b';
import { DEPTH_G3A } from './deepG3a';
import { DEPTH_G3B } from './deepG3b';
import { DEPTH_G4A } from './deepG4a';
import { DEPTH_G4B } from './deepG4b';
import { DEPTH_G5A } from './deepG5a';
import { DEPTH_G5B } from './deepG5b';
import { DEPTH_G6A } from './deepG6a';
import { DEPTH_G6B } from './deepG6b';
import { DEPTH_G7A } from './deepG7a';
import { DEPTH_G7B } from './deepG7b';
import { DEPTH_MSA } from './deepMSa';
import { DEPTH_MSB } from './deepMSb';
import { DEPTH_G8A } from './deepG8a';
import { DEPTH_G8B } from './deepG8b';
import { DEPTH_G9A } from './deepG9a';

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

/**
 * Depth pass 2: lessons raised to the self-teaching standard. Kept separate so
 * the original authored blocks are not rewritten, and merged over them.
 */
export const DEEP: Record<string, LessonDepth> = {
  ...DEPTH_KINDER,
  ...DEPTH_G1,
  ...DEPTH_G2A,
  ...DEPTH_G2B,
  ...DEPTH_G3A,
  ...DEPTH_G3B,
  ...DEPTH_G4A,
  ...DEPTH_G4B,
  ...DEPTH_G5A,
  ...DEPTH_G5B,
  ...DEPTH_G6A,
  ...DEPTH_G6B,
  ...DEPTH_G7A,
  ...DEPTH_G7B,
  ...DEPTH_MSA,
  ...DEPTH_MSB,
  ...DEPTH_G8A,
  ...DEPTH_G8B,
  ...DEPTH_G9A,
};

export type { LessonDepth };
