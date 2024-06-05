import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthStatus from '../components/AuthStatus/AuthStatus';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import Mypage from '../pages/Mypage';
import EditProfile from '../pages/EditProfile';
import MainPage from '../pages/MainPage/MainPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import Detail from '../pages/DetailPage/Detail';
import ArticleCreatePage from '../pages/SubmitPage/ArticleCreatePage';
import ArticleUpdatePage from '../pages/SubmitPage/ArticleUpdatePage';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/*로그인 페이지로 바꿔야됨 */}
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/checkSignIn" element={<AuthStatus />} />
        <Route path="/auth/loading/:provider" element={<LoadingPage />} />
        <Route path="/articles/:articleId" element={<Detail />} />
        <Route path="/articles/write" element={<ArticleCreatePage />} />
        <Route path="/articles/:articleId/edit" element={<ArticleUpdatePage />} />
        <Route path="/profile" element={<Mypage />} />
        <Route path="/editprofile" element={<EditProfile />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
