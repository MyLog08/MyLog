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
import { useEffect, useState, useRef, useCallback } from 'react';
import supabase from '../supabase/supabase';
import dayjs from 'dayjs';

const MainPageComp = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('latest');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const ARTICLES_PER_PAGE = 12;

  const fetchArticles = async (page, sortBy) => {
    setLoading(true);
    try {
      let query = supabase
        .from('Articles')
        .select('*')
        .range((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE - 1);

      if (sortBy === 'popular') {
        query = query.order('like', { ascending: false });
      } else {
        query = query.order('updatedAt', { ascending: false });
      }

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
  };

  useEffect(() => {
    setArticles([]);
    setPage(1);
    fetchArticles(1, sortBy);
  }, [sortBy]);

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
    if (page === 1) {
      setArticles([]);
    }
    if (page > 1) {
      fetchArticles(page, sortBy);
    }
  }, [page, sortBy]);

  const handleSortToggle = (sortCriteria) => {
    if (sortBy !== sortCriteria) {
      setSortBy(sortCriteria);
      setPage(1);
    }
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
        {loading && <p>Loading...</p>}
      </Content>
    </div>
  );
};

export default MainPageComp;
