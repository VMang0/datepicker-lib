import { getWeekNumber } from '@utils/getWeekNumber';

describe('getWeekNumber', () => {
  it('should return the correct week number for the first week of the year', () => {
    const date = new Date('2024-01-01');
    const weekNumber = getWeekNumber(date);
    expect(weekNumber).toBe(1);
  });

  it('should return the correct week number for a date in the middle of the year', () => {
    const date = new Date('2024-07-01');
    const weekNumber = getWeekNumber(date);
    expect(weekNumber).toBe(27);
  });

  it('should return the correct week number for the last week of the year', () => {
    const date = new Date('2024-12-31');
    const weekNumber = getWeekNumber(date);
    expect(weekNumber).toBe(53);
  });

  it('should return the correct week number for a date at the beginning of the year', () => {
    const date = new Date('2024-01-03');
    const weekNumber = getWeekNumber(date);
    expect(weekNumber).toBe(1);
  });

  it('should correctly handle a date from a leap year', () => {
    const date = new Date('2024-02-29');
    const weekNumber = getWeekNumber(date);
    expect(weekNumber).toBe(9);
  });

  it('should return the correct week number for a date at the very start of the year', () => {
    const date = new Date('2024-01-02');
    const weekNumber = getWeekNumber(date);
    expect(weekNumber).toBe(1);
  });
});
