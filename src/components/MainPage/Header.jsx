import { NavLink } from 'react-router-dom';
import {
  HeaderButton,
  HeaderContainer,
  HomeButton,
  LoggedInButtons,
  Logo,
  SearchBar,
  SearchContainer
} from '../../styles/MainPage/HeaderStyle';
import myLogoImage from '../../assets/MyLogLogo_blue_bold.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import supabase from '../../supabase/supabase';

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

  const handleLogout = async () => {
    await supabase.auth.signOut();

    dispatch(logout());
  };

  const handleRefreshPage = () => {
    window.location.reload();
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
              <HeaderButton>Write</HeaderButton>
            </NavLink>
            <NavLink to="/profile">
              <HeaderButton>My Profile</HeaderButton>
            </NavLink>
            <HeaderButton onClick={handleLogout}>Log Out</HeaderButton>
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
