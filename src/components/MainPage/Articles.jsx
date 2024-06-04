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
  ImageLoadingCard,
  LoadingImage,
  MainSort,
  NoResult,
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
  const [noResults, setNoResults] = useState(false);
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

        if (page === 1 && data.length === 0) {
          setNoResults(true);
          setArticles([]);
        } else {
          setNoResults(false);
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
          }

          setArticles((prevArticles) => (page === 1 ? filteredArticles : [...prevArticles, ...filteredArticles]));
        }
      } catch (error) {
        console.error('Error Fetching Articles:', error.message);
      } finally {
        setLoading(false);
      }
    },
    [mode]
  );

  useEffect(() => {
    fetchArticles(1, searchQuery);
    setPage(1); // 페이지 초기화는 데이터 fetch 이후에 실행
  }, [mode, searchQuery, fetchArticles]);

  useEffect(() => {
    if (page > 1) {
      fetchArticles(page, searchQuery);
    }
  }, [page, fetchArticles, searchQuery]);

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

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value;
      setSearchQuery(query);
      setNoResults(false); // 검색 시작 시 noResults 상태 초기화
    }
  };

  const renderArticle = (article, ref = null) => {
    const truncatedContent = article.content.length > 100 ? `${article.content.slice(0, 100)}...` : article.content;

    return (
      <ImageCard key={article.articleId} ref={ref}>
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
        <LoadingImage />
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
        <ImageGrid>
          {loading
            ? renderLoadingCards()
            : articles.map((article, index) => {
                if (index === articles.length - 1) {
                  return renderArticle(article, lastArticleElementRef);
                } else {
                  return renderArticle(article);
                }
              })}
        </ImageGrid>
        {loading && <LoadingBar />}
      </Content>
    </div>
  );
};

export default Articles;
