import supabase from '../../supabase/supabase';

function SocialSection() {
  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github'
    });

    if (error) {
      console.error(error);
    }

    console.log(data);
  };

  return (
    <section>
      <div>SNS계정으로 간편 로그인/회원가입</div>
      <div>카카오</div>
      <div>구글</div>
      <div onClick={signInWithGithub}>깃허브</div>
    </section>
  );
}

export default SocialSection;
