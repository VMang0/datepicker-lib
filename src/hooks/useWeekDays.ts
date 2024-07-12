import { useMemo } from 'react';

import { FirstWeekDay } from '@constants/calendar';
import { getWeekDaysNames } from '@utils/helpers';
import { getFirstWeekDayIndex } from '@utils/helpers/getFirstWeekDayIndex';

type UseWeekDaysParamsType = {
  firstWeekDay: FirstWeekDay;
  locale: string;
};

export const useWeekDays = ({ firstWeekDay, locale }: UseWeekDaysParamsType) => {
  const firstWeekDayIndex = getFirstWeekDayIndex(firstWeekDay);
  return useMemo(() => getWeekDaysNames(firstWeekDayIndex, locale), []);
};
