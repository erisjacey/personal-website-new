import React from 'react';
import PropTypes from 'prop-types';
import {
  Link, Typography, Paper, Grid, Box, Chip, Stack,
} from '@mui/material';

const style = {
  root: {
    display: 'flex',
    position: 'relative',
    minWidth: 400,
    maxWidth: 450,
    width: '100%',
    height: 200,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5em',
  },
  img: {
    maxWidth: '100px',
    maxHeight: '100px',
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
              style={style.img}
            />
          </Grid>
          <Grid
            item
            xs={8}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="baseline"
              textAlign="left"
              spacing={0}
            >
              <Typography variant="subtitle1">
                {title}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
                {role}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
                {duration}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
                {modules.reduce((acc, mod) => (acc === '' ? mod : `${acc}, ${mod}`), '')}
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={0.5}
              >
                {skills.map((skill) => (
                  <Grid item>
                    <Chip label={skill} size="small" sx={style.chip} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
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
