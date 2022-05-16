import React, { useState, useRef } from 'react';
import {
  Container, Box, Typography, Button, Slide, Zoom,
} from '@mui/material';
import VisibilitySensor from 'react-visibility-sensor';
import ContactModal from 'myComponents/contactModal';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Component visibility
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visibility) => {
        setIsVisible(visibility);
      }}
    >
      <Container id="contact" ref={containerRef}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Slide
            direction="down"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 2000, exit: 2000 }}
            container={containerRef.current}
          >
            <Typography
              variant="h2"
            >
              Get In Touch!
            </Typography>
          </Slide>
          <Slide
            direction="down"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 2000, exit: 2000 }}
            container={containerRef.current}
          >
            <Typography
              variant="body1"
              sx={{
                width: {
                  xs: '90%',
                  md: '75%',
                  lg: '60%',
                },
                marginTop: '1%',
              }}
            >
              Have a potential position or project you&apos;d like to collaborate with?
              Or do you just want to say hi?
              Drop me a message and we&apos;ll go from there!
              I&apos;m always open to new projects and experiences,
              so I&apos;ll do my best to reply!
            </Typography>
          </Slide>
          <Slide
            direction="up"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 2000, exit: 2000 }}
            container={containerRef.current}
          >
            <Button variant="outlined" onClick={handleOpen} sx={{ marginTop: '3%' }}>
              Say Hi!
            </Button>
          </Slide>
          <ContactModal
            open={open}
            handleClose={handleClose}
          />
          <Zoom
            direction="up"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            style={{ transitionDelay: '2000ms' }}
          >
            <Typography
              variant="body2"
              sx={{ position: 'absolute', bottom: '-395%' }}
            >
              Developed by Eris Jacey Masagca, 2022
            </Typography>
          </Zoom>
        </Box>
      </Container>
    </VisibilitySensor>
  );
};

export default Contact;
