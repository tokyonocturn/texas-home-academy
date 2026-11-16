# Texas Home Academy

A free, open-source, self-hostable K–12 home education program built around Texas
standards. It includes a full course catalog from kindergarten through grade 12,
mastery-based grading, a traditional 180-day school year, report cards,
attendance, a cumulative transcript, a graduation audit, and a practical adult
life course.

Everything runs in the browser. There is no server, no account, no advertising,
no tracking, and no third-party service. Records are stored in the browser's
`localStorage` and can be exported to a JSON file. After the first load the app
works offline.

**This program is not accredited.** It is a parent-issued home-school curriculum
and record-keeping tool. It does not award a Texas diploma and is not affiliated
with the Texas Education Agency. See
[`docs/transcripts-and-accreditation.md`](docs/transcripts-and-accreditation.md).

## What is included

- **Courses for every grade.** English language arts, mathematics, science, and
  social studies in every grade K–8; fine arts, health, physical education,
  technology applications, and exploratory Spanish in the elementary and middle
  grades; and a full high-school sequence including English I–IV, Algebra I,
  Geometry, Algebra II, Precalculus, Biology, IPC, Chemistry, Physics, World
  Geography, World History, U.S. History, U.S. Government, Economics, Spanish I
  and II, Physical Education, Art I, Health, Speech, Computer Science I, two CTE
  courses, Personal Financial Literacy, and Adult Life Education.
- **Lessons, not worksheets only.** Every K–12 lesson has objectives, two or
  more explanatory sections, two worked examples with step-by-step reasoning,
  defined key terms, a real-world application, a practice set, off-screen
  assignments, and review questions with model answers. A curriculum-depth test
  enforces those minimums across the whole catalog, and the Sources page reports
  the count.
- **Real assessments.** Unit quizzes, projects scored against published analytic
  rubrics, a semester 1 midterm for every full-year course, and a cumulative
  final examination. Multiple-choice and numeric items are auto-graded; written
  answers are scored by a parent or teacher against the model answer and rubric
  shown in the app.
- **No credit for clicking.** A grade exists only when an assessment produces a
  score. Practice is recorded as the best attempt; a lesson is marked complete
  only after its practice set is submitted.
- **Traditional school year.** 180 instructional days anchored on the fourth
  Monday in August, six six-week grading periods, two semesters, and a 90%
  attendance standard.
- **Records.** Gradebook, report card, cumulative transcript, attendance log,
  GPA (4.0 unweighted / 4.5 weighted), credit tracking, and a Foundation High
  School Program graduation audit with endorsement and Distinguished Level of
  Achievement checks.
- **Adult life education.** Eight units: taxes and filing; paychecks and
  workplace rights; banking and budgeting; credit, loans, and debt; renting,
  insurance, and vehicles; business and contracts; borrowing, investing, and
  retirement; negotiation and decisions under uncertainty. Cited to current IRS,
  Texas Workforce Commission, Comptroller, TDI, and statutory sources, with
  graded real-world assignments and projects.

## Run it

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # local development server
npm run build    # typecheck and build to dist/
npm test         # grading, GPA, graduation, catalog, calendar, and workflow tests
```

`dist/` is a static site with relative asset paths, so it can be hosted from any
folder: GitHub Pages, Netlify, a home server, a NAS, or a USB drive. No
environment variables or backend are needed.

## How grading works

- Numeric grades 0–100. A 90–100, B 80–89, C 70–79, D 60–69, F below 60.
- Passing is 70, tied to 19 TAC §74.26(c) for high-school credit.
- Category weights are set per course and total 100. A category with no graded
  work is excluded and the remaining weights are renormalized, so an early
  progress check is not distorted by empty categories.
- A six-week period grade is the weighted average of the graded categories in
  that period, excluding semester exams. The semester grade is 80% of the
  average of its three periods plus 20% of that semester's exam: the midterm in
  semester 1 and the cumulative final in semester 2. If one side has no graded
  work, the other side stands alone.
- Final grade = the average of the two semester grades. It is issued only after
  the cumulative final examination is recorded. Until then the course shows a
  current standing and cannot earn credit.
- One retake per quiz or exam after documented remediation; the retake replaces
  the first attempt but is capped at 80.

## Records and honesty

The app distinguishes three things that are often conflated:

1. **A course grade** is computed from graded assessments recorded here.
2. **A credit** is awarded when the final grade is 70 or higher.
3. **Acceptance** — admission, transfer credit, NCAA eligibility — is decided by
   the receiving institution, not by this program or by a parent-issued
   transcript.

The transcript and report card state plainly that they are parent-issued
home-school records, that this program is not accredited, and that meeting the
Foundation High School Program credit pattern is an internal audit rather than a
state diploma.

## Curriculum and sources

Courses live in `src/content/courses/` as typed data and cite the relevant TEKS
chapter (19 TAC chapters 110–117, 126, and 127) at course level. Statutes, agency
pages, and program rules are registered in `src/content/sources.ts`; every
legal, statistical, and program claim in the curriculum points to an entry there
or to a lesson's further reading.

See [`docs/sources.md`](docs/sources.md) for how citations are handled and which
sources underpin the legal and adult-education content, and
[`docs/standards-audit.md`](docs/standards-audit.md) for the course-by-course
TEKS mapping, the graduation-credit audit, the source table with access dates,
and the register of known curriculum gaps.

## Project layout

```
src/
  content/          courses, sources, frameworks, builders, rubrics
  grading/          scale, gradebook, GPA, progression, graduation audit
  state/            school-year calendar and persistent store
  ui/               router, shared parts, assessment runner, pages
  types.ts          domain model
docs/               sources and records/accreditation policy
public/             manifest, icon, service worker
```

## License

- Code: MIT (`LICENSE`).
- Curriculum text and course data: CC BY-SA 4.0 (`LICENSE-CONTENT`).

Third-party documents linked from the curriculum remain under their own terms.

## Contributing

Corrections that cite a primary source are the most valuable contribution. If a
statute, rate, threshold, or TEKS citation is wrong or out of date, open an issue
with the source. Content changes should keep `npm test` passing; the catalog test
validates unique ids, weights totaling 100, non-empty units and assessments, and
rubrics totaling 100 points.
