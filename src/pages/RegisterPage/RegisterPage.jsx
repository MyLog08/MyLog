import styled from 'styled-components';
import RegisterForm from '../../components/RegisterComponents/RegisterForm';

function RegisterPage() {
  return (
    <StRegisterPageWrapper>
      <RegisterForm />
    </StRegisterPageWrapper>
  );
}

export default RegisterPage;

const StRegisterPageWrapper = styled.div`
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
