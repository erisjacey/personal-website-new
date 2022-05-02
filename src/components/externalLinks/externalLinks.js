import React from 'react';
import { AppBar, Link } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import VerticalLine from 'myComponents/verticalLine';

const ExternalLinks = () => {
  const sx = {
    link: {
      margin: '7% 0%',
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
        href="mailto:eris_jacey@hotmail.com"
        target="_blank"
        rel="noopener"
        sx={sx.link}
      >
        <Email sx={sx.icon} />
      </Link>
      <Link
        href="https://github.com/erisjacey"
        target="_blank"
        rel="noopener"
        sx={sx.link}
      >
        <GitHub sx={sx.icon} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/eris-jacey-masagca-309795197/"
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
