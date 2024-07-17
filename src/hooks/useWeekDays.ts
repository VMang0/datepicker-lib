import { useMemo } from 'react';

import { FirstWeekDay } from '@constants/calendar';
import { getFirstWeekDayIndex } from '@utils/getFirstWeekDayIndex';
import { getWeekDaysNames } from '@utils/getWeekDaysNames';

type UseWeekDaysParamsType = {
  firstWeekDay: FirstWeekDay;
  locale: string;
};

export const useWeekDays = ({ firstWeekDay, locale }: UseWeekDaysParamsType) => {
  const firstWeekDayIndex = getFirstWeekDayIndex(firstWeekDay);
  return useMemo(() => getWeekDaysNames(firstWeekDayIndex, locale), []);
};
