import { useEffect, useMemo, useState } from 'react';

import { ArrowDirection, CalendarMode, FirstWeekDay } from '@constants/calendar';
import { DateType, ReturnValuesUseCalendarType, UseCalendarParamsType } from '@type/calendar';
import { calculateCalendarDays } from '@utils/calculateCalendarDays';
import { createDate } from '@utils/createDate';
import { createMonth } from '@utils/createMonth';
import { getFirstWeekDayIndex } from '@utils/getFirstWeekDayIndex';
import { getYearsInterval } from '@utils/getYearsInterval';
import { handleArrowClick } from '@utils/handleArrowClick';

export const useCalendar = ({
  locale = 'default',
  selectedDate: date,
  firstWeekDay = FirstWeekDay.MONDAY,
}: UseCalendarParamsType): ReturnValuesUseCalendarType => {
  const [mode, setMode] = useState<CalendarMode>(CalendarMode.DAY);
  const [selectedDay, setSelectedDay] = useState(createDate({ date }));
  const [selectedYear, setSelectedYear] = useState<number>(selectedDay.year);
  const [selectedMonth, setSelectedMonth] = useState(
    createMonth({ date: new Date(selectedDay.year, selectedDay.monthIndex), locale }),
  );

  const [selectedYearsInterval, setSelectedYearsInterval] = useState<number[]>(getYearsInterval(date.getFullYear()));

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
      locale,
      setSelectedYear,
      setSelectedYearsInterval,
      setSelectedMonth,
    });

  const setSelectedMonthByIndex = (monthIndex: number) => {
    setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }));
  };

  useEffect(() => {
    const newDate = createDate({ date });
    if (newDate !== selectedDay) {
      setSelectedDay(createDate({ date }));
      setSelectedYear(newDate.year);
      setSelectedMonth(createMonth({ date: new Date(newDate.year, newDate.monthIndex), locale }));
      setSelectedYearsInterval(getYearsInterval(newDate.year));
    }
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
