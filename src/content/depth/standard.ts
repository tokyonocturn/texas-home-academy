import type { Course, Lesson } from '../../types';

/**
 * Curriculum-depth standard, version 2.
 *
 * Version 1 accepted a lesson at ~190 words of prose. That was a floor for
 * "not a stub", not for "self-teaching". This version requires a lesson to be
 * learnable without a textbook: four objectives, three explanatory sections,
 * grade-scaled prose, three worked examples, eight defined terms, five practice
 * items, four exercises, four reviewed questions, and three recorded topics.
 *
 * Prose is counted from section paragraphs only. Headings, bullet lists,
 * example prompts, review answers, exercises, and UI chrome do not count.
 */
export const DEPTH_STANDARD = {
  minObjectives: 4,
  minSections: 3,
  /** Base prose requirement; grade scaling below can raise or lower it. */
  minProseWords: 450,
  /** No K-12 lesson may sit below this, whatever its grade. */
  absoluteProseFloor: 350,
  minExamples: 3,
  minExampleSteps: 2,
  minTerms: 8,
  minPractice: 5,
  minExercises: 4,
  minReview: 4,
  minReviewAnswerWords: 8,
  minTopics: 3,
  minApplicationSections: 1,
} as const;

/**
 * Grade-scaled prose minimum. Elementary sits at the absolute floor, middle
 * school rises, and high school must reach 600 words.
 *
 * Adult education is not grade-scaled: adult learners are not moving through
 * grades, so the adult course is held to the top K-12 band (600 words) rather
 * than to a separate, weaker scale. That is deliberately the same bar as grade
 * 12, not a lower one, and it is why no lesson is excluded from the report.
 */
export function proseMinimum(grade: number): number {
  if (grade <= 2) return 350;
  if (grade <= 5) return 400;
  if (grade <= 8) return 500;
  return 600;
}

function words(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/** Taught prose only: section paragraphs. Headings and bullets excluded. */
export function proseWords(lesson: Lesson): number {
  return lesson.sections.reduce(
    (sum, section) => sum + section.paragraphs.reduce((n, p) => n + words(p), 0),
    0,
  );
}

/** Prose plus worked-example reasoning, for display only. */
export function teachingWords(lesson: Lesson): number {
  const examples = [lesson.example, lesson.extraExample, ...(lesson.examples ?? [])].filter(
    (example): example is NonNullable<typeof example> => Boolean(example),
  );
  return (
    proseWords(lesson) +
    examples.reduce(
      (sum, example) =>
        sum +
        words(example.prompt) +
        example.steps.reduce((n, step) => n + words(step), 0) +
        words(example.answer),
      0,
    )
  );
}

export function allExamples(lesson: Lesson): NonNullable<Lesson['example']>[] {
  return [lesson.example, lesson.extraExample, ...(lesson.examples ?? [])].filter(
    (example): example is NonNullable<typeof example> => Boolean(example),
  );
}

export interface LessonDepthStatus {
  courseId: string;
  lessonId: string;
  title: string;
  grade: number;
  ok: boolean;
  prose: number;
  teaching: number;
  requiredProse: number;
  failures: string[];
}

export function lessonDepthStatus(
  courseId: string,
  lesson: Lesson,
  grade: number,
): LessonDepthStatus {
  const failures: string[] = [];
  const s = DEPTH_STANDARD;
  const prose = proseWords(lesson);
  const requiredProse = Math.max(proseMinimum(grade), s.absoluteProseFloor);
  const examples = allExamples(lesson);
  const terms = lesson.keyTerms ?? [];
  const exercises = lesson.assignments ?? [];
  const review = lesson.review ?? [];
  const topics = lesson.topics ?? [];

  if (lesson.objectives.length < s.minObjectives) {
    failures.push(`${lesson.objectives.length} objectives (need ${s.minObjectives})`);
  }
  if (lesson.sections.length < s.minSections) {
    failures.push(`${lesson.sections.length} sections (need ${s.minSections})`);
  }
  if (prose < requiredProse) {
    failures.push(`${prose} prose words (need ${requiredProse} at grade ${grade})`);
  }
  if (!lesson.sections.some((section) => /application/i.test(section.heading))) {
    failures.push('no real-world application section');
  }
  if (examples.length < s.minExamples) {
    failures.push(`${examples.length} worked examples (need ${s.minExamples})`);
  }
  for (const example of examples) {
    if (example.steps.length < s.minExampleSteps) {
      failures.push(`example "${example.prompt.slice(0, 30)}…" has ${example.steps.length} steps`);
    }
    if (!example.answer.trim()) failures.push('example has no stated answer');
  }
  if (terms.length < s.minTerms) {
    failures.push(`${terms.length} defined terms (need ${s.minTerms})`);
  }
  for (const term of terms) {
    if (!term.term.trim() || words(term.definition) < 4) {
      failures.push(`term "${term.term}" needs a real definition`);
    }
  }
  if (lesson.practice.length < s.minPractice) {
    failures.push(`${lesson.practice.length} practice items (need ${s.minPractice})`);
  }
  if (exercises.length < s.minExercises) {
    failures.push(`${exercises.length} exercises (need ${s.minExercises})`);
  }
  if (review.length < s.minReview) {
    failures.push(`${review.length} review questions (need ${s.minReview})`);
  }
  for (const item of review) {
    if (!item.prompt.trim() || words(item.answer) < s.minReviewAnswerWords) {
      failures.push(`review "${item.prompt.slice(0, 30)}…" needs a model answer`);
    }
  }
  if (topics.length < s.minTopics) {
    failures.push(`${topics.length} topics recorded (need ${s.minTopics})`);
  }
  const haystack = [
    lesson.title,
    ...lesson.objectives,
    ...lesson.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ...examples.map((example) => example.prompt),
  ]
    .join(' ')
    .toLowerCase();
  for (const topic of topics) {
    const contentWords = topic
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length >= 4);
    const found = contentWords.some((word) => haystack.includes(word));
    if (contentWords.length > 0 && !found) {
      failures.push(`topic "${topic}" is not discussed in the lesson text`);
    }
  }

  return {
    courseId,
    lessonId: lesson.id,
    title: lesson.title,
    grade,
    ok: failures.length === 0,
    prose,
    teaching: teachingWords(lesson),
    requiredProse,
    failures,
  };
}

