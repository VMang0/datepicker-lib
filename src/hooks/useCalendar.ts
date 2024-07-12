import { useEffect, useMemo, useState } from 'react';

import { ArrowDirection, CalendarMode, FirstWeekDay } from '@constants/calendar';
import { CalendarFuncType, CalendarStateType, DateType } from '@type/calendar';
import { createDate, createMonth } from '@utils/helpers';
import { calculateCalendarDays } from '@utils/helpers/calculateCalendarDays';
import { getFirstWeekDayIndex } from '@utils/helpers/getFirstWeekDayIndex';
import { getYearsInterval } from '@utils/helpers/getYearsInterval';
import { handleArrowClick } from '@utils/helpers/handleArrowClick';

type UseCalendarParams = {
  locale: string;
  selectedDate: Date;
  firstWeekDay?: FirstWeekDay;
  minYear?: number;
  maxYear?: number;
};

type ReturnValuesUseCalendarType = {
  state: CalendarStateType;
  functions: CalendarFuncType;
};

export const useCalendar = ({
  locale = 'default',
  selectedDate: date,
  firstWeekDay = FirstWeekDay.MONDAY,
  maxYear = new Date().getFullYear() + 10,
  minYear = new Date().getFullYear(),
}: UseCalendarParams): ReturnValuesUseCalendarType => {
  const [mode, setMode] = useState<CalendarMode>(CalendarMode.DAY);
  const [selectedDay, setSelectedDay] = useState(createDate({ date }));
  const [selectedMonth, setSelectedMonth] = useState(
    createMonth({ date: new Date(selectedDay.year, selectedDay.monthIndex), locale }),
  );
  const [selectedYear, setSelectedYear] = useState<number>(selectedDay.year);
  const [selectedYearsInterval, setSelectedYearsInterval] = useState<number[]>(
    getYearsInterval(selectedDay.year, minYear, maxYear),
  );

  const firstWeekDayIndex = getFirstWeekDayIndex(firstWeekDay);

  const days = useMemo(() => selectedMonth.createMonthDays(), [selectedMonth, selectedYear]);

  const calendarDays: DateType[] = useMemo(
    () => calculateCalendarDays(selectedMonth, selectedYear, firstWeekDayIndex, locale, days),
    [selectedMonth.year, selectedMonth.monthIndex, selectedYear],
  );

  const onClickArrow = (direction: ArrowDirection) =>
    handleArrowClick({
      direction,
      mode,
      selectedMonth,
      selectedYear,
      selectedYearsInterval,
      minYear,
      maxYear,
      locale,
      setSelectedYear,
      setSelectedYearsInterval,
      setSelectedMonth,
    });

  const setSelectedMonthByIndex = (monthIndex: number) => {
    setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }));
  };

  useEffect(() => {
    setSelectedDay(createDate({ date }));
  }, [date]);

  return {
    state: {
      mode,
      calendarDays,
      selectedDay,
      selectedMonth,
      selectedYear,
      selectedYearsInterval,
    },
    functions: {
      onClickArrow,
      setMode,
      setSelectedDay,
      setSelectedMonthByIndex,
      setSelectedYear,
      setSelectedYearsInterval,
    },
  };
};
