import { useEffect, useState, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
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
} from '../styles/MainStyle';
import Header from './Header';
import supabase from '../supabase/supabase';
import dayjs from 'dayjs';
import LoadingBar from './LoadingBar';

const Articles = ({ mode }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const ARTICLES_PER_PAGE = 12;

  const fetchArticles = useCallback(
    async (page) => {
      setLoading(true);
      try {
        let query = supabase
          .from('Articles')
          .select('*')
          .order(mode === 'popular' ? 'like' : 'updatedAt', { ascending: false })
          .range((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE - 1);

        const { data, error } = await query;
        if (error) {
          throw error;
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

        setArticles((prevArticles) => [...prevArticles, ...filteredArticles]);
      } catch (error) {
        console.error('Error Fetching Articles:', error.message);
      } finally {
        setLoading(false);
      }
    },
    [mode]
  );

  useEffect(() => {
    setArticles([]);
    setPage(1);
    fetchArticles(1);
  }, [mode, fetchArticles]);

  const lastArticleElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    if (page > 1) {
      fetchArticles(page);
    }
  }, [page, fetchArticles]);

  return (
    <div>
      <Header />
      <Content>
        <MainSort>
          <NavLink to="/newest" isActive={() => mode === 'newest'}>
            <SortButton selected={mode === 'newest'}>Newest</SortButton>
          </NavLink>
          <NavLink to="/popular" isActive={() => mode === 'popular'}>
            <SortButton selected={mode === 'popular'}>Popular</SortButton>
          </NavLink>
        </MainSort>
        <ImageGrid>
          {articles.map((article, index) => {
            const truncatedContent =
              article.content.length > 30 ? `${article.content.slice(0, 30)}...` : article.content;
            if (index === articles.length - 1) {
              return (
                <ImageCard key={article.articleId} ref={lastArticleElementRef}>
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
                      <img src="src/assets/HeartIconBlue.png" alt="Heart Icon" /> {article.like}
                    </ArticleLikes>
                  </AuthorBox>
                </ImageCard>
              );
            } else {
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
                      <img src="src/assets/HeartIconBlue.png" alt="Heart Icon" /> {article.like}
                    </ArticleLikes>
                  </AuthorBox>
                </ImageCard>
              );
            }
          })}
        </ImageGrid>
        {loading && <LoadingBar />}
      </Content>
    </div>
  );
};

export default Articles;
