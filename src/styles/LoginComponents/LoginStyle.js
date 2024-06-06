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
  padding: ${({ theme }) => theme.spacing.medium};
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fafafa;
`;

export const LogInTitle = styled.div`
  background-color: #fafafa;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;

  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const LogInButton = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const RegisterButton = styled.div`
  margin-top: ${({ theme }) => theme.spacing.small};
`;

export const LogInEmailInput = styled.div`
  height: 55px;
  position: relative;
`;

export const LogInPasswordInput = styled.div`
  height: 55px;
  position: relative;
`;
