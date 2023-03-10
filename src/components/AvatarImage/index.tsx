import { Avatar, styled } from '@mui/material';
import { Box } from '@mui/system';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
import { useContext, useMemo } from 'react';

const AvatarContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
});

const AvatarStyled = styled(Avatar)({
  margin: '0 auto',
});

export const AvatarImage = () => {
  const { isMobile } = useContext(LanguageContext);

  const imageSize = isMobile ? 42 : 84

  return (
    <AvatarContainer className=''>
      <AvatarStyled
        alt='Ilan Herbach'
        src={'/eu.jpg'}
        sx={{ width: imageSize, height: imageSize }}
      />
    </AvatarContainer>
  );
};
