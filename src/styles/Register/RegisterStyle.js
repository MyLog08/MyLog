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
  color: #8aa9e4;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const RegisterInputWrapper = styled.div`
  margin-bottom: 15px;
  height: 55px;
  position: relative;
`;

export const RegisterInput = styled.input`
  padding: 8px 12px;
  font-size: 15px;
  border: 1px solid #8aa9e4;
  border-radius: 20px;
  transition: box-shadow 0.3s ease-in-out;

  &::placeholder {
    color: #8aa9e4;
  }
  &:hover,
  &:focus {
    box-shadow: 0 0 8px #ffbfbf;
    outline-color: #8aa9e4;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
`;
