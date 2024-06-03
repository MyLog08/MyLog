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
  MainSort,
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
          data = data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        }

        const updatedArticles = await Promise.all(
          data.map(async (article) => {
            const { data: userNicknameData, error: userNicknameError } = await supabase
              .from('Users')
              .select('nickname')
              .eq('userId', article.userId)
              .single();
            if (userNicknameError) {
              console.log(userNicknameError);
              return null;
            }
            const fetchedNickname = userNicknameData.nickname;

            return {
              ...article,
              updatedAt: dayjs(article.updatedAt).format('YYYY년 MM월 DD일'),
              imageUrlArray: JSON.parse(article.imageUrl),
              userNickname: fetchedNickname
            };
          })
        );

        const filteredArticles = updatedArticles.filter((article) => article !== null);

        setArticles(filteredArticles);
      } catch (error) {
        console.error('Error Fetching Articles:', error.message);
      }
    };
    fetchArticles();
  }, [sortBy]);
  const handleSortToggle = (sortCriteria) => {
    setSortBy(sortCriteria);
  };

  return (
    <div>
      <Header />
      <Content>
        <MainSort>
          <SortButton onClick={() => handleSortToggle('latest')} selected={sortBy === 'latest'}>
            Newest
          </SortButton>
          <SortButton onClick={() => handleSortToggle('popular')} selected={sortBy === 'popular'}>
            Popular
          </SortButton>
        </MainSort>
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
                  <ArticleAuthor>by {article.userNickname}</ArticleAuthor>
                  <ArticleLikes>
                    <img src="src\assets\HeartIconBlue.png" alt="Heart Icon" /> {article.like}
                  </ArticleLikes>
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
