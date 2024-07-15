import { FirstWeekDay } from '@constants/calendar';

export const getFirstWeekDayIndex = (weekDay: FirstWeekDay | string): number => {
  return weekDay === FirstWeekDay.MONDAY ? 2 : 1;
};
