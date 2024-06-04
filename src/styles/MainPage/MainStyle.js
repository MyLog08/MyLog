/* components/MainPageComp.jsx style components */

import styled from 'styled-components';

export const Content = styled.div`
  padding: 20px;
`;

export const MainSort = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SortButton = styled.button`
  padding: 10px;
  font-size: 20px;
  //background-color: #8aa9e4;
  font-weight: bold;
  background-color: #fafafa;
  color: ${({ selected }) => (selected ? '#ffbfbf' : '#8aa9e4')};
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    //background-color: #ffbfbf;
    color: #ffbfbf;
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  justify-content: center;
`;

export const ImageCard = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #d9d9d9;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.img`
  background-color: #ccc;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Details = styled.div`
  flex: 1;
`;

export const ArticleTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: left;
`;

export const ArticleContent = styled.div`
  width: 100%;
  height: 90px;
  font-size: 15px;
  color: #555;
  text-align: left;
`;

export const ArticleDate = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 5px;
  font-size: 15px;
  color: #555;
  text-align: left;
`;

export const AuthorBox = styled.div`
  width: 100%;
  height: 20px;
  position: absolute;
  display: flex;
  justify-content: space-between;
`;

export const ArticleAuthor = styled.div`
  font-size: 15px;
  color: #555;
  margin-right: 10px;
`;

export const ArticleLikes = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 30px;
  font-size: 15px;
  color: #555;
  margin-right: 50px;
`;

export const NoResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  background-color: #fafafa;
  color: #8aa9e4;
  height: 100px; /* 원하는 높이로 조절하세요 */
`;

export const ImageLoadingCard = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #d9d9d9;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const LoadingImage = styled.div`
  background-color: #ccc;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #999;
`;
