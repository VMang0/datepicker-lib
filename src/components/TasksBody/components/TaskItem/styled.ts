import styled from 'styled-components';

import { ReactComponent as IconDelete } from '@assets/icons/task-remove-icon.svg';
import { TasksStatus } from '@constants/calendar';

export const TaskItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StatusBadge = styled.button<{ status: string }>`
  padding: 0;
  border: none;
  cursor: pointer;
  width: ${({ theme }) => theme.sizes.xxs};
  height: ${({ theme }) => theme.sizes.xxs};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  outline: 1px solid ${({ theme }) => theme.colors.gray[500]};
  background-color: ${({ status, theme }) => {
    if (status === TasksStatus.INPROGRESS) return theme.colors.yellow.DEFAULT;
    if (status === TasksStatus.EXPIRED) return theme.colors.red.DEFAULT;
    return theme.colors.green.DEFAULT;
  }};
`;

export const DeleteButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

export const DeleteIcon = styled(IconDelete)`
  cursor: pointer;
  width: ${({ theme }) => theme.sizes.xs};
  height: ${({ theme }) => theme.sizes.s};
`;

export const TaskInput = styled.input`
  border: none;
  outline: none;
`;
