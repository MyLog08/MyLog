import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailSection = styled.section`
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  min-width: 50%;

  > div {
    margin-bottom: 20px;
  }
`;

export const DetailPageLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const HomeLogo = styled.img`
  width: 70px;
  height: 45px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const DetailPageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const DetailPageImg = styled(CenteredContainer)`
  margin: 0 auto 10px;
  max-width: 100%;
  min-width: 50%;
  height: 350px;

  img {
    width: auto;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const DetailPageInfo = styled(CenteredContainer)`
  flex-direction: column;
  margin-bottom: 10px;

  & > * {
    margin-top: 10px;
    margin-right: 20px;
  }
`;

export const DetailContent = styled.div`
  white-space: pre-wrap;
  font-size: 18px;
  text-align: center;
`;

export const DetailButtons = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  button {
    width: 100px;
    margin: auto;
  }
`;

export const DetailPageNickname = styled.span`
  font-size: 15px;
  text-align: left;
`;

export const DetailPageDate = styled.span`
  font-size: 15px;
  text-align: left;
`;
