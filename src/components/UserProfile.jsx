import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabase';

const UserProfile = ({ user }) => {
  console.log(user);
  const [posts, setPosts] = useState([]);
    useEffect(() => {
    if (user && user.id)
       fetchPosts(user.id);
  }, [user]);

  const fetchPosts = async (userId) => {
    console.log(userId);
    const { data, error } = await supabase
      .from('Articles')
      .select(`articleId, title,content,imageUrl,userId,Users(userId)`)
      .eq('userId', userId);
    console.log(data);

    if (error) {
      console.log('연결할 수 없습니다', error);
    } else {
      setPosts(data);
    }
  };

  const navigate = useNavigate();

  const { mylogReason } = useSelector((state) => state.userProfile);

  const goToEditProfile = () => {
    navigate('/editprofile');
  };

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      {user ? (
        <>
          <section style={{ width: '30%', padding: '20px', borderRight: '1px solid #ddd' }}>
            <img src={user.profilePic} alt="Profile" style={{ width: '100%' }} />
            <h2>{user.username}</h2>
            <span style={{ display: 'flex' }}>Followers : {user.follower}</span>
            <span>Following : {user.following}</span>
            <h5>`'Mylog 운영 이유: '${mylogReason || '아직 계획이 없습니다'}` </h5>
            <button onClick={goToEditProfile}>프로필 편집</button>
          </section>
          <section style={{ overflowY: 'scroll', height: '500px', width: '70%', padding: '20px' }}>
            {posts.map((post, index) => (
              <div key={index} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd' }}>
                <span>{post.title}</span> {/* 수정됨: post.title.content에서 post.title로 변경 */}
              </div>
            ))}
          </section>
        </>
      ) : (
        <p></p>
        // 사용자 정보를 불러오는 중입니다...
      )}
    </div>
  );
};

export default UserProfile;
