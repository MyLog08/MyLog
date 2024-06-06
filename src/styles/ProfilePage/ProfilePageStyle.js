import styled from 'styled-components';

export const ProfileSection = styled.section`
  width: 40%;
  max-width: 40%;
  padding: ${({ theme }) => theme.spacing.medium};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h2 {
    padding-top: ${({ theme }) => theme.spacing.medium};
    font-size: 30px;
    font-family: ${({ theme }) => theme.fonts.bold};
  }
`;

export const ArticlesSection = styled.section`
  overflow-y: scroll;
  height: 600px;
  max-width: 60%;
  width: 60%;
  padding-right: ${({ theme }) => theme.spacing.medium};
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const ProfileImage = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-right: ${({ theme }) => theme.spacing.small};
  margin-top: ${({ theme }) => theme.spacing.small};
`;

export const ArticleContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.medium} 0;
  margin-left: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.medium};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.secondary};
    outline-color: ${({ theme }) => theme.colors.primary};
  }
  > h3 {
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    font-size: 30px;
    font-family: ${({ theme }) => theme.fonts.extraBold};
  }
  > p {
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.bold};
  }
`;

export const ProfileButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border: none;
  font-size: 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.bold};
  cursor: pointer;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.large};
  /* justify-content: space-between; */
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
