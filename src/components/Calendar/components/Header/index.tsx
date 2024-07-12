import React, { FC } from 'react';

import {
  ArrowButton,
  HeaderContainer,
  HeaderLabel,
  LeftArrow,
  RightArrow,
} from '@components/Calendar/components/Header/styled';
import { HeaderType } from '@components/Calendar/components/Header/types';
import { ArrowDirection, CalendarMode } from '@constants/calendar';
import { useMonths } from '@hooks/useMonths';

export const Header: FC<HeaderType> = ({ locale, setMode, onClickArrow, calendarState }) => {
  const months = useMonths(locale);

  const setCalendarMode = (mode: CalendarMode) => (): void => setMode(mode);
  const handleArrowClick = (direction: ArrowDirection) => (): void => onClickArrow(direction);

  return (
    <HeaderContainer>
      <ArrowButton onClick={handleArrowClick(ArrowDirection.LEFT)}>
        <LeftArrow />
      </ArrowButton>
      {calendarState.mode === CalendarMode.DAY && (
        <HeaderLabel aria-hidden onClick={setCalendarMode(CalendarMode.MONTH)}>
          {months[calendarState.selectedMonth.monthIndex].month} {calendarState.selectedYear}
        </HeaderLabel>
      )}
      {calendarState.mode === CalendarMode.MONTH && (
        <HeaderLabel aria-hidden onClick={setCalendarMode(CalendarMode.YEAR)}>
          {calendarState.selectedYear}
        </HeaderLabel>
      )}
      {calendarState.mode === CalendarMode.YEAR && (
        <HeaderLabel>
          {calendarState.selectedYearsInterval[0]} -{' '}
          {calendarState.selectedYearsInterval[calendarState.selectedYearsInterval.length - 1]}
        </HeaderLabel>
      )}
      <ArrowButton onClick={handleArrowClick(ArrowDirection.RIGHT)}>
        <RightArrow />
      </ArrowButton>
    </HeaderContainer>
  );
};
