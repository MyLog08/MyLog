import styled from 'styled-components';

export const StRegisterPageWrapper = styled.div`
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

export const RegisterPageTitle = styled.div`
  background-color: #fafafa;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const RegisterInputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  height: 55px;
  position: relative;
`;

export const RegisterInput = styled.input`
  padding: 8px 12px;
  font-size: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  transition: box-shadow 0.3s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover,
  &:focus {
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary};
    outline-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const RegisterButton = styled.div`
  padding-top: ${({ theme }) => theme.spacing.medium};
`;
