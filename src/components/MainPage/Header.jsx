import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
import myLogoImage from '../../assets/MyLogLogo_blue_bold.png';

const Header = ({ onSearch }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  return (
    <HeaderContainer>
      <div>
        <Logo src={myLogoImage} alt="로고" onClick={handleLogoClick} />
        <SearchContainer>
          <SearchBar type="text" placeholder="Search..." onKeyDown={handleKeyDown} />
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