export interface DepthReport {
  total: number;
  met: number;
  shortfalls: LessonDepthStatus[];
}

export function curriculumDepthReport(courses: Course[]): DepthReport {
  const statuses: LessonDepthStatus[] = [];
  for (const course of courses) {
    for (const unit of course.units) {
      for (const lesson of unit.lessons) {
        statuses.push(lessonDepthStatus(course.id, lesson, course.grade));
      }
    }
  }
  const shortfalls = statuses.filter((status) => !status.ok);
  return { total: statuses.length, met: statuses.length - shortfalls.length, shortfalls };
}

/**
 * Cross-lesson duplication. Distinct lessons must not share application prose,
 * section paragraphs, headings, or worked-example prompts. The check normalizes
 * case and punctuation and also compares 8-word shingles so reworded copies
 * still fail.
 */
export function templateViolations(courses: Course[]): string[] {
  const problems: string[] = [];
  const exact = new Map<string, string>(); // normalized paragraph -> lessonId
  const seen: { id: string; shingles: Set<string> }[] = [];

  const normalize = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

  const shingleSet = (text: string): Set<string> => {
    const tokens = normalize(text).split(' ').filter(Boolean);
    const set = new Set<string>();
    for (let i = 0; i + 8 <= tokens.length; i += 1) set.add(tokens.slice(i, i + 8).join(' '));
    return set;
  };

  for (const course of courses) {
    for (const unit of course.units) {
      for (const lesson of unit.lessons) {
        const paragraphs = lesson.sections.flatMap((section) => section.paragraphs);
        for (const paragraph of paragraphs) {
          const key = normalize(paragraph);
          const owner = exact.get(key);
          if (owner && owner !== lesson.id) {
            problems.push(`identical paragraph in ${owner} and ${lesson.id}`);
          }
          exact.set(key, lesson.id);

          // Near-duplicate prose: compare 8-word shingles. A shared factual
          // phrase (a date, a formula) is fine; a paragraph that is mostly the
          // same words as another lesson's paragraph is copied teaching.
          const candidate = shingleSet(paragraph);
          // Short paragraphs (definitions, conjugation lists) legitimately share
          // factual wording; only substantial prose is checked for near-duplication.
          if (candidate.size < 30) continue;
          for (const other of seen) {
            if (other.id === lesson.id) continue;
            let shared = 0;
            for (const shingle of candidate) if (other.shingles.has(shingle)) shared += 1;
            const ratio = shared / Math.min(candidate.size, other.shingles.size);
            if (ratio >= 0.7) {
              problems.push(
                `near-duplicate paragraph in ${other.id} and ${lesson.id} (${Math.round(ratio * 100)}% overlap)`,
              );
              break;
            }
          }
          seen.push({ id: lesson.id, shingles: candidate });
        }
      }
    }
  }
  return problems;
}
