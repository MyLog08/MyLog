import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useFormInputs from '../../hooks/useInput';
import { checkSignIn, logout } from '../../redux/slices/authSlice';
import { StyledButton } from '../../styles/Common/ButtonStyle';
import {
  EditButtons,
  EditErrorMessage,
  EditFormGroup,
  EditFormSection,
  EditImageFormSection,
  EditInput,
  EditPhotoGroup,
  EditPhotoLabel,
  PreviewImgContainer,
  ProfileEditFormWrapper,
  ProfileImageGrid,
  RedStyledButton
} from '../../styles/ProfilePage/ProfileEditPageStyle';
import supabase from '../../supabase/supabase';
import { validatePasswordFormat, validatePasswordMatch } from '../../utils/validators';

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
  const { inputs, handleOnChange } = useFormInputs(initialState);
  const { name, nickname, currentPassword, mylogReason } = inputs;
  const [picture, setPicture] = useState('');
  const [errors, setErrors] = useState({});
  const [isSocialLogin, setIsSocialLogin] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  useEffect(() => {
    dispatch(checkSignIn());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      if (user.app_metadata.provider === 'email') {
        setIsSocialLogin(false);
      } else {
        setIsSocialLogin(true);
      }
    }
  }, [user]);

  const handleImageChange = async (file) => {
    if (!file) return;

    const { data, error } = await supabase.storage.from('images').upload(`/${uuidv4()}`, file);

    if (error) {
      console.log(error);
      return;
    }
    // 업로드 이미지url 가져오기
    const { data: imageUploadData, error: imageUploadError } = await supabase.storage
      .from('images')
      .getPublicUrl(data.path);

    if (imageUploadError) {
      console.log(imageUploadError);
      return;
    }
    setPreviewUrl(URL.createObjectURL(file));
    setPicture(imageUploadData.publicUrl);
    return imageUploadData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fileElement = document.getElementById('profilePicture');
    const file = fileElement.files[0];
    const profilePictureUrl = await handleImageChange(file);

    if (profilePictureUrl) {
      inputs.profilePicture = profilePictureUrl.publicUrl;
    }
  };

  const handleChangeProfile = async () => {
    const newErrors = {};

    try {
      if (!name) {
        newErrors.general = '모든 필드를 입력해주세요.';
        throw new Error('모든 필드를 입력해주세요.');
      }

      const { data: userData, error: userError } = await supabase
        .from('Users')
        .select('password, social')
        .eq('userId', user.id)
        .single();

      if (userError) {
        newErrors.general = '사용자의 정보를 가져오는 중 오류가 발생했습니다.';
        throw new Error('사용자 정보를 가져오는 중 오류가 발생했습니다.');
      }

      if (!userData.social) {
        if (!validatePasswordFormat(currentPassword)) {
          newErrors.password = '비밀번호는 영문 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다.';
          throw new Error('비밀번호는 영문 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다.');
        }

        if (!validatePasswordMatch(currentPassword, userData.password)) {
          newErrors.unPassword = '비밀번호가 일치하지 않습니다';
          throw new Error('비밀번호 불일치');
        }
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
      console.log(data);

      if (error) {
        console.error('업데이트에 문제가 발생했습니다.', error);
      } else {
        return alert('업데이트가 완료 됐습니다!', data);
      }
      navigate('/profile');
    } catch (err) {
      setErrors(newErrors);
      console.log(err);
    }
  };
  const handleBack = () => {
    navigate(-1);
  };

  const handleDeleteAccount = async () => {
    if (confirm('정말로 계정을 삭제하시겠습니까?')) {
      const { error } = await supabase.from('Users').delete().eq('userId', user.id);

      if (error) {
        alert('계정 삭제 중 오류가 발생했습니다: ');
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
    } else {
      alert('계정 삭제가 취소되었습니다.');
    }
  };

  return (
    <ProfileEditFormWrapper>
      <StyledButton onClick={handleBack}>◀️ Profile</StyledButton>
      <EditImageFormSection onSubmit={handleSubmit}>
        <EditPhotoGroup>
          <EditFormGroup>
            <ProfileImageGrid>
              <PreviewImgContainer>
                {previewUrl ? <img src={previewUrl} alt="미리보기 이미지" /> : <span>Please Select New Image</span>}
              </PreviewImgContainer>
            </ProfileImageGrid>
            <EditPhotoLabel>
              <label htmlFor="profilePicture">Click to Upload New Image</label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                onChange={(e) => handleImageChange(e.target.files[0])}
              />
            </EditPhotoLabel>
          </EditFormGroup>
        </EditPhotoGroup>
      </EditImageFormSection>
      <EditFormSection>
        <EditFormGroup>
          <EditInput type="text" id="name" name="name" value={name} onChange={handleOnChange} placeholder="Name :" />
        </EditFormGroup>
        <EditFormGroup>
          <EditInput
            type="text"
            id="nickname"
            name="nickname"
            value={nickname}
            onChange={handleOnChange}
            placeholder="Nickname :"
          />
        </EditFormGroup>

        {!isSocialLogin && (
          <EditFormGroup>
            <EditInput
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={currentPassword}
              onChange={handleOnChange}
              placeholder="Password :"
            />
            <EditErrorMessage>
              {errors.password}
              {errors.unPassword}
            </EditErrorMessage>
          </EditFormGroup>
        )}

        <EditFormGroup>
          <EditInput
            type="text"
            id="mylogReason"
            name="mylogReason"
            value={mylogReason}
            onChange={handleOnChange}
            placeholder="Mylog is for :"
          />
        </EditFormGroup>
        <EditErrorMessage>{errors.general}</EditErrorMessage>
      </EditFormSection>
      <EditButtons>
        <StyledButton type="submit" onClick={handleChangeProfile}>
          Edit
        </StyledButton>
      </EditButtons>
      <EditButtons>
        <RedStyledButton onClick={handleDeleteAccount}>Quit</RedStyledButton>
      </EditButtons>
    </ProfileEditFormWrapper>
  );
}

export default EditProfile;
