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
- **Lessons that teach on their own.** The curriculum-depth standard (v2) asks
  every K–12 lesson for four objectives, three explanatory sections, grade-scaled
  taught prose (350 words in K–2, 400 in 3–5, 500 in 6–8, 600 in 9–12), three
  worked examples with reasoning and stated answers, eight defined terms, five
  practice items, four off-screen exercises, four reviewed questions with model
  answers, three discussed topics, and a named real-world application, with
  anti-boilerplate checks. `src/content/depth.test.ts` enforces it and fails by
  naming the lesson and the missed criterion. **Status: all 217 lessons meet v2 —
  Kindergarten through Grade 12 and adult education — and the shortfall ledger is
  empty.** Every lesson carries four objectives, five sections, grade-scaled prose,
  three worked examples, eight defined terms, five practice items, four off-screen
  exercises, and four reviewed questions with model answers. The measured spread is
  Kindergarten 12 lessons, Grades 1–5 66, Grades 6–8 46, and Grades 9–12 93 (which
  includes the 16 Adult Life Education lessons), across all 72 courses. Adult learners
  are not grade-scaled, so the adult course is held to the 600-word top band rather
  than a weaker scale, and it is measured by the same report and ledger as everything
  else. The ledger is generated from the report, not hand-maintained. Meeting this
  internal depth standard is not a compliance or accreditation claim: the TEKS mapping
  is per course rather than lesson by lesson, the graduation and record-keeping limits
  in `docs/standards-audit.md` still apply, and homeschool records are not
  institutionally recognized credits.
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
  GPA (4.0 unweighted / 4.5 weighted), credit tracking, a K–8 promotion check,
  and a Foundation High School Program graduation audit with endorsement and
  Distinguished Level of Achievement checks.
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
npm test         # grading, GPA, graduation, promotion, catalog, assessment, calendar, and workflow tests
```

`dist/` is a static site with relative asset paths, so it can be hosted from any
folder: GitHub Pages, Netlify, a home server, a NAS, or a USB drive. No
environment variables or backend are needed.

### Verify offline operation

`npm run build` also runs `scripts/check-offline.mjs`, which fails if the shipped
HTML, CSS, or manifest references an external runtime asset, if a referenced
local file is missing, or if the service worker stops precaching the built
index assets (`src/offline.test.ts` guards the same source files in the test
suite).

To reproduce the offline check by hand:

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 5180
```

1. Open `http://127.0.0.1:5180/`, wait for the page to finish loading, then wait a
   moment for the service worker to activate. In DevTools → Application → Cache
   Storage, the current `tha-*` cache should contain `index.html`, the hashed
   files under `assets/`, the manifest, and the icon.
2. Switch DevTools → Network to **Offline** and reload. The dashboard should render
   normally with no failed requests.
3. For a stronger check, stop the preview server and reload the same tab. The
   navigation falls back to the cached `index.html` and the cached JS/CSS must
   still boot the app. Create a student and a grade while offline, reload again,
   and confirm the same data is present.

A normal reload of the preview page is enough to exercise the cached shell: the
service worker ignores non-GET and cross-origin requests, and this app makes no
cross-origin runtime requests.

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
  the first attempt but is capped at 80% of the assessment's points (an 18-point
  quiz can earn at most 14.4 on a retake). Practice keeps the best attempt, so a
  struggling retry never lowers a recorded grade.

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
scripts/            post-build offline guard
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
