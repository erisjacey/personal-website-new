import React, { useState } from 'react';
import {
  Container, Box, Typography, Link, Button, Modal, Fade, Backdrop,
} from '@mui/material';
import Resume from 'myAssets/resume_eris-jacey-masagca_jan-2022.pdf';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '1em',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

const About = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container id="about">
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
          <Button variant="outlined" sx={{ minWidth: '130px' }} onClick={handleOpen}>
            View My Blog
          </Button>
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
        </Box>
      </Box>
    </Container>
  );
};

export default About;
