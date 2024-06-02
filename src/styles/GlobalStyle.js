import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
background-color: #fafafa;
`;
export default GlobalStyle;

/* src/App.jsx style components */

export const AppContainer = styled.div`
  text-align: center;
`;

/* components/Header.jsx style components */

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background: #fafafa;
  border-bottom: 1px solid #ddd;
`;

export const Logo = styled.img`
  width: 60px;
  height: 40px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SearchBar = styled.input`
  padding: 8px 12px; /* 좀 더 큰 패딩값을 사용합니다. */
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  transition: box-shadow 0.3s ease-in-out; /* hover 효과를 위한 transition 추가 */

  &:hover,
  &:focus {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); /* hover 시 그림자 추가 */
  }
`;

export const LoggedInButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const WriteButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ProfileButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #218838;
  }
`;

export const LoginButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #5a6268;
  }
`;

/* components/MainPageComp.jsx style components */

export const Content = styled.div`
  padding: 20px;
`;

export const LatestPopularButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SortButton = styled.button`
  padding: 10px 20px;
  font-size: 15px;
  background-color: #8aa9e4;
  color: #fafafa;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffbfbf;
  }
`;

export const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ImageCard = styled.div`
  width: calc(33.33% - 20px);
  background-color: #d9d9d9;
  padding: 15px;
  padding-bottom: 0;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.img`
  background-color: #ccc;
  margin-bottom: 20px;
  width: 100%;
  height: 55%;
  border-radius: 20px;
  object-fit: cover;
`;

export const Details = styled.div`
  flex: 1;
`;

export const ArticleTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: left;
`;

export const ArticleContent = styled.p`
  font-size: 15px;
  color: #555;
  text-align: left;
`;

export const ArticleDate = styled.p`
  font-size: 15px;
  color: #555;
  text-align: left;
`;

export const AuthorBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const ArticleAuthor = styled.p`
  font-size: 15px;
  color: #555;
`;

export const ArticleLikes = styled.p`
  font-size: 15px;
  color: #555;
`;
