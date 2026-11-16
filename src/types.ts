/**
 * Domain types for Texas Home Academy.
 *
 * Content is authored as plain TypeScript data (src/content/**), which keeps the
 * whole curriculum reviewable in a diff, offline by default, and independent of
 * any database or third-party service.
 */

export type SubjectId =
  | 'ela'
  | 'math'
  | 'science'
  | 'social-studies'
  | 'lote'
  | 'health'
  | 'pe'
  | 'fine-arts'
  | 'technology'
  | 'cte'
  | 'personal-finance'
  | 'adult-education'
  | 'elective';

export const SUBJECT_LABELS: Record<SubjectId, string> = {
  ela: 'English Language Arts & Reading',
  math: 'Mathematics',
  science: 'Science',
  'social-studies': 'Social Studies',
  lote: 'Languages Other Than English',
  health: 'Health Education',
  pe: 'Physical Education',
  'fine-arts': 'Fine Arts',
  technology: 'Technology Applications',
  cte: 'Career & Technical Education',
  'personal-finance': 'Personal Financial Literacy',
  'adult-education': 'Adult Life Education',
  elective: 'Elective',
};

/** Grade 0 = Kindergarten. 12 = senior year. */
export type GradeLevel = number;

export type CategoryId = 'practice' | 'quiz' | 'exam' | 'project' | 'participation';

export const CATEGORY_LABELS: Record<CategoryId, string> = {
  practice: 'Practice & daily work',
  quiz: 'Unit quizzes',
  exam: 'Exams',
  project: 'Projects & writing',
  participation: 'Guided discussion & lab work',
};

/** Citation to a published standard or statute. Never paraphrased as if quoted. */
export interface SourceRef {
  id: string;
  title: string;
  publisher: string;
  url: string;
  supports: string;
  accessed: string;
}

/** Alignment note. `summary` is our own description, not a quotation. */
export interface TeksRef {
  citation: string;
  summary: string;
}

export type Question =
  | {
      kind: 'mc';
      id: string;
      prompt: string;
      choices: string[];
      answer: number;
      explanation: string;
      points: number;
    }
  | {
      kind: 'numeric';
      id: string;
      prompt: string;
      answer: number;
      tolerance?: number;
      unit?: string;
      explanation: string;
      points: number;
    }
  | {
      kind: 'short';
      id: string;
      prompt: string;
      modelAnswer: string;
      rubric: string[];
      points: number;
    };

export interface AssessmentSet {
  title: string;
  instructions: string;
  questions: Question[];
  /** Minutes allowed; informational for a self-paced home setting. */
  minutes?: number;
}

export interface LessonSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface WorkedExample {
  prompt: string;
  steps: string[];
  answer: string;
}

export interface Lesson {
  id: string;
  title: string;
  minutes: number;
  objectives: string[];
  sections: LessonSection[];
  example?: WorkedExample;
  keyTerms?: { term: string; definition: string }[];
  practice: Question[];
  /** Real, publicly available reading for depth. Must be a stable URL. */
  furtherReading?: { label: string; url: string }[];
}

export interface Unit {
  id: string;
  title: string;
  bigIdea: string;
  lessons: Lesson[];
  quiz: AssessmentSet;
  project?: Project;
}

export interface RubricRow {
  criterion: string;
  /** Points available for this row. Rows should total 100. */
  points: number;
  levels: { label: string; description: string; points: number }[];
}

export interface Project {
  title: string;
  prompt: string;
  deliverable: string;
  /** What a parent/teacher should look for while scoring. */
  guidance: string[];
  rubric: RubricRow[];
}

export interface Course {
  id: string;
  title: string;
  subject: SubjectId;
  grade: GradeLevel;
  /** High-school credit value. 0 for K-8. */
  credits: number;
  /** 2 = full year (two semesters), 1 = one semester. */
  semesters: 1 | 2;
  description: string;
  essentialQuestions: string[];
  teks: TeksRef[];
  prerequisites?: string[];
  /** Category weights; must total 100. */
  weights: Partial<Record<CategoryId, number>>;
  units: Unit[];
  midterm?: AssessmentSet;
  finalExam: AssessmentSet;
  /** Course-level capstone, separate from unit projects. */
  project?: Project;
  advanced?: boolean;
  tags?: string[];
  sourceNotes?: string[];
}

export interface GradeRecord {
  id: string;
  courseId: string;
  assessmentId: string;
  title: string;
  category: CategoryId;
  score: number;
  max: number;
  attempt: number;
  recordedAt: string;
  /** 'Q1'..'Q6' for grading periods, or 'S1'/'S2' for semester exams. */
  period: string;
  gradedBy: 'auto' | 'parent';
  feedback?: string;
  remediationNote?: string;
}

export interface Enrollment {
  courseId: string;
  yearId: string;
  startedAt: string;
  completedAt?: string;
}

export interface AttendanceEntry {
  date: string;
  minutes: number;
  note?: string;
}

export interface LessonProgress {
  completedAt: string;
  practiceScore?: number;
  practiceMax?: number;
}

export interface Profile {
  firstName: string;
  lastName: string;
  gradeLevel: GradeLevel;
  schoolName: string;
  parentName: string;
  city: string;
  state: string;
  /** First year of the current school year, e.g. 2026 for 2026-2027. */
  startYear: number;
}

export interface Settings {
  /** Show the adult-life course prominently in navigation. */
  showAdultEd: boolean;
  /** Attendance minutes that count as a full instructional day. */
  fullDayMinutes: number;
}

export interface AppState {
  schemaVersion: number;
  profile: Profile;
  enrollments: Enrollment[];
  grades: GradeRecord[];
  attendance: AttendanceEntry[];
  lessonProgress: Record<string, LessonProgress>;
  settings: Settings;
}

export interface GradingPeriod {
  id: string;
  label: string;
  start: string;
  end: string;
  semester: 1 | 2;
  /** 1-based index within the school year. */
  index: number;
}

export interface SchoolYear {
  id: string;
  label: string;
  start: string;
  end: string;
  instructionalDays: number;
  periods: GradingPeriod[];
  breaks: { label: string; start: string; end: string }[];
}
