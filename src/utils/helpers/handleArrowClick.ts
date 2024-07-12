import { ArrowDirection, CalendarMode } from '@constants/calendar';
import { ComponentsProps } from '@type/calendar';
import { createMonth } from '@utils/helpers/createMonth';
import { getYearsInterval } from '@utils/helpers/getYearsInterval';

export const handleArrowClick = ({
  direction = ArrowDirection.LEFT,
  mode,
  selectedMonth,
  selectedYear,
  selectedYearsInterval,
  minYear,
  maxYear,
  setSelectedYear,
  setSelectedYearsInterval,
  setSelectedMonth,
  locale,
}: Partial<ComponentsProps>): null => {
  if (mode === CalendarMode.YEAR && direction === ArrowDirection.LEFT) {
    let newIntervalStart = selectedYearsInterval[0] - 12;
    if (newIntervalStart < minYear) {
      newIntervalStart = minYear;
    }
    if (newIntervalStart >= minYear) {
      setSelectedYearsInterval(getYearsInterval(newIntervalStart, minYear, maxYear));
    }
  }

  if (mode === CalendarMode.YEAR && ArrowDirection.RIGHT) {
    const newIntervalStart = selectedYearsInterval[0] + 12;
    if (newIntervalStart <= maxYear) {
      setSelectedYearsInterval(getYearsInterval(newIntervalStart, minYear, maxYear));
    }
  }

  if (mode === CalendarMode.MONTH && direction === ArrowDirection.LEFT) {
    const year = selectedYear - 1;
    if (year >= minYear) {
      if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year, minYear, maxYear));
      setSelectedYear(year);
    }
  }

  if (mode === CalendarMode.MONTH && direction === ArrowDirection.RIGHT) {
    const year = selectedYear + 1;
    if (year <= maxYear) {
      if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year, minYear, maxYear));
      setSelectedYear(year);
    }
  }

  if (mode === CalendarMode.DAY) {
    const monthIndex = direction === ArrowDirection.LEFT ? selectedMonth.monthIndex - 1 : selectedMonth.monthIndex + 1;
    if (monthIndex === -1) {
      const year = selectedYear - 1;
      if (year >= minYear) {
        setSelectedYear(year);
        if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year, minYear, maxYear));
        setSelectedMonth(createMonth({ date: new Date(selectedYear - 1, 11), locale }));
      }
    }

    if (monthIndex === 12) {
      const year = selectedYear + 1;
      if (year <= maxYear) {
        setSelectedYear(year);
        if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year, minYear, maxYear));
        setSelectedMonth(createMonth({ date: new Date(year, 0), locale }));
      }
    }

    setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }));
  }
  return null;
};
