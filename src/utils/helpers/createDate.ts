import { DateType } from '@type/calendar';
import { getWeekNumber } from '@utils/helpers/getWeekNumber';
import { isValidLocale } from '@utils/helpers/isValidLocale';

type CreateDateParams = {
  locale?: string;
  date?: Date;
};

export const createDate = (params?: CreateDateParams): DateType => {
  const locale = params?.locale && isValidLocale(params.locale) ? params.locale : 'default';

  const date = params?.date ? params?.date : new Date();

  const dayNumber = date.getDate();
  const day = date.toLocaleDateString(locale, { weekday: 'long' });
  const dayNumberInWeek = date.getDay() + 1;
  const dayShort = date.toLocaleDateString(locale, { weekday: 'short' });
  const year = date.getFullYear();
  const yearShort = date.toLocaleDateString(locale, { year: '2-digit' });
  const month = date.toLocaleDateString(locale, { month: 'long' });
  const monthShort = date.toLocaleDateString(locale, { month: 'short' });
  const monthNumber = date.getMonth() + 1;
  const monthIndex = date.getMonth();
  const timestamp = date.getTime();
  const week = getWeekNumber(date);

  return {
    date,
    dayNumber,
    day,
    dayNumberInWeek,
    dayShort,
    year,
    yearShort,
    month,
    monthShort,
    monthNumber,
    monthIndex,
    timestamp,
    week,
  };
};
