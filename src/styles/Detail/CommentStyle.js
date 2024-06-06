import styled from 'styled-components';

export const CommentPostingBox = styled.div`
  background-color: ${({ theme }) => theme.colors.background};

  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const CommentsCount = styled.div`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  margin-left: ${({ theme }) => theme.spacing.large};
  text-align: left;
`;

export const CommentPost = styled.input`
  flex: 1;
  max-width: 500px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: 5px;
  margin-right: ${({ theme }) => theme.spacing.small}; /* Add margin-right to create a gap between input and button */
  transition: box-shadow 0.3s ease-in-out;
  caret-color: ${({ theme }) => theme.colors.primary};

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

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  justify-content: center;
  align-items: center;
`;

export const CommentPostBox = styled.div`
  width: 700px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 5px;

  transition: box-shadow 0.3s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary};
    outline-color: ${({ theme }) => theme.colors.primary};
  }
`;
