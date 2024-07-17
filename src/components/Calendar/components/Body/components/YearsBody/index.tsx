import React, { FC } from 'react';

import { MonthsYearsBodyContainer } from '@components/Calendar/components/Body/components/MonthsBody/styled';
import { BodyItem } from '@components/Calendar/components/Body/styled';
import { BodyType } from '@components/Calendar/components/Body/types';
import { CalendarMode } from '@constants/calendar';
import { checkIsDateInCalendarRange } from '@utils/checkIsDateInCalendarRange';

export const YearsBody: FC<BodyType> = ({ calendarState, setMode, setSelectedYear, maxRangeDate, minRangeDate }) => {
  const onYearClick = (year: number, isYearInRange: boolean) => () => {
    if (isYearInRange) {
      setSelectedYear(year);
      setMode(CalendarMode.MONTH);
    }
  };

  return (
    <MonthsYearsBodyContainer>
      {calendarState.selectedYearsInterval.map((year) => {
        const isCurrentYear = new Date().getFullYear() === year;
        const isSelectedYear = year === calendarState.selectedYear;
        const isYearInRange = checkIsDateInCalendarRange(maxRangeDate, minRangeDate, new Date(year, 1, 1));

        return (
          <BodyItem
            key={year}
            aria-hidden
            onClick={onYearClick(year, isYearInRange)}
            isCurrentItem={isCurrentYear}
            isSelectedItem={isSelectedYear}
            isItemNotInRange={!isYearInRange}
          >
            {year}
          </BodyItem>
        );
      })}
    </MonthsYearsBodyContainer>
  );
};
