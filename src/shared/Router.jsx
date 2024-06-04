import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthStatus from '../components/AuthStatus/AuthStatus';
import Articles from '../components/MainPage/Articles';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import Mypage from '../pages/Mypage';
import EditProfile from '../pages/EditProfile';
import MainPage from '../pages/MainPage/MainPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';

const Router = ({ user, onEditProfile, onUpdateProfile }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/*로그인 페이지로 바꿔야됨 */}
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/newest" element={<Articles mode="newest" />} />
        <Route path="/popular" element={<Articles mode="popular" />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/checkSignIn" element={<AuthStatus />} />
        <Route path="/auth/loading/:provider" element={<LoadingPage />} />
        <Route path="/profile" element={<Mypage user={user} onEditProfile={onEditProfile} />} />
        <Route path="/editprofile" element={<EditProfile user={user} onUpdateProfile={onUpdateProfile} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
