import { BodyType } from '@components/Calendar/components/Body/types';

export type CalendarDayProps = {
  isAdditionalDay: boolean;
  isSelectedDay: boolean;
  isToday: boolean;
  isInRange: boolean;
  isDateStartPeriod: boolean;
  isDateEndPeriod: boolean;
  isHoliday: boolean;
  holidayColor: string;
  isWeekendDay: boolean;
  isDayHaveTasks: boolean;
  isDayNotInRange: boolean;
};

export type DaysBodyType = BodyType & { openTasks: () => void };
