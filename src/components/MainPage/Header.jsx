import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import myLogoImage from '../../assets/MyLogLogo_blue_bold.png';
import { logout } from '../../redux/slices/authSlice';
import {
  HeaderButton,
  HeaderContainer,
  HeaderLogOutButton,
  HomeButton,
  LoggedInButtons,
  Logo,
  SearchBar,
  SearchContainer
} from '../../styles/MainPage/HeaderStyle';
import supabase from '../../supabase/supabase';
import { StyledButton } from '../../styles/Common/ButtonStyle';

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
          <StyledButton onClick={handleRefreshPage}>Home</StyledButton>
        </HomeButton>
        <SearchContainer>
          <SearchBar type="text" placeholder="Search..." onKeyDown={handleKeyDown} />
        </SearchContainer>
        {isLoggedIn ? (
          <LoggedInButtons>
            <NavLink to="/articles/Post">
              <HeaderButton>Post</HeaderButton>
            </NavLink>
            <NavLink to="/profile">
              <HeaderButton>My Profile</HeaderButton>
            </NavLink>
            <HeaderLogOutButton onClick={handleLogout}>Log Out</HeaderLogOutButton>
          </LoggedInButtons>
        ) : (
          <LoggedInButtons>
            <NavLink to="/auth/register">
              <HeaderButton>Sign In</HeaderButton>
            </NavLink>
            <NavLink to="/auth/login">
              <HeaderButton>Log In</HeaderButton>
            </NavLink>
          </LoggedInButtons>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
