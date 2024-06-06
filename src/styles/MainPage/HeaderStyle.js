import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    min-width: 900px;
    width: 100%;
    margin: auto;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 40px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBar = styled.input`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  font-size: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  caret-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  transition: box-shadow 0.3s ease-in-out;
  font-family: ${({ theme }) => theme.fonts.bold};

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
  }
  &:hover,
  &:focus {
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary};
    outline-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LoggedInButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const HeaderLogOutButton = styled.button`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.small};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.shade};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const HeaderButton = styled.button`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.small};
  font-size: 20px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.bold};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackground};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const HomeButton = styled.div`
  margin-left: ${({ theme }) => theme.spacing.small};
`;
