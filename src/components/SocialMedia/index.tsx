import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Box, styled } from '@mui/material';
import Link from 'next/link';

const StyledIconContainer = styled(Box)({
  position: 'fixed',
  top: 10,
  right: 40,
  display: 'flex',
  justifyContent: 'space-between',
  width: '80px',
});

const StyledGithubIcon = styled(GitHub)({
  backgroundColor: '#bebebe',
  borderRadius: '50%',
});

const StyledLinkedinIcon = styled(LinkedIn)({
  backgroundColor: '#bebebe',
  borderRadius: '50%',
});

const LinkStyled = styled(Link)({
  'color': '#19181C',
  ':visited': {
    color: '#19181C',
  },
});

export const SocialMedia = () => {
  return (
    <StyledIconContainer>
      <LinkStyled
        href='https://github.com/ilan274'
        target='_blank'
        rel='noopener noreferrer'
      >
        <StyledGithubIcon fontSize='large' />
      </LinkStyled>
      <LinkStyled
        href='https://www.linkedin.com/in/ilan-herbach'
        target='_blank'
        rel='noopener noreferrer'
      >
        <StyledLinkedinIcon fontSize='large' />
      </LinkStyled>
    </StyledIconContainer>
  );
};
