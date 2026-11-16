import { COURSES } from './src/content/index';
import { curriculumDepthReport } from './src/content/depth/standard';
const report = curriculumDepthReport(COURSES);
const k5 = report.shortfalls.filter((s) => /^(k-|g[1-5]-)/.test(s.courseId));
console.log('total', report.total, 'met', report.met, 'short', report.shortfalls.length, 'k5short', k5.length);
for (const s of k5) console.log(s.lessonId, s.failures.join('; '));
