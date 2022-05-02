import React from 'react';
import {
  Container, Box, Typography, Link, Button,
} from '@mui/material';
import { Image } from 'mui-image';
import PersonalPicture from 'myAssets/personal-picture.png';
import Resume from 'myAssets/resume_eris-jacey-masagca_jan-2022.pdf';

const Home = () => (
  <Container id="home">
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        marginBottom: '10%',
      }}
    >
      <Image
        src={PersonalPicture}
        width="70%"
        duration={1000}
        fit="cover"
        shift="top"
        shiftDuration={1000}
        distance={500}
      />
      <Typography variant="h1">
        Eris Jacey
      </Typography>
      <Typography variant="h6">
        GAME // WEB // FULL-STACK DEVELOPMENT
      </Typography>
      <Link
        href={Resume}
        target="_blank"
        sx={{ marginTop: '5%' }}
      >
        <Button variant="outlined">
          Resume
        </Button>
      </Link>
    </Box>
  </Container>
);

export default Home;
