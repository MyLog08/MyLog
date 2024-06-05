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
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const Header = ({ onSearch }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
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
            <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
          </LoggedInButtons>
        ) : (
          <LoggedInButtons>
            <NavLink to="/auth/register">
              <SigninButton>Sign In</SigninButton>
            </NavLink>
            <NavLink to="/auth/login">
              <LoginButton>Log In</LoginButton>
            </NavLink>
          </LoggedInButtons>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
