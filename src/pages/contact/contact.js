import React, { useState, useRef } from 'react';
import {
  Container, Box, Typography, Button, Modal, Fade, Backdrop, Slide,
} from '@mui/material';
import VisibilitySensor from 'react-visibility-sensor';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '3%',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

const Contact = () => {
  // Modal
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
              sx={{ width: '60%', marginTop: '1%' }}
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
          <Modal
            aria-labelledby="transition-modal-title"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  Coming Soon!
                </Typography>
              </Box>
            </Fade>
          </Modal>
          <Slide
            direction="up"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 2000, exit: 2000 }}
            container={containerRef.current}
          >
            <Typography
              variant="body2"
              sx={{ position: 'absolute', bottom: '-395%' }}
            >
              Developed by Eris Jacey Masagca, 2022
            </Typography>
          </Slide>
        </Box>
      </Container>
    </VisibilitySensor>
  );
};

export default Contact;
