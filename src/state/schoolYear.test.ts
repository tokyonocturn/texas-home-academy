import { describe, expect, it } from 'vitest';
import { buildSchoolYear, fourthMondayOfAugust, periodForDate } from './schoolYear';

describe('school calendar', () => {
  it('starts on the fourth Monday in August', () => {
    expect(fourthMondayOfAugust(2026)).toBe('2026-08-24');
    expect(fourthMondayOfAugust(2027)).toBe('2027-08-23');
  });

  it('builds 180 instructional days in six grading periods', () => {
    const year = buildSchoolYear(2026);
    expect(year.instructionalDays).toBe(180);
    expect(year.periods).toHaveLength(6);
    expect(year.start).toBe('2026-08-24');
    for (const period of year.periods) {
      expect(period.start <= period.end).toBe(true);
    }
    expect(year.periods[0].id).toBe('Q1');
    expect(year.periods[5].id).toBe('Q6');
  });

  it('assigns a date to its grading period', () => {
    const year = buildSchoolYear(2026);
    expect(periodForDate(year, year.periods[0].start)).toBe('Q1');
    expect(periodForDate(year, year.periods[3].start)).toBe('Q4');
    // Dates outside the year clamp to the nearest period.
    expect(periodForDate(year, '2026-07-01')).toBe('Q1');
    expect(periodForDate(year, '2027-07-01')).toBe('Q6');
  });
});
