import styled from 'styled-components';

import { ReactComponent as Clear } from '@assets/icons/clear-icon.svg';
import { ReactComponent as Calendar } from '@assets/icons/сalendar-icon.svg';

export const DateInputContainer = styled.div<{ isError: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ isError }) => (isError ? 'red' : '#ddd')};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px 15px;
  width: 250px;
  margin-bottom: 8px;
`;

export const CalendarIcon = styled(Calendar)`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  color: #888;
`;

export const ClearIcon = styled(Clear)`
  margin-left: auto;
  color: #888;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 15px;
  color: #333;
  width: 100%;
  padding: 0;
`;
