import React from 'react';
import {
  Container, Box, Typography, Link, Button,
} from '@mui/material';
import AboutPicture from 'myAssets/about-picture.png';
import Resume from 'myAssets/resume_eris-jacey-masagca_jan-2022.pdf';
import { LINK_BLOG } from 'myConstants';

const About = () => (
  <Container id="about">
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="flex-start"
      textAlign="justify"
    >
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
          Hello World!
        </Typography>
        <Typography
          variant="body1"
          sx={{ width: '60%', marginTop: '1%' }}
        >
          I&apos;m Eris Jacey Masagca, a 24-year-old raised (and currently living) in Singapore.
          I am currrently pursuing a Computer Science Bachelor&apos;s degree at the National
          University of Singapore (NUS). My philosophy as a developer is to always strive to produce
          code with the best design practices.
        </Typography>
        <Typography
          variant="body1"
          sx={{ width: '60%', marginTop: '1%' }}
        >
          Some of my hobbies include scuba diving, video games, basketball and fitness.
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          sx={{ marginTop: '2%' }}
        >
          <Link
            href={Resume}
            target="_blank"
            sx={{ marginRight: '5%' }}
          >
            <Button variant="outlined" sx={{ minWidth: '130px' }}>
              Resume
            </Button>
          </Link>
          <Link
            href={LINK_BLOG}
            target="_blank"
          >
            <Button variant="outlined" sx={{ minWidth: '130px' }}>
              View My Blog
            </Button>
          </Link>
        </Box>
      </Box>
      <img
        src={AboutPicture}
        alt="Handsome Boy"
        height="200%"
        fit="cover"
      />
    </Box>
  </Container>
);

export default About;
