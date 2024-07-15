import React, { FC } from 'react';

import { Body } from '@components/Calendar/components/Body';
import { Footer } from '@components/Calendar/components/Footer';
import { Header } from '@components/Calendar/components/Header';
import { CalendarContainer } from '@components/Calendar/styled';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { FirstWeekDay } from '@constants/calendar';
import { Holidays } from '@constants/holidays';
import { useCalendar } from '@hooks/useCalendar';
import { CalendarProps } from '@type/calendar';

export const Calendar: FC<CalendarProps> = ({
  locale = 'default',
  selectedDate: date,
  selectDate,
  startDate,
  endDate,
  isRenderFooter = false,
  handleFooterClick,
  isViewTasks = false,
  footerTitle,
  firstWeekDay = FirstWeekDay.MONDAY,
  maxYear = new Date().getFullYear() + 20,
  minYear = new Date().getFullYear() - 20,
  isShowWeekends = false,
  isShowHolidays = false,
  holidays = Holidays,
}) => {
  const { functions, state } = useCalendar({
    locale,
    selectedDate: date,
    firstWeekDay,
    maxYear,
    minYear,
  });

  return (
    <CalendarContainer data-testid="calendar">
      <ErrorBoundary>
        <Header
          locale={locale}
          setMode={functions.setMode}
          onClickArrow={functions.onClickArrow}
          calendarState={state}
        />
        <Body
          calendarState={state}
          locale={locale}
          startDate={startDate}
          endDate={endDate}
          firstWeekDay={firstWeekDay}
          selectDate={selectDate}
          setSelectedDay={functions.setSelectedDay}
          setSelectedMonthByIndex={functions.setSelectedMonthByIndex}
          setMode={functions.setMode}
          setSelectedYear={functions.setSelectedYear}
          isViewTasks={isViewTasks}
          holidays={holidays}
          isShowWeekends={isShowWeekends}
          isShowHolidays={isShowHolidays}
        />
        {isRenderFooter && <Footer handleClick={handleFooterClick} title={footerTitle} />}
      </ErrorBoundary>
    </CalendarContainer>
  );
};
