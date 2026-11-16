import { describe, expect, it } from 'vitest';
import { COURSES } from './index';
import { TEXAS_HOMESCHOOL_LAW } from './frameworks';
import type { Question } from '../types';

/**
 * Curriculum accuracy gates.
 *
 * These tests encode the checks a human reviewer performed across all 217
 * lessons: recomputing numeric keys, validating TEKS citations against the
 * course's own subject and grade, and refusing accreditation or TEA-approval
 * language. They are regression gates, not proof of full semantic review.
 */

function normalize(text: string): string {
  return text
    .replace(/[−–—]/g, '-')
    .replace(/[×·]/g, '*')
    .replace(/÷/g, '/')
    .replace(/½/g, '(1/2)')
    .replace(/⅓/g, '(1/3)')
    .replace(/⅔/g, '(2/3)')
    .replace(/¼/g, '(1/4)')
    .replace(/¾/g, '(3/4)')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/\$/g, '')
    .replace(/,/g, '');
}

/** Recursive-descent evaluator for the arithmetic that appears in prompts. */
function evaluate(input: string, x = 0): number {
  const s = normalize(input).replace(/\s+/g, '');
  let i = 0;

  function parseExpr(): number {
    let value = parseTerm();
    while (i < s.length && (s[i] === '+' || s[i] === '-')) {
      const op = s[i++];
      const right = parseTerm();
      value = op === '+' ? value + right : value - right;
    }
    return value;
  }
  function parseTerm(): number {
    let value = parseUnary();
    while (i < s.length && (s[i] === '*' || s[i] === '/')) {
      const op = s[i++];
      const right = parseUnary();
      value = op === '*' ? value * right : value / right;
    }
    return value;
  }
  function parseUnary(): number {
    if (s[i] === '-') { i++; return -parseUnary(); }
    if (s[i] === '+') { i++; return parseUnary(); }
    return parsePower();
  }
  function parsePower(): number {
    const base = parseAtom();
    if (s[i] === '^') { i++; return Math.pow(base, parseUnary()); }
    return base;
  }
  function parseAtom(): number {
    if (s[i] === '(') {
      i++;
      const value = parseExpr();
      if (s[i] === ')') i++;
      return value;
    }
    if (s[i] === 'x' || s[i] === 'X') { i++; return x; }
    const start = i;
    while (i < s.length && /[0-9.]/.test(s[i])) i++;
    if (start === i) throw new Error(`bad token at ${i}`);
    return Number(s.slice(start, i));
  }

  const value = parseExpr();
  if (i !== s.length) throw new Error(`trailing input in ${s}`);
  if (!Number.isFinite(value)) throw new Error('not finite');
  return value;
}

function close(a: number, b: number): boolean {
  return Math.abs(a - b) <= Math.max(0.011, Math.abs(b) * 1e-6);
}

