import type { CategoryId, Course, GradeLevel, SubjectId } from '../types';
import { english1, english2 } from './courses/hsEnglishA';
import { english3, english4 } from './courses/hsEnglishB';
import { algebra1, geometry } from './courses/hsMath';
import { algebra2, precalculus } from './courses/hsMathB';
import { biology, chemistry, physics } from './courses/hsScience';
import { ipc } from './courses/hsScienceB';
import { worldGeography, worldHistory } from './courses/hsSocialA';
import { economics, usGovernment, usHistory } from './courses/hsSocialB';
import {
  art1,
  health,
  physicalEducation,
  spanish1,
  spanish2,
} from './courses/hsElectives';
import {
  computerScience1,
  cteBusiness,
  cteHealth,
  personalFinance,
  speech,
} from './courses/hsElectivesB';
import { adultLife } from './courses/adulting';
import {
  kindergartenEla,
  kindergartenMath,
  kindergartenScience,
  kindergartenSocialStudies,
} from './courses/gradeK';
import { grade1Ela, grade1Math, grade1Science, grade1SocialStudies } from './courses/grade1';
import { grade2Ela, grade2Math, grade2Science, grade2SocialStudies } from './courses/grade2';
import { grade3Ela, grade3Math, grade3Science, grade3SocialStudies } from './courses/grade3';
import { grade4Ela, grade4Math, grade4Science, grade4SocialStudies } from './courses/grade4';
import { grade5Ela, grade5Math, grade5Science, grade5SocialStudies } from './courses/grade5';
import { grade6Ela, grade6Math, grade6Science, grade6SocialStudies } from './courses/grade6';
import { grade7Ela, grade7Math, grade7Science, grade7SocialStudies } from './courses/grade7';
import { grade8Ela, grade8Math, grade8Science, grade8SocialStudies } from './courses/grade8';
import {
  elementaryFineArts,
  elementaryHealthPe,
  elementaryTechnology,
  middleArt,
  middleHealth,
  middlePe,
  middleSpanish,
  middleTechnology,
} from './courses/enrichment';

/**
 * The full catalog. Order matters for display: grade order, then subject order.
 */

export const COURSES: Course[] = [
  // Kindergarten
  kindergartenEla,
  kindergartenMath,
  kindergartenScience,
  kindergartenSocialStudies,
  // Grade 1
  grade1Ela,
  grade1Math,
  grade1Science,
  grade1SocialStudies,
  // Grade 2
  grade2Ela,
  grade2Math,
  grade2Science,
  grade2SocialStudies,
  // Grade 3
  grade3Ela,
  grade3Math,
  grade3Science,
  grade3SocialStudies,
  // Grade 4
  grade4Ela,
  grade4Math,
  grade4Science,
  grade4SocialStudies,
  // Grade 5
  grade5Ela,
  grade5Math,
  grade5Science,
  grade5SocialStudies,
  // Grade 6
  grade6Ela,
  grade6Math,
  grade6Science,
  grade6SocialStudies,
  // Grade 7
  grade7Ela,
  grade7Math,
  grade7Science,
  grade7SocialStudies,
  // Grade 8
  grade8Ela,
  grade8Math,
  grade8Science,
  grade8SocialStudies,
  // Multi-grade enrichment
  elementaryFineArts,
  elementaryHealthPe,
  elementaryTechnology,
  middleArt,
  middlePe,
  middleHealth,
  middleTechnology,
  middleSpanish,
  // High school
  english1,
  english2,
  english3,
  english4,
  algebra1,
  geometry,
  algebra2,
  precalculus,
  biology,
  ipc,
  chemistry,
  physics,
  worldGeography,
  worldHistory,
  usHistory,
  usGovernment,
  economics,
  spanish1,
  spanish2,
  physicalEducation,
  art1,
  health,
  speech,
  computerScience1,
  cteBusiness,
  cteHealth,
  personalFinance,
  adultLife,
];

export const COURSE_MAP: Record<string, Course> = Object.fromEntries(
  COURSES.map((c) => [c.id, c]),
);

export function getCourse(id: string | undefined): Course | undefined {
  return id ? COURSE_MAP[id] : undefined;
}

export const SUBJECT_ORDER: SubjectId[] = [
  'ela',
  'math',
  'science',
  'social-studies',
  'lote',
  'health',
  'pe',
  'fine-arts',
  'technology',
  'cte',
  'personal-finance',
  'adult-education',
  'elective',
];

export function gradeLabel(grade: GradeLevel): string {
  if (grade <= 0) return 'Kindergarten';
  if (grade >= 13) return 'Post-secondary';
  return `Grade ${grade}`;
}

/** Multi-grade courses carry a band tag; show that instead of a single grade. */
export function courseGradeLabel(course: Course): string {
  const band = course.tags?.find((t) => t.startsWith('band:'));
  if (band) {
    const value = band.slice('band:'.length);
    return value === 'K-5' ? 'Grades K–5' : `Grades ${value}`;
  }
  return gradeLabel(course.grade);
}

