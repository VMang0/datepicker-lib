import styled from 'styled-components';

import { BodyItemType } from '@components/Calendar/components/Body/types';

export const BodyContainer = styled.div`
  border-radius: 0 0 5px 5px;
  padding: 10px;
`;

export const BodyItem = styled.div<BodyItemType>`
  border-radius: 8px;
  padding: 10px 8px;
  cursor: pointer;
  color: ${({ isSelectedItem, theme }) => {
    if (isSelectedItem) return theme.colors.white.DEFAULT;
    return theme.colors.black.DEFAULT;
  }};
  background-color: ${({ isSelectedItem, isCurrentItem, theme }) => {
    if (isSelectedItem) return '#2f80ed';
    if (isCurrentItem) return theme.colors.gray[200];
    return 'transparent';
  }};
`;
