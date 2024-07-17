import { BodyType } from '@components/Calendar/components/Body/types';
import { HOLIDAY_COLOR } from '@constants/calendar';

export type CalendarDayProps = {
  isAdditionalDay: boolean;
  isSelectedDay: boolean;
  isToday: boolean;
  isInRange: boolean;
  isDateStartPeriod: boolean;
  isDateEndPeriod: boolean;
  isHoliday: boolean;
  holidayColor: HOLIDAY_COLOR | string;
  isWeekendDay: boolean;
  isDayHaveTasks: boolean;
  isDayNotInRange: boolean;
};

export type DaysBodyType = BodyType & { openTasks: () => void };
