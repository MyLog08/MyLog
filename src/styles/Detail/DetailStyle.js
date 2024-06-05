import styled from 'styled-components';

export const DetailSection = styled.section`
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const DetailPageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DetailPageImg = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 10px;
  width: 1000px;
  height: 350px;

  img {
    width: auto;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const DetailPageInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  & > * + * {
    margin-top: 10px;
  }
`;

export const DetailPageNickname = styled.span`
  font-size: 15px;
`;

export const DetailPageDate = styled.span``;

export const DetailContent = styled.div`
  white-space: pre-wrap;
  font-size: 18px;
`;

export const DetailButtons = styled.div``;
