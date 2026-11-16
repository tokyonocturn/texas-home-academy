/**
 * Verified Texas and federal framework notes.
 *
 * Each entry lists the source ids it depends on (see src/content/sources.ts).
 * Wording is deliberately careful: it distinguishes what a statute or court
 * says from what this program chooses to do.
 */

export interface FrameworkNote {
  id: string;
  title: string;
  points: string[];
  sources: string[];
}

export const TEXAS_HOMESCHOOL_LAW: FrameworkNote[] = [
  {
    id: 'attendance-exemption',
    title: 'Compulsory attendance and the private-school exemption',
    points: [
      'Texas requires a child who is at least six years old (or younger but previously enrolled in first grade) and not yet 19 to attend school, unless an exemption applies (Tex. Educ. Code §25.085(b)).',
      'A child is exempt if the child “attends a private or parochial school that includes in its course a study of good citizenship” (Tex. Educ. Code §25.086(a)(1)).',
      'The statute does not use the word “homeschool.” The Texas Supreme Court held in Texas Education Agency v. Leeper, 893 S.W.2d 432 (Tex. 1994), that a qualifying home school falls within that private-school exemption.',
    ],
    sources: ['tec-25', 'leeper'],
  },
  {
    id: 'bona-fide',
    title: 'What makes a home school “bona fide” under Leeper',
    points: [
      'Leeper adopted the trial court’s definition: a home school must be conducted “in a bona fide (good faith, not a sham or subterfuge) manner.”',
      'The curriculum must be “designed to meet basic education goals of reading, spelling, grammar, mathematics and a study of good citizenship.”',
      'The curriculum may consist of books, workbooks, or other written materials, including material on an electronic screen, and may be obtained or developed from any source.',
      'This program exceeds that floor: it covers all four foundation subjects plus enrichment subjects in every grade, and documents the work.',
    ],
    sources: ['leeper', 'tea-homeschool'],
  },
  {
    id: 'no-accreditation',
    title: 'No state accreditation, no state diploma',
    points: [
      'TEA states that it does not regulate, index, monitor, approve, register, or accredit home-school programs.',
      'The State of Texas does not award a diploma to students who are home schooled. A family may prepare its own transcript and diploma, but neither is a state-issued document.',
      'Texas considers successful home-school completion equivalent to public high school graduation for purposes of higher-education admission. That is not the same as accreditation, and each college still sets its own admission requirements.',
    ],
    sources: ['tea-homeschool'],
  },
  {
    id: 'records',
    title: 'Records are optional in law, valuable in practice',
    points: [
      'Texas does not require home schools to keep educational records. Record keeping is recommended because colleges, scholarship programs, the NCAA, and employers may ask for documentation.',
      'This program keeps a permanent local record: course list, grades, attendance, report cards, and a cumulative transcript that can be printed or exported.',
    ],
    sources: ['thsc-records', 'tea-homeschool'],
  },
  {
    id: 'college',
    title: 'College admission for home-schooled applicants',
    points: [
      'Texas public universities set their own procedures. Some accept a self-reported record (for example, Texas A&M’s STARS) or a parent-issued transcript; others require an official home-school transcript.',
      'The Texas Success Initiative (TSI) applies to entering, non-exempt students at Texas public colleges. Qualifying SAT/ACT scores are among the possible exemptions. Home-school status by itself is not listed as a TSI exemption.',
      'NCAA initial eligibility treats home-school core courses as a special documentation category: the Eligibility Center may require an administrator statement, a home-school transcript, and core-course worksheets.',
      'Nothing in this program guarantees admission, credit transfer, or athletic eligibility. Verify with each institution.',
    ],
    sources: ['tamu-homeschool', 'thcb-tsi', 'ncaa-homeschool', 'tea-homeschool'],
  },
  {
    id: 'testing',
    title: 'STAAR and end-of-course exams',
    points: [
      'STAAR is administered to students enrolled in Texas public schools and open-enrollment charter schools: mathematics and reading language arts in grades 3–8, science in grades 5 and 8, social studies in grade 8, and five end-of-course exams (Algebra I, English I, English II, Biology, U.S. History).',
      'A home school is not a public school, so STAAR and the EOC graduation testing requirement do not apply to a home-schooled student as such. Families may still choose to take standardized tests for their own information.',
      'This program does not simulate STAAR and makes no claim that its assessments predict STAAR performance.',
    ],
    sources: ['staar', 'tec-25', 'tea-homeschool'],
  },
];

