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
  font-family: ${({ theme }) => theme.fonts.extraBold};
  font-size: 24px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const DetailPageNickname = styled.div`
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const DetailPageDate = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const DetailPageImg = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  display: inline-block;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 10px;

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: auto;
  }
`;

export const DetailContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const DetailButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  padding-left: ${({ theme }) => theme.spacing.medium};
  justify-content: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #d9d9d9;
  margin-top: ${({ theme }) => theme.spacing.small};
`;
