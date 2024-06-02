import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

function RegisterForm() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    nickname: '',
    birth: '',
    password: '',
    confirm: ''
  });

  const { name, email, nickname, birth, password, confirm } = inputs;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <Input label="이름" value={name} name="name" id="name" onChange={handleOnChange} />
        <Input label="이메일" value={email} name="email" id="email" onChange={handleOnChange} />
        <Input label="닉네임" value={nickname} name="nickname" id="nickname" onChange={handleOnChange} />
        <Input label="생년월일" type="date" value={birth} name="birth" id="birth" onChange={handleOnChange} />
        <Input
          label="비밀번호"
          type="password"
          value={password}
          name="password"
          id="password"
          onChange={handleOnChange}
        />
        <Input
          label="비밀번호확인"
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
