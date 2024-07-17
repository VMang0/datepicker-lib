import { CALENDAR_RANGE, YEARS_PERIOD } from '@constants/calendar';

export const getYearsInterval = (year: number) => {
  const { minDate, maxDate } = CALENDAR_RANGE;
  const startYear = minDate.year;
  const endYear = maxDate.year;

  const groupStart = year - ((year - startYear) % YEARS_PERIOD);
  const groupEnd = Math.min(groupStart + YEARS_PERIOD - 1, endYear);

  return Array.from({ length: groupEnd - groupStart + 1 }, (_, index) => groupStart + index);
};
