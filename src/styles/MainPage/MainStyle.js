import styled from 'styled-components';

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const MainSort = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: ${({ theme }) => theme.spacing.medium};
  justify-content: center;
`;

export const ImageCard = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px ${({ theme }) => theme.colors.secondary};
  }
`;

export const Image = styled.img`
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Details = styled.div`
  flex: 1;
`;

export const ArticleTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #333;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ArticleContent = styled.div`
  width: 100%;
  height: 80px;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #555;
  text-align: left;
`;

export const ArticleDate = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #555;
  text-align: left;
`;

export const AuthorBox = styled.div`
  width: 100%;
  height: 20px;
  position: absolute;
  display: flex;
  justify-content: space-between;
`;

export const ArticleAuthor = styled.div`
  font-size: 15px;
  color: #555;
  margin-right: ${({ theme }) => theme.spacing.small};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const NoResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  background-color: #fafafa;
  color: #8aa9e4;
  height: 100px;
`;

export const ImageLoadingCard = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #d9d9d9;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const LoadingImage = styled.div`
  background-color: #ccc;
  margin-top: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  width: 100%;
  height: 200px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #999;
`;
