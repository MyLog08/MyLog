import dayjs from 'dayjs';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArticleAuthor,
  ArticleContent,
  ArticleDate,
  ArticleTitle,
  AuthorBox,
  Content,
  Details,
  Image,
  ImageCard,
  ImageGrid,
  ImageLoadingCard,
  LoadingImage,
  NoResult
} from '../../styles/MainPage/MainStyle';
import supabase from '../../supabase/supabase';
import Header from './Header';

const Search = () => {
  const { searchParam } = useParams();

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [noResults, setNoResults] = useState(false);

  const observer = useRef();
  const navigate = useNavigate();

  const ARTICLES_PER_PAGE = 12;

  const fetchArticles = useCallback(async (page, searchQuery) => {
    if (page === 1) {
      setLoadingMore(true);
    }

    try {
      let query = supabase
        .from('Articles')
        .select('*')
        .order('updatedAt', { ascending: false })
        .range((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE - 1);

      if (searchQuery) {
        query = query.ilike('title', `%${searchQuery}%`);
      }

      const { data, error } = await query;
      if (error) {
        throw error;
      }

      if (page === 1) {
        setArticles([]);
      }

      if (data.length === 0 && page === 1) {
        setNoResults(true);
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
              imageUrl: article.imageUrl,
              userNickname: fetchedNickname
            };
          })
        );

        const filteredArticles = updatedArticles.filter((article) => article !== null);

        setNoResults(false);
        setArticles((prevArticles) => (page === 1 ? filteredArticles : [...prevArticles, ...filteredArticles]));
      }
    } catch (error) {
      console.error('Error Fetching Articles:', error.message);
    } finally {
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles(1, searchQuery);
    setPage(1);
  }, [searchQuery, fetchArticles]);

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
        if (entries[0].isIntersecting && !loadingMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      observer.current.observe(node);
    },
    [loadingMore]
  );

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    navigate(`/${query}`);
  };

  const handleArticleClick = (articleId) => {
    navigate(`/articles/${articleId}`);
  };

  const renderArticle = (article, ref = null) => {
    const truncatedContent = article.content.length > 100 ? `${article.content.slice(0, 100)}...` : article.content;

    return (
      <ImageCard key={article.articleId} ref={ref} onClick={() => handleArticleClick(article.articleId)}>
        <Image src={article.imageUrl || 'src/assets/No_image_available.png'} />
        <Details>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleContent>{truncatedContent}</ArticleContent>
          <ArticleDate>{article.updatedAt}</ArticleDate>
        </Details>
        <AuthorBox>
          <ArticleAuthor>by {article.userNickname}</ArticleAuthor>
        </AuthorBox>
      </ImageCard>
    );
  };

  const renderLoadingCards = () => {
    return Array.from({ length: ARTICLES_PER_PAGE }, (_, index) => (
      <ImageLoadingCard key={index}>
        <LoadingImage></LoadingImage>
      </ImageLoadingCard>
    ));
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Content>
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

export default Search;
