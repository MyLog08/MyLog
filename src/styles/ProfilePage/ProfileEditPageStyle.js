import styled from 'styled-components';

export const ProfileEditFormWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면의 높이를 전체 뷰포트 높이로 설정 */
`;

export const EditImageFormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px auto 20px auto;
  margin-bottom: 20px;
  width: 700px;
  padding-top: 50px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 50px;
  transition: box-shadow 0.3s ease-in-out;
`;

export const EditFormSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  max-width: 60%;
  width: 350px;
  padding-right: ${({ theme }) => theme.spacing.medium};
  box-sizing: border-box;
`;

export const EditFormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const EditLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const EditPhotoLabel = styled.div`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  input[type='file'] {
    display: none;
  }
  > label {
    ${({ theme }) => theme.fonts.bold};
  }
`;

export const EditInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.regular};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  caret-color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
  }
  &:hover,
  &:focus {
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary};
    outline-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ color, theme }) => color || theme.colors.text};
  background: ${({ background, theme }) => background || theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  &:hover {
    background: ${({ hoverBackground, theme }) => hoverBackground || theme.colors.primary};
  }
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const EditErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const EditButtons = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 방향으로 중앙 정렬 */
`;

export const RedStyledButton = styled.div`
  font-size: 20px;
  color: ${({ selected, theme }) => (selected ? theme.colors.error : theme.colors.shade)};
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  font-family: ${({ theme }) => theme.fonts.bold};

  &:hover {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const EditPhotoGroup = styled.div`
  padding-top: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.medium};
  max-width: 500px; /* 이미지 폭을 500px로 지정 */
  max-height: 500px; /* 이미지 높이를 500px로 지정 */

  img {
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
`;

export const ProfileImageGrid = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  max-width: 500px; /* 이미지 폭을 500px로 지정 */
  max-height: 500px;
`;

export const PreviewImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  /* 이미지 높이를 500px로 지정 */

  img {
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.regular};
  }
`;
