import { FirstWeekDay } from '@constants/calendar';

export const getFirstWeekDayIndex = (weekDay: FirstWeekDay): number => {
  return weekDay === FirstWeekDay.MONDAY ? 2 : 1;
};
