import React, { useState } from 'react';
import {
  Container, Box, Typography, Link, Button, Slide,
} from '@mui/material';
import VisibilitySensor from 'react-visibility-sensor';
import PersonalPicture from 'myAssets/personal-picture.png';
import Resume from 'myAssets/resume_eris-jacey-masagca_jan-2022.pdf';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <VisibilitySensor
      // partialVisibility
      onChange={(visibility) => {
        setIsVisible(visibility);
      }}
    >
      <Container id="home">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          sx={{
            marginBottom: '10%',
          }}
        >
          <Slide
            direction="down"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 2000, exit: 2000 }}
          >
            <img
              src={PersonalPicture}
              alt="Handsome Boy"
              width="70%"
              fit="cover"
            />
          </Slide>
          <Slide
            direction="right"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 2000, exit: 2000 }}
          >
            <Typography variant="h1">
              Eris Jacey
            </Typography>
          </Slide>
          <Slide
            direction="left"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 2000, exit: 2000 }}
          >
            <Typography variant="h5">
              GAME // WEB // FULL-STACK DEVELOPMENT
            </Typography>
          </Slide>
          <Slide
            direction="up"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 2000, exit: 2000 }}
          >
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
    </VisibilitySensor>
  );
};

export default Home;
