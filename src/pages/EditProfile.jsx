import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabase';

import { v4 as uuidv4 } from 'uuid';
import { name } from 'tar/types';

const getInitialInputs = (user) => ({
  name: user.userName || '',
  nickname: '',
  profilePicture: user.profilePicture || '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  mylogReason: ''
})

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error } = useSelector((state) => state.userProfile);
  const [inputs, setInputs] = useState(() => getInitialInputs(user));

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

  const handleUploadProfile = async (file) => {
    if (!file) return

    const { data: uploadData, error: uploadError } = await supabase
    .storage
    .from('Users')
    .upload(`public/${uuidv4()}`, file)

    if (uploadError) {
      console.log(uploadError)
      return
    }


    const {publicURL, error: urlError} = supabase.storage
    .from('Users')
    .getPublicUrl(uploadData.Key)

    if (urlError) {
      console.log(urlError)
      return
    }
    return publicURL
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputs.newPassword !== inputs.confirmPassword) {
      alert('새 비밀번호가 일치하지 않습니다!');
      return;
    }

    const fileElement = document.getElementById('profilePicture')
    const file = fileElement.files[0]
    const profilePictureUrl = await handleChangeProfile(file)

    if (profilePictureUrl) {
      inputs.profilePicture = profilePictureUrl;
    }

  };
  //supabase 로직을 사용(update 또는 edit)하여 변경사항 가능하게 적용
  const handleChangeProfile = async () => {
    const {data, error} = await supabase
    .from('Users')
    .upsert({id:uuidv4(), name})

    if (error) {
      console.error('업데이트에 문제가 발생했습니다.', error)
    } else {
      console.log('업데이트가 완료 됐습니다!', data)
    }
  }

  // 뒤로가기
  const handleBack = () => {
    navigate(-1); 
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
      navigate('/'); // 탈퇴하기 성공 시, 홈으로 이동
    }
  };

  return (
    <>
      <button onClick={handleBack}>뒤로가기</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="profilePicture">프로필 사진:</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            // value={inputs.profilePicture}
            onChange={(e) => handleUploadProfile(e.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="name">이름:</label>
          <input type="text" id="name" name="name" value={inputs.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="nickname">닉네임:</label>
          <input type="text" id="nickname" name="nickname" value={inputs.nickname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="currentPassword">현재 비밀번호:</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={inputs.currentPassword}
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
            id="reasonToBlog"
            name="mylogReason"
            value={inputs.mylogReason}
            onChange={handleChange} />
        </div>
        {status === 'failed' && <p>{error}</p>}
        <button
          type="submit"
          style={{ color: 'blue' }}
          onClick={handleChangeProfile}
          >          
          변경 완료
        </button>
      </form>
      <button onClick={handleDeleteAccount} style={{ color: 'red' }}>
        탈퇴하기
      </button>
    </>
  );
}

export default EditProfile;
