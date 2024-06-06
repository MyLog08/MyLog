import dayjs from 'dayjs';
import { useState } from 'react';
import { handleAuthSignUp, handleUserRegisterInsert } from '../../api/authApi';
import useFormInputs from '../../hooks/useInput';
import {
  validateCheckDuplicate,
  validateEmailFormat,
  validateNameLength,
  validatePasswordFormat,
  validatePasswordMatch
} from '../../utils/validators';
import Button from '../Common/Button';
import Input from '../Common/Input';

import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import {
  ErrorText,
  RegisterButton,
  RegisterInputWrapper,
  RegisterPageTitle
} from '../../styles/Register/RegisterStyle';

function RegisterForm() {
  const initialState = {
    name: '',
    email: '',
    nickname: '',
    birth: '',
    password: '',
    confirm: ''
  };

  const { inputs, handleOnChange, handleResetInputs } = useFormInputs(initialState);

  const [errors, setErrors] = useState({});

  const { name, email, nickname, birth, password, confirm } = inputs;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const validateForm = async () => {
    const newErrors = {};

    if (!validateNameLength(name)) {
      newErrors.name = '이름은 2글자 이상이어야 합니다.';
    }

    if (!validateEmailFormat(email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    }

    try {
      if (await validateCheckDuplicate('email', email)) {
        newErrors.email = '이미 사용중인 이메일 입니다.';
      }
    } catch (err) {
      newErrors.email = '이미 사용중인 이메일 입니다.';
    }

    try {
      if (await validateCheckDuplicate('nickname', nickname)) {
        newErrors.nickname = '이미 사용중인 닉네임 입니다.';
      }
    } catch (err) {
      newErrors.nickname = '이미 사용중인 닉네임 입니다.';
    }

    if (!validatePasswordFormat(password)) {
      newErrors.password = '비밀번호는 영문 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다.';
    }

    if (!validatePasswordMatch(password, confirm)) {
      newErrors.confirm = '비밀번호가 일치하지 않습니다.';
    }

    if (!name || !email || !nickname || !birth || !password || !confirm) {
      newErrors.general = '모든 필드를 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const validate = await validateForm();

    if (!validate) {
      return;
    }

    const user = await handleAuthSignUp(email, password);

    try {
      const date = dayjs().format('YYYY-MM-DD hh:mm:ss');
      await handleUserRegisterInsert({
        userId: user.user.id,
        name,
        email,
        nickname,
        birth,
        password,
        createdAt: date,
        updatedAt: date
      });

      dispatch(login({ user: user.user }));

      alert('회원가입 완료');
      handleResetInputs();
      setErrors({});
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('회원가입 중 오류 발생');
    }
  };

  return (
    <div>
      <RegisterPageTitle>회원가입</RegisterPageTitle>
      <form onSubmit={handleOnSubmit}>
        <RegisterInputWrapper>
          <Input placeholder="이름" value={name} name="name" id="name" onChange={handleOnChange} />
          <ErrorText>{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}</ErrorText>
        </RegisterInputWrapper>

        <RegisterInputWrapper>
          <Input placeholder="이메일" value={email} name="email" id="email" onChange={handleOnChange} />
          <ErrorText>{errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}</ErrorText>
        </RegisterInputWrapper>

        <RegisterInputWrapper>
          <Input placeholder="닉네임" value={nickname} name="nickname" id="nickname" onChange={handleOnChange} />
          <ErrorText>{errors.nickname && <div style={{ color: 'red' }}>{errors.nickname}</div>}</ErrorText>
        </RegisterInputWrapper>

        <RegisterInputWrapper>
          <Input placeholder="생년월일" value={birth} name="birth" id="birth" onChange={handleOnChange} />
        </RegisterInputWrapper>

        <RegisterInputWrapper>
          <Input
            placeholder="비밀번호"
            type="password"
            value={password}
            name="password"
            id="password"
            onChange={handleOnChange}
          />
          <ErrorText>{errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}</ErrorText>
        </RegisterInputWrapper>

        <RegisterInputWrapper>
          <Input
            placeholder="비밀번호확인"
            type="password"
            value={confirm}
            name="confirm"
            id="confirm"
            onChange={handleOnChange}
          />
          <ErrorText>
            {errors.confirm && (
              <div style={{ color: 'red' }}>
                {errors.confirm}
                {errors.general && <div style={{ color: 'red' }}>{errors.general}</div>}
              </div>
            )}
          </ErrorText>
        </RegisterInputWrapper>
        <RegisterButton>
          <Button value="가입하기" />
        </RegisterButton>
      </form>
    </div>
  );
}

export default RegisterForm;
