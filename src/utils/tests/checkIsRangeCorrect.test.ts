import { checkIsRangeCorrect } from '@utils/checkIsRangeCorrect';

describe('checkIsRangeCorrect', () => {
  it('should return true if date2 is the same as date1', () => {
    const date1 = new Date(2024, 6, 17);
    const date2 = new Date(2024, 6, 17);
    expect(checkIsRangeCorrect(date1, date2)).toBe(true);
  });

  it('should return true if date2 is after date1', () => {
    const date1 = new Date(2024, 6, 17);
    const date2 = new Date(2024, 6, 18);
    expect(checkIsRangeCorrect(date1, date2)).toBe(true);
  });

  it('should return false if date2 is before date1', () => {
    const date1 = new Date(2024, 6, 17);
    const date2 = new Date(2024, 6, 16);
    expect(checkIsRangeCorrect(date1, date2)).toBe(false);
  });

  it('should return false if date1 is not provided', () => {
    const date2 = new Date(2024, 6, 17);
    expect(checkIsRangeCorrect(undefined, date2)).toBe(false);
  });

  it('should return false if date2 is not provided', () => {
    const date1 = new Date(2024, 6, 17);
    expect(checkIsRangeCorrect(date1, undefined)).toBe(false);
  });

  it('should return false if both dates are not provided', () => {
    expect(checkIsRangeCorrect(undefined, undefined)).toBe(false);
  });

  it('should handle edge cases with different years', () => {
    const date1 = new Date(2024, 6, 17);
    const date2 = new Date(2025, 0, 1);
    expect(checkIsRangeCorrect(date1, date2)).toBe(true);
  });

  it('should handle edge cases with different months in the same year', () => {
    const date1 = new Date(2024, 6, 17);
    const date2 = new Date(2024, 7, 1);
    expect(checkIsRangeCorrect(date1, date2)).toBe(true);
  });

  it('should handle edge cases with different days in the same month', () => {
    const date1 = new Date(2024, 6, 17);
    const date2 = new Date(2024, 6, 18);
    expect(checkIsRangeCorrect(date1, date2)).toBe(true);
  });
});
