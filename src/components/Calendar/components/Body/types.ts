import { CalendarFuncType, CalendarProps, CalendarStateType } from '@type/calendar';

export type BodyType = Omit<CalendarProps, 'styledCalendarPosition'> &
  Partial<CalendarFuncType> & {
    calendarState: CalendarStateType;
  };

export type BodyItemType = {
  isSelectedItem: boolean;
  isCurrentItem: boolean;
  isItemNotInRange: boolean;
};
