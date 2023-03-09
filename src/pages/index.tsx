import { TitleSubtitle } from 'components/TitleSubtitle';
import { AvatarImage } from 'components/AvatarImage';
import { Box } from '@mui/system';
import { styled } from '@mui/material';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext/LanguageContext';
import { LanguageSwitch } from 'components/LanguageSwitch';
import { SocialMedia } from 'components/SocialMedia';
import { Copyright } from '@mui/icons-material';
import { CopyrightComponent } from 'components/Copyright';

const HomeContainerStyled = styled(Box)(({ className }) => ({
  marginTop: className === 'mobile' ? '2rem' : '2.8rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));


export default function Home() {
  const { language, isMobile } = useContext(LanguageContext);
  

  return (
    <HomeContainerStyled className={isMobile ? 'mobile' : ''}>
      <SocialMedia />
      <TitleSubtitle
        titleText={language.title}
        subtitleText={language.subtitle}
      />
      <AvatarImage />
      <LanguageSwitch />
      <CopyrightComponent />
    </HomeContainerStyled>
  );
}
