import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import myLogoImage from '../../assets/MyLogLogo_blue_bold.png';
import { logout } from '../../redux/slices/authSlice';
import {
  HeaderContainer,
  HomeButton,
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
import supabase from '../../supabase/supabase';

const Header = ({ onSearch }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();

    dispatch(logout());
  };

  const handleRefreshPage = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <div>
        <Logo src={myLogoImage} alt="로고" onClick={handleLogoClick} />
        <HomeButton>
          <button onClick={handleRefreshPage}>Home</button>
        </HomeButton>
        <SearchContainer>
          <SearchBar type="text" placeholder="Search..." onKeyDown={handleKeyDown} />
        </SearchContainer>
        {isLoggedIn ? (
          <LoggedInButtons>
            <NavLink to="/articles/write">
              <WriteButton>Write</WriteButton>
            </NavLink>
            <NavLink to="/profile">
              <ProfileButton>My Profile</ProfileButton>
            </NavLink>
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
