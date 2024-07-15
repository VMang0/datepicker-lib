import styled from 'styled-components';

import { BodyItemType } from '@components/Calendar/components/Body/types';

export const BodyContainer = styled.div`
  border-radius: ${({ theme }) => `0 0 ${theme.borderRadius.s} ${theme.borderRadius.s}`};
  padding: ${({ theme }) => theme.spaces.s};
`;

export const BodyItem = styled.div<BodyItemType>`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.m};
  padding: ${({ theme }) => `${theme.spaces.s} ${theme.spaces.m}`};
  color: ${({ isSelectedItem, theme }) => {
    if (isSelectedItem) return theme.colors.white.DEFAULT;
    return theme.colors.black.DEFAULT;
  }};
  background-color: ${({ isSelectedItem, isCurrentItem, theme }) => {
    if (isSelectedItem) return theme.colors.blue.DEFAULT;
    if (isCurrentItem) return theme.colors.gray[200];
    return 'transparent';
  }};
`;
