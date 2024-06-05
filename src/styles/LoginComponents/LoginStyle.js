import styled from 'styled-components';

export const StLoginPageWrapper = styled.div`
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

export const LogInContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fafafa;
`;

export const LogInTitle = styled.div`
  background-color: #fafafa;
  color: #8aa9e4;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ErrorText = styled.div`
  color: #ff1744;
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const LogInButton = styled.div`
  margin-top: 10px;
`;

export const RegisterButton = styled.div`
  margin-top: 10px;
`;
