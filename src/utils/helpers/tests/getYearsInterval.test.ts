import { getYearsInterval } from '@utils/helpers/getYearsInterval';

describe('getYearsInterval', () => {
  test('should return a list of 10 years starting from the given year', () => {
    const result = getYearsInterval(2024, 2020, 2033);
    expect(result).toEqual([2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033]);
  });

  test('should return a list of years within the min and max year bounds', () => {
    const result = getYearsInterval(2025, 2020, 2029);
    expect(result).toEqual([2025, 2026, 2027, 2028, 2029]);
  });

  test('should handle the case where the starting year is greater than the max year', () => {
    const result = getYearsInterval(2030, 2020, 2029);
    expect(result).toEqual([]);
  });

  test('should return the correct interval when minYear and maxYear are the same', () => {
    const result = getYearsInterval(2025, 2025, 2025);
    expect(result).toEqual([2025]);
  });

  test('should return a list of years with a gap when period is set to a larger value', () => {
    const result = getYearsInterval(2020, 2010, 2025);
    expect(result).toEqual([2020, 2021, 2022, 2023, 2024, 2025]);
  });

  test('should handle cases where the period is exactly up to the max year', () => {
    const result = getYearsInterval(2022, 2020, 2024);
    expect(result).toEqual([2022, 2023, 2024]);
  });
});
