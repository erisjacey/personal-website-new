import React from 'react';
import { AppBar, Link } from '@mui/material';
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
    <AppBar
      elevation={0}
      position="sticky"
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
  );
};

export default ExternalLinks;
