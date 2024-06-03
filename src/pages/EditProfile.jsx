import React, { useState } from 'react';
import supabase from '../supabase/supabase';
import { useNavigate } from 'react-router-dom';

function EditProfile({ user, onUpdateProfile }) {
  const [inputs, setInputs] = useState({
    name: user.userName || '',
    password: '',
    nickname: '',
    profilePicture: user.profilePicture || '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [nicknames, setNicknames] = useState(['sampleUser', 'testUser']); // 예시 중복 닉네임 리스트
  const [profilePictureFile, setProfilePictureFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setProfilePictureFile(e.target.files[0]);
  };

  const validateForm = () => {
    let newErrors = {};
    // 이름 2글자 이상
    if (inputs.name.length < 2) {
      newErrors.name = '이름은 2글자 이상이어야 합니다.';
    }

    // 비밀번호 검사 (영문 대문자, 특수문자 포함 8자리 이상)
    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(inputs.password)) {
      newErrors.password = '비밀번호는 영문 대문자, 특수문자 포함 8자리 이상이어야 합니다.';
    }

    // 닉네임 중복 검사
    if (nicknames.includes(inputs.nickname)) {
      newErrors.nickname = '해당 닉네임은 이미 사용 중입니다.';
    }

    // 새 비밀번호와 새 비밀번호 확인이 일치하는지 검사
    if (inputs.newPassword !== inputs.confirmPassword) {
      newErrors.confirmPassword = '새 비밀번호가 일치하지 않습니다.';
    }

    // 모든 입력값이 채워져 있는지 검사
    Object.keys(inputs).forEach((key) => {
      if (!inputs[key] && key !== 'newPassword' && key !== 'confirmPassword') {
        newErrors[key] = `${key}은(는) 필수 입력값입니다.`;
      }
    });

    setErrors(newErrors);

    // 에러가 없으면 true 반환
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('폼 제출 성공');

      let profilePictureUrl = inputs.profilePicture;
      if (profilePictureFile) {
        const { data, error: uploadError } = await supabase.storage
          .from('profile-pictures')
          .upload(`public/${profilePictureFile.name}`, profilePictureFile);

        if (uploadError) {
          console.error('프로필 사진 업로드 실패', uploadError);
          return;
        }

        profilePictureUrl = data.Key; // 업로드된 이미지의 URL
      }

      const { error } = await supabase.from('Users').update({
        profilePicture: profilePictureUrl,
        userName: inputs.name,
        newPassword: inputs.newPassword
      });

      if (error) {
        console.error('프로필 업데이트 실패', error);
      } else {
        // 업데이트 성공시 로직
        const updatedUser = {
          ...user,
          userName: inputs.name,
          profilePicture: profilePictureUrl
        };
        onUpdateProfile(updatedUser);
      }
    } else {
      console.log('유효성 검사 실패');
    }
  };
  const handleDeactivateProfile = async () => {
    const { error } = await supabase
    .from('Users')
    .delete()
    .match({ id: user.id });

    if (error) {
      console.error('계정 삭제 실패', error);
    } else {
      alert('계정이 성공적으로 삭제되었습니다.');
      navigate('/login'); 
    }
  };
  // 뒤로 가기 버튼
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/profile');
  };

  return (
    <div>
      <button onClick={goBack} style={{ marginBottom: '20px' }}>
        뒤로 가기
      </button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>프로필 사진: </label>
          {inputs.profilePicture ? (
            <img
              src={inputs.profilePicture}
              alt="프로필 사진"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          ) : (
            <img
              src="/default-profile.png"
              alt="기본 프로필 사진"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          )}
          <input name="profilePicture" type="file" onChange={handleFileChange} />
          {errors.profilePicture && <span style={{ color: 'red' }}>{errors.profilePicture}</span>}
        </div>
        <div>
          <label>이름: </label>
          <input name="name" value={inputs.name} onChange={handleChange} />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div>
          <label>비밀번호: </label>
          <input name="password" type="password" value={inputs.password} onChange={handleChange} />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>
        <div>
          <label>닉네임: </label>
          <input name="nickname" value={inputs.nickname} onChange={handleChange} />
          {errors.nickname && <span style={{ color: 'red' }}>{errors.nickname}</span>}
        </div>
        <div>
          <label>새 비밀번호: </label>
          <input name="newPassword" type="password" value={inputs.newPassword} onChange={handleChange} />
        </div>
        <div>
          <label>새 비밀번호 확인: </label>
          <input name="confirmPassword" type="password" value={inputs.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
        </div>
        <div>
          <label>Mylog 운영 이유</label>
          <input type="text" />
        </div>
        <button type="submit">완료</button>
        <button onClick={handleDeactivateProfile} style={{ marginTop: '20px', backgroundColor: 'red', color: 'white' }}>
          탈퇴하기
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
