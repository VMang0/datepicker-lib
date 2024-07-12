import styled from 'styled-components';

import { CalendarDayProps } from '@components/Calendar/components/Body/components/DaysBody/types';

export const CalendarWeek = styled.div`
  height: 20px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px 1px;
`;

export const CalendarDays = styled.div`
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  gap: 1px 1px;
`;

export const CalendarDay = styled.div<CalendarDayProps>`
  position: relative;
  border-radius: ${({ isInRange, isDateStartPeriod, isDateEndPeriod }) => {
    if (isInRange && !isDateStartPeriod && !isDateEndPeriod) return 0;
    if (isDateStartPeriod) return '8px 0 0 8px';
    if (isDateEndPeriod) return '0 8px 8px 0';
    return '8px';
  }};
  padding: 8px;
  cursor: pointer;
  color: ${({
    isAdditionalDay,
    isSelectedDay,
    isInRange,
    isDateStartPeriod,
    isDateEndPeriod,
    isWeekendDay,
    theme,
    isHoliday,
  }) => {
    if (isAdditionalDay && !isWeekendDay && !isHoliday) return theme.colors.gray[400];
    if (isInRange && !isDateStartPeriod && !isDateEndPeriod) return '#2f80ed';
    if (isSelectedDay || isDateStartPeriod || isDateEndPeriod) return theme.colors.white.DEFAULT;
    return theme.colors.black.DEFAULT;
  }};
  background: ${({
    isSelectedDay,
    isToday,
    isInRange,
    isDateStartPeriod,
    isDateEndPeriod,
    isHoliday,
    isWeekendDay,
    theme,
  }) => {
    if ((isSelectedDay || isDateEndPeriod) && !isDateStartPeriod) return '#2f80ed';
    if (isToday && !isInRange) return theme.colors.gray[200];
    if (isDateStartPeriod) return 'rgba(47, 128, 237, 0.6)';
    if (isHoliday && !isWeekendDay && !isInRange) return '#e9f0f5';
    if (isWeekendDay && !isInRange) return '#ffe0e1';
    if (isInRange && !isDateStartPeriod && !isDateEndPeriod) return 'rgba(47, 128, 237, 0.1)';
    return 'transparent';
  }};
`;
