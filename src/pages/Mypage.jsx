import React from 'react';
import UserProfile from '../components/UserProfile';

const Mypage = ({ user }) => {
  return (
    <>
      <UserProfile user={user} />
    </>
  );
};

export default Mypage;
