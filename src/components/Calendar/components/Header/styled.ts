import styled from 'styled-components';

import { ReactComponent as ArrowIcon } from '@assets/icons/arrow-icon.svg';

export const HeaderContainer = styled.div`
  position: relative;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px 0;
`;

export const LeftArrow = styled(ArrowIcon)`
  cursor: pointer;
  width: 16px;
  height: 17px;
  path {
    fill: ${({ theme }) => theme.colors.black.DEFAULT};
  }
`;

export const RightArrow = styled(LeftArrow)`
  transform: rotate(-180deg);
`;

export const HeaderLabel = styled.div`
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black.DEFAULT};
`;

export const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  &:hover {
    background-color: transparent;
  }
  &:disabled {
    path {
      fill: ${({ theme }) => theme.colors.green[300]};
    }
  }
`;