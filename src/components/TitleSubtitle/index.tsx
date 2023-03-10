import { styled } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';

interface IProps {
  titleText: string;
  subtitleText: string;
}

const TitleSubtitleContainerStyled = styled(Box)(({ className }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: (className === 'mobile' && '2.4rem') || '2rem',
  };
});

const TitleStyled = styled(Box)({
  fontSize: '2.2rem',
  textAlign: 'center',
  fontFamily: 'monospace',
  color: '#DCF763',
});

const SubtitleStyled = styled(Box)({
  fontSize: '1rem',
  textAlign: 'center',
  fontFamily: 'monospace',
  color: '#BFB7B6',
  marginTop: '.4rem',
});

export const TitleSubtitle = ({ titleText, subtitleText }: IProps) => {
  const { isMobile } = useContext(LanguageContext);

  return (
    <TitleSubtitleContainerStyled className={isMobile ? 'mobile' : ''}>
      <TitleStyled>{titleText}</TitleStyled>
      <SubtitleStyled>{subtitleText}</SubtitleStyled>
    </TitleSubtitleContainerStyled>
  );
};
