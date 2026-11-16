import type { GradingPeriod, SchoolYear } from '../types';

/**
 * Academic calendar generation.
 *
 * Anchors on real Texas requirements:
 *  - Tex. Educ. Code §25.0811: a school district may not begin instruction
 *    before the fourth Monday in August.
 *  - Tex. Educ. Code §25.081: at least 180 days of instruction.
 *
 * A home school is not bound by those statutes (they apply to districts), but
 * this program adopts the conventional 180-day, six-six-week-period calendar so
 * records line up with what colleges and NCAA reviewers expect to see.
 *
 * Dates are handled as UTC calendar dates to avoid timezone drift.
 */

const DAY_MS = 86_400_000;

export function toISO(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function fromISO(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
}

export function addDays(iso: string, days: number): string {
  return toISO(new Date(fromISO(iso).getTime() + days * DAY_MS));
}

export function isWeekend(iso: string): boolean {
  const day = fromISO(iso).getUTCDay();
  return day === 0 || day === 6;
}

/** Fourth Monday in August for the given year (Tex. Educ. Code §25.0811). */
export function fourthMondayOfAugust(year: number): string {
  let mondays = 0;
  for (let day = 1; day <= 31; day += 1) {
    const date = new Date(Date.UTC(year, 7, day));
    if (date.getUTCDay() === 1) {
      mondays += 1;
      if (mondays === 4) return toISO(date);
    }
  }
  return `${year}-08-24`;
}

function nthWeekdayOfMonth(year: number, month: number, weekday: number, n: number): string {
  let count = 0;
  for (let day = 1; day <= 31; day += 1) {
    const date = new Date(Date.UTC(year, month, day));
    if (date.getUTCMonth() !== month) break;
    if (date.getUTCDay() === weekday) {
      count += 1;
      if (count === n) return toISO(date);
    }
  }
  return toISO(new Date(Date.UTC(year, month, 1)));
}

interface BreakRange {
  label: string;
  start: string;
  end: string;
}

function buildBreaks(startYear: number): BreakRange[] {
  const laborDay = nthWeekdayOfMonth(startYear, 8, 1, 1);
  const thanksgiving = nthWeekdayOfMonth(startYear, 10, 4, 4);
  return [
    { label: 'Labor Day', start: laborDay, end: laborDay },
    { label: 'Thanksgiving break', start: thanksgiving, end: addDays(thanksgiving, 2) },
    { label: 'Winter break', start: `${startYear}-12-21`, end: `${startYear + 1}-01-01` },
    { label: 'Spring break', start: nthWeekdayOfMonth(startYear + 1, 2, 1, 2), end: addDays(nthWeekdayOfMonth(startYear + 1, 2, 1, 2), 4) },
    { label: 'Good Friday', start: goodFriday(startYear + 1), end: goodFriday(startYear + 1) },
  ];
}

/** Western Easter (Meeus/Jones/Butcher) then two days earlier. */
function goodFriday(year: number): string {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return toISO(new Date(Date.UTC(year, month - 1, day - 2)));
}

function inBreak(iso: string, breaks: BreakRange[]): boolean {
  return breaks.some((b) => iso >= b.start && iso <= b.end);
}

/** The 180 instructional dates, skipping weekends and listed breaks. */
export function instructionalDates(startYear: number): string[] {
  const breaks = buildBreaks(startYear);
  const dates: string[] = [];
  let cursor = fourthMondayOfAugust(startYear);
  // Safety bound: a school year always fits inside 400 calendar days.
  for (let guard = 0; guard < 400 && dates.length < 180; guard += 1) {
    if (!isWeekend(cursor) && !inBreak(cursor, breaks)) dates.push(cursor);
    cursor = addDays(cursor, 1);
  }
  return dates;
}

export function buildSchoolYear(startYear: number): SchoolYear {
  const dates = instructionalDates(startYear);
  const breaks = buildBreaks(startYear);
  const periods: GradingPeriod[] = [];
  // Six grading periods of 30 instructional days each.
  for (let i = 0; i < 6; i += 1) {
    const slice = dates.slice(i * 30, (i + 1) * 30);
    if (slice.length === 0) continue;
    periods.push({
      id: `Q${i + 1}`,
      label: `${i % 3 === 0 ? 'First' : i % 3 === 1 ? 'Second' : 'Third'} six weeks, semester ${i < 3 ? 1 : 2}`,
      start: slice[0],
      end: slice[slice.length - 1],
      semester: i < 3 ? 1 : 2,
      index: i + 1,
    });
  }
  const derivedBreaks = breaks.filter(
    (b) => b.end >= dates[0] && b.start <= dates[dates.length - 1],
  );
  return {
    id: `${startYear}-${startYear + 1}`,
    label: `${startYear}–${startYear + 1}`,
    start: dates[0],
    end: dates[dates.length - 1],
    instructionalDays: dates.length,
    periods,
    breaks: derivedBreaks,
  };
}

/** Which grading period contains a date. Falls back to the nearest period. */
export function periodForDate(year: SchoolYear, isoDate: string): string {
  const match = year.periods.find((p) => isoDate >= p.start && isoDate <= p.end);
  if (match) return match.id;
  if (isoDate < year.periods[0].start) return year.periods[0].id;
  return year.periods[year.periods.length - 1].id;
}

export function todayISO(): string {
  return toISO(new Date());
}

export function formatDate(iso: string): string {
  const date = fromISO(iso);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatShortDate(iso: string): string {
  const date = fromISO(iso);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
}
