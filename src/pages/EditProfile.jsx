import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabase';
import { v4 as uuidv4 } from 'uuid';
import useFormInputs from '../hooks/useInput';
import { checkSignIn } from '../redux/slices/authSlice';

const initialState = {
  name: '',
  nickname: '',
  currentPassword: '',
  mylogReason: '',
  profilePicture: ''
};

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { user, status, error } = useSelector((state) => state.userProfile);
  const user = useSelector((state) => state.auth.user);
  const { inputs, setInputs, handleOnChange, handleResetInputs } = useFormInputs(initialState);
  const { name, nickname, currentPassword, mylogReason, profilePicture } = inputs;
  const [picture, setPicture] = useState('');

   useEffect(() => {
    dispatch(checkSignIn());
  }, [dispatch]);

  const handleUploadProfile = async (file) => {
    if (!file) return;

    const { data, error } = await supabase.storage.from('images').upload(`/${uuidv4()}`, file);

    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    const { data: publicURL, error: urlError } = await supabase.storage.from('images').getPublicUrl(data.path);
    if (urlError) {
      console.log(urlError);
      return;
    }
    console.log(publicURL.publicUrl);
    setPicture(publicURL.publicUrl);
    return publicURL;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fileElement = document.getElementById('profilePicture');
    const file = fileElement.files[0];
    const profilePictureUrl = await handleChangeProfile(file);

    if (profilePictureUrl) {
      inputs.profilePicture = profilePictureUrl;
    }
  };
  //supabase 로직을 사용(update 또는 edit)하여 변경사항 가능하게 적용
  const handleChangeProfile = async () => {
    console.log(currentPassword);
    console.log(user.id);
    console.log(picture);
    const { data, error } = await supabase
      .from('Users')
      .update({
        name: name,
        nickname: nickname,
        password: currentPassword,
        reason: mylogReason,
        imageUrl: picture
      })
      .eq('userId', user.id);

    if (error) {
      console.error('업데이트에 문제가 발생했습니다.', error);
    } else {
      console.log('업데이트가 완료 됐습니다!', data);
    }
  };

  // 뒤로가기
  const handleBack = () => {
    navigate(-1);
  };

  // 탈퇴하기
  const handleDeleteAccount = async () => {
    const { error } = await supabase
    .from('Users')
    .delete()
    .eq('userId', user.id);

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
          <input type="text" id="name" name="name" value={name} onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="nickname">닉네임:</label>
          <input type="text" id="nickname" name="nickname" value={nickname} onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="currentPassword">현재 비밀번호:</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={currentPassword}
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label htmlFor="reasonToUseBlog">Mylog 운영 이유:</label>
          <input type="text" id="mylogReason" name="mylogReason" value={mylogReason} onChange={handleOnChange} />
        </div>
        {status === 'failed' && <p>{error}</p>}
        <button type="submit" style={{ color: 'blue' }} onClick={handleChangeProfile}>
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
