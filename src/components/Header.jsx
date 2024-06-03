import {
  HeaderContainer,
  LoggedInButtons,
  LoginButton,
  Logo,
  LogoutButton,
  ProfileButton,
  SearchBar,
  SearchContainer,
  WriteButton
} from '../styles/GlobalStyle';
import { useState } from 'react';
import myLogoImage from '../assets/MyLogLogo_blue_bold.png';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <HeaderContainer>
      <Logo src={myLogoImage} alt="로고" />
      <SearchContainer>
        <SearchBar type="text" placeholder="Search..." />
      </SearchContainer>
      {isLoggedIn ? (
        <LoggedInButtons>
          <WriteButton>Write</WriteButton>
          <ProfileButton>My Profile</ProfileButton>
          <LogoutButton onClick={handleLogin}>Log Out</LogoutButton>
        </LoggedInButtons>
      ) : (
        <LoginButton onClick={handleLogin}>Log In</LoginButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
