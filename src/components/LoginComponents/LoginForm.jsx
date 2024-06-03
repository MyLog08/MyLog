import { handleAuthLogin } from '../../api/authApi';
import useFormInputs from '../../hooks/useInput';
import supabase from '../../supabase/supabase';
import { validateEmailFormat, validatePasswordFormat, validatePasswordMatch } from '../../utils/validators';
import Button from '../Button';
import Input from '../Input';

function LoginForm() {
  const initialState = {
    email: '',
    password: ''
  };

  const { inputs, handleOnChange, handleResetInputs } = useFormInputs(initialState);

  const { email, password } = inputs;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!validateEmailFormat(email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    }

    if (!validatePasswordFormat(password)) {
      newErrors.password = '비밀번호는 영문 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다.';
    }

    const { data, error } = await supabase.from('Users').select('*').eq('email', email).single();

    if (error) {
      alert(error.message);
      return;
    }

    if (!validatePasswordMatch(password, data.password)) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    console.log(data);

    const user = await handleAuthLogin(email, password);
    console.log(user);

    alert('로그인 완료');
    handleResetInputs();
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleOnSubmit}>
        <Input placeholder="이메일" value={email} name="email" id="email" onChange={handleOnChange} />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          name="password"
          id="password"
          onChange={handleOnChange}
        />
        <Button value="로그인하기" />
      </form>
    </div>
  );
}

export default LoginForm;
