import {
  HeaderContainer,
  LoggedInButtons,
  LoginButton,
  Logo,
  ProfileButton,
  SearchBar,
  WriteButton
} from '../styles/GlobalStyle';
import { useState } from 'react';
import myLogoImage from '../assets/MyLogLogo_1.png';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <HeaderContainer>
      <Logo src={myLogoImage} alt="로고" />
      <SearchBar type="text" placeholder="검색" />
      {isLoggedIn ? (
        <LoggedInButtons>
          <WriteButton>글 쓰기</WriteButton>
          <ProfileButton>내 프로필</ProfileButton>
          <LoginButton onClick={handleLogin}>로그아웃</LoginButton>
        </LoggedInButtons>
      ) : (
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
