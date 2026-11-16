import type {
  AssessmentSet,
  Lesson,
  Project,
  Question,
  RubricRow,
  TeksRef,
  Unit,
} from '../types';

/** Compact, typed helpers so course files stay readable and reviewable. */

let questionCounter = 0;

export function mc(
  prompt: string,
  choices: string[],
  answer: number,
  explanation: string,
  points = 4,
): Question {
  questionCounter += 1;
  return { kind: 'mc', id: `q${questionCounter}`, prompt, choices, answer, explanation, points };
}

export function num(
  prompt: string,
  answer: number,
  explanation: string,
  opts: { tolerance?: number; unit?: string; points?: number } = {},
): Question {
  questionCounter += 1;
  return {
    kind: 'numeric',
    id: `q${questionCounter}`,
    prompt,
    answer,
    tolerance: opts.tolerance ?? 0.01,
    unit: opts.unit,
    explanation,
    points: opts.points ?? 4,
  };
}

export function short(
  prompt: string,
  modelAnswer: string,
  rubric: string[],
  points = 10,
): Question {
  questionCounter += 1;
  return { kind: 'short', id: `q${questionCounter}`, prompt, modelAnswer, rubric, points };
}

export function quiz(title: string, questions: Question[], instructions = 'Answer every item. You may use your notes unless the course says otherwise.'): AssessmentSet {
  return { title, instructions, questions };
}

export function exam(title: string, questions: Question[], minutes = 60): AssessmentSet {
  return {
    title,
    instructions:
      'Closed-note examination. Show your work on paper for any calculation; a parent or teacher scores written answers against the model answer and rubric.',
    questions,
    minutes,
  };
}

export function section(heading: string, paragraphs: string[], bullets?: string[]) {
  return { heading, paragraphs, bullets };
}

export function lesson(input: {
  id: string;
  title: string;
  minutes?: number;
  objectives: string[];
  sections: ReturnType<typeof section>[];
  example?: Lesson['example'];
  extraExample?: Lesson['extraExample'];
  examples?: Lesson['examples'];
  topics?: Lesson['topics'];
  keyTerms?: Lesson['keyTerms'];
  practice: Question[];
  assignments?: Lesson['assignments'];
  review?: Lesson['review'];
  furtherReading?: Lesson['furtherReading'];
}): Lesson {
  return {
    id: input.id,
    title: input.title,
    minutes: input.minutes ?? 45,
    objectives: input.objectives,
    sections: input.sections,
    example: input.example,
    extraExample: input.extraExample,
    examples: input.examples,
    topics: input.topics,
    keyTerms: input.keyTerms,
    practice: input.practice,
    assignments: input.assignments,
    review: input.review,
    furtherReading: input.furtherReading,
  };
}

export function unit(id: string, title: string, bigIdea: string, lessons: Lesson[], unitQuiz: AssessmentSet, project?: Project): Unit {
  return { id, title, bigIdea, lessons, quiz: unitQuiz, project };
}

export function teks(citation: string, summary: string): TeksRef {
  return { citation, summary };
}

export function rubricRow(
  criterion: string,
  points: number,
  levels: [string, string, number][],
): RubricRow {
  return {
    criterion,
    points,
    levels: levels.map(([label, description, pts]) => ({ label, description, points: pts })),
  };
}

export function project(input: {
  title: string;
  prompt: string;
  deliverable: string;
  guidance: string[];
  rubric: RubricRow[];
}): Project {
  return input;
}

/** Total points in an assessment, used by the gradebook and UI. */
export function totalPoints(questions: Question[]): number {
  return questions.reduce((sum, q) => sum + q.points, 0);
}

/** Auto-gradable questions only (multiple choice and numeric). */
export function isAutoGraded(q: Question): boolean {
  return q.kind === 'mc' || q.kind === 'numeric';
}
