import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleAuthLogin } from '../../api/authApi';
import useFormInputs from '../../hooks/useInput';
import { login } from '../../redux/slices/authSlice';
import supabase from '../../supabase/supabase';
import { validateEmailFormat, validatePasswordFormat, validatePasswordMatch } from '../../utils/validators';
import Button from '../Common/Button';
import Input from '../Common/Input';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LogInButton,
  LogInContainer,
  LogInForm,
  LogInTitle,
  RegisterButton
} from '../../styles/LoginComponents/LoginStyle';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    email: '',
    password: ''
  };

  const { inputs, handleOnChange, handleResetInputs } = useFormInputs(initialState);

  const [errors, setErrors] = useState({});

  const { email, password } = inputs;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    try {
      if (!email || !password) {
        newErrors.general = '모든 필드를 입력해주세요.';
        throw new Error('모든 필드를 입력해주세요.');
      }

      if (!validateEmailFormat(email)) {
        newErrors.email = '올바른 이메일 형식이 아닙니다.';
        throw new Error('올바른 이메일 형식이 아닙니다.');
      }

      if (!validatePasswordFormat(password)) {
        newErrors.password = '비밀번호는 영문 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다.';
        throw new Error('비밀번호는 영문 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다.');
      }

      const { data, error } = await supabase.from('Users').select('*').eq('email', email).single();

      if (error) {
        newErrors.system = '회원 정보가 없습니다.';
        throw new Error(error.message);
      }

      if (!validatePasswordMatch(password, data.password)) {
        newErrors.password = '비밀번호가 일치하지 않습니다.';
        throw new Error('비밀번호 불일치');
      }

      const user = await handleAuthLogin(email, password);

      dispatch(login(user));

      alert('로그인 완료');
      handleResetInputs();
      setErrors({});
      navigate('/');
    } catch (err) {
      setErrors(newErrors);
      console.error(err);
    }
  };

  return (
<<<<<<< HEAD
=======

>>>>>>> bb384dea7c198cdcf7562fd968c1bfb53aedc283
    <LogInContainer>
      <LogInTitle>Log In</LogInTitle>
      <LogInForm onSubmit={handleOnSubmit}>
        <Input placeholder="Email" value={email} name="email" id="email" onChange={handleOnChange} />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          name="password"
          id="password"
          onChange={handleOnChange}
        />
        <LogInButton>
          <Button value="Log In" />
        </LogInButton>
        <RegisterButton>
          <NavLink to="/auth/register">
            <Button value="Sign In" />
          </NavLink>
        </RegisterButton>
      </LogInForm>
    </LogInContainer>
  );
}

export default LoginForm;
