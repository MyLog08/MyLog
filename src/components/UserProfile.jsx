import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabase';
import { checkSignIn } from '../redux/slices/authSlice';

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
        const { data, error } = await supabase.from('Articles').select('*').eq('userId', user.id);

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
        const { data, error } = await supabase.from('Users').select('*').eq('userId', user.id);

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
    navigate('/editprofile');
  };
 

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      {user ? (
        <>
          <section style={{ width: '30%', padding: '20px', borderRight: '1px solid #ddd' }}>
            <img src={dataUser.length > 0 ? dataUser[0].imageUrl || '' : ''} alt="Profile" style={{ width: '100%' }} />
            <h2>{dataUser.length > 0 ? dataUser[0].name : '사용자 이름 없음'}</h2>
            <h5></h5>
            <button onClick={moveToEdit}>프로필 편집</button>
          </section>
          <section style={{ overflowY: 'scroll', height: '500px', width: '70%', padding: '20px' }}>
            {articles.map((article) => (
              <div key={article.articleId} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd' }}>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
              </div>
            ))}
          </section>
        </>
      ) : (
        <p>사용자 정보를 불러오는 중입니다...</p>
      )}
    </div>
  );
};

export default UserProfile;