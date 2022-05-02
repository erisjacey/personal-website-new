import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { AppBar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Image } from 'mui-image';
import Logo from 'myAssets/logo.png';

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    margin: '10% 0%',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar
      elevation={0}
      position="sticky"
    >
      <Link to="#home" smooth className={classes.link}>
        <Image
          duration={0}
          src={Logo}
        />
      </Link>
      <Link to="#about" smooth className={classes.link}>
        <Typography variant="body">
          About
        </Typography>
      </Link>
      <Link to="#experience" smooth className={classes.link}>
        <Typography variant="body">
          Experience
        </Typography>
      </Link>
      <Link to="#work" smooth className={classes.link}>
        <Typography variant="body">
          Work
        </Typography>
      </Link>
      <Link to="#contact" smooth className={classes.link}>
        <Typography variant="body">
          Contact
        </Typography>
      </Link>
    </AppBar>
  );
};

export default Navbar;
