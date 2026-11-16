/**
 * Lessons below curriculum-depth standard v2, with the counts measured when this
 * file was generated. This is a ratchet: the depth test recomputes every count
 * and fails if a lesson here has changed without the ledger being regenerated,
 * if a short lesson is missing, or if a compliant lesson is still listed.
 *
 * Short: 16 of 201 K-12 lessons.
 */
export interface DepthShortfall {
  lessonId: string;
  courseId: string;
  grade: number;
  prose: number;
  requiredProse: number;
  teaching: number;
  failures: string[];
}

export const KNOWN_DEPTH_SHORTFALLS: DepthShortfall[] = [
  {
    lessonId: "econ-u1-l1",
    courseId: "hs-econ",
    grade: 12,
    prose: 216,
    requiredProse: 600,
    teaching: 300,
    failures: ["2 objectives (need 4)", "216 prose words (need 600 at grade 12)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "review \"What causes movement along a d…\" needs a model answer", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "econ-u2-l1",
    courseId: "hs-econ",
    grade: 12,
    prose: 226,
    requiredProse: 600,
    teaching: 307,
    failures: ["2 objectives (need 4)", "226 prose words (need 600 at grade 12)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "econ-u3-l1",
    courseId: "hs-econ",
    grade: 12,
    prose: 202,
    requiredProse: 600,
    teaching: 286,
    failures: ["2 objectives (need 4)", "202 prose words (need 600 at grade 12)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "efa-u1-l1",
    courseId: "elem-fine-arts",
    grade: 5,
    prose: 126,
    requiredProse: 400,
    teaching: 199,
    failures: ["2 objectives (need 4)", "2 sections (need 3)", "126 prose words (need 400 at grade 5)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "review \"What does tempo describe?…\" needs a model answer", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "efa-u2-l1",
    courseId: "elem-fine-arts",
    grade: 5,
    prose: 121,
    requiredProse: 400,
    teaching: 196,
    failures: ["2 objectives (need 4)", "2 sections (need 3)", "121 prose words (need 400 at grade 5)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "ehp-u1-l1",
    courseId: "elem-health-pe",
    grade: 5,
    prose: 138,
    requiredProse: 400,
    teaching: 201,
    failures: ["2 objectives (need 4)", "2 sections (need 3)", "138 prose words (need 400 at grade 5)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "ehp-u2-l1",
    courseId: "elem-health-pe",
    grade: 5,
    prose: 145,
    requiredProse: 400,
    teaching: 198,
    failures: ["2 objectives (need 4)", "2 sections (need 3)", "145 prose words (need 400 at grade 5)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "eng4-u1-l1",
    courseId: "hs-eng4",
    grade: 12,
    prose: 161,
    requiredProse: 600,
    teaching: 253,
    failures: ["2 objectives (need 4)", "161 prose words (need 600 at grade 12)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "eng4-u2-l1",
    courseId: "hs-eng4",
    grade: 12,
    prose: 167,
    requiredProse: 600,
    teaching: 249,
    failures: ["2 objectives (need 4)", "167 prose words (need 600 at grade 12)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "eng4-u3-l1",
    courseId: "hs-eng4",
    grade: 12,
    prose: 164,
    requiredProse: 600,
    teaching: 249,
    failures: ["2 objectives (need 4)", "164 prose words (need 600 at grade 12)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "eng4-u4-l1",
    courseId: "hs-eng4",
    grade: 12,
    prose: 175,
    requiredProse: 600,
    teaching: 268,
    failures: ["2 objectives (need 4)", "175 prose words (need 600 at grade 12)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "etech-u1-l1",
    courseId: "elem-tech",
    grade: 5,
    prose: 120,
    requiredProse: 400,
    teaching: 191,
    failures: ["2 objectives (need 4)", "2 sections (need 3)", "120 prose words (need 400 at grade 5)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "etech-u2-l1",
    courseId: "elem-tech",
    grade: 5,
    prose: 137,
    requiredProse: 400,
    teaching: 196,
    failures: ["2 objectives (need 4)", "2 sections (need 3)", "137 prose words (need 400 at grade 5)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "review \"Name two things you should not…\" needs a model answer", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "gov-u1-l1",
    courseId: "hs-gov",
    grade: 12,
    prose: 217,
    requiredProse: 600,
    teaching: 304,
    failures: ["2 objectives (need 4)", "217 prose words (need 600 at grade 12)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "gov-u2-l1",
    courseId: "hs-gov",
    grade: 12,
    prose: 187,
    requiredProse: 600,
    teaching: 266,
    failures: ["2 objectives (need 4)", "187 prose words (need 600 at grade 12)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "2 topics recorded (need 3)"],
  },
  {
    lessonId: "gov-u3-l1",
    courseId: "hs-gov",
    grade: 12,
    prose: 192,
    requiredProse: 600,
    teaching: 283,
    failures: ["2 objectives (need 4)", "192 prose words (need 600 at grade 12)", "2 worked examples (need 3)", "2 defined terms (need 8)", "2 practice items (need 5)", "2 exercises (need 4)", "2 review questions (need 4)", "2 topics recorded (need 3)"],
  },
];
