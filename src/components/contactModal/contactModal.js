import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Fade, Box, Modal, Backdrop, Stack,
  TextField, Button,
} from '@mui/material';
import emailjs from '@emailjs/browser';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from 'myConstants';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '90%',
    md: '65%',
    lg: '55%',
    xl: '40%',
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '1em',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

const ContactModal = ({ open, handleClose, handleFormSubmitSuccess }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(`Email successfully sent! Status: ${result.text}`);
        handleFormSubmitSuccess(true);
        handleClose();
      }, (error) => {
        console.log(`Email unsuccessfully sent! Error: ${error.text}`);
        handleFormSubmitSuccess(false);
        handleClose();
      });
  };

  return (
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
        <Box component="form" sx={style}>
          <form ref={form} onSubmit={sendEmail}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={1.5}
            >
              <Typography id="transition-modal-title" variant="h3" sx={{ marginBottom: '1%' }}>
                Contact Me
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={1.5}
                sx={{ '& .MuiTextField-root': { width: '100%' } }}
              >
                <TextField required name="first_name" label="First Name" variant="outlined" size="small" />
                <TextField name="last_name" label="Last Name" variant="outlined" size="small" />
              </Stack>
              <TextField required name="from_email" label="Email" variant="outlined" size="small" />
              <TextField name="subject" label="Subject" variant="outlined" size="small" />
              <TextField
                required
                name="message"
                label="Message"
                variant="outlined"
                multiline
                rows={10}
              />
            </Stack>
            <Button variant="outlined" onClick={sendEmail} sx={{ marginTop: '2%' }}>
              Send
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

ContactModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleFormSubmitSuccess: PropTypes.func.isRequired,
};

export default ContactModal;
