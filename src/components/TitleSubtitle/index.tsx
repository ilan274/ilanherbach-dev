import { styled } from '@mui/material';
import { Box } from '@mui/system';

interface IProps {
  titleText: string;
  subtitleText: string;
}

const TitleSubtitleContainerStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
  return (
    <TitleSubtitleContainerStyled>
      <TitleStyled>{titleText}</TitleStyled>
      <SubtitleStyled>{subtitleText}</SubtitleStyled>
    </TitleSubtitleContainerStyled>
  );
};
