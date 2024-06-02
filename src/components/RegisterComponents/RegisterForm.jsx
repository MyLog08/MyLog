import dayjs from 'dayjs';
import useFormInputs from '../../hooks/useInput';
import supabase from '../../supabase/supabase';
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

  const { inputs, handleOnChange, handleResetInputs } = useFormInputs(initialState);

  const { name, email, nickname, birth, password, confirm } = inputs;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // TODO 유효성 검사 변경해야함.
    if (password !== confirm) {
      alert('비밀번호 불일치');
      return;
    }

    try {
      // TODO 테스트용 date 포메팅
      const date = dayjs().format('YYYY-MM-DD hh:mm:ss');
      const { data, error } = await supabase.from('Users').insert({
        name,
        email,
        nickname,
        birth,
        password,
        createdAt: date,
        updatedAt: date
      });

      console.log(data);

      if (error) {
        alert(error.message);
        return;
      }

      alert('회원가입 완료');
      handleResetInputs();
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
