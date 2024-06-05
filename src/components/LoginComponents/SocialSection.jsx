import { handleSignInOAuth } from '../../api/authApi';
import DiscordIcon from '../../icons/DiscordIcon';
import GithubIcon from '../../icons/GithubIcon';
import GoogleIcon from '../../icons/GoogleIcon';
import KaKaoIcon from '../../icons/KaKaoIcon';
import SlackIcon from '../../icons/SlackIcon';
import {
  IconWrapper,
  SocialIcon,
  SocialSectionTitle,
  SocialSectionWrapper
} from '../../styles/LoginComponents/SocialLoginStyle';

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
    <SocialSectionWrapper>
      <SocialSectionTitle>Sign/Log In with SNS</SocialSectionTitle>
      <IconWrapper>
        <SocialIcon onClick={handleOnClickSignInWithGoogle}>
          <GoogleIcon />
        </SocialIcon>
        <SocialIcon onClick={handleOnClickSignInWithGithub}>
          <GithubIcon />
        </SocialIcon>
        <SocialIcon onClick={handleOnClickSignInWithKakao}>
          <KaKaoIcon />
        </SocialIcon>
        <SocialIcon onClick={handleOnClickSignInWithSlack}>
          <SlackIcon />
        </SocialIcon>
        <SocialIcon onClick={handleOnClickSignInWithDiscord}>
          <DiscordIcon />
        </SocialIcon>
      </IconWrapper>
    </SocialSectionWrapper>
  );
}

export default SocialSection;
