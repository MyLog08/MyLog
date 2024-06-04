import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabase';

const UserProfile = ({ user }) => {
  const [posts, setPosts] = useState([])
  //마이페이지에 접근한 유저의 ID 를 가져온다.
  //ID 를 이용해 Article 테이블에 있는 userId 와 일치하는 데이터들을 찾아서 담는다.
  //이를 보여준다.
  useEffect(() => {
    fetchPosts('01b7a810-c59c-4b70-b210-75f7d74c6deb')
  }, [user.id])

  const fetchPosts = async (userId) => {
   console.log(userId)
    const {data, error} = await supabase
   .from('Articles')
  //  .select(`articleId, title,content,imageUrl,userId,Users(userId)`)
  .select('*')
   .eq('userId', userId)
   console.log(data)

   if (error) {
    console.log('연결할 수 없습니다', error)
   } else {
    setPosts(data)    
   }
  };

  const navigate = useNavigate();

  const { mylogReason } = useSelector((state) => state.userProfile);

  const goToEditProfile = () => {
    navigate('/editprofile');
  };

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
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
            <span>{post}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default UserProfile;
