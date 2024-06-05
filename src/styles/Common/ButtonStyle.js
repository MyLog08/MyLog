import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  background-color: #fafafa;
  color: ${({ selected }) => (selected ? '#ffbfbf' : '#8aa9e4')};
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    //background-color: #ffbfbf;
    color: #ffbfbf;
  }
`;
