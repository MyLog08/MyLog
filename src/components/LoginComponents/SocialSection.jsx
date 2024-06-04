import { handleSignInOAuth } from '../../api/authApi';

function SocialSection() {
  const handleOnClickSignInWithGithub = async () => {
    const provider = 'github';
    await handleSignInOAuth(provider);
  };

  const handleOnClickSignInWithGoogle = async () => {
    const provider = 'google';
    await handleSignInOAuth(provider);
  };

  const handleOnClickSignInWithKakao = async () => {
    const provider = 'kakao';
    await handleSignInOAuth(provider);
  };

  return (
    <section>
      <div>SNS계정으로 간편 로그인/회원가입</div>
      <div onClick={handleOnClickSignInWithKakao}>카카오</div>
      <div onClick={handleOnClickSignInWithGoogle}>구글</div>
      <div onClick={handleOnClickSignInWithGithub}>깃허브</div>
    </section>
  );
}

export default SocialSection;
