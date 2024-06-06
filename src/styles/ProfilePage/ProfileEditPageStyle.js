import styled from 'styled-components';

export const ProfileEditFormWrapper = styled.div`
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

export const EditFormSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
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
