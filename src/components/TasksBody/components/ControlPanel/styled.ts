import styled from 'styled-components';

import { ReactComponent as ArrowBackIcon } from '@assets/icons/go-back-arrow-icon.svg';
import { ReactComponent as TaskAddIcon } from '@assets/icons/task-add-icon.svg';

export const ControlPanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export const DateLabel = styled.span`
  display: flex;
  align-items: center;
`;

export const ArrowBack = styled(ArrowBackIcon)`
  cursor: pointer;
  width: ${({ theme }) => theme.sizes.xs};
  height: ${({ theme }) => theme.sizes.s};
  path {
    fill: ${({ theme }) => theme.colors.black.DEFAULT};
  }
`;

export const AddTaskIcon = styled(TaskAddIcon)`
  cursor: pointer;
  width: ${({ theme }) => theme.sizes.xs};
  height: ${({ theme }) => theme.sizes.s};
`;
