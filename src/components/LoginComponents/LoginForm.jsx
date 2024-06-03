import useFormInputs from '../../hooks/useInput';
import Button from '../Button';
import Input from '../Input';

function LoginForm() {
  const initialState = {
    email: '',
    password: ''
  };

  const { inputs, handleOnChange, handleResetInputs } = useFormInputs(initialState);

  const { email, password } = inputs;

  const handleOnSubmit = (e) => {
    e.preventDefault();

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
