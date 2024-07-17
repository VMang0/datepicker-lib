import React, { FC } from 'react';

import { MonthsYearsBodyContainer } from '@components/Calendar/components/Body/components/MonthsBody/styled';
import { BodyItem } from '@components/Calendar/components/Body/styled';
import { BodyType } from '@components/Calendar/components/Body/types';
import { CalendarMode } from '@constants/calendar';
import { useMonths } from '@hooks/useMonths';
import { checkIsDateInCalendarRange } from '@utils/checkIsDateInCalendarRange';

export const MonthsBody: FC<BodyType> = ({
  calendarState,
  locale,
  setSelectedMonthByIndex,
  setMode,
  maxRangeDate,
  minRangeDate,
}) => {
  const months = useMonths(locale);

  const onClickMonthItem = (monthIndex: number, isMonthInRange: boolean) => () => {
    if (isMonthInRange) {
      setSelectedMonthByIndex(monthIndex);
      setMode(CalendarMode.DAY);
    }
  };

  return (
    <MonthsYearsBodyContainer>
      {months.map((monthesName) => {
        const isCurrentMonth =
          new Date().getMonth() === monthesName.monthIndex && calendarState.selectedYear === new Date().getFullYear();
        const isSelectedMonth =
          monthesName.monthIndex === calendarState.selectedMonth.monthIndex &&
          calendarState.selectedYear === calendarState.selectedMonth.year;
        const isMonthInRange = checkIsDateInCalendarRange(
          maxRangeDate,
          minRangeDate,
          new Date(calendarState.selectedYear, monthesName.monthIndex, 1),
        );

        return (
          <BodyItem
            key={monthesName.month}
            aria-hidden
            onClick={onClickMonthItem(monthesName.monthIndex, isMonthInRange)}
            isSelectedItem={isSelectedMonth}
            isCurrentItem={isCurrentMonth}
            isItemNotInRange={!isMonthInRange}
          >
            {monthesName.monthShort}
          </BodyItem>
        );
      })}
    </MonthsYearsBodyContainer>
  );
};
