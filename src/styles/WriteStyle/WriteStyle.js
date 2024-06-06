// src/styles/YourStyledComponents.js
import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  padding: 20px;

  & > div {
    margin-bottom: 20px;
  }
  input[type='text'],
  textarea {
    width: 700px;
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-top: 5px;

    transition: box-shadow 0.3s ease-in-out;
    caret-color: ${({ theme }) => theme.colors.primary};
    &::placeholder {
      color: ${({ theme }) => theme.colors.primary};
      font-family: ${({ theme }) => theme.fonts.regular};
    }
    &:hover,
    &:focus {
      box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary};
      outline-color: ${({ theme }) => theme.colors.primary};
    }
  }

  textarea {
    resize: vertical;
    min-height: 150px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const PostImageGrid = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// export const Label = styled.div`
//   margin-bottom: ${({ theme }) => theme.spacing.small};
//   color: ${({ theme }) => theme.colors.text};
//   font-weight: bold;
//   font-family: ${({ theme }) => theme.fonts.bold};
// `;

export const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  margin-top: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: ${({ theme }) => theme.spacing.small};
`;

export const PreviewContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  min-width: 300px;
  min-height: 300px;
  width: fit-content;
  height: fit-content;
  transition: box-shadow 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.primary};

  &:hover,
  &:focus {
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary};
    outline-color: ${({ theme }) => theme.colors.primary};
  }

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

export const PreviewLabel = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const PreviewImageContainer = styled.div``;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  font-weight: bold;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.bold};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const WritePageLogo = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const WriteHomeLogo = styled.img`
  cursor: pointer;
  height: 8%;
  width: 8%;
`;