export const FEDERAL_FRAMEWORK: FrameworkNote[] = [
  {
    id: 'no-national-curriculum',
    title: 'There are no federal curriculum standards',
    points: [
      'Federal law bars the U.S. Department of Education from exercising “any direction, supervision, or control over the curriculum, program of instruction,” or over the selection of textbooks and library resources (20 U.S.C. §3403(b)).',
      'Federal law separately prohibits any federal mandate or incentive to adopt Common Core or any other set of standards (20 U.S.C. §7906a).',
      'Texas law also bars the State Board of Education from adopting Common Core (Tex. Educ. Code §28.002(b-1)). Texas standards are the TEKS.',
      'So “federal education standards” are not a curriculum. The federal role is funding conditions and civil-rights and privacy law.',
    ],
    sources: ['usc-3403', 'usc-7906a', 'tec-28-002'],
  },
  {
    id: 'essa',
    title: 'ESSA governs federal funding, not content',
    points: [
      'The Every Student Succeeds Act (Pub. L. 114-95) reauthorized the Elementary and Secondary Education Act and is codified at 20 U.S.C. §6301 et seq. Its state-plan and assessment requirements appear at 20 U.S.C. §6311.',
      'Those requirements attach to states and districts that accept federal funds. A private home school does not receive those funds and is not subject to the state accountability plan.',
    ],
    sources: ['essa', 'usc-3403'],
  },
  {
    id: 'ferpa-idea-titleix',
    title: 'FERPA, IDEA, and Title IX',
    points: [
      'FERPA (20 U.S.C. §1232g; 34 C.F.R. Part 99) protects education records at institutions that receive federal funds. This program stores records only in the family’s browser and in files the family chooses to export.',
      'IDEA (20 U.S.C. §1400 et seq.) guarantees a free appropriate public education to eligible children with disabilities in the public system. A home school may still seek evaluation or services through the local district; this program is not a substitute for an IEP or for legal advice.',
      'Title IX (20 U.S.C. §§1681–1688) prohibits sex discrimination in federally funded education programs.',
      'These laws describe rights and obligations; they do not prescribe what a kindergarten science lesson must contain.',
    ],
    sources: ['ferpa', 'idea', 'title-ix'],
  },
];

export const REQUIRED_SUBJECTS: FrameworkNote[] = [
  {
    id: 'texas-required-k5',
    title: 'Texas required subjects, kindergarten through grade 5',
    points: [
      'Districts must provide instruction in English language arts and reading, mathematics, science, social studies, fine arts, health, physical education, and technology applications, and—to the extent possible—languages other than English (19 TAC §74.2).',
      'This program provides a course in each of those areas for every elementary grade, plus languages other than English beginning in grade 6 and exploratory Spanish exposure in grades 3–5.',
    ],
    sources: ['tac-74a', 'tec-28-002'],
  },
  {
    id: 'texas-required-68',
    title: 'Texas required subjects, grades 6 through 8',
    points: [
      'Districts must provide English language arts, mathematics, science, social studies, at least one fine-arts discipline, health, physical education, technology applications, and—to the extent possible—languages other than English (19 TAC §74.3).',
      'At least one TEKS-based fine-arts course must be offered in grades 6–8. This program sequences art and music across the middle grades.',
    ],
    sources: ['tac-74a'],
  },
  {
    id: 'foundation-enrichment',
    title: 'Foundation and enrichment curriculum',
    points: [
      'Tex. Educ. Code §28.002(a) names the foundation curriculum: English language arts, mathematics, science, and social studies (Texas, U.S., and world history, government, economics with emphasis on free enterprise, and geography).',
      'The enrichment curriculum includes languages other than English, health, physical education, fine arts, career and technology education, technology applications, religious literature, and personal financial literacy.',
      'Personal financial literacy appears in the statute as enrichment content, which is why this program treats it as a required half-credit course rather than an optional extra.',
    ],
    sources: ['tec-28-002'],
  },
];

export const TRANSCRIPT_POLICY = {
  title: 'Transcript and records policy',
  paragraphs: [
    'Records in this program are parent-issued home-school records. They are not issued by the State of Texas, by TEA, or by an accredited school, and this program is not accredited by any recognized accrediting body.',
    'A transcript produced here documents work actually completed: course titles, credits, final numeric and letter grades computed from graded assessments, quality points, GPA, and attendance. It does not claim institutional acceptance.',
    'A course earns one credit for a full-year course (two semesters) and one-half credit for a one-semester course. That convention matches the way Texas schools record credits; 19 TAC §74.26(d) allows proportionate credit for partial completion, and TEA’s Academic Achievement Record standards use one semester of a two-semester course as the example.',
    'The graduation audit compares the student’s credits against the published Foundation High School Program (22 credits) and the endorsement plan (26 credits). Meeting that audit means the student has matched the published credit pattern. It does not confer a state diploma, and it does not guarantee that a college, the NCAA, an employer, or another school will accept any particular course.',
    'Families should keep course descriptions, reading lists, samples of graded work, and assessment records. Colleges and the NCAA commonly ask for that context, and NCAA review of home-school core courses is a separate process with its own documentation requirements.',
  ],
  sources: ['tea-homeschool', 'tac-74b', 'tac-74c', 'thsc-records', 'ncaa-homeschool'],
} as const;

export const CREDIT_POLICY = {
  fullYearCredits: 1,
  semesterCredits: 0.5,
  instructionalDays: 180,
  attendanceStandard: '90% (Tex. Educ. Code §25.092, adopted as program policy)',
  earliestStart: 'Fourth Monday in August (Tex. Educ. Code §25.0811, adopted as program policy)',
} as const;
