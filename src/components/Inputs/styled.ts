import styled from 'styled-components';

import { ReactComponent as Clear } from '@assets/icons/clear-icon.svg';
import { ReactComponent as Calendar } from '@assets/icons/сalendar-icon.svg';

export const DateInputContainer = styled.div<{ isError: boolean; isCalendarOpen: boolean }>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: ${({ theme }) => theme.sizes.xl};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  padding: ${({ theme }) => `${theme.spaces.s} ${theme.spaces.xs}`};
  transition: border-color 0.2s ease-in-out;
  border: 1px solid
    ${({ isError, isCalendarOpen, theme }) => {
      if (isCalendarOpen && !isError) return theme.colors.blue.DEFAULT;
      if (isError) return theme.colors.red[100];
      return theme.colors.gray[300];
    }};
  &:focus-within {
    border-color: ${({ isError, theme }) => (isError ? theme.colors.red[100] : theme.colors.blue.DEFAULT)};
  }
`;

export const CalendarIcon = styled(Calendar)`
  cursor: pointer;
  margin-right: ${({ theme }) => theme.spaces.xs};
  width: ${({ theme }) => theme.sizes.xs};
  height: ${({ theme }) => theme.sizes.xs};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const ClearIcon = styled(Clear)`
  cursor: pointer;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.gray[600]};
  width: ${({ theme }) => theme.sizes.xs};
  height: ${({ theme }) => theme.sizes.xs};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 0;
  width: ${({ theme }) => theme.sizes.full};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.gray[600]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
`;
