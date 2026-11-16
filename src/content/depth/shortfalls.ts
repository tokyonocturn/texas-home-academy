/**
 * Lessons below curriculum-depth standard v2, with the counts measured when this
 * file was generated. This is a ratchet: the depth test recomputes every count
 * and fails if a lesson here has changed without the ledger being regenerated,
 * if a short lesson is missing, or if a compliant lesson is still listed.
 *
 * Short: 0 of 201 K-12 lessons.
 */
export interface DepthShortfall {
  lessonId: string;
  courseId: string;
  grade: number;
  prose: number;
  requiredProse: number;
  teaching: number;
  failures: string[];
}

export const KNOWN_DEPTH_SHORTFALLS: DepthShortfall[] = [

];
