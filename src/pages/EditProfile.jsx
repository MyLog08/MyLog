import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserProfile } from '../redux/slices/userProfileSlice';
import supabase  from '../supabase/supabase'

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error } = useSelector((state) => state.userProfile);
  const [inputs, setInputs] = useState({
    name: user.userName || '',
    nickname: '',
    profilePicture: user.profilePicture || '',
    currentPssword: '',
    newPassword: '',
    confirmPassword: '',
    mylogReason:'',
  });
// 프로필 페이지 이동
  useEffect(() => {
    if (status === 'succeeded') {
      navigate('/profile'); 
    }
  }, [status, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.newPassword !== inputs.confirmPassword) {
      alert('새 비밀번호가 일치하지 않습니다!');
      return;
    }


    dispatch(updateUserProfile({ userId: user.id, updates: inputs }));
  };

  // 뒤로가기
  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  // 탈퇴하기
  const handleDeleteAccount = async () => {
    const { error } = await supabase
      .from('Users') 
      .delete()
      .eq('id', user.id); 

    if (error) {
      alert('계정 삭제 중 오류가 발생했습니다: ' + error.message);
    } else {
      alert('계정이 성공적으로 삭제되었습니다.');
      navigate('/'); // 홈 페이지로 이동
    }
  };

  return (
    <>
      <button onClick={handleBack}>뒤로가기</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">이름:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nickname">닉네임:</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={inputs.nickname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="profilePicture">프로필 사진:</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            value={inputs.profilePicture}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="currentPassword">현재 비밀번호:</label>
          <input
            type="password"
            id="currentPassword"
            name="profilePicture"
            value={inputs.currentPssword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="newPassword">새 비밀번호:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={inputs.newPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">새 비밀번호 확인:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={inputs.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div>
        <label htmlFor="reasonToUseBlog">Mylog 운영 이유:</label>
          <input
            type="text"
            id='reasonToBlog'
            name='mylogReason'
            value={inputs.mylogReason}
            onChange={handleChange}/>
            
        </div>
        {status === 'failed' && <p>{error}</p>}
        <button type="submit" style={{color:'blue'}}>변경 완료</button>
      </form>
      <button onClick={handleDeleteAccount} style={{color:'red'}}>탈퇴하기</button>
    </>
  );
}

export default EditProfile;
