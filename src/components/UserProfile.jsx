import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabase';
import { checkSignIn } from '../redux/slices/authSlice';

/**
 * 1. 리덕스의 useDispatch 를 사용해서 유저에 대한 정보를 로드한다. 이때 useEffect 와 함께 사용하고
 * 2. checkSign() 요거 쓰면 댐
 * 3. 리덕스의 useSeletor 를 사용해서 유저의 정보를 가져온다.
 * 4. 가져온 유저의 정보를 변수 user 에 저장한다.
 * 5. user 변수를 통해 sup
 * 
 * 1. userId 를 통해 데이터베이스에 접근(데이터베이스에 접근하는 함수)해서 article 들을 가져온다.abase 에 접근해 해당 유저의 모든 정보를 가져온다.
 * 2. 이 정보를 화면에 그려준다.
* 
6. 이 정보를 화면에 그려준다.

  // auth/login
// 로그인 정보를 받아와야 된다.
 */
const UserProfile = () => {

  const user = useSelector((state) => state.auth.user);
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch(); // 우리는 쓰기/삭제/업데이트 를 할때 사용해요. 저희는 함수동작을 위해 사용하고있어요.
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };
    textId();
  }, [user]);

  const moveToEdit = () => {
    navigate('/editprofile');
  };
  console.log('data =', dataUser);
  console.log('user =', user);

  if (loading) {
    return <p>로딩중</p>;
  }

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      {user ? (
        <>
          <section style={{ width: '30%', padding: '20px', borderRight: '1px solid #ddd' }}>
            <img src={''} alt="Profile" style={{ width: '100%' }} />
            <h2>{dataUser.name}</h2>
            <h5>`'Mylog 운영 이유: '아직 계획이 없습니다' </h5>
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

// /* <section style={{ overflowY: 'scroll', height: '500px', width: '70%', padding: '20px' }}>
//   {posts.map((post, index) => (
//     <div key={index} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd' }}>
//       <span>{post.title}</span> {/* 수정됨: post.title.content에서 post.title로 변경 */}
//     </div>
//   ))}
// </section>

// const [posts, setPosts] = useState([]);
//   useEffect(() => {
//   if (user && user.id)
//      fetchPosts(user.id);
// }, [user]);

// const fetchPosts = async (userId) => {
//   console.log(userId);
//   const { data, error } = await supabase
//     .from('Articles')
//     .select(`articleId, title,content,imageUrl,userId,Users(userId)`)
//     .eq('userId', userId);
//   console.log(data);

//   if (error) {
//     console.log('연결할 수 없습니다', error);
//   } else {
//     setPosts(data);
//   }
// };

// const navigate = useNavigate();

// const { mylogReason } = useSelector((state) => state.userProfile);

// const goToEditProfile = () => {
//   navigate('/editprofile');
// };
