import styled from 'styled-components';

import { BodyItemType } from '@components/Calendar/components/Body/types';

export const BodyContainer = styled.div`
  border-radius: ${({ theme }) => `0 0 ${theme.borderRadius.s} ${theme.borderRadius.s}`};
  padding: ${({ theme }) => theme.spaces.s};
`;

export const BodyItem = styled.div<BodyItemType>`
  cursor: ${({ isItemNotInRange }) => (isItemNotInRange ? 'not-allowed' : 'pointer')};
  border-radius: ${({ isItemNotInRange, theme }) => (isItemNotInRange ? 0 : theme.borderRadius.m)};
  padding: ${({ theme }) => `${theme.spaces.s} ${theme.spaces.m}`};
  color: ${({ isSelectedItem, isItemNotInRange, theme }) => {
    if (isSelectedItem) return theme.colors.white.DEFAULT;
    if (isItemNotInRange) return theme.colors.gray[400];
    return theme.colors.black.DEFAULT;
  }};
  background-color: ${({ isSelectedItem, isCurrentItem, isItemNotInRange, theme }) => {
    if (isSelectedItem) return theme.colors.blue.DEFAULT;
    if (isCurrentItem) return theme.colors.gray[200];
    if (isItemNotInRange) return theme.colors.gray[100];
    return 'transparent';
  }};
`;
