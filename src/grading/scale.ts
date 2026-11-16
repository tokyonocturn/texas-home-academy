/**
 * Grading scale and credit policy.
 *
 * Texas rule: credit for a high-school graduation course may be earned only if
 * the student received a grade equivalent to 70 on a 100-point scale.
 * Citation: 19 TAC §74.26(c) (TEA, Chapter 74, Subchapter C).
 *
 * The letter bands below (A 90-100, B 80-89, C 70-79, D 60-69, F below 60) are
 * the common Texas district scale and are adopted here as *this program's*
 * documented policy. They are not asserted to be a statewide mandate.
 */

export const PASSING_GRADE = 70;
export const MIN_PASSING_LETTER = 'C';

export type LetterGrade = 'A' | 'B' | 'C' | 'D' | 'F' | '—';

export const LETTER_BANDS: { letter: LetterGrade; min: number; points: number }[] = [
  { letter: 'A', min: 90, points: 4.0 },
  { letter: 'B', min: 80, points: 3.0 },
  { letter: 'C', min: 70, points: 2.0 },
  { letter: 'D', min: 60, points: 1.0 },
  { letter: 'F', min: 0, points: 0.0 },
];

/** Advanced courses earn +0.5 quality point in the weighted GPA, per policy. */
export const ADVANCED_BONUS = 0.5;
export const MAX_QUALITY_POINTS = 4.5;

export function clampGrade(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(100, Math.max(0, value));
}

export function letterGrade(numeric: number | null): LetterGrade {
  if (numeric === null || !Number.isFinite(numeric)) return '—';
  const value = clampGrade(numeric);
  for (const band of LETTER_BANDS) {
    if (value >= band.min) return band.letter;
  }
  return 'F';
}

export function baseQualityPoints(numeric: number): number {
  const value = clampGrade(numeric);
  for (const band of LETTER_BANDS) {
    if (value >= band.min) return band.points;
  }
  return 0;
}

export function qualityPoints(numeric: number, advanced = false): number {
  const base = baseQualityPoints(numeric);
  if (base === 0) return 0; // no bonus for a failing grade
  return advanced ? Math.min(MAX_QUALITY_POINTS, base + ADVANCED_BONUS) : base;
}

export function isPassing(numeric: number | null): boolean {
  return numeric !== null && numeric >= PASSING_GRADE;
}

export function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

export function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

/** Letter -> quality points used when a parent enters a final letter only. */
export function pointsForLetter(letter: LetterGrade): number {
  const band = LETTER_BANDS.find((b) => b.letter === letter);
  return band ? band.points : 0;
}

export const GRADE_POLICY = {
  passing: PASSING_GRADE,
  passingCitation: '19 TAC §74.26(c)',
  letterBands: LETTER_BANDS,
  gpaScale: '4.0 unweighted; 4.5 maximum weighted (advanced courses +0.5)',
  /** How period, semester, and final grades are assembled. */
  semesterFormula:
    'Six-week period grade = weighted average of the graded categories in that period. Semester average = average of its three period grades. A category with no graded work is excluded and its weight is renormalized within the period.',
  finalFormula:
    'Final grade = 80% of the average of the graded six-week periods + 20% of the cumulative final examination. A final grade is not issued until the final examination is recorded, so an in-progress course cannot earn credit or enter the GPA.',
  missingWork:
    'A category with no graded work is excluded and the remaining weights are renormalized; the course page shows which categories are still empty.',
  retake:
    'One retake per quiz or exam after documented remediation. The retake score replaces the first attempt but is capped at 80.',
  lateWork:
    'Daily work may be submitted up to three school days late with a 10% deduction per day. Major projects are accepted late only with an approved extension.',
  creditRule:
    'A high-school course earns credit only when its final grade is 70 or higher. Attendance is checked separately at promotion and at the graduation audit.',
  attendanceRule:
    'Texas public schools require at least 90% attendance to earn class credit (Tex. Educ. Code §25.092). This program adopts the same 90% standard as its own promotion and credit policy.',
} as const;
