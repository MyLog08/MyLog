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
`;

export const DetailContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
`;
