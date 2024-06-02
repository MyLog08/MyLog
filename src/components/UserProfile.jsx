import React from 'react';


const UserProfile = ({ user }) => {
  const posts = [
    '작성한 글 ',
    '작성한 글 ',
    '작성한 글 ',
    '작성한 글 ',
    '작성한 글 ',
    '작성한 글 ',
    '작성한 글 ',
    '작성한 글 ',
    '작성한 글 ',
    '작성한 글 ',
    '작성한 글 ',
    '작성한 글 ',
    '작성한 글 ',
    '작성한 글 ',
  ];

 

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <section style={{ width: '30%', padding: '20px', borderRight: '1px solid #ddd' }}>
        <img src={user.profilePic} alt="Profile" style={{ width: '100%' }} />
        <h2>{user.username}</h2>
        <span style={{display:'flex'}}>Followers : {user.follower}</span>
        <span>Following : {user.following}</span>
        <p>'Mylog 운영 이유'</p>
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
