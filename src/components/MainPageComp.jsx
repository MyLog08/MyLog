import {
  ArticleAuthor,
  ArticleContent,
  ArticleDate,
  ArticleLikes,
  ArticleTitle,
  AuthorBox,
  Content,
  Details,
  Image,
  ImageCard,
  ImageGrid,
  LatestPopularButtons,
  SortButton
} from '../styles/GlobalStyle';
import Header from './Header';
import { useEffect, useState } from 'react';
import supabase from '../supabase/supabase';
import dayjs from 'dayjs';

const MainPageComp = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('latest');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let { data, error } = await supabase.from('Articles').select('*');
        if (error) {
          throw error;
        }
        if (sortBy === 'popular') {
          data = data.sort((a, b) => b.like - a.like);
        } else {
          data = data.sort((a, b) => new Date(b.updateAt) - new Date(a.updateAt));
        }
        setArticles(
          data.map((article) => ({
            ...article,
            updatedAt: dayjs(article.updatedAt).format('YYYY년 MM월 DD일'),
            imageUrlArray: JSON.parse(article.imageUrl)
          }))
        );
      } catch (error) {
        console.error('Error Fetching Articles:', error.message);
      }
    };
    fetchArticles();
  }, [sortBy]);

  const handleSortToggle = () => {
    setSortBy(sortBy === 'latest' ? 'popular' : 'latest');
  };

  return (
    <div>
      <Header />
      <Content>
        <LatestPopularButtons>
          <SortButton onClick={handleSortToggle}>{sortBy === 'latest' ? '최신순' : '인기순'}</SortButton>
        </LatestPopularButtons>
        <ImageGrid>
          {articles.map((article) => {
            const truncatedContent =
              article.content.length > 100 ? `${article.content.slice(0, 100)}...` : article.content;
            return (
              <ImageCard key={article.articleId}>
                <Image
                  src={
                    Array.isArray(article.imageUrlArray) && article.imageUrlArray.length > 0
                      ? article.imageUrlArray[0]
                      : null
                  }
                />
                <Details>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleContent>{truncatedContent}</ArticleContent>
                  <ArticleDate>{article.updatedAt}</ArticleDate>
                </Details>
                <AuthorBox>
                  <ArticleAuthor>by {article.author}</ArticleAuthor>
                  <ArticleLikes>♥ {article.like}</ArticleLikes>
                </AuthorBox>
              </ImageCard>
            );
          })}
        </ImageGrid>
      </Content>
    </div>
  );
};

export default MainPageComp;
