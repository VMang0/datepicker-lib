import { YEARS_PERIOD } from '@constants/calendar';

export const getYearsInterval = (year: number, minYear: number, maxYear: number) => {
  return [...Array(YEARS_PERIOD)].map((_, index) => year + index).filter((year) => year <= maxYear);
};
