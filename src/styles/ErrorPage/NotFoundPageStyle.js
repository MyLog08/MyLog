import styled from 'styled-components';

export const NotFoundPageArticle = styled.article`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundPageTitle = styled.h1`
  background-clip: text;
  display: block;
  font-size: 9.14rem;
  font-weight: 700;
  line-height: 1;
  padding-bottom: 1.14rem;
  transition: color 0.3s;
  color: ${({ selected, theme }) => (selected ? theme.colors.secondary : theme.colors.primary)};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  padding: 0.72rem 2rem;
`;

export const NotFountPageBody = styled.span`
  display: block;
  font-size: 1.72rem;
  font-weight: 400;
  line-height: 1.33;
`;

export const NotFoundPageButton = styled.button`
  padding: ${({ theme }) => theme.spacing.small};
  font-size: 20px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ selected, theme }) => (selected ? theme.colors.secondary : theme.colors.primary)};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: color 0.3s;
  font-family: ${({ theme }) => theme.fonts.regular};
  border: 1px solid ${({ selected, theme }) => (selected ? theme.colors.secondary : theme.colors.primary)};
  margin: 20px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