/** Recompute a numeric key from its prompt, or return null when unparsed. */
function recompute(raw: string): number | null {
  const p = normalize(raw).trim();

  const bare = p.match(/^([-+()\d\s*/.^]+)=\s*\?$/);
  if (bare) {
    try { return evaluate(bare[1]); } catch { return null; }
  }

  const worded = p.match(/^(?:what is|calculate|compute|evaluate)\s+([-+()\d\s*/.^]+?)\s*[?.]?$/i);
  if (worded) {
    try { return evaluate(worded[1]); } catch { return null; }
  }

  const round = p.match(/round\s+([\d.]+)\s+to the nearest\s+(ten|hundred|thousand|ten thousand|hundred thousand|million)/i);
  if (round) {
    const place = { ten: 10, hundred: 100, thousand: 1000, 'ten thousand': 10000, 'hundred thousand': 100000, million: 1000000 }[round[2].toLowerCase()];
    const value = Number(round[1]);
    if (place) return Math.round(value / place) * place;
  }

  const placeValue = p.match(/value of the\s+(\d)\s+in\s+([\d,]+)/i);
  if (placeValue) {
    const digits = placeValue[2].replace(/,/g, '');
    const index = digits.indexOf(placeValue[1]);
    if (index >= 0) return Number(placeValue[1]) * Math.pow(10, digits.length - index - 1);
  }

  const coins: Record<string, number> = { quarter: 25, dime: 10, nickel: 5, penny: 1 };
  const words: Record<string, number> = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };
  if (/cents?/i.test(p) && /(quarter|dime|nickel|penny)/i.test(p)) {
    let total = 0;
    let found = false;
    for (const m of p.matchAll(/(\w+)\s+(quarters?|dimes?|nickels?|pennies|penny)/gi)) {
      const count = words[m[1].toLowerCase()] ?? Number(m[1]);
      const name = m[2].toLowerCase().replace(/s$/, '');
      if (Number.isFinite(count) && coins[name] !== undefined) {
        total += count * coins[name];
        found = true;
      }
    }
    if (found) return total;
  }

  const fractionOf = p.match(/(\d+)\s*\/\s*(\d+)\s+of\s+(\d+(?:\.\d+)?)/i);
  if (fractionOf) return (Number(fractionOf[1]) / Number(fractionOf[2])) * Number(fractionOf[3]);

  const bySize = p.match(/(area|perimeter) of (?:an? )?(\d+(?:\.\d+)?)\s*(?:-| )by\s*(\d+(?:\.\d+)?)/i);
  if (bySize) {
    const a = Number(bySize[2]);
    const b = Number(bySize[3]);
    return bySize[1].toLowerCase() === 'area' ? a * b : 2 * (a + b);
  }

  const solve = p.match(/solve\s+(.+?)\s*=\s*(.+?)\s*[.?]?$/i);
  if (solve) {
    try {
      const left = solve[1].replace(/\s+/g, '');
      const exponential = left.match(/^(\d+(?:\.\d+)?)\^\((x)([+-]\d+(?:\.\d+)?)?\)$/);
      if (exponential) {
        const base = Number(exponential[1]);
        const shift = Number(exponential[3] ?? 0);
        const target = evaluate(solve[2], 0);
        if (base > 0 && base !== 1 && target > 0) {
          return Math.log(target) / Math.log(base) - shift;
        }
      }
      const f0 = evaluate(left, 0) - evaluate(solve[2], 0);
      const f1 = evaluate(left, 1) - evaluate(solve[2], 1);
      const slope = f1 - f0;
      if (Math.abs(slope) > 1e-9) return -f0 / slope;
    } catch { /* fall through */ }
  }

  const percent = p.match(/(?:what is|find|how much is)\s+(\d+(?:\.\d+)?)\s*%\s*of\s*(\d+(?:\.\d+)?)/i);
  if (percent) return (Number(percent[1]) * Number(percent[2])) / 100;

  const change = p.match(/percent(?:age)?\s+(?:increase|change|decrease)\s+from\s+(\d+(?:\.\d+)?)\s+to\s+(\d+(?:\.\d+)?)/i);
  if (change) return ((Number(change[2]) - Number(change[1])) / Number(change[1])) * 100;

  const triangle = p.match(/area of a triangle with (?:a )?base\s+(\d+(?:\.\d+)?)[^.]*?height\s+(\d+(?:\.\d+)?)/i);
  if (triangle) return (Number(triangle[1]) * Number(triangle[2])) / 2;

  const rectangle = p.match(/area of a (?:rectangle|parallelogram) with (?:a )?(?:length|base)\s+(\d+(?:\.\d+)?)[^.]*?(?:width|height)\s+(\d+(?:\.\d+)?)/i);
  if (rectangle) return Number(rectangle[1]) * Number(rectangle[2]);

  const perimeter = p.match(/perimeter of a rectangle with (?:a )?length\s+(\d+(?:\.\d+)?)[^.]*?width\s+(\d+(?:\.\d+)?)/i);
  if (perimeter) return 2 * (Number(perimeter[1]) + Number(perimeter[2]));

  const square = p.match(/area of a square with (?:a )?side(?: length)? of\s+(\d+(?:\.\d+)?)/i);
  if (square) return Number(square[1]) ** 2;

  const mean = p.match(/(?:mean|average) of\s+([\d.\s]+)/i);
  if (mean) {
    const values = (mean[1].match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number);
    if (values.length >= 2) return values.reduce((a, b) => a + b, 0) / values.length;
  }

  const median = p.match(/median of\s+([\d.\s]+)/i);
  if (median) {
    const values = (median[1].match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number).sort((a, b) => a - b);
    if (values.length >= 2) {
      const mid = Math.floor(values.length / 2);
      return values.length % 2 ? values[mid] : (values[mid - 1] + values[mid]) / 2;
    }
  }

  const more = p.match(/(\d+(?:\.\d+)?)\s+more than\s+(\d+(?:\.\d+)?)/i);
  if (more) return Number(more[1]) + Number(more[2]);

  const less = p.match(/(\d+(?:\.\d+)?)\s+less than\s+(\d+(?:\.\d+)?)/i);
  if (less) return Number(less[2]) - Number(less[1]);

  const binary = p.match(/convert binary\s+([01]+)\s+to decimal/i);
  if (binary) return parseInt(binary[1], 2);

  const slope = p.match(/slope through\s+\((-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)\)\s+and\s+\((-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)\)/i);
  if (slope) {
    const run = Number(slope[3]) - Number(slope[1]);
    if (run !== 0) return (Number(slope[4]) - Number(slope[2])) / run;
  }

  const thirdAngle = p.match(/triangle has angles\s+(\d+(?:\.\d+)?)\s*°?\s+and\s+(\d+(?:\.\d+)?)\s*°?/i);
  if (thirdAngle) return 180 - Number(thirdAngle[1]) - Number(thirdAngle[2]);

  const rule72 = p.match(/rule of 72[^.]*?at\s+(\d+(?:\.\d+)?)\s*%/i);
  if (rule72) return 72 / Number(rule72[1]);

  const wave = p.match(/frequency\s+(\d+(?:\.\d+)?)\s*Hz\s+and\s+wavelength\s+(\d+(?:\.\d+)?)\s*m/i);
  if (wave) return Number(wave[1]) * Number(wave[2]);

  const acceleration = p.match(/a\s+(\d+(?:\.\d+)?)\s*kg object experiences a net force of\s+(\d+(?:\.\d+)?)\s*N/i);
  if (acceleration) return Number(acceleration[2]) / Number(acceleration[1]);

  const conversions: [RegExp, number][] = [
    [/(?:how many|number of)\s+inches\s+(?:are\s+)?in\s+(\d+(?:\.\d+)?)\s*feet/i, 12],
    [/(?:how many|number of)\s+feet\s+(?:are\s+)?in\s+(\d+(?:\.\d+)?)\s*yards?/i, 3],
    [/(?:how many|number of)\s+minutes\s+(?:are\s+)?in\s+(\d+(?:\.\d+)?)\s*hours?/i, 60],
    [/(?:how many|number of)\s+seconds\s+(?:are\s+)?in\s+(\d+(?:\.\d+)?)\s*minutes?/i, 60],
    [/(?:how many|number of)\s+days\s+(?:are\s+)?in\s+(\d+(?:\.\d+)?)\s*weeks?/i, 7],
    [/(?:how many|number of)\s+cents\s+(?:are\s+)?in\s+(\d+(?:\.\d+)?)\s*dollars?/i, 100],
    [/(?:how many|number of)\s+centimeters\s+(?:are\s+)?in\s+(\d+(?:\.\d+)?)\s*meters?/i, 100],
    [/(?:how many|number of)\s+millimeters\s+(?:are\s+)?in\s+(\d+(?:\.\d+)?)\s*centimeters?/i, 10],
    [/(?:how many|number of)\s+milliliters?\s+(?:are\s+)?in\s+(\d+(?:\.\d+)?)\s*liters?/i, 1000],
    [/(?:how many|number of)\s+grams?\s+(?:are\s+)?in\s+(\d+(?:\.\d+)?)\s*kilograms?/i, 1000],
    [/(?:how many|number of)\s+ounces\s+(?:are\s+)?in\s+(\d+(?:\.\d+)?)\s*pounds?/i, 16],
    [/(?:how many|number of)\s+months?\s+(?:are\s+)?in\s+(\d+(?:\.\d+)?)\s*years?/i, 12],
  ];
  for (const [pattern, factor] of conversions) {
    const hit = p.match(pattern);
    if (hit) return Number(hit[1]) * factor;
  }

  return null;
}

