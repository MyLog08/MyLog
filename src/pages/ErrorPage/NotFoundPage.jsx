import {
  NotFoundPageArticle,
  NotFoundPageButton,
  NotFoundPageTitle,
  NotFountPageBody
} from '../../styles/ErrorPage/NotFoundPageStyle';

const NotFound = () => {
  return (
    <NotFoundPageArticle>
      <NotFoundPageTitle>404</NotFoundPageTitle>
      <NotFountPageBody>페이지를 찾을 수 없습니다.</NotFountPageBody>
      <NotFoundPageButton>Back to Home</NotFoundPageButton>
    </NotFoundPageArticle>
  );
};

export default NotFound;
