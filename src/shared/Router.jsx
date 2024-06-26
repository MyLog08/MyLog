import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthStatus from '../components/AuthStatus/AuthStatus';
import Search from '../components/MainPage/Search';
import DetailPage from '../pages/DetailPage/DetailPage';
import EditProfile from '../pages/EditProfilePage/EditProfile';
import NotFoundPage from '../pages/ErrorPage/NotFoundPage';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import MainPage from '../pages/MainPage/MainPage';
import MyPage from '../pages/MyPage/MyPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ArticleCreatePage from '../pages/SubmitPage/ArticleCreatePage';
import ArticleUpdatePage from '../pages/SubmitPage/ArticleUpdatePage';
import ScrollToTop from '../utils/common/scrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} /> {/*로그인 페이지로 바꿔야됨 */}
        <Route path="/:searchParam" element={<Search />} /> {/*로그인 페이지로 바꿔야됨 */}
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/checkSignIn" element={<AuthStatus />} />
        <Route path="/auth/loading/:provider" element={<LoadingPage />} />
        <Route path="/articles/:articleId/edit" element={<ArticleUpdatePage />} />
        <Route path="/articles/:articleId" element={<DetailPage />} />
        <Route path="/articles/post" element={<ArticleCreatePage />} />
        <Route path="/profile" element={<MyPage />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
