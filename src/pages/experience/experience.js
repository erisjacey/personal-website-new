import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const Experience = () => (
  <Container id="experience">
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      textAlign="justify"
      sx={{ flexBasis: '100%' }}
    >
      <Typography
        variant="h2"
      >
        Experience
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: '1%' }}
      >
        Through my academic and working journeys, I have learned, excelled and grown significantly.
      </Typography>
      <Typography
        variant="h3"
        sx={{ marginTop: '1%' }}
      >
        ACADEMIC
      </Typography>
      <Typography
        variant="h3"
        sx={{ marginTop: '1%' }}
      >
        WORK
      </Typography>
    </Box>
  </Container>
);

export default Experience;
