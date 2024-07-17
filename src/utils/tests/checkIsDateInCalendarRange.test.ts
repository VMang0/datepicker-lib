import { checkIsDateInCalendarRange } from '@utils/checkIsDateInCalendarRange';

describe('checkIsDateInCalendarRange', () => {
  const minDate = { year: 2020, month: 1, day: 15 };
  const maxDate = { year: 2024, month: 7, day: 10 };

  it('should return true for a date within the range', () => {
    const date = new Date(2022, 5, 15);
    expect(checkIsDateInCalendarRange(maxDate, minDate, date)).toBe(true);
  });

  it('should return false for a date before the range', () => {
    const date = new Date(2019, 11, 15);
    expect(checkIsDateInCalendarRange(maxDate, minDate, date)).toBe(false);
  });

  it('should return false for a date after the range', () => {
    const date = new Date(2025, 0, 1);
    expect(checkIsDateInCalendarRange(maxDate, minDate, date)).toBe(false);
  });

  it('should return true for the maxDate itself', () => {
    const date = new Date(maxDate.year, maxDate.month - 1, maxDate.day);
    expect(checkIsDateInCalendarRange(maxDate, minDate, date)).toBe(true);
  });

  it('should return true for the first valid day of the month within the range', () => {
    const date = new Date(2020, 1, 15);
    expect(checkIsDateInCalendarRange(maxDate, minDate, date)).toBe(true);
  });

  it('should return true for the last valid day of the month within the range', () => {
    const date = new Date(2024, 7, 10);
    expect(checkIsDateInCalendarRange(maxDate, minDate, date)).toBe(true);
  });
});
