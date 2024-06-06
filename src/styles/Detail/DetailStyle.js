import styled from 'styled-components';

export const DetailSection = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailPageLogo = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const HomeLogo = styled.img`
  cursor: pointer;
  height: 10%;
  width: 10%;
`;

export const DetailPageInfo = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

export const DetailPageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const DetailPageNickname = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const DetailPageDate = styled.div`
  font-family: ${({ theme }) => theme.fonts.light};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const DetailPageImg = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  display: flex;
  justify-content: center;
  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: auto;
  }
`;

export const DetailContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const DetailButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  justify-content: center;
`;

export const DetailButton = styled.button`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  font-size: 16px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.bold};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackground};
    color: ${({ theme }) => theme.colors.hoverText};
  }
`;
