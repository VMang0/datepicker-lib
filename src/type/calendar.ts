import { ArrowDirection, CalendarMode, FirstWeekDay } from '@constants/calendar';
import { HolidayType } from '@constants/holidays';

export type DateType = {
  date: Date;
  dayNumber: number;
  day: string;
  dayNumberInWeek: number;
  dayShort: string;
  year: number;
  yearShort: string;
  month: string;
  monthShort: string;
  monthNumber: number;
  monthIndex: number;
  timestamp: number;
  week: number;
};

export type MonthInfoType = {
  getDay: (dayNumber: number) => DateType;
  monthName: string;
  monthIndex: number;
  monthNumber: number;
  year: number;
  createMonthDays: () => DateType[];
};

export type CalendarProps = {
  locale?: string;
  selectedDate?: Date;
  selectDate?: (date: Date) => void;
  startDate?: Date;
  endDate?: Date;
  isRenderFooter?: boolean;
  handleFooterClick?: () => void;
  isViewTasks?: boolean;
  footerTitle?: string;
  firstWeekDay?: FirstWeekDay;
  maxYear?: number;
  minYear?: number;
  isShowWeekends?: boolean;
  isShowHolidays?: boolean;
  holidays?: HolidayType[];
};

export type ComponentsProps = CalendarProps & {
  direction: ArrowDirection;
  mode: CalendarMode;
  selectedMonth: MonthInfoType;
  selectedYear: number;
  selectedYearsInterval: number[];
  setSelectedYear: (value: number) => void;
  setSelectedYearsInterval: (value: number[]) => void;
  setSelectedMonth: (value: MonthInfoType) => void;
};

export type CalendarStateType = {
  calendarDays: DateType[];
  selectedDay: DateType;
  mode: CalendarMode;
  selectedMonth: MonthInfoType;
  selectedYear: number;
  selectedYearsInterval: number[];
};

export type CalendarFuncType = {
  onClickArrow: (direction: ArrowDirection) => void;
  setMode: (value: CalendarMode) => void;
  setSelectedDay: (value: DateType) => void;
  setSelectedMonthByIndex: (value: number) => void;
  setSelectedYear: (value: number) => void;
  setSelectedYearsInterval: (value: number[]) => void;
};

export type UseCalendarParamsType = {
  locale: string;
  selectedDate: Date;
  firstWeekDay?: FirstWeekDay;
  minYear?: number;
  maxYear?: number;
};

export type ReturnValuesUseCalendarType = {
  state: CalendarStateType;
  functions: CalendarFuncType;
};
