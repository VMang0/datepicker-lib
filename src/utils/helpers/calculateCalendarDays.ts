import { DateType, MonthInfoType } from '@type/calendar';
import { createMonth } from '@utils/helpers/createMonth';
import { getMonthNumberOfDays } from '@utils/helpers/getMonthNumberOfDays';

const DAYS_IN_WEEK = 7;

export const calculateCalendarDays = (
  selectedMonth: MonthInfoType,
  selectedYear: number,
  firstWeekDayIndex: number,
  locale: string,
  days: DateType[],
): DateType[] => {
  const monthNumberOfDays = getMonthNumberOfDays(selectedMonth.monthIndex, selectedYear);

  const prevMonthDays = createMonth({
    date: new Date(selectedYear, selectedMonth.monthIndex - 1),
    locale,
  }).createMonthDays();

  const nextMonthDays = createMonth({
    date: new Date(selectedYear, selectedMonth.monthIndex + 1),
    locale,
  }).createMonthDays();

  const firstDay = days[0];
  const lastDay = days[monthNumberOfDays - 1];

  const shiftIndex = firstWeekDayIndex - 1;
  const numberOfPrevDays =
    firstDay.dayNumberInWeek - 1 - shiftIndex < 0
      ? DAYS_IN_WEEK - (firstWeekDayIndex - firstDay.dayNumberInWeek)
      : firstDay.dayNumberInWeek - 1 - shiftIndex;

  const numberOfNextDays =
    DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex > 6
      ? DAYS_IN_WEEK - lastDay.dayNumberInWeek - (DAYS_IN_WEEK - shiftIndex)
      : DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex;

  const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays;

  const result = [];

  for (let i = 0; i < numberOfPrevDays; i += 1) {
    const inverted = numberOfPrevDays - i;
    result[i] = prevMonthDays[prevMonthDays.length - inverted];
  }

  for (let i = numberOfPrevDays; i < totalCalendarDays - numberOfNextDays; i += 1) {
    result[i] = days[i - numberOfPrevDays];
  }

  for (let i = totalCalendarDays - numberOfNextDays; i < totalCalendarDays; i += 1) {
    result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays];
  }

  return result;
};
