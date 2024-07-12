export const getYearsInterval = (year: number, minYear: number, maxYear: number) => {
  const startYear = Math.max(year, minYear);
  return [...Array(12)].map((_, index) => startYear + index).filter((year) => year <= maxYear);
};
