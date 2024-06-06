import { NotFoundPageTitle } from '../../styles/ErrorPage/NotFoundPageStyle';

const NotFound = () => {
  return (
    <div>
      <NotFoundPageTitle>404 Not Found</NotFoundPageTitle>
      <p>페이지를 찾을 수 없습니다.</p>
    </div>
  );
};

export default NotFound;
