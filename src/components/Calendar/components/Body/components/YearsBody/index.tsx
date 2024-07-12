import React, { FC } from 'react';

import { MonthsYearsBodyContainer } from '@components/Calendar/components/Body/components/MonthsBody/styled';
import { BodyItem } from '@components/Calendar/components/Body/styled';
import { BodyType } from '@components/Calendar/components/Body/types';
import { CalendarMode } from '@constants/calendar';

export const YearsBody: FC<BodyType> = ({ calendarState, setMode, setSelectedYear }) => {
  return (
    <MonthsYearsBodyContainer>
      {calendarState.selectedYearsInterval.map((year) => {
        const isCurrentYear = new Date().getFullYear() === year;
        const isSelectedYear = year === calendarState.selectedYear;

        return (
          <BodyItem
            key={year}
            aria-hidden
            onClick={() => {
              setSelectedYear(year);
              setMode(CalendarMode.MONTH);
            }}
            isCurrentItem={isCurrentYear}
            isSelectedItem={isSelectedYear}
          >
            {year}
          </BodyItem>
        );
      })}
    </MonthsYearsBodyContainer>
  );
};
