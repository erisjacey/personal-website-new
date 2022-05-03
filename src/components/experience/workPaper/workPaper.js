import React from 'react';
import PropTypes from 'prop-types';
import {
  Link, Typography, Paper, Grid, Box, Chip,
} from '@mui/material';

const style = {
  root: {
    display: 'flex',
    position: 'relative',
    minWidth: 400,
    maxWidth: 570,
    width: '100%',
    height: 200,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '3%',
  },
  paper: {
    position: 'relative',
    padding: '4% 1%',
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
    borderRadius: '3%',
    opacity: 0.0,
    '&:hover': {
      opacity: 1.0,
    },
  },
  link: {
    textDecoration: 'underline',
  },
  chip: {
    margin: 0.5,
  },
};

const WorkPaper = ({ job }) => {
  const {
    title, logo, role, duration, modules, skills, link,
  } = job;

  return (
    <Link
      href={link.url}
      target="_blank"
      rel="noopener"
    >
      <Paper elevation={0} sx={style.root}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          textAlign="center"
          sx={style.paper}
        >
          <Grid item>
            <img
              src={logo}
              alt={`Logo for ${title}`}
            />
          </Grid>
          <Grid
            item
            xs={9}
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
                {role}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
                {duration}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
                {modules.reduce((acc, mod) => (acc === '' ? mod : `${acc}, ${mod}`), '')}
              </Typography>
            </Grid>
            <Grid item>
              {skills.map((skill) => <Chip label={skill} size="small" sx={style.chip} />)}
            </Grid>
          </Grid>
        </Grid>
        <Box sx={style.overlay}>
          <Typography variant="subtitle1" sx={style.link}>
            {link.name}
          </Typography>
        </Box>
      </Paper>
    </Link>
  );
};

WorkPaper.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    modules: PropTypes.arrayOf(PropTypes.string).isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WorkPaper;
