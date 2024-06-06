import styled from 'styled-components';

export const SocialSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const SocialSectionTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fafafa;
  transition: background-color 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
