import React, { useContext } from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Box, styled } from '@mui/material';
import Link from 'next/link';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';

const StyledIconContainer = styled(Box)(({ className }) => {
  return {
    position: 'fixed',
    top: 10,
    right: 40,
    display: 'flex',
    justifyContent: 'space-between',
    width: (className === 'mobile' && 60) || 80,
  };
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
  const { isMobile } = useContext(LanguageContext);

  return (
    <StyledIconContainer className={(isMobile && 'mobile') || ''}>
      <LinkStyled
        href='https://github.com/ilan274'
        target='_blank'
        rel='noopener noreferrer'
      >
        <StyledGithubIcon fontSize={isMobile ? 'medium' : 'large'} />
      </LinkStyled>
      <LinkStyled
        href='https://www.linkedin.com/in/ilan-herbach'
        target='_blank'
        rel='noopener noreferrer'
      >
        <StyledLinkedinIcon fontSize={isMobile ? 'medium' : 'large'} />
      </LinkStyled>
    </StyledIconContainer>
  );
};
