import styled from 'styled-components';

export const CalendarContainer = styled.div`
  box-sizing: border-box;
  text-transform: capitalize;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  width: ${({ theme }) => theme.sizes.xl};
  border-radius: ${({ theme }) => theme.borderRadius.m};
`;
