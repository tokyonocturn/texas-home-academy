import { writeFileSync } from 'node:fs';
import { COURSES } from './src/content/index';
import { curriculumDepthReport } from './src/content/depth/standard';
const report = curriculumDepthReport(COURSES);
const ids = report.shortfalls.map((s) => s.lessonId).sort();
const body = `/**
 * Lessons still below the curriculum-depth standard. This is a checked-in
 * ratchet, not an excuse: the depth test fails if a lesson is short but missing
 * here, and fails again if a lesson here has been expanded but not removed.
 * Count: ${ids.length} of ${report.total} K-12 lessons.
 */
export const KNOWN_DEPTH_SHORTFALLS: string[] = [
${ids.map((id) => `  '${id}',`).join('\n')}
];
`;
writeFileSync('src/content/depth/shortfalls.ts', body);
console.log('ledger', ids.length, 'of', report.total);
