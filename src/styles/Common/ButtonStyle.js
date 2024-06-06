import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 20px;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ selected, theme }) => (selected ? theme.colors.secondary : theme.colors.primary)};
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  font-family: ${({ theme }) => theme.fonts.regular};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
