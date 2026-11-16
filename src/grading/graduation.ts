import type { Course, GradeRecord } from '../types';
import { courseResult } from './gradebook';
import { round2 } from './scale';

/**
 * Graduation audit for the Texas Foundation High School Program (FHSP).
 *
 * Every number below was taken from TEA's published rule text and toolkit:
 *  - 22-credit FHSP and 26-credit endorsement plan: 19 TAC §§74.12–74.13;
 *    TEA Graduation Toolkit 2025.
 *  - Distinguished Level of Achievement: 19 TAC §74.11(f).
 *  - Minimum passing grade of 70 for credit: 19 TAC §74.26(c).
 *
 * This is an internal audit of courses in this program. It is NOT a Texas
 * Education Agency record, and this program is not accredited by TEA or any
 * regional accreditor. See docs/transcripts-and-accreditation.md.
 */

export interface GradRequirement {
  id: string;
  label: string;
  credits: number;
  courseIds: string[];
  citation: string;
  note?: string;
}

export interface RequirementResult extends GradRequirement {
  earned: number;
  completedCourses: { courseId: string; title: string; grade: number; credits: number }[];
  satisfied: boolean;
}

export const FHSP_REQUIREMENTS: GradRequirement[] = [
  {
    id: 'ela',
    label: 'English language arts',
    credits: 4,
    courseIds: ['hs-eng1', 'hs-eng2', 'hs-eng3', 'hs-eng4'],
    citation: '19 TAC §74.12(b)(1)',
  },
  {
    id: 'math',
    label: 'Mathematics (Algebra I, Geometry, and an advanced math course)',
    credits: 3,
    courseIds: ['hs-alg1', 'hs-geom', 'hs-alg2', 'hs-precalc', 'hs-stats'],
    citation: '19 TAC §74.12(b)(2)',
  },
  {
    id: 'science',
    label: 'Science (Biology, IPC or Chemistry or Physics, and an advanced science)',
    credits: 3,
    courseIds: ['hs-bio', 'hs-ipc', 'hs-chem', 'hs-physics', 'hs-env'],
    citation: '19 TAC §74.12(b)(3)',
  },
  {
    id: 'social',
    label: 'Social studies (world history or world geography, U.S. history, government, economics)',
    credits: 3,
    courseIds: ['hs-world-geo', 'hs-world-hist', 'hs-us-hist', 'hs-gov', 'hs-econ'],
    citation: '19 TAC §74.12(b)(4)',
  },
  {
    id: 'lote',
    label: 'Languages other than English (two levels of the same language)',
    credits: 2,
    courseIds: ['hs-span1', 'hs-span2'],
    citation: '19 TAC §74.12(b)(5)',
  },
  {
    id: 'pe',
    label: 'Physical education',
    credits: 1,
    courseIds: ['hs-pe'],
    citation: '19 TAC §74.12(b)(6)',
  },
  {
    id: 'fine-arts',
    label: 'Fine arts',
    credits: 1,
    courseIds: ['hs-art1', 'hs-music1'],
    citation: '19 TAC §74.12(b)(7)',
  },
  {
    id: 'electives',
    label: 'Electives',
    credits: 5,
    courseIds: [],
    citation: '19 TAC §74.12(b)(8)',
    note: 'Any remaining credit-bearing courses count here.',
  },
];

export const ENDORSEMENT_CREDIT_TOTAL = 26;
export const FHSP_CREDIT_TOTAL = 22;

export interface EndorsementCheck {
  id: string;
  label: string;
  summary: string;
  met: boolean;
  lines: { label: string; met: boolean; detail: string }[];
}

/**
 * Endorsement summaries follow TEA's Graduation Toolkit 2025. The full course
 * conditions live in 19 TAC §74.13(f); this audit is a planning aid.
 */
