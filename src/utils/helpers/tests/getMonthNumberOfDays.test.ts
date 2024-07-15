import { getMonthNumberOfDays } from '@utils/helpers/getMonthNumberOfDays';

describe('getMonthNumberOfDays', () => {
  test('should return 31 days for January', () => {
    expect(getMonthNumberOfDays(0)).toBe(31);
  });

  test('should return 29 days for February in a leap year', () => {
    expect(getMonthNumberOfDays(1, 2024)).toBe(29);
  });

  test('should return 30 days for April', () => {
    expect(getMonthNumberOfDays(3)).toBe(30);
  });

  test('should return 31 days for December', () => {
    expect(getMonthNumberOfDays(11)).toBe(31);
  });

  test('should return 30 days for June', () => {
    expect(getMonthNumberOfDays(5)).toBe(30);
  });

  test('should return the correct number of days for the current month', () => {
    const currentMonthIndex = new Date().getMonth();
    expect(getMonthNumberOfDays(currentMonthIndex)).toBe(new Date(2024, currentMonthIndex + 1, 0).getDate());
  });

  test('should return 31 days for months with 31 days', () => {
    [0, 2, 4, 6, 7, 9, 11].forEach((monthIndex) => {
      expect(getMonthNumberOfDays(monthIndex)).toBe(31);
    });
  });

  test('should return 30 days for months with 30 days', () => {
    [3, 5, 8, 10].forEach((monthIndex) => {
      expect(getMonthNumberOfDays(monthIndex)).toBe(30);
    });
  });

  test('should return 31 days for July 2024', () => {
    expect(getMonthNumberOfDays(6, 2024)).toBe(31);
  });

  test('should return 31 days for the month after July 2024', () => {
    expect(getMonthNumberOfDays(7, 2024)).toBe(31);
  });

  test('should handle current year for a future month', () => {
    const futureMonthIndex = 11;
    expect(getMonthNumberOfDays(futureMonthIndex)).toBe(31);
  });

  test('should handle current year for a past month', () => {
    const pastMonthIndex = 0;
    expect(getMonthNumberOfDays(pastMonthIndex)).toBe(31);
  });
});
