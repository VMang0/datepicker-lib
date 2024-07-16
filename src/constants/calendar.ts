export enum ArrowDirection {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum FirstWeekDay {
  MONDAY = 'Monday',
  SUNDAY = 'Sunday',
}

export enum CalendarMode {
  YEAR = 'year',
  MONTH = 'month',
  DAY = 'day',
}

export const YEARS_PERIOD = 12;

export enum TasksStatus {
  INPROGRESS = 'in-progress',
  EXPIRED = 'expired',
  DONE = 'done',
}

export const CALENDAR_RANGE = {
  minDate: { year: 1900, month: 1, day: 1 },
  maxDate: { year: 2300, month: 12, day: 31 },
};
