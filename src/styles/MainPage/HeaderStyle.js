import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 10px 20px;
  z-index: 1000;
  background-color: #fafafa;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    margin: auto;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 40px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBar = styled.input`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  font-size: 15px;
  border: 1px solid #8aa9e4;
  caret-color: #8aa9e4;
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

export const LoggedInButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const WriteButton = styled.button`
  padding: 8px 16px;
  font-size: 20px;
  //background-color: #8aa9e4;
  font-weight: bold;
  background-color: #fafafa;
  color: #8aa9e4;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    //background-color: #ffbfbf;
    color: #ffbfbf;
  }
`;

export const ProfileButton = styled.button`
  padding: 8px 16px;
  font-size: 20px;
  //background-color: #8aa9e4;
  font-weight: bold;
  background-color: #fafafa;
  color: #8aa9e4;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    //background-color: #ffbfbf;
    color: #ffbfbf;
  }
`;

export const LoginButton = styled.button`
  padding: 8px 16px;
  font-size: 20px;
  //background-color: #8aa9e4;
  font-weight: bold;
  background-color: #fafafa;
  color: #8aa9e4;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    //background-color: #ffbfbf;
    color: #ffbfbf;
  }
`;

export const LogoutButton = styled.button`
  padding: 8px 16px;
  font-size: 20px;
  //background-color: #928b8b;
  font-weight: bold;
  background-color: #fafafa;
  color: #928b8b;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    //background-color: #e45f5f;
    color: #e45f5f;
  }
`;

export const SigninButton = styled.button`
  padding: 8px 16px;
  font-size: 20px;
  //background-color: #8aa9e4;
  font-weight: bold;
  background-color: #fafafa;
  color: #8aa9e4;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    //background-color: #ffbfbf;
    color: #ffbfbf;
  }
`;

export const HomeButton = styled.div`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  background-color: #fafafa;
  color: ${({ selected }) => (selected ? '#ffbfbf' : '#8aa9e4')};
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: color 0.3s;

  button {
    // 버튼에 스타일을 적용합니다.
    padding: 5px 10px;
    border: 1px solid #fafafa;
    border-radius: 5px;
    background-color: transparent;
    color: #8aa9e4;
    font-size: inherit;
    font-weight: inherit;
    cursor: pointer;

    &:hover {
      color: #ffbfbf;
    }
  }
`;
