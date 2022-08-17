import React, { useState } from 'react';
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

const ContactModal = ({ open, handleClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const constructForm = () => ({
    first_name: firstName,
    last_name: lastName,
    from_email: email,
    subject,
    message,
  });

  const clearTextFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, constructForm(), EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        clearTextFields();
      }, (error) => {
        console.log(error.text);
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
              <TextField required id="first-name" onChange={(e) => setFirstName(e.target.value)} label="First Name" variant="outlined" size="small" />
              <TextField id="last-name" onChange={(e) => setLastName(e.target.value)} label="Last Name" variant="outlined" size="small" />
            </Stack>
            <TextField required id="email" onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" size="small" />
            <TextField id="subject" onChange={(e) => setSubject(e.target.value)} label="Subject" variant="outlined" size="small" />
            <TextField
              required
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              label="Message"
              variant="outlined"
              multiline
              rows={10}
            />
          </Stack>
          <Button variant="outlined" onClick={sendEmail} sx={{ marginTop: '2%' }}>
            Send
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

ContactModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ContactModal;
