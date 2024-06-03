import {
  HeaderContainer,
  LoggedInButtons,
  LoginButton,
  Logo,
  LogoutButton,
  ProfileButton,
  SearchBar,
  SearchContainer,
  SigninButton,
  WriteButton
} from '../../styles/MainPage/HeaderStyle';
import { useState } from 'react';
import myLogoImage from '../../assets/MyLogLogo_blue_bold.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeaderContainer>
      <div>
        <Logo src={myLogoImage} alt="로고" onClick={handleLogoClick} />
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
          <LoggedInButtons>
            <NavLink to="/auth/register">
              <SigninButton>Sign In</SigninButton>
            </NavLink>
            <LoginButton onClick={handleLogin}>Log In</LoginButton>
          </LoggedInButtons>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
