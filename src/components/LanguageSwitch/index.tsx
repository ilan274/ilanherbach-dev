import { styled } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
import brazilSvg from './brazil.svg';
import usaSvg from './usa.svg';

const ImageContainerStyled = styled(Box)({
  bottom: 20,
  right: 20,
  position: 'fixed',
  display: 'flex',
  width: '80px',
  justifyContent: 'space-between',
});

const ImageStyled = styled(Image)(({ className }) => {
  return { cursor: (className !== 'selected' && 'pointer') || '' };
});
export const LanguageSwitch = () => {
  const { languageSelected, handleLanguage } = useContext(LanguageContext);

  const handleFlagSwitch = (e: any) => {
    switch (e.target.id) {
      case 'en':
        handleLanguage('en');
        break;
      case 'pt':
        handleLanguage('pt');
      default:
        break;
    }
  };

  return (
    <ImageContainerStyled>
      <ImageStyled
        priority
        src={brazilSvg}
        height={32}
        width={32}
        id='pt'
        alt='Brazil Flag'
        onClick={handleFlagSwitch}
        className={languageSelected === 'pt' ? 'selected' : ''}
      />
      <ImageStyled
        priority
        src={usaSvg}
        height={32}
        width={32}
        id='en'
        alt='USA Flag'
        onClick={handleFlagSwitch}
        className={languageSelected === 'en' ? 'selected' : ''}
      />
    </ImageContainerStyled>
  );
};
