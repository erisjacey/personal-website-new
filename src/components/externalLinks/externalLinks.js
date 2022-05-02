import React from 'react';
import { AppBar, Link } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

const ExternalLinks = () => (
  <AppBar
    elevation={0}
    position="sticky"
  >
    <Link
      href="mailto:eris_jacey@hotmail.com"
      target="_blank"
      rel="noopener"
    >
      <Email fontSize="large" />
    </Link>
    <Link
      href="https://github.com/erisjacey"
      target="_blank"
      rel="noopener"
    >
      <GitHub fontSize="large" />
    </Link>
    <Link
      href="https://www.linkedin.com/in/eris-jacey-masagca-309795197/"
      target="_blank"
      rel="noopener"
    >
      <LinkedIn fontSize="large" />
    </Link>
  </AppBar>
);

export default ExternalLinks;
