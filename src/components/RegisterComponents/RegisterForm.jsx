import useFormInputs from '../../hooks/useInput';
import Button from '../Button';
import Input from '../Input';

function RegisterForm() {
  const initialState = {
    name: '',
    email: '',
    nickname: '',
    birth: '',
    password: '',
    confirm: ''
  };

  const { inputs, setInputs, handleOnChange, handleResetInputs } = useFormInputs(initialState);

  const { name, email, nickname, birth, password, confirm } = inputs;

  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <Input placeholder="이름" value={name} name="name" id="name" onChange={handleOnChange} />
        <Input placeholder="이메일" value={email} name="email" id="email" onChange={handleOnChange} />
        <Input placeholder="닉네임" value={nickname} name="nickname" id="nickname" onChange={handleOnChange} />
        <Input placeholder="생년월일" value={birth} name="birth" id="birth" onChange={handleOnChange} />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          name="password"
          id="password"
          onChange={handleOnChange}
        />
        <Input
          placeholder="비밀번호확인"
          type="password"
          value={confirm}
          name="confirm"
          id="confirm"
          onChange={handleOnChange}
        />
        <Button value="가입하기" />
      </form>
    </div>
  );
}

export default RegisterForm;
