import styled from 'styled-components';

export const CalendarContainer = styled.div<{ position: 'absolute' | 'block' }>`
  box-sizing: border-box;
  text-transform: capitalize;
  position: ${({ position }) => position};
  top: ${({ theme }) => theme.spaces.l};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  width: ${({ theme }) => theme.sizes.xl};
  border-radius: ${({ theme }) => theme.borderRadius.m};
`;
