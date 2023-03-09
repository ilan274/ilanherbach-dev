import { Avatar, styled } from '@mui/material';
import { Box } from '@mui/system';

const AvatarContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
});

const AvatarStyled = styled(Avatar)({
  margin: '0 auto',
});

export const AvatarImage = () => {
  return (
    <AvatarContainer>
      <AvatarStyled
        alt='Ilan Herbach'
        src={'/eu.jpg'}
        sx={{ width: 84, height: 84 }}
      />
    </AvatarContainer>
  );
};
