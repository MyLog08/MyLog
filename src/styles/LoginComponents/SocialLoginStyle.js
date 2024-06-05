import styled from 'styled-components';

export const SocialSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const SocialSectionTitle = styled.div`
  color: #8aa9e4;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
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
    //transform: translateY(-5px);
    transform: scale(1.1);
  }
`;
