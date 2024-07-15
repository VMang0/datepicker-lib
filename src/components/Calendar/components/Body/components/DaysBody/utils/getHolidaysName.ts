import { HolidayType } from '@constants/holidays';

export const getHolidayName = (date: Date, holidays: HolidayType[]): string | null => {
  const holiday = holidays?.find((holiday) => holiday.month === date.getMonth() + 1 && holiday.day === date.getDate());
  return holiday ? holiday.name : null;
};
