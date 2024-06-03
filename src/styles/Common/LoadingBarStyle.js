import styled, { keyframes } from 'styled-components';

const ldsEllipsisAnimation1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ldsEllipsisAnimation2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const ldsEllipsisAnimation3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const LoadingWrapper = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  display: inline-block;
`;

const EllipsisDiv = styled.div`
  position: absolute;
  top: 33.33333px;
  width: 13.33333px;
  height: 13.33333px;
  border-radius: 50%;
  background: #8aa9e4;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

const Ellipsis1 = styled(EllipsisDiv)`
  left: 8px;
  animation: ${ldsEllipsisAnimation1} 0.6s infinite;
`;

const Ellipsis2 = styled(EllipsisDiv)`
  left: 8px;
  animation: ${ldsEllipsisAnimation2} 0.6s infinite;
`;

const Ellipsis3 = styled(EllipsisDiv)`
  left: 32px;
  animation: ${ldsEllipsisAnimation2} 0.6s infinite;
`;

const Ellipsis4 = styled(EllipsisDiv)`
  left: 56px;
  animation: ${ldsEllipsisAnimation3} 0.6s infinite;
`;

export { LoadingWrapper, Ellipsis1, Ellipsis2, Ellipsis3, Ellipsis4 };
