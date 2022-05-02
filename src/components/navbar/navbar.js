import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { AppBar, Typography } from '@mui/material';

const Navbar = () => (
  <AppBar
    elevation={0}
    position="sticky"
  >
    <Link to="#home" smooth>
      <Typography variant="h5">
        Home
      </Typography>
    </Link>
    <Link to="#about" smooth>
      <Typography variant="h5">
        About
      </Typography>
    </Link>
    <Link to="#experience" smooth>
      <Typography variant="h5">
        Experience
      </Typography>
    </Link>
    <Link to="#work" smooth>
      <Typography variant="h5">
        Work
      </Typography>
    </Link>
    <Link to="#contact" smooth>
      <Typography variant="h5">
        Contact
      </Typography>
    </Link>
  </AppBar>
);

export default Navbar;
