import React from 'react';
import { AppBar, Link, Slide } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { LINK_EMAIL, LINK_GITHUB, LINK_LINKEDIN } from 'myConstants';
import VerticalLine from 'myComponents/verticalLine';

const ExternalLinks = () => {
  const sx = {
    link: {
      margin: '9% 0%',
    },
    icon: {
      fontSize: 30,
    },
  };
  return (
    <Slide
      direction="right"
      in
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 2000, exit: 2000 }}
    >
      <AppBar
        elevation={0}
        position="sticky"
        sx={{ display: { xs: 'none', lg: 'flex' } }}
      >
        <VerticalLine />
        <Link
          href={LINK_EMAIL}
          target="_blank"
          rel="noopener"
          sx={sx.link}
        >
          <Email sx={sx.icon} />
        </Link>
        <Link
          href={LINK_GITHUB}
          target="_blank"
          rel="noopener"
          sx={sx.link}
        >
          <GitHub sx={sx.icon} />
        </Link>
        <Link
          href={LINK_LINKEDIN}
          target="_blank"
          rel="noopener"
          sx={sx.link}
        >
          <LinkedIn sx={sx.icon} />
        </Link>
        <VerticalLine />
      </AppBar>
    </Slide>
  );
};

export default ExternalLinks;
