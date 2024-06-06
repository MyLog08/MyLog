import { useNavigate } from 'react-router-dom';
import {
  NotFoundPageArticle,
  NotFoundPageButton,
  NotFoundPageTitle,
  NotFountPageBody
} from '../../styles/ErrorPage/NotFoundPageStyle';

const NotFound = () => {
  const navigate = useNavigate();

  const handleOnClickHomeButton = () => {
    navigate('/');
  };

  return (
    <NotFoundPageArticle>
      <NotFoundPageTitle>404</NotFoundPageTitle>
      <NotFountPageBody>페이지를 찾을 수 없습니다.</NotFountPageBody>
      <NotFoundPageButton onClick={handleOnClickHomeButton}>Back to Home</NotFoundPageButton>
    </NotFoundPageArticle>
  );
};

export default NotFound;
