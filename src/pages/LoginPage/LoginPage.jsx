import styled from 'styled-components';
import LoginForm from '../../components/LoginComponents/LoginForm';
import SocialSection from '../../components/LoginComponents/SocialSection';

function LoginPage() {
  return (
    <StLoginPageWrapper>
      <LoginForm />
      <SocialSection />
    </StLoginPageWrapper>
  );
}

export default LoginPage;

const StLoginPageWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
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
