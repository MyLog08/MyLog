import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabase';
import { checkSignIn } from '../redux/slices/authSlice';
import {
  ArticleContainer,
  ArticlesSection,
  Logo,
  ProfileButton,
  ProfileImage,
  ProfileSection,
  ProfileWrapper
} from '../styles/ProfilePage/ProfilePageStyle';
import LoadingBar from './Common/LoadingBar';
import myLogoImage from '../../src/assets/MyLogLogo_blue_bold.png';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    dispatch(checkSignIn());
  }, [dispatch]);

  useEffect(() => {
    const fetchArticles = async () => {
      if (!user?.id) return;

      try {
        const { data, error } = await supabase
        .from('Articles')
        .select('*')
        .eq('userId', user.id);

        if (error) {
          console.log('Error:', error);
        } else {
          setArticles(() => data);
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchArticles();
  }, [user]);

  useEffect(() => {
    const textId = async () => {
      if (!user?.id) return;
      try {
        const { data, error } = await supabase
        .from('Users')
        .select('*')
        .eq('userId', user.id)
        
      

        if (error) {
          console.log('Error:', error);
        } else {
          setDataUser(() => data);
        }
      } catch (err) {
        console.error('Error:', err.message);
      }
    };
    textId();
  }, [user]);

  const moveToEdit = () => {
    navigate('/profile/edit');
  };

  const moveToHome = () => {
    navigate('/');
  };

  const moveToPost = (articleId) => {
    navigate(`/articles/${articleId}`);
  };

  return (
    <ProfileWrapper style={{ display: 'flex', padding: '20px' }}>
      {user ? (
        <>
          <ProfileSection>
            <Logo src={myLogoImage} alt="로고" onClick={moveToHome} />
            <ProfileImage src={dataUser.length > 0 ? dataUser[0].imageUrl || '' : ''} alt="Profile" />
            <h2>{dataUser.length > 0 ? dataUser[0].name : 'No Name'}</h2>
            <h5>Mylog 운영 이유 : </h5>
            <ProfileButton onClick={moveToEdit}>프로필 편집</ProfileButton>
          </ProfileSection>
          <ArticlesSection>
            {articles.map((article) => (
              <ArticleContainer key={article.articleId} onClick={() => moveToPost(article.articleId)}>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
              </ArticleContainer>
            ))}
          </ArticlesSection>
        </>
      ) : (
        <LoadingBar />
      )}
    </ProfileWrapper>
  );
};

export default UserProfile;