interface Collected {
  where: string;
  question: Question;
}

const items: Collected[] = [];
const practiceSets: { where: string; questions: Question[] }[] = [];

for (const course of COURSES) {
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      items.push(...lesson.practice.map((question) => ({ where: `${course.id}/${lesson.id}`, question })));
      practiceSets.push({ where: `${course.id}/${lesson.id}`, questions: lesson.practice });
    }
    items.push(...unit.quiz.questions.map((question) => ({ where: `${course.id}/${unit.id}/quiz`, question })));
    practiceSets.push({ where: `${course.id}/${unit.id}/quiz`, questions: unit.quiz.questions });
  }
  if (course.midterm) {
    items.push(...course.midterm.questions.map((question) => ({ where: `${course.id}/midterm`, question })));
    practiceSets.push({ where: `${course.id}/midterm`, questions: course.midterm.questions });
  }
  items.push(...course.finalExam.questions.map((question) => ({ where: `${course.id}/final`, question })));
  practiceSets.push({ where: `${course.id}/final`, questions: course.finalExam.questions });
}

describe('curriculum accuracy', () => {
  it('recomputes numeric answer keys from their prompts', () => {
    const numeric = items.filter(({ question }) => question.kind === 'numeric');
    const mismatches: string[] = [];
    let checked = 0;

    for (const { where, question } of numeric) {
      if (question.kind !== 'numeric') continue;
      const computed = recompute(question.prompt);
      if (computed === null) continue;
      checked += 1;
      if (!close(computed, question.answer)) {
        mismatches.push(
          `${where}: "${question.prompt.slice(0, 70)}" key=${question.answer} computed=${Number(computed.toFixed(4))}`,
        );
      }
    }

    // The parser covers the arithmetic families used across the catalog. If this
    // count collapses, a prompt rewrite has silently escaped recomputation.
    expect(checked).toBeGreaterThanOrEqual(150);
    expect(mismatches.slice(0, 12)).toEqual([]);
  });

  it('validates every TEKS citation against the course subject and grade', () => {
    const chaptersBySubject: Record<string, number[]> = {
      ela: [110],
      math: [111],
      science: [112],
      'social-studies': [113],
      lote: [114],
      health: [115],
      pe: [115, 116],
      'fine-arts': [117],
      technology: [126],
      cte: [127],
      'personal-finance': [113],
      'adult-education': [113],
      elective: [110],
    };
    const problems: string[] = [];

    for (const course of COURSES) {
      expect(course.teks.length, `${course.id} has no TEKS alignment`).toBeGreaterThan(0);
      const seen = new Set<string>();

      for (const ref of course.teks) {
        if (seen.has(ref.citation)) problems.push(`${course.id}: duplicate citation "${ref.citation}"`);
        seen.add(ref.citation);
        if (ref.summary.trim().split(/\s+/).length < 3) {
          problems.push(`${course.id}: empty alignment summary for "${ref.citation}"`);
        }

        const tac = ref.citation.match(/^19 TAC ch\. (\d{3}), (.+)$/);
        if (tac) {
          const chapter = Number(tac[1]);
          const label = tac[2];
          const allowed = chaptersBySubject[course.subject] ?? [];
          if (!allowed.includes(chapter)) {
            problems.push(`${course.id}: chapter ${chapter} does not match subject ${course.subject}`);
          }
          const exact = label.match(/Grade (\d+)/i);
          if (exact && Number(exact[1]) !== course.grade) {
            problems.push(`${course.id}: "${label}" names grade ${exact[1]}, course is grade ${course.grade}`);
          }
          const range = label.match(/Grades? (\d+)\s*[–-]\s*(\d+)/i);
          if (range && (course.grade < Number(range[1]) || course.grade > Number(range[2]))) {
            problems.push(`${course.id}: "${label}" range excludes grade ${course.grade}`);
          }
          if (course.grade === 0 && !/Kindergarten/i.test(label)) {
            problems.push(`${course.id}: kindergarten course cites "${label}"`);
          }
          continue;
        }

        if (!/^Tex\. Educ\. Code §[\d.A-Za-z()\-]+$/.test(ref.citation)) {
          problems.push(`${course.id}: unrecognized citation "${ref.citation}"`);
        }
      }
    }

    expect(problems.slice(0, 12)).toEqual([]);
  });

  it('never claims accreditation, TEA approval, or official credit', () => {
    const forbidden: RegExp[] = [
      /\bTEA[- ]approved\b/i,
      /\bapproved by (the )?(Texas Education Agency|TEA)\b/i,
      /\baccredited by\b/i,
      /\b(is|are|fully|regionally|nationally) accredited\b/i,
      /\bofficial (high school )?(diploma|transcript|credit)s?\b/i,
      /\bstate[- ]approved\b/i,
      /\brecognized by (the )?TEA\b/i,
      /\bTEA (approves|endorses|recognizes)\b/i,
    ];
    const negation = /\b(not|never|no|none|without|cannot|can't|does not|doesn't|is not|isn't|are not|aren't|neither|nor)\b/i;
    const problems: string[] = [];

    const texts: { where: string; text: string }[] = [];
    const add = (where: string, text: string | undefined) => {
      if (text) texts.push({ where, text });
    };

    for (const course of COURSES) {
      add(`${course.id}/description`, course.description);
      for (const question of course.essentialQuestions) add(`${course.id}/essential-question`, question);
      for (const ref of course.teks) add(`${course.id}/teks`, ref.summary);
      for (const note of course.sourceNotes ?? []) add(`${course.id}/source-note`, note);

      for (const unit of course.units) {
        add(`${unit.id}/big-idea`, unit.bigIdea);
        for (const lesson of unit.lessons) {
          add(`${lesson.id}/title`, lesson.title);
          for (const objective of lesson.objectives) add(`${lesson.id}/objective`, objective);
          for (const section of lesson.sections) {
            add(`${lesson.id}/heading`, section.heading);
            for (const paragraph of section.paragraphs) add(`${lesson.id}/paragraph`, paragraph);
            for (const bullet of section.bullets ?? []) add(`${lesson.id}/bullet`, bullet);
          }
          for (const example of [lesson.example, lesson.extraExample, ...(lesson.examples ?? [])]) {
            if (!example) continue;
            add(`${lesson.id}/example`, example.prompt);
            for (const step of example.steps) add(`${lesson.id}/example-step`, step);
            add(`${lesson.id}/example-answer`, example.answer);
          }
          for (const term of lesson.keyTerms ?? []) add(`${lesson.id}/term`, `${term.term}: ${term.definition}`);
          for (const question of lesson.practice) {
            add(`${lesson.id}/practice-prompt`, question.prompt);
            if (question.kind === 'mc') {
              for (const choice of question.choices) add(`${lesson.id}/practice-choice`, choice);
            }
            if (question.kind === 'short') add(`${lesson.id}/practice-model`, question.modelAnswer);
          }
          for (const entry of lesson.review ?? []) add(`${lesson.id}/review`, `${entry.prompt} ${entry.answer}`);
        }
      }
    }

    for (const { where, text } of texts) {
      for (const pattern of forbidden) {
        for (const match of text.matchAll(new RegExp(pattern.source, `${pattern.flags}g`))) {
          const before = text.slice(Math.max(0, (match.index ?? 0) - 90), match.index ?? 0);
          if (negation.test(before)) continue;
          problems.push(`${where}: "${match[0]}" in "${text.slice(0, 90)}"`);
        }
      }
    }

    expect(problems.slice(0, 12)).toEqual([]);
  });

  it('keeps the no-accreditation disclosure in the framework notes', () => {
    const note = TEXAS_HOMESCHOOL_LAW.find((entry) => /accredit/i.test(entry.title));
    expect(note, 'framework notes must include a no-accreditation disclosure').toBeTruthy();
    const body = [note!.title, ...note!.points].join(' ');
    expect(body).toMatch(/not accredited|no state accreditation|does not accredit/i);
  });

  it('does not re-ask a skill with an identical stem inside one set', () => {
    const problems: string[] = [];
    for (const { where, questions } of practiceSets) {
      const seen = new Map<string, number>();
      for (const question of questions) {
        const stem = question.prompt.trim().toLowerCase().replace(/[\s?!.]+/g, ' ');
        if (seen.has(stem)) {
          problems.push(`${where}: repeated stem "${question.prompt.slice(0, 60)}"`);
        }
        seen.set(stem, (seen.get(stem) ?? 0) + 1);
      }
    }
    expect(problems.slice(0, 12)).toEqual([]);
  });
});
