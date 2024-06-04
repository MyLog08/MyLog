import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ user }) => {
   const posts = [
    '내가 작성한 글',
    '내가 작성한 글',
    '내가 작성한 글',
    '내가 작성한 글',
    '내가 작성한 글',
    '내가 작성한 글',
    '내가 작성한 글',
    '내가 작성한 글',
    '내가 작성한 글',
    '내가 작성한 글',
    
   ]  

  

  const navigate = useNavigate();

  const  {mylogReason} = useSelector((state) => state.userProfile)

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