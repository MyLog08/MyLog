import { useEffect, useState, useRef, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
  ImageLoadingCard,
  LoadingImage,
  MainSort,
  NoResult,
  SortButton
} from '../../styles/MainPage/MainStyle';
import Header from './Header';
import supabase from '../../supabase/supabase';
import dayjs from 'dayjs';

const Articles = ({ mode }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);
  const observer = useRef();
  const navigate = useNavigate();

  const ARTICLES_PER_PAGE = 12;

  const fetchArticles = useCallback(
    async (page, searchQuery = '') => {
      if (page === 1) {
        setLoading(true);
        setLoadingMore(false);
      } else {
        setLoadingMore(true);
      }

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

        if (page === 1 && data.length === 0) {
          setNoResults(true);
          setArticles([]);
        } else {
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

          if (filteredArticles.length === 0 && page === 1) {
            setNoResults(true);
          } else {
            setNoResults(false);
          }

          setArticles((prevArticles) => (page === 1 ? filteredArticles : [...prevArticles, ...filteredArticles]));
        }
      } catch (error) {
        console.error('Error Fetching Articles:', error.message);
      } finally {
        if (page === 1) {
          setLoading(false);
        } else {
          setLoadingMore(false);
        }
      }
    },
    [mode]
  );

  useEffect(() => {
    fetchArticles(1, searchQuery);
    setPage(1);
  }, [mode, searchQuery, fetchArticles]);

  useEffect(() => {
    if (page > 1) {
      fetchArticles(page, searchQuery);
    }
  }, [page, fetchArticles, searchQuery]);

  const lastArticleElementRef = useCallback(
    (node) => {
      if (!node) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !loading && !loadingMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      observer.current.observe(node);
    },
    [loading, loadingMore]
  );

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value;
      setSearchQuery(query);
      setNoResults(false);
      setArticles([]);
      setLoadingMore(false);
      setPage(1);
    }
  };

  const handleArticleClick = (articleId) => {
    navigate(`/articles/${articleId}`);
  };

  const renderArticle = (article, ref = null) => {
    const truncatedContent = article.content.length > 100 ? `${article.content.slice(0, 100)}...` : article.content;

    return (
      <ImageCard key={article.articleId} ref={ref} onClick={() => handleArticleClick(article.articleId)}>
        <Image
          src={
            Array.isArray(article.imageUrlArray) && article.imageUrlArray.length > 0
              ? article.imageUrlArray[0]
              : 'src/assets/PlaceholderImage.png'
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
  };

  const renderLoadingCards = () => {
    return Array.from({ length: ARTICLES_PER_PAGE }, (_, index) => (
      <ImageLoadingCard key={index}>
        <LoadingImage>Loading...</LoadingImage>
      </ImageLoadingCard>
    ));
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Content>
        <MainSort>
          <NavLink to="/newest">
            <SortButton selected={mode === 'newest'}>Newest</SortButton>
          </NavLink>
          <NavLink to="/popular">
            <SortButton selected={mode === 'popular'}>Popular</SortButton>
          </NavLink>
        </MainSort>
        {noResults && <NoResult>Article not found.</NoResult>}
        {!noResults && (
          <ImageGrid>
            {articles.map((article, index) => {
              if (index === articles.length - 1) {
                return renderArticle(article, lastArticleElementRef);
              } else {
                return renderArticle(article);
              }
            })}
            {loadingMore && page === 1 && renderLoadingCards()}
          </ImageGrid>
        )}
      </Content>
    </div>
  );
};

export default Articles;
