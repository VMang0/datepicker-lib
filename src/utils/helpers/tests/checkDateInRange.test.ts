import { checkDateInSelectedRange } from '@utils/helpers/checkDateInSelectedRange';

describe('checkDateInRange', () => {
  test('should return true if date is within the range', () => {
    const date = new Date('2024-07-10');
    const startDate = new Date('2024-07-01');
    const endDate = new Date('2024-07-13');
    expect(checkDateInSelectedRange(date, startDate, endDate)).toBe(true);
  });

  test('should return false if date is before the start date', () => {
    const date = new Date('2024-06-30');
    const startDate = new Date('2024-07-01');
    const endDate = new Date('2024-07-13');
    expect(checkDateInSelectedRange(date, startDate, endDate)).toBe(false);
  });

  test('should return false if date is after the end date', () => {
    const date = new Date('2024-07-16');
    const startDate = new Date('2024-07-01');
    const endDate = new Date('2024-07-13');
    expect(checkDateInSelectedRange(date, startDate, endDate)).toBe(false);
  });
});
