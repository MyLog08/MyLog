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

      alert('회원가입 완료');
      handleResetInputs();
      setErrors({});
    } catch (err) {
      console.error(err);
      alert('회원가입 중 오류 발생');
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleOnSubmit}>
        <Input placeholder="이름" value={name} name="name" id="name" onChange={handleOnChange} />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        <Input placeholder="이메일" value={email} name="email" id="email" onChange={handleOnChange} />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        <Input placeholder="닉네임" value={nickname} name="nickname" id="nickname" onChange={handleOnChange} />
        {errors.nickname && <div style={{ color: 'red' }}>{errors.nickname}</div>}
        <Input placeholder="생년월일" value={birth} name="birth" id="birth" onChange={handleOnChange} />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          name="password"
          id="password"
          onChange={handleOnChange}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        <Input
          placeholder="비밀번호확인"
          type="password"
          value={confirm}
          name="confirm"
          id="confirm"
          onChange={handleOnChange}
        />
        {errors.confirm && <div style={{ color: 'red' }}>{errors.confirm}</div>}
        {errors.general && <div style={{ color: 'red' }}>{errors.general}</div>}
        <Button value="가입하기" />
      </form>
    </div>
  );
}

export default RegisterForm;