export function evaluateEndorsements(completed: CompletedCourse[]): EndorsementCheck[] {
  const has = (id: string) => completed.some((c) => c.courseId === id);
  const mathCredits = creditsIn(completed, ['hs-alg1', 'hs-geom', 'hs-alg2', 'hs-precalc', 'hs-stats']);
  const scienceCredits = creditsIn(completed, ['hs-bio', 'hs-ipc', 'hs-chem', 'hs-physics', 'hs-env']);
  const englishCredits = creditsIn(completed, ['hs-eng1', 'hs-eng2', 'hs-eng3', 'hs-eng4']);
  const socialCredits = creditsIn(completed, [
    'hs-world-geo',
    'hs-world-hist',
    'hs-us-hist',
    'hs-gov',
    'hs-econ',
  ]);
  const loteCredits = creditsIn(completed, ['hs-span1', 'hs-span2']);
  const fineArtCredits = creditsIn(completed, ['hs-art1', 'hs-music1']);

  return [
    {
      id: 'stem',
      label: 'STEM',
      summary: 'Algebra II, chemistry, and physics plus additional advanced math or science.',
      met: has('hs-alg2') && has('hs-chem') && has('hs-physics') && mathCredits >= 4 && scienceCredits >= 4,
      lines: [
        { label: 'Algebra II', met: has('hs-alg2'), detail: 'Required for the STEM endorsement.' },
        { label: 'Chemistry', met: has('hs-chem'), detail: 'Required for the STEM endorsement.' },
        { label: 'Physics', met: has('hs-physics'), detail: 'Required for the STEM endorsement.' },
        { label: '4 math credits', met: mathCredits >= 4, detail: `${mathCredits} of 4 earned.` },
        { label: '4 science credits', met: scienceCredits >= 4, detail: `${scienceCredits} of 4 earned.` },
      ],
    },
    {
      id: 'business',
      label: 'Business and Industry',
      summary: 'A CTE program-of-study completer or four qualifying English/CTE credits.',
      met: has('hs-cte-business'),
      lines: [
        {
          label: 'CTE capstone',
          met: has('hs-cte-business'),
          detail: 'Complete the Business and Entrepreneurship CTE course.',
        },
      ],
    },
    {
      id: 'public-services',
      label: 'Public Services',
      summary: 'A public-services CTE completer or four JROTC courses.',
      met: has('hs-cte-health') || has('hs-cte-education'),
      lines: [
        {
          label: 'Public services course',
          met: has('hs-cte-health') || has('hs-cte-education'),
          detail: 'Complete a health science or education/training CTE course.',
        },
      ],
    },
    {
      id: 'arts-humanities',
      label: 'Arts and Humanities',
      summary: 'A qualifying sequence in social studies, LOTE, fine arts, or English.',
      met: socialCredits >= 4 || loteCredits >= 3 || fineArtCredits >= 2 || englishCredits >= 4,
      lines: [
        { label: 'Social studies sequence', met: socialCredits >= 4, detail: `${socialCredits} credits earned.` },
        { label: 'LOTE sequence', met: loteCredits >= 3, detail: `${loteCredits} credits earned.` },
        { label: 'Fine arts sequence', met: fineArtCredits >= 2, detail: `${fineArtCredits} credits earned.` },
        { label: 'English sequence', met: englishCredits >= 4, detail: `${englishCredits} credits earned.` },
      ],
    },
    {
      id: 'multidisciplinary',
      label: 'Multidisciplinary Studies',
      summary: 'Four credits in each foundation area, or four advanced courses across disciplines.',
      met:
        englishCredits >= 4 &&
        mathCredits >= 4 &&
        scienceCredits >= 4 &&
        socialCredits >= 4,
      lines: [
        { label: 'English 4', met: englishCredits >= 4, detail: `${englishCredits} earned.` },
        { label: 'Math 4', met: mathCredits >= 4, detail: `${mathCredits} earned.` },
        { label: 'Science 4', met: scienceCredits >= 4, detail: `${scienceCredits} earned.` },
        { label: 'Social studies 4', met: socialCredits >= 4, detail: `${socialCredits} earned.` },
      ],
    },
  ];
}

