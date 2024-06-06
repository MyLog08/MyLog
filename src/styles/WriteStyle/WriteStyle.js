// src/styles/YourStyledComponents.js
import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const InputContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const Label = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

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
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const PreviewLabel = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const PreviewImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.small};
  background-color: #fff;
  height: 200px;

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: cover;
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
  }
`;

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
