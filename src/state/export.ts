import type { AppState, Course, GradeRecord } from '../types';
import { CATEGORY_LABELS } from '../types';
import { percent } from '../grading/gradebook';
import { round2 } from '../grading/scale';

/**
 * Machine-readable exports.
 *
 * The JSON backup is the round-trip format (it restores the whole AppState).
 * The CSV is for families, advisers, and record-keeping outside the app: it
 * lists every stored grade exactly once, with no aggregation or truncation.
 */

function cell(value: string | number): string {
  const text = String(value);
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export const GRADE_CSV_HEADERS = [
  'Date',
  'Course',
  'Assessment',
  'Category',
  'Period',
  'Score',
  'Max',
  'Percent',
  'Attempt',
  'Graded by',
] as const;

export function gradesCsv(state: AppState, courses: Course[]): string {
  const titles = new Map(courses.map((course) => [course.id, course.title]));
  const rows = state.grades
    .slice()
    .sort((a, b) =>
      a.recordedAt === b.recordedAt
        ? a.title.localeCompare(b.title)
        : a.recordedAt.localeCompare(b.recordedAt),
    )
    .map((record: GradeRecord) => [
      record.recordedAt,
      titles.get(record.courseId) ?? record.courseId,
      record.title,
      CATEGORY_LABELS[record.category],
      record.period,
      record.score,
      record.max,
      round2(percent(record.score, record.max)),
      record.attempt,
      record.gradedBy,
    ]);

  return [GRADE_CSV_HEADERS, ...rows].map((row) => row.map(cell).join(',')).join('\n') + '\n';
}

/** Minimal RFC 4180 reader for re-deriving an exported gradebook in tests. */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (char !== '\r') {
      field += char;
    }
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

export function downloadText(filename: string, text: string, type: string): void {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  // Revoking immediately can cancel the download in some browsers.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
