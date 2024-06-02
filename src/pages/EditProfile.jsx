import React, { useState } from 'react';

const EditProfile = ({ user, onUpdateProfile }) => {
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);
  const [userName, setUserName] = useState(user.userName);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSumit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  };

  const updateUser = {
    ...user,
    profilePicture,
    userName
  };
  onUpdateProfile(updateUser);

  return (
    <>
      <form onSubmit={handleSumit}>
        <section>
          <div>
            <label> 프로필 사진 url:</label>
            <input
            type="text"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)} />
          </div>
          <div>
            <label>이름 (닉네임)</label>
            <input
             type="text"
             value={userName}
             onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div>
            <label>새 비밀번호</label>
            <input
             type="password"
             value={newPassword}
             onChange={(e) => setNewPassword(e.target.value)} />
          </div>
          <div>
            <label>새 비밀번호 확인</label>
            <input
             type="password"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type='submit'>저장</button>
        </section>
      </form>
    </>
  );
};

export default EditProfile;
