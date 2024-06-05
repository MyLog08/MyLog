import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 8px 12px;
  font-size: 15px;
  border: 1px solid #8aa9e4;
  caret-color: #8aa9e4;
  border-radius: 20px;
  transition: box-shadow 0.3s ease-in-out;
  margin-bottom: 10px;

  &::placeholder {
    color: #8aa9e4;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 8px #ffbfbf;
    outline-color: #8aa9e4;
  }
`;
