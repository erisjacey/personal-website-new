import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const Work = () => (
  <Container id="work">
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
        Work
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: '1%' }}
      >
        Here&apos;s the list of projects and products I have built.
      </Typography>
      <Typography
        variant="h3"
        sx={{ marginTop: '1%' }}
      >
        DailyCakeyBot
      </Typography>
      <Typography
        variant="h3"
        sx={{ marginTop: '1%' }}
      >
        Upside Down
      </Typography>
    </Box>
  </Container>
);

export default Work;
