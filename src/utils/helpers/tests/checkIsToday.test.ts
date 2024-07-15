import { checkIsToday } from '@utils/helpers/checkIsToday';

describe('checkIsToday', () => {
  const today = new Date();

  test("should return true for today's date", () => {
    expect(checkIsToday(today)).toBe(true);
  });

  test('should return false for a date in the past', () => {
    const pastDate = today;
    pastDate.setDate(pastDate.getDate() - 1);
    expect(checkIsToday(pastDate)).toBe(false);
  });

  test('should return false for a date in the future', () => {
    const futureDate = today;
    futureDate.setDate(futureDate.getDate() + 2);
    expect(checkIsToday(futureDate)).toBe(false);
  });
});
