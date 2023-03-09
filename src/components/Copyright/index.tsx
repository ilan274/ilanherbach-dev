import { Box, styled } from '@mui/material';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';

const CopyrightContainerStyled = styled('footer')({
  bottom: 10,
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

const CopyrightStyled = styled('span')({
  textAlign: 'center',
  color: '#BEBEBE',
  fontFamily: 'monospace',
});

export const CopyrightComponent = () => {
  const { language } = useContext(LanguageContext);

  return (
    <CopyrightContainerStyled>
      <CopyrightStyled>{language.copyright}</CopyrightStyled>
    </CopyrightContainerStyled>
  );
};
