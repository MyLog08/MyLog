import styled from 'styled-components';
import { handleSignInOAuth } from '../../api/authApi';
import DiscordIcon from '../../icons/DiscordIcon';
import GithubIcon from '../../icons/GithubIcon';
import GoogleIcon from '../../icons/GoogleIcon';
import KaKaoIcon from '../../icons/KaKaoIcon';
import SlackIcon from '../../icons/SlackIcon';

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

  const handleOnClickSignInWithSlack = async () => {
    const provider = 'slack';
    await handleSignInOAuth(provider);
  };

  const handleOnClickSignInWithDiscord = async () => {
    const provider = 'discord';
    await handleSignInOAuth(provider);
  };

  return (
    <div>
      <div>SNS계정으로 간편 로그인/회원가입</div>
      <StSocialSection>
        <div onClick={handleOnClickSignInWithGoogle}>
          <GoogleIcon />
        </div>
        <div onClick={handleOnClickSignInWithGithub}>
          <GithubIcon />
        </div>
        <div onClick={handleOnClickSignInWithKakao}>
          <KaKaoIcon />
        </div>
        <div onClick={handleOnClickSignInWithSlack}>
          <SlackIcon />
        </div>
        <div onClick={handleOnClickSignInWithDiscord}>
          <DiscordIcon />
        </div>
      </StSocialSection>
    </div>
  );
}

export default SocialSection;

const StSocialSection = styled.section`
  display: flex;
`;
