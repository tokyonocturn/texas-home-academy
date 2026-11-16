import type { Course, Lesson } from '../../types';

/**
 * The curriculum-depth standard. A lesson is "substantial" when it teaches its
 * own topic in prose, shows the reasoning twice, defines its vocabulary, and
 * gives practice, review, and off-screen work with answers.
 *
 * The numbers are deliberately modest but not symbolic: 190 words of taught
 * prose plus two worked examples, definitions, and reviewed practice is roughly
 * what a student needs to learn a single concept without a textbook.
 */
export const DEPTH_STANDARD = {
  minObjectives: 2,
  minSections: 2,
  minTeachingWords: 190,
  minExamples: 2,
  minExampleSteps: 2,
  minTerms: 2,
  minPractice: 2,
  minExercises: 2,
  minReview: 2,
  minReviewAnswerWords: 6,
} as const;

function words(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/** Teaching prose: sections plus both worked examples (examples teach). */
export function teachingWords(lesson: Lesson): number {
  const sectionWords = lesson.sections.reduce(
    (sum, section) => sum + section.paragraphs.reduce((n, p) => n + words(p), 0),
    0,
  );
  const exampleWords = [lesson.example, lesson.extraExample]
    .filter((example): example is NonNullable<typeof example> => Boolean(example))
    .reduce(
      (sum, example) =>
        sum +
        words(example.prompt) +
        example.steps.reduce((n, step) => n + words(step), 0) +
        words(example.answer),
      0,
    );
  return sectionWords + exampleWords;
}

export interface LessonDepthStatus {
  courseId: string;
  lessonId: string;
  title: string;
  ok: boolean;
  teachingWords: number;
  failures: string[];
}

export function lessonDepthStatus(courseId: string, lesson: Lesson): LessonDepthStatus {
  const failures: string[] = [];
  const s = DEPTH_STANDARD;
  const teaching = teachingWords(lesson);

  if (lesson.objectives.length < s.minObjectives) {
    failures.push(`${lesson.objectives.length} objectives (need ${s.minObjectives})`);
  }
  if (lesson.sections.length < s.minSections) {
    failures.push(`${lesson.sections.length} sections (need ${s.minSections})`);
  }
  if (teaching < s.minTeachingWords) {
    failures.push(`${teaching} teaching words (need ${s.minTeachingWords})`);
  }
  const examples = [lesson.example, lesson.extraExample].filter(Boolean) as NonNullable<
    Lesson['example']
  >[];
  if (examples.length < s.minExamples) {
    failures.push(`${examples.length} worked examples (need ${s.minExamples})`);
  }
  for (const example of examples) {
    if (example.steps.length < s.minExampleSteps) {
      failures.push(`example "${example.prompt.slice(0, 30)}…" has too few steps`);
    }
    if (!example.answer.trim()) failures.push('example has no answer');
  }
  const terms = lesson.keyTerms ?? [];
  if (terms.length < s.minTerms) failures.push(`${terms.length} key terms (need ${s.minTerms})`);
  for (const term of terms) {
    if (!term.term.trim() || words(term.definition) < 4) {
      failures.push(`term "${term.term}" needs a real definition`);
    }
  }
  if (lesson.practice.length < s.minPractice) {
    failures.push(`${lesson.practice.length} practice items (need ${s.minPractice})`);
  }
  const exercises = lesson.assignments ?? [];
  if (exercises.length < s.minExercises) {
    failures.push(`${exercises.length} exercises (need ${s.minExercises})`);
  }
  const review = lesson.review ?? [];
  if (review.length < s.minReview) {
    failures.push(`${review.length} review questions (need ${s.minReview})`);
  }
  for (const item of review) {
    if (!item.prompt.trim() || words(item.answer) < s.minReviewAnswerWords) {
      failures.push(`review "${item.prompt.slice(0, 30)}…" needs a model answer`);
    }
  }
  const topics = lesson.topics ?? [];
  if (topics.length < 2) failures.push(`${topics.length} topics recorded (need 2)`);
  const haystack = [
    lesson.title,
    ...lesson.objectives,
    ...lesson.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    lesson.example?.prompt ?? '',
    lesson.extraExample?.prompt ?? '',
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
    ok: failures.length === 0,
    teachingWords: teaching,
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
    if (course.subject === 'adult-education') continue;
    for (const unit of course.units) {
      for (const lesson of unit.lessons) statuses.push(lessonDepthStatus(course.id, lesson));
    }
  }
  const shortfalls = statuses.filter((status) => !status.ok);
  return { total: statuses.length, met: statuses.length - shortfalls.length, shortfalls };
}
