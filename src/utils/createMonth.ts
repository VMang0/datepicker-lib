import { MonthInfoType } from '@type/calendar';
import { createDate } from '@utils/createDate';

import { getMonthNumberOfDays } from './getMonthNumberOfDays';

type CreateMonthParams = {
  date?: Date;
  locale?: string;
};

export const createMonth = (params?: CreateMonthParams): MonthInfoType => {
  const date = params?.date ?? new Date();
  const locale = params?.locale ?? 'default';

  const day = createDate({ date, locale });
  const { month: monthName, year, monthNumber, monthIndex } = day;

  const getDay = (dayNumber: number) => createDate({ date: new Date(year, monthIndex, dayNumber), locale });

  const createMonthDays = () => {
    const days = [];

    for (let i = 0; i <= getMonthNumberOfDays(monthIndex, year) - 1; i += 1) {
      days[i] = getDay(i + 1);
    }

    return days;
  };

  return {
    getDay,
    monthName,
    monthIndex,
    monthNumber,
    year,
    createMonthDays,
  };
};
