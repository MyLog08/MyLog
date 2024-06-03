import styled, { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
`;
export default GlobalStyle;

/* src/App.jsx style components */

export const PageWrapper = styled.div`
  background-color: #fafafa;
`;

export const AppContainer = styled.div`
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
`;

/* components/Header.jsx style components */

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background: #fafafa;
`;

export const Logo = styled.img`
  width: 60px;
  height: 40px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const placeholderColor = (color) => css`
  &::-webkit-input-placeholder {
    color: ${color};
  }
  &::-moz-placeholder {
    color: ${color};
    opacity: 1;
  }
  &::-moz-placeholder {
    color: ${color};
    opacity: 1;
  }
  &::-ms-input-placeholder {
    color: ${color};
  }
`;

export const SearchBar = styled.input`
  padding: 8px 12px;
  font-size: 15px;
  border: 1px solid #8aa9e4;
  caret-color: #8aa9e4;
  border-radius: 20px;
  transition: box-shadow 0.3s ease-in-out;

  ${placeholderColor('#8aa9e4')};

  &:hover,
  &:focus {
    box-shadow: 0 0 8px #ffbfbf;
    outline-color: #8aa9e4;
  }
`;

export const LoggedInButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const WriteButton = styled.button`
  padding: 8px 16px;
  font-size: 20px;
  //background-color: #8aa9e4;
  font-weight: bold;
  background-color: #fafafa;
  color: #8aa9e4;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    //background-color: #ffbfbf;
    color: #ffbfbf;
  }
`;

export const ProfileButton = styled.button`
  padding: 8px 16px;
  font-size: 20px;
  //background-color: #8aa9e4;
  font-weight: bold;
  background-color: #fafafa;
  color: #8aa9e4;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    //background-color: #ffbfbf;
    color: #ffbfbf;
  }
`;

export const LoginButton = styled.button`
  padding: 8px 16px;
  font-size: 20px;
  //background-color: #8aa9e4;
  font-weight: bold;
  background-color: #fafafa;
  color: #8aa9e4;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    //background-color: #ffbfbf;
    color: #ffbfbf;
  }
`;

export const LogoutButton = styled.button`
  padding: 8px 16px;
  font-size: 20px;
  //background-color: #928b8b;
  font-weight: bold;
  background-color: #fafafa;
  color: #928b8b;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    //background-color: #e45f5f;
    color: #e45f5f;
  }
`;

/* components/MainPageComp.jsx style components */

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
  color: #8aa9e4;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    //background-color: #ffbfbf;
    color: #ffbfbf;
  }

  ${({ selected }) =>
    selected &&
    css`
      color: #ffbfbf;
    `}
`;

export const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ImageCard = styled.div`
  width: 300px;
  height: 400px;
  background-color: #d9d9d9;
  padding: 15px;
  padding-bottom: 0;
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
  margin-bottom: 20px;
  width: 100%;
  height: 55%;
  border-radius: 10px;
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
  align-items: center;
  justify-content: space-between;
`;

export const ArticleAuthor = styled.p`
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
  margin-right: 30px;
`;
