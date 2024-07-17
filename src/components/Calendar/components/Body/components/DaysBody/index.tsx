import React, { FC, memo } from 'react';

import {
  CalendarDay,
  CalendarDays,
  CalendarWeek,
  WeekdayName,
} from '@components/Calendar/components/Body/components/DaysBody/styled';
import { DaysBodyType } from '@components/Calendar/components/Body/components/DaysBody/types';
import { getHolidayName } from '@components/Calendar/components/Body/components/DaysBody/utils/getHolidaysName';
import { isWeekendDay } from '@components/Calendar/components/Body/components/DaysBody/utils/isWeekendDay';
import { CALENDAR_DAY_TEST_ID } from '@constants/tests';
import { useTasks } from '@hooks/useTasks';
import { useWeekDays } from '@hooks/useWeekDays';
import { DateType } from '@type/calendar';
import { checkDateInSelectedRange } from '@utils/checkDateInSelectedRange';
import { checkDateIsEqual } from '@utils/checkDateIsEqual';
import { checkIsDateInCalendarRange } from '@utils/checkIsDateInCalendarRange';
import { checkIsToday } from '@utils/checkIsToday';

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
    maxRangeDate,
    minRangeDate,
    isShowWeekends,
    isShowHolidays,
    holidayColor,
  }) => {
    const weekDays = useWeekDays({ firstWeekDay, locale });

    const { tasks } = useTasks();

    const onDayClick = (day: DateType, isDayInRange: boolean) => () => {
      if (!isViewTasks && isDayInRange) {
        setSelectedDay(day);
        selectDate(day.date);
      }
    };
    const onDayDoubleClick = (day: DateType, isDayInRange: boolean) => () => {
      if (isViewTasks && isDayInRange) {
        setSelectedDay(day);
        selectDate(day.date);
        openTasks();
      }
    };

    return (
      <>
        <CalendarWeek>
          {weekDays.map((weekDaysName) => (
            <WeekdayName key={weekDaysName.dayShort}>{weekDaysName.dayShort}</WeekdayName>
          ))}
        </CalendarWeek>
        <CalendarDays>
          {calendarState.calendarDays.map((day) => {
            const isToday = checkIsToday(day.date);
            const isSelectedDay = checkDateIsEqual(day.date, calendarState.selectedDay.date);
            const isAdditionalDay = day.monthIndex !== calendarState.selectedMonth.monthIndex;
            const isInRange = startDate && endDate && checkDateInSelectedRange(day.date, startDate, endDate);
            const isDateStartPeriod = day.date?.toString() === startDate?.toString();
            const isDateEndPeriod = day.date?.toString() === endDate?.toString();
            const holidayName = isShowHolidays && getHolidayName(day.date, holidays);
            const isWeekend = isShowWeekends && isWeekendDay(day.date);
            const isDayHaveTasks = isViewTasks && !!tasks[day.date.toString()];
            const isDayInRange = checkIsDateInCalendarRange(maxRangeDate, minRangeDate, day.date);

            return (
              <CalendarDay
                key={`${day.dayNumber}-${day.monthIndex}`}
                aria-hidden
                onClick={onDayClick(day, isDayInRange)}
                onDoubleClick={onDayDoubleClick(day, isDayInRange)}
                isAdditionalDay={isAdditionalDay}
                isSelectedDay={isSelectedDay}
                isToday={isToday}
                isInRange={isInRange}
                isDateStartPeriod={isDateStartPeriod}
                isDateEndPeriod={isDateEndPeriod}
                isHoliday={!!holidayName}
                holidayColor={holidayColor}
                isWeekendDay={isWeekend}
                isDayHaveTasks={isDayHaveTasks}
                isDayNotInRange={!isDayInRange}
                data-testid={CALENDAR_DAY_TEST_ID}
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
