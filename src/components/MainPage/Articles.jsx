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
} from '../../styles/MainPage/MainStyle';
import Header from './Header';
import supabase from '../../supabase/supabase';
import dayjs from 'dayjs';
import LoadingBar from '../../components/Common/LoadingBar';

const Articles = ({ mode }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const observer = useRef();

  const ARTICLES_PER_PAGE = 12;

  const fetchArticles = useCallback(
    async (page, searchQuery = '') => {
      setLoading(true);
      try {
        let query = supabase
          .from('Articles')
          .select('*')
          .order(mode === 'popular' ? 'like' : 'updatedAt', { ascending: false })
          .range((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE - 1);

        if (searchQuery) {
          query = query.ilike('title', `%${searchQuery}%`);
        }

        const { data, error } = await query;
        if (error) {
          throw error;
        }

        const updatedArticles = await Promise.all(
          data.map(async (article) => {
            const { data: userData, error: userError } = await supabase
              .from('Users')
              .select('nickname')
              .eq('userId', article.userId)
              .single();
            if (userError) {
              console.log(userError);
              return null;
            }
            const fetchedNickname = userData.nickname;

            return {
              ...article,
              updatedAt: dayjs(article.updatedAt).format('YYYY년 MM월 DD일'),
              imageUrlArray: JSON.parse(article.imageUrl),
              userNickname: fetchedNickname
            };
          })
        );

        const filteredArticles = updatedArticles.filter((article) => article !== null);

        setArticles((prevArticles) => (page === 1 ? filteredArticles : [...prevArticles, ...filteredArticles]));
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

  useEffect(() => {
    if (page > 1 && !isSearching) {
      fetchArticles(page);
    }
  }, [page, fetchArticles, isSearching]);

  useEffect(() => {
    if (isSearching) {
      fetchArticles(1, searchQuery);
    } else {
      setArticles([]);
      setPage(1);
      fetchArticles(1);
    }
  }, [searchQuery, isSearching, fetchArticles]);

  const lastArticleElementRef = useCallback(
    (node) => {
      if (loading || isSearching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, isSearching]
  );

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value;
      setSearchQuery(query);
      setIsSearching(!!query);
      setPage(1);
      fetchArticles(1, query);
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Content>
        <MainSort>
          <NavLink to="/newest" isactive={() => mode === 'newest'}>
            <SortButton selected={mode === 'newest'}>Newest</SortButton>
          </NavLink>
          <NavLink to="/popular" isactive={() => mode === 'popular'}>
            <SortButton selected={mode === 'popular'}>Popular</SortButton>
          </NavLink>
        </MainSort>
        <ImageGrid>
          {articles.map((article, index) => {
            const truncatedContent =
              article.content.length > 100 ? `${article.content.slice(0, 100)}...` : article.content;
            if (index === articles.length - 1 && !isSearching) {
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
