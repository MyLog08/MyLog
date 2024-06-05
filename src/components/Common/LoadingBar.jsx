import { LoadingWrapper, Ellipsis1, Ellipsis2, Ellipsis3, Ellipsis4 } from '../../styles/Common/LoadingBarStyle'; // 스타일을 임포트합니다.

const LoadingBar = () => {
  console.log('loadingBar');
  return (
    <LoadingWrapper>
      <Ellipsis1 />
      <Ellipsis2 />
      <Ellipsis3 />
      <Ellipsis4 />
    </LoadingWrapper>
  );
};

export default LoadingBar;
