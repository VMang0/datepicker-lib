import { getYearsInterval } from '@utils/getYearsInterval';

describe('getYearsInterval', () => {
  it('should return the correct interval for 2022', () => {
    const year = 2022;
    const expectedInterval = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031];
    expect(getYearsInterval(year)).toEqual(expectedInterval);
  });

  it('should return the correct interval for 2000', () => {
    const year = 2000;
    const expectedInterval = [1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007];
    expect(getYearsInterval(year)).toEqual(expectedInterval);
  });
});
