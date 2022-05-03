import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { AppBar, Typography, Slide } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Image } from 'mui-image';
import Logo from 'myAssets/logo.png';

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    margin: '15% 0%',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Slide
      direction="left"
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
        <Link to="#home" smooth className={classes.link}>
          <Image
            duration={0}
            src={Logo}
          />
        </Link>
        <Link to="#about" smooth className={classes.link}>
          <Typography variant="body2">
            About
          </Typography>
        </Link>
        <Link to="#experience" smooth className={classes.link}>
          <Typography variant="body2">
            Experience
          </Typography>
        </Link>
        <Link to="#work" smooth className={classes.link}>
          <Typography variant="body2">
            Work
          </Typography>
        </Link>
        <Link to="#contact" smooth className={classes.link}>
          <Typography variant="body2">
            Contact
          </Typography>
        </Link>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
