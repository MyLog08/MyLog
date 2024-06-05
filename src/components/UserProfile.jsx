import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabase';
import { checkSignIn } from '../redux/slices/authSlice';

const UserProfile = () => {

  const user = useSelector((state) => state.auth.user);
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch(); // 우리는 쓰기/삭제/업데이트 를 할때 사용해요. 저희는 함수동작을 위해 사용하고있어요.
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
          console.log(error);
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
          console.log(error);
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
  console.log('data =', dataUser);
  console.log('user =', user);


  return (
      <div style={{ display: 'flex', padding: '20px' }}>
        {user ? (
          <>
            <section style={{ width: '30%', padding: '20px', borderRight: '1px solid #ddd' }}>
              <img src={''} alt="Profile" style={{ width: '100%' }} />
              <span style={{ display: 'flex' }}>Followers : {'1'}</span>
              <span>Following : {'1'}</span>
              <h5>`'Mylog 운영 이유: '아직 계획이 없습니다' </h5>
              <button onClick={moveToEdit}>프로필 편집</button>
            </section>
            <section style={{ overflowY: 'scroll', height: '500px', width: '70%', padding: '20px' }}>
              {articles.map((article) => (
                <div key={article.articleId}  style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd' }}>
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


