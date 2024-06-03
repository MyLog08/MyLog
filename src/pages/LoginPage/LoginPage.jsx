import styled from 'styled-components';
import LoginForm from '../../components/LoginComponents/LoginForm';

function LoginPage() {
  return (
    <StLoginPageWrapper>
      <LoginForm />
    </StLoginPageWrapper>
  );
}

export default LoginPage;

const StLoginPageWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 60vw;
  height: 80vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
