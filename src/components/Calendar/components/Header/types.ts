import { ArrowDirection, CalendarMode } from '@constants/calendar';
import { CalendarStateType } from '@type/calendar';

export type HeaderType = {
  locale: string;
  setMode: (value: CalendarMode) => void;
  onClickArrow: (direction: ArrowDirection) => void;
  calendarState: CalendarStateType;
};
