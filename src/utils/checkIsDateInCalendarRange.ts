import { DayOfRange } from '@type/calendar';

export const checkIsDateInCalendarRange = (maxDate: DayOfRange, minDate: DayOfRange, currentDate: Date): boolean => {
  const currentDay = currentDate.getDay();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const isCurrentYearEqualMax = currentYear === maxDate.year;
  const isCurrentYearEqualMin = currentYear === minDate.year;

  const isCurrentMonthEqualMax = currentYear === maxDate.month;
  const isCurrentMonthEqualMin = currentYear === minDate.month;

  if (
    currentYear < minDate.year ||
    (isCurrentYearEqualMin && currentMonth < minDate.month) ||
    (isCurrentYearEqualMin && isCurrentMonthEqualMin && currentDay < minDate.day)
  ) {
    return false;
  }

  return !(
    currentYear > maxDate.year ||
    (isCurrentYearEqualMax && currentMonth > maxDate.month) ||
    (isCurrentYearEqualMax && isCurrentMonthEqualMax && currentDay > maxDate.day)
  );
};
