import { DayOfRange } from '@type/calendar';

export type DateRangeInputPropsType = {
  selectedStartDate: Date;
  setSelectedStartDate: (value: Date) => void;
  selectedEndDate: Date;
  setSelectedEndDate: (value: Date) => void;
  isClearDate: boolean;
  handleClearRange: () => void;
  onFocus: () => void;
  isCalendarOpen: boolean;
  handleOpenCalendarState: () => void;
  minRangeDate?: DayOfRange;
  maxRangeDate?: DayOfRange;
};

export type DateInputPropsType = {
  selectDate: (date: Date) => void;
  selectedDate: Date;
  isClearDate: boolean;
  onFocus: () => void;
  handleOpenCalendarState: () => void;
  isCalendarOpen: boolean;
  minRangeDate?: DayOfRange;
  maxRangeDate?: DayOfRange;
};
