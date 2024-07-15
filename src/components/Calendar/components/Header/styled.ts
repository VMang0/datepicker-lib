import styled from 'styled-components';

import { ReactComponent as ArrowIcon } from '@assets/icons/arrow-icon.svg';

export const HeaderContainer = styled.div`
  position: relative;
  border-radius: ${({ theme }) => `${theme.borderRadius.s} ${theme.borderRadius.s} 0 0`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spaces.m} ${theme.spaces.s} 0`};
`;

export const LeftArrow = styled(ArrowIcon)`
  cursor: pointer;
  width: ${({ theme }) => theme.sizes.xs};
  height: ${({ theme }) => theme.sizes.s};
  path {
    fill: ${({ theme }) => theme.colors.black.DEFAULT};
  }
`;

export const RightArrow = styled(LeftArrow)`
  transform: rotate(-180deg);
`;

export const HeaderLabel = styled.div`
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  font-size: ${({ theme }) => theme.fontSize.m};
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
      fill: ${({ theme }) => theme.colors.green.DEFAULT};
    }
  }
`;
