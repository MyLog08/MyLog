import React from 'react';

const UserProfile = ({ user }) => {
  const posts = ['작성한 글 1', '작성한 글 2', '작성한 글 3'];

  const handleLogin = () => {
    const clientId = 'Ov23liCvjtEAYP4bgksn';
    const redirectUrl = 'http://localhost:5174/';
    const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;
    window.location.href = githubURL;
  };

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <section style={{ width: '30%', padding: '20px', borderRight: '1px solid #ddd' }}>
        <img src={user.profilePic} alt="Profile" style={{ width: '100%' }} />
        <h2>{user.username}</h2>
        <span>Followers: {user.follower}</span>
        <span>Following: {user.following}</span>
        <button onClick={handleLogin}>깃헙 로그인</button>
        <button>구글 로그인</button>
        <button>네이버 로그인</button>
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
