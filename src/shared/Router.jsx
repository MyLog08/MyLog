import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import Articles from '../components/MainPage/Articles';
import RegisterPage from '../pages/RegisterPage/RegisterPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/*로그인 페이지로 바꿔야됨 */}
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/newest" element={<Articles mode="newest" />} />
        <Route path="/popular" element={<Articles mode="popular" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
