import { checkDateIsEqual } from '@utils/checkDateIsEqual';

describe('checkDateIsEqual', () => {
  test('should return true for dates with the same day, month, and year', () => {
    const date1 = new Date('2024-07-13');
    const date2 = new Date('2024-07-13');
    expect(checkDateIsEqual(date1, date2)).toBe(true);
  });

  test('should return false for dates with different days but the same month and year', () => {
    const date1 = new Date('2024-07-13');
    const date2 = new Date('2024-07-14');
    expect(checkDateIsEqual(date1, date2)).toBe(false);
  });

  test('should return false for dates with different months but the same day and year', () => {
    const date1 = new Date('2024-07-13');
    const date2 = new Date('2024-08-13');
    expect(checkDateIsEqual(date1, date2)).toBe(false);
  });

  test('should return false for dates with different years but the same day and month', () => {
    const date1 = new Date('2024-07-13');
    const date2 = new Date('2023-07-13');
    expect(checkDateIsEqual(date1, date2)).toBe(false);
  });

  test('should return false for dates with different days, months, and years', () => {
    const date1 = new Date('2024-07-13');
    const date2 = new Date('2023-08-14');
    expect(checkDateIsEqual(date1, date2)).toBe(false);
  });

  test('should return false for dates with the same day, month, but different years', () => {
    const date1 = new Date('2024-07-13');
    const date2 = new Date('2025-07-13');
    expect(checkDateIsEqual(date1, date2)).toBe(false);
  });
});
