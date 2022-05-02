import React from 'react';
import {
  Container, Box, Typography, Link, Button, Slide,
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
        duration={2000}
        fit="cover"
        shift="right"
        shiftDuration={2000}
        distance={500}
      />
      <Slide direction="right" in mountOnEnter unmountOnExit>
        <Typography variant="h1">
          Eris Jacey
        </Typography>
      </Slide>
      <Slide direction="left" in mountOnEnter unmountOnExit>
        <Typography variant="h6">
          GAME // WEB // FULL-STACK DEVELOPMENT
        </Typography>
      </Slide>
      <Slide direction="up" in mountOnEnter unmountOnExit>
        <Link
          href={Resume}
          target="_blank"
          sx={{ marginTop: '5%' }}
        >
          <Button variant="outlined">
            Resume
          </Button>
        </Link>
      </Slide>
    </Box>
  </Container>
);

export default Home;
