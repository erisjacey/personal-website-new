import React from 'react';
import PropTypes from 'prop-types';
import {
  Link, Typography, Paper, Grid, Box,
} from '@mui/material';

const style = {
  root: {
    display: 'flex',
    position: 'relative',
    minWidth: 400,
    width: '100%',
    height: 150,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5em',
  },
  paper: {
    position: 'relative',
    padding: '4% 3%',
    border: 'none',
  },
  overlay: {
    position: 'absolute',
    display: 'flex',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(18px)',
    borderRadius: '0.5em',
    opacity: 0.0,
    '&:hover': {
      opacity: 1.0,
    },
  },
  link: {
    textDecoration: 'underline',
  },
};

const AcademicPaper = ({ school }) => {
  const {
    title, logo, description, duration, grade, transcript,
  } = school;

  return (
    <Link
      href={transcript}
      target="_blank"
      rel="noopener"
    >
      <Paper elevation={0} sx={style.root}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={style.paper}
        >
          <Grid item xs={4}>
            <img
              src={logo}
              alt={`Logo for ${title}`}
            />
          </Grid>
          <Grid
            item
            xs={8}
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            textAlign="left"
          >
            <Grid item>
              <Typography variant="subtitle1">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
                {description}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
                {duration}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
                {grade}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={style.overlay}>
          <Typography variant="subtitle1" sx={style.link}>
            View Transcript
          </Typography>
        </Box>
      </Paper>
    </Link>
  );
};

AcademicPaper.propTypes = {
  school: PropTypes.shape({
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    transcript: PropTypes.string.isRequired,
  }).isRequired,
};

export default AcademicPaper;
