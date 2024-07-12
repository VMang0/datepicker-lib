import React, { FC } from 'react';

import { MonthsYearsBodyContainer } from '@components/Calendar/components/Body/components/MonthsBody/styled';
import { BodyItem } from '@components/Calendar/components/Body/styled';
import { BodyType } from '@components/Calendar/components/Body/types';
import { CalendarMode } from '@constants/calendar';
import { useMonths } from '@hooks/useMonths';

export const MonthsBody: FC<BodyType> = ({ calendarState, locale, setSelectedMonthByIndex, setMode }) => {
  const months = useMonths(locale);

  return (
    <MonthsYearsBodyContainer>
      {months.map((monthesName) => {
        const isCurrentMonth =
          new Date().getMonth() === monthesName.monthIndex && calendarState.selectedYear === new Date().getFullYear();
        const isSelectedMonth = monthesName.monthIndex === calendarState.selectedMonth.monthIndex;

        return (
          <BodyItem
            key={monthesName.month}
            aria-hidden
            onClick={() => {
              setSelectedMonthByIndex(monthesName.monthIndex);
              setMode(CalendarMode.DAY);
            }}
            isSelectedItem={isSelectedMonth}
            isCurrentItem={isCurrentMonth}
          >
            {monthesName.monthShort}
          </BodyItem>
        );
      })}
    </MonthsYearsBodyContainer>
  );
};
