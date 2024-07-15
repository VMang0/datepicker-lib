import styled from 'styled-components';

export const MonthsYearsBodyContainer = styled.div`
  display: grid;
  text-align: center;
  gap: ${({ theme }) => theme.gap.s};
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight[600]};
`;