export function isHighSchool(course: Course): boolean {
  return course.credits > 0 || course.grade >= 9;
}

export function coursesForGrade(grade: GradeLevel): Course[] {
  return COURSES.filter((c) => c.grade === grade);
}

/**
 * Grade-appropriate courses, including banded enrichment courses (K-5 and 6-8)
 * that are not tied to a single grade.
 */
export function recommendedForGrade(grade: GradeLevel): Course[] {
  const band = grade <= 5 ? 'K-5' : grade <= 8 ? '6-8' : null;
  const inBand = (c: Course) => Boolean(band && c.tags?.includes(`band:${band}`));
  return COURSES.filter((c) => c.grade === grade || inBand(c));
}

export function sortCourses(courses: Course[]): Course[] {
  return [...courses].sort((a, b) => {
    if (a.grade !== b.grade) return a.grade - b.grade;
    const sa = SUBJECT_ORDER.indexOf(a.subject);
    const sb = SUBJECT_ORDER.indexOf(b.subject);
    if (sa !== sb) return sa - sb;
    return a.title.localeCompare(b.title);
  });
}

export function totalCoursePoints(course: Course): number {
  let total = 0;
  for (const u of course.units) {
    for (const l of u.lessons) {
      for (const q of l.practice) total += q.points;
    }
    for (const q of u.quiz.questions) total += q.points;
    if (u.project) total += 1;
  }
  for (const q of course.finalExam.questions) total += q.points;
  if (course.project) total += 1;
  return total;
}

/** Assessment ids used by the gradebook. */
export function practiceId(courseId: string, lessonId: string): string {
  return `${courseId}:${lessonId}:practice`;
}

export function quizId(courseId: string, unitId: string): string {
  return `${courseId}:${unitId}:quiz`;
}

export function projectId(courseId: string, unitId?: string): string {
  return unitId ? `${courseId}:${unitId}:project` : `${courseId}:project`;
}

export function finalId(courseId: string): string {
  return `${courseId}:final`;
}

/**
 * Catalog integrity checks. Run in tests and at startup in development so a
 * malformed course cannot silently corrupt a transcript.
 */
export function validateCatalog(courses: Course[]): string[] {
  const problems: string[] = [];
  const ids = new Set<string>();
  for (const course of courses) {
    if (ids.has(course.id)) problems.push(`Duplicate course id: ${course.id}`);
    ids.add(course.id);
    if (!course.title) problems.push(`${course.id}: missing title`);
    if (course.credits < 0) problems.push(`${course.id}: negative credits`);
    if (course.semesters !== 1 && course.semesters !== 2) {
      problems.push(`${course.id}: semesters must be 1 or 2`);
    }
    const weightTotal = Object.values(course.weights).reduce<number>(
      (sum, w) => sum + (w ?? 0),
      0,
    );
    if (Math.abs(weightTotal - 100) > 0.001) {
      problems.push(`${course.id}: weights total ${weightTotal}, expected 100`);
    }
    for (const key of Object.keys(course.weights)) {
      if (!['practice', 'quiz', 'exam', 'project', 'participation'].includes(key)) {
        problems.push(`${course.id}: unknown category ${key}`);
      }
    }
    if (course.units.length === 0) problems.push(`${course.id}: no units`);
    if (course.finalExam.questions.length === 0) problems.push(`${course.id}: empty final`);
    for (const unit of course.units) {
      if (unit.lessons.length === 0) problems.push(`${course.id}/${unit.id}: no lessons`);
      if (unit.quiz.questions.length === 0) problems.push(`${course.id}/${unit.id}: empty quiz`);
      for (const lesson of unit.lessons) {
        if (lesson.sections.length === 0) {
          problems.push(`${course.id}/${lesson.id}: no reading sections`);
        }
        if (lesson.practice.length === 0) {
          problems.push(`${course.id}/${lesson.id}: no practice`);
        }
      }
      if (unit.project) checkProject(problems, `${course.id}/${unit.id}`, unit.project);
    }
    if (course.project) checkProject(problems, course.id, course.project);
    for (const q of course.finalExam.questions) checkQuestion(problems, `${course.id} final`, q);
  }
  return problems;
}

function checkProject(
  problems: string[],
  where: string,
  project: { rubric: { points: number; levels: unknown[] }[] },
): void {
  const total = project.rubric.reduce((sum, row) => sum + row.points, 0);
  if (total !== 100) problems.push(`${where}: rubric totals ${total}, expected 100`);
  for (const row of project.rubric) {
    if (row.levels.length !== 4) problems.push(`${where}: rubric row needs 4 levels`);
  }
}

function checkQuestion(
  problems: string[],
  where: string,
  q: { kind: string; points: number; id: string },
): void {
  if (q.points <= 0) problems.push(`${where}: question ${q.id} has no points`);
}
