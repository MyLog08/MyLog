import supabase from '../../supabase/supabase';

const provider = 'github';

function SocialSection() {
  const handleOnClickSignInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `http://localhost:5173/auth/loading/${provider}`
      }
    });

    if (error) {
      console.error(error);
    }

    console.log(data);

    // await handleUserRegisterInsert({});
  };

  return (
    <section>
      <div>SNS계정으로 간편 로그인/회원가입</div>
      <div>카카오</div>
      <div>구글</div>
      <div onClick={handleOnClickSignInWithGithub}>깃허브</div>
    </section>
  );
}

export default SocialSection;
