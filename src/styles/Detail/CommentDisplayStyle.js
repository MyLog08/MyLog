import styled from 'styled-components';

export const CommentsSection = styled.section`
  width: 95%;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

export const CommentsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CommentItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const CommentInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Nickname = styled.span`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const CommentDate = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const CommentActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const ActionButton = styled.button`
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

export const CommentContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.small};
  margin-top: ${({ theme }) => theme.spacing.small};
  white-space: pre-wrap;
  text-align: left;
`;

export const EditInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: ${({ theme }) => theme.spacing.small};
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
