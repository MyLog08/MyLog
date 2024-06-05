import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabase';
import { v4 as uuidv4 } from 'uuid';
import useFormInputs from '../hooks/useInput';
import { checkSignIn } from '../redux/slices/authSlice';
import { logout } from '../redux/slices/authSlice';
import { validatePasswordFormat, validatePasswordMatch } from '../utils/validators';

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
  const user = useSelector((state) => state.auth.user);
  const { inputs, handleOnChange} = useFormInputs(initialState);
  const { name, nickname, currentPassword, mylogReason, profilePicture } = inputs;
  const [picture, setPicture] = useState('');
  const [errors, setErrors] = useState({});
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
    const profilePictureUrl = await handleUploadProfile(file);

    if (profilePictureUrl) {
      inputs.profilePicture = profilePictureUrl.publicUrl;
    }
  };
  const handleChangeProfile = async () => {
    const newErrors = {};

    try {
      if (!name || !currentPassword) {
        newErrors.general = '모든 필드를 입력해주세요.';
        throw new Error('모든 필드를 입력해주세요.');
      }
      if (!validatePasswordFormat(currentPassword)) {
        newErrors.password = '비밀번호는 영문 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다.';
        throw new Error('비밀번호는 영문 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다.');
      }

      if (!validatePasswordMatch(currentPassword, data.password)) {
        newErrors.unPassword = '비밀번호가 일치하지 않습니다.';
        throw new Error('비밀번호 불일치');
      }

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
        return alert('업데이트가 완료 됐습니다!', data);
      }
    } catch (err) {
      setErrors(newErrors);
      console.log(err);
    }
  };

  // 뒤로가기
  const handleBack = () => {
    navigate(-1);
  };

  // 탈퇴하기
  const handleDeleteAccount = async () => {
    const { error } = await supabase.from('Users').delete().eq('userId', user.id);
    if (error) {
      alert('계정 삭제 중 오류가 발생했습니다' + error.message);
    } else {
      const { error } = await supabase.auth.signOut();
      if (error) {
        alert('로그아웃 중 오류가 발생했습니다');
      } else {
        dispatch(logout());
        alert('계정이 성공적으로 삭제되었습니다.');
        navigate('/');
      }
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
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
          {errors.unPassword && <div style={{ color: 'red' }}>{errors.unPassword}</div>}
        </div>

        <div>
          <label htmlFor="reasonToUseBlog">Mylog 운영 이유:</label>
          <input type="text" id="mylogReason" name="mylogReason" value={mylogReason} onChange={handleOnChange} />
        </div>
        {errors.general && <div style={{ color: 'red' }}>{errors.general}</div>}
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