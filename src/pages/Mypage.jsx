import React from 'react';
import UserProfile from '../components/UserProfile';

const Mypage = ({user, onEditProfile}) => {
  return (
    <>
     <UserProfile user={user} />
     <button onClick={onEditProfile}>프로필 수정</button>
    </>
  );
};

export default Mypage;
