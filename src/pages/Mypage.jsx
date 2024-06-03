import React from 'react';
import UserProfile from '../components/UserProfile';
import { useNavigate } from 'react-router-dom';

const Mypage = ({ user, onEditProfile }) => {

  const navigate = useNavigate()

  const onEditProfileClick = () => {
    onEditProfile();
    navigate('/editprofile')
  }

  return (
    <>
      <UserProfile user={user} />
      {/* 상세 페이지 들어가는 버튼 */}
      <button onClick={onEditProfileClick}>프로필 수정</button>
    </>
  );
};

export default Mypage;
