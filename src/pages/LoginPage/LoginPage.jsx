import LoginForm from '../../components/LoginComponents/LoginForm';
import SocialSection from '../../components/LoginComponents/SocialSection';
import { StLoginPageWrapper } from '../../styles/LoginComponents/LoginStyle';

function LoginPage() {
  return (
    <StLoginPageWrapper>
      <LoginForm />
      <SocialSection />
    </StLoginPageWrapper>
  );
}

export default LoginPage;
