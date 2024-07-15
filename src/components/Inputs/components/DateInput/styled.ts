import styled from 'styled-components';

import { ReactComponent as Clear } from '@assets/icons/clear-icon.svg';
import { ReactComponent as Calendar } from '@assets/icons/сalendar-icon.svg';

export const DateInputContainer = styled.div<{ isError: boolean }>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: ${({ theme }) => theme.sizes.xl};
  margin-bottom: ${({ theme }) => theme.spaces.xs};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.red[100] : theme.colors.gray[300])};
  padding: ${({ theme }) => `${theme.spaces.s} ${theme.spaces.xs}`};
`;

export const CalendarIcon = styled(Calendar)`
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
