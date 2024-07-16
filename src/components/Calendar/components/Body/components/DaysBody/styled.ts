import styled from 'styled-components';

import { CalendarDayProps } from '@components/Calendar/components/Body/components/DaysBody/types';

export const CalendarWeek = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.gap.s};
  height: ${({ theme }) => theme.sizes.m};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const CalendarDays = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.gap.s};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
`;

export const CalendarDay = styled.div<CalendarDayProps>`
  cursor: ${({ isDayNotInRange }) => (isDayNotInRange ? 'not-allowed' : 'pointer')};
  padding: ${({ theme }) => theme.spaces.xs};
  outline: ${({ isDayHaveTasks, theme }) => (isDayHaveTasks ? `1px solid ${theme.colors.blue.DEFAULT}` : 'none')};
  border-radius: ${({ isInRange, isDateStartPeriod, isDateEndPeriod, isDayNotInRange, theme }) => {
    if (isInRange && !isDateStartPeriod && !isDateEndPeriod) return 0;
    if (isDateStartPeriod) return `${theme.borderRadius.m} 0 0 ${theme.borderRadius.m}`;
    if (isDateEndPeriod) return `0 ${theme.borderRadius.m} ${theme.borderRadius.m} 0`;
    if (isDayNotInRange) return 0;
    return theme.borderRadius.m;
  }};
  color: ${({
    isAdditionalDay,
    isSelectedDay,
    isInRange,
    isDateStartPeriod,
    isDateEndPeriod,
    isWeekendDay,
    isDayNotInRange,
    isHoliday,
    theme,
  }) => {
    if (isAdditionalDay && !isWeekendDay && !isHoliday) return theme.colors.gray[400];
    if (isInRange && !isDateStartPeriod && !isDateEndPeriod) return theme.colors.blue.DEFAULT;
    if (isSelectedDay || isDateStartPeriod || isDateEndPeriod) return theme.colors.white.DEFAULT;
    if (isDayNotInRange) return theme.colors.gray[400];
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
    isDayNotInRange,
    theme,
  }) => {
    if ((isSelectedDay || isDateEndPeriod) && !isDateStartPeriod) return theme.colors.blue.DEFAULT;
    if (isToday && !isInRange) return theme.colors.gray[200];
    if (isDateStartPeriod) return theme.colors.blue[200];
    if (isHoliday && !isWeekendDay && !isInRange) return theme.colors.gray[300];
    if (isWeekendDay && !isInRange) return theme.colors.red.DEFAULT;
    if (isInRange && !isDateStartPeriod && !isDateEndPeriod) return theme.colors.blue[100];
    if (isDayNotInRange) return theme.colors.gray[100];
    return 'transparent';
  }};
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;
