import supabase from '../../supabase/supabase';

const provider = 'github';
const provider2 = 'google';

function SocialSection() {
  const handleOnClickSignInWithGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `http://localhost:5173/auth/loading/${provider}`
      }
    });

    if (error) {
      console.error(error);
    }
  };

  const handleInClickSignInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider2,
      options: {
        redirectTo: `http://localhost:5173/auth/loading/${provider2}`
      }
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div>SNS계정으로 간편 로그인/회원가입</div>
      <div>카카오</div>
      <div onClick={handleInClickSignInWithGoogle}>구글</div>
      <div onClick={handleOnClickSignInWithGithub}>깃허브</div>
    </section>
  );
}

export default SocialSection;
