import styled from 'styled-components';

export const TasksBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${({ theme }) => theme.sizes.l};
  gap: ${({ theme }) => theme.spaces.s};
`;
