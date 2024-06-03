import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkSignIn, logout } from '../../redux/slices/authSlice';
import supabase from '../../supabase/supabase';

function AuthStatus() {
  const dispatch = useDispatch();

  // 로그인 상태 확인
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // 비동기 함수 동작 상태
  const status = useSelector((state) => state.auth.status);

  // 이를 활용해 userId 와 article 의 userId 가 일치하는지 확인 필요
  const user = useSelector((state) => state.auth.user);

  // 인가
  useEffect(() => {
    dispatch(checkSignIn());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>loading...</div>;
  }

  // 로그아웃 예시
  const handleLogout = async () => {
    await supabase.auth.signOut();

    dispatch(logout());
  };

  return (
    <div>
      {isLoggedIn ? '로그인됨' : '로그인 안됨'}
      <button onClick={handleLogout}>누르면 로그아웃됨</button>
    </div>
  );
}

export default AuthStatus;
