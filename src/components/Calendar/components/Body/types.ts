import { CalendarFuncType, CalendarProps, CalendarStateType } from '@type/calendar';

export type BodyType = CalendarProps &
  Partial<CalendarFuncType> & {
    calendarState: CalendarStateType;
  };

export type BodyItemType = {
  isSelectedItem: boolean;
  isCurrentItem: boolean;
};
