import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  width: ${({ theme }) => theme.sizes.full};
  padding: ${({ theme }) => theme.spaces.s};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  &:hover {
    background-color: transparent;
  }
`;
