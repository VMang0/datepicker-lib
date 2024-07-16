import { CalendarFuncType, CalendarProps, CalendarStateType, DayOfRange } from '@type/calendar';

export type BodyType = CalendarProps &
  Partial<CalendarFuncType> & {
    calendarState: CalendarStateType;
    maxRangeDate?: DayOfRange;
    minRangeDate?: DayOfRange;
  };

export type BodyItemType = {
  isSelectedItem: boolean;
  isCurrentItem: boolean;
  isItemNotInRange: boolean;
};
