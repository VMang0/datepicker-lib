import styled from 'styled-components';

export const TasksListContainer = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.m};
  max-height: ${({ theme }) => theme.sizes.l};
`;

export const Label = styled.span``;
