import { ArrowDirection, CALENDAR_RANGE, CalendarMode, YEARS_PERIOD } from '@constants/calendar';
import { ComponentsProps } from '@type/calendar';
import { createMonth } from '@utils/helpers/createMonth';
import { getYearsInterval } from '@utils/helpers/getYearsInterval';

export const handleArrowClick = ({
  direction = ArrowDirection.LEFT,
  mode,
  selectedMonth,
  selectedYear,
  selectedYearsInterval,
  setSelectedYear,
  setSelectedYearsInterval,
  setSelectedMonth,
  locale,
}: Partial<ComponentsProps>): null => {
  if (mode === CalendarMode.YEAR) {
    let newIntervalStart = selectedYearsInterval[0];
    if (direction === ArrowDirection.LEFT && newIntervalStart > CALENDAR_RANGE.minDate.year) {
      newIntervalStart = selectedYearsInterval[0] - YEARS_PERIOD;
    } else if (direction === ArrowDirection.RIGHT && newIntervalStart + 10 < CALENDAR_RANGE.maxDate.year) {
      newIntervalStart = selectedYearsInterval[0] + YEARS_PERIOD;
    }
    setSelectedYearsInterval(getYearsInterval(newIntervalStart));
  }

  if (mode === CalendarMode.MONTH && direction === ArrowDirection.LEFT) {
    const year = selectedYear - 1;
    if (year >= CALENDAR_RANGE.minDate.year) {
      if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
      setSelectedYear(year);
    }
  }

  if (mode === CalendarMode.MONTH && direction === ArrowDirection.RIGHT) {
    const year = selectedYear + 1;
    if (year <= CALENDAR_RANGE.maxDate.year) {
      if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
      setSelectedYear(year);
    }
  }

  if (mode === CalendarMode.DAY) {
    const monthIndex = direction === ArrowDirection.LEFT ? selectedMonth.monthIndex - 1 : selectedMonth.monthIndex + 1;
    if (monthIndex === -1) {
      const year = selectedYear - 1;
      if (year >= CALENDAR_RANGE.minDate.year) {
        setSelectedYear(year);
        if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
        setSelectedMonth(createMonth({ date: new Date(selectedYear - 1, 11), locale }));
      }
    }

    if (monthIndex === 12) {
      const year = selectedYear + 1;
      if (year <= CALENDAR_RANGE.maxDate.year) {
        setSelectedYear(year);
        if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
        setSelectedMonth(createMonth({ date: new Date(year, 0), locale }));
      }
    }

    setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }));
  }
  return null;
};