export interface CompletedCourse {
  courseId: string;
  title: string;
  grade: number;
  credits: number;
}

function creditsIn(completed: CompletedCourse[], ids: string[]): number {
  return round2(
    completed.filter((c) => ids.includes(c.courseId)).reduce((sum, c) => sum + c.credits, 0),
  );
}

export function completedCourses(courses: Course[], records: GradeRecord[]): CompletedCourse[] {
  const out: CompletedCourse[] = [];
  for (const course of courses) {
    if (course.credits <= 0) continue;
    const result = courseResult(course, records);
    if (result.finalGrade === null) continue;
    if (result.finalGrade < 70) continue;
    out.push({
      courseId: course.id,
      title: course.title,
      grade: result.finalGrade,
      credits: course.credits,
    });
  }
  return out;
}

export interface GraduationAudit {
  requirements: RequirementResult[];
  completed: CompletedCourse[];
  totalCredits: number;
  fhspMet: boolean;
  endorsements: EndorsementCheck[];
  hasEndorsement: boolean;
  algebra2: boolean;
  mathCredits: number;
  scienceCredits: number;
  dlaEligible: boolean;
  notes: string[];
}

export function auditGraduation(courses: Course[], records: GradeRecord[]): GraduationAudit {
  const completed = completedCourses(courses, records);
  const coreIds = FHSP_REQUIREMENTS.filter((r) => r.id !== 'electives').flatMap((r) => r.courseIds);
  const electiveCredits = round2(
    completed.filter((c) => !coreIds.includes(c.courseId)).reduce((sum, c) => sum + c.credits, 0),
  );

  const requirements: RequirementResult[] = FHSP_REQUIREMENTS.map((req) => {
    const matching = completed.filter((c) => req.courseIds.includes(c.courseId));
    const earned = req.id === 'electives' ? electiveCredits : creditsIn(completed, req.courseIds);
    return {
      ...req,
      earned,
      completedCourses: matching,
      satisfied: earned >= req.credits,
    };
  });

  const totalCredits = round2(completed.reduce((sum, c) => sum + c.credits, 0));
  const fhspMet = requirements.every((r) => r.satisfied);
  const endorsements = evaluateEndorsements(completed);
  const hasEndorsement = endorsements.some((e) => e.met);
  const mathCredits = creditsIn(completed, ['hs-alg1', 'hs-geom', 'hs-alg2', 'hs-precalc', 'hs-stats']);
  const scienceCredits = creditsIn(completed, ['hs-bio', 'hs-ipc', 'hs-chem', 'hs-physics', 'hs-env']);
  const algebra2 = completed.some((c) => c.courseId === 'hs-alg2');
  const notes: string[] = [];

  if (!fhspMet) notes.push('FHSP credit requirements are not yet complete.');
  if (fhspMet && totalCredits < 22) notes.push('Total credits are below the 22-credit FHSP minimum.');
  if (totalCredits < 26) notes.push('26 credits are required for the endorsement plan.');
  if (hasEndorsement && !algebra2) {
    notes.push('An endorsement is complete, but the Distinguished Level of Achievement also requires Algebra II (19 TAC §74.11(f)).');
  }
  if (hasEndorsement && (mathCredits < 4 || scienceCredits < 4)) {
    notes.push('The Distinguished Level of Achievement also requires four math and four science credits.');
  }

  return {
    requirements,
    completed,
    totalCredits,
    fhspMet: fhspMet && totalCredits >= FHSP_CREDIT_TOTAL,
    endorsements,
    hasEndorsement,
    algebra2,
    mathCredits,
    scienceCredits,
    dlaEligible:
      fhspMet &&
      totalCredits >= 26 &&
      hasEndorsement &&
      algebra2 &&
      mathCredits >= 4 &&
      scienceCredits >= 4,
    notes,
  };
}
