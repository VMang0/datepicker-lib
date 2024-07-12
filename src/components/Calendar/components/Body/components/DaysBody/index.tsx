import React, { FC, memo } from 'react';

import {
  CalendarDay,
  CalendarDays,
  CalendarWeek,
} from '@components/Calendar/components/Body/components/DaysBody/styled';
import { DaysBodyType } from '@components/Calendar/components/Body/components/DaysBody/types';
import { getHolidayName } from '@components/Calendar/components/Body/components/DaysBody/utils/getHolidaysName';
import { isWeekendDay } from '@components/Calendar/components/Body/components/DaysBody/utils/isWeekendDay';
import { useWeekDays } from '@hooks/useWeekDays';
import { DateType } from '@type/calendar';
import { checkDateIsEqual, checkIsToday } from '@utils/helpers';
import { checkDateInRange } from '@utils/helpers/checkDateInRange';

export const DaysBody: FC<DaysBodyType> = memo(
  ({
    calendarState,
    locale,
    selectDate,
    setSelectedDay,
    firstWeekDay,
    startDate,
    endDate,
    openTasks,
    isViewTasks,
    holidays,
    isShowWeekends,
    isShowHolidays,
  }) => {
    const weekDays = useWeekDays({ firstWeekDay, locale });

    const onDayClick = (day: DateType) => () => {
      if (!isViewTasks) {
        setSelectedDay(day);
        selectDate(day.date);
      }
    };
    const onDayDoubleClick = (day: DateType) => () => {
      if (isViewTasks) {
        setSelectedDay(day);
        selectDate(day.date);
        openTasks();
      }
    };

    return (
      <>
        <CalendarWeek>
          {weekDays.map((weekDaysName) => (
            <span key={weekDaysName.dayShort}>{weekDaysName.dayShort}</span>
          ))}
        </CalendarWeek>
        <CalendarDays>
          {calendarState.calendarDays.map((day) => {
            const isToday = checkIsToday(day.date);
            const isSelectedDay = checkDateIsEqual(day.date, calendarState.selectedDay.date);
            const isAdditionalDay = day.monthIndex !== calendarState.selectedMonth.monthIndex;
            const isInRange = startDate && endDate && checkDateInRange(day.date, startDate, endDate);
            const isDateStartPeriod = day.date?.toString() === startDate?.toString();
            const isDateEndPeriod = day.date?.toString() === endDate?.toString();
            const holidayName = isShowHolidays && getHolidayName(day.date, holidays);
            const isWeekend = isShowWeekends && isWeekendDay(day.date);

            return (
              <CalendarDay
                key={`${day.dayNumber}-${day.monthIndex}`}
                aria-hidden
                onClick={onDayClick(day)}
                onDoubleClick={onDayDoubleClick(day)}
                isAdditionalDay={isAdditionalDay}
                isSelectedDay={isSelectedDay}
                isToday={isToday}
                isInRange={isInRange}
                isDateStartPeriod={isDateStartPeriod}
                isDateEndPeriod={isDateEndPeriod}
                isHoliday={!!holidayName}
                isWeekendDay={isWeekend}
              >
                {day.dayNumber}
              </CalendarDay>
            );
          })}
        </CalendarDays>
      </>
    );
  },
);
