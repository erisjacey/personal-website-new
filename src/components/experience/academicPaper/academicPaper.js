import React from 'react';
import PropTypes from 'prop-types';
import {
  Link, Typography, Paper, Grid,
} from '@mui/material';

const style = {
  root: {
    padding: '4% 3%',
    minWidth: 400,
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
      <Paper>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={style.root}
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
            sx={style.child}
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
