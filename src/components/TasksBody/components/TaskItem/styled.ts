import styled from 'styled-components';

import { ReactComponent as IconDelete } from '@assets/icons/task-remove-icon.svg';

export const TaskItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StatusBadge = styled.button<{ status: string }>`
  width: 10px;
  height: 10px;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 50px;
  background-color: ${({ status }) => {
    if (status === 'in-progress') return 'yellow';
    if (status === 'expired') return 'red';
    return 'green';
  }};
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export const DeleteIcon = styled(IconDelete)`
  cursor: pointer;
  width: 16px;
  height: 17px;
  path {
    fill: ${({ theme }) => theme.colors.black.DEFAULT};
  }
`;

export const TaskInput = styled.input`
  border: none;
  outline: none;
`;
