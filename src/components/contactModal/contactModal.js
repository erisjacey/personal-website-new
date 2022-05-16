import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Fade, Box, Modal, Backdrop, Stack,
  TextField, Button,
} from '@mui/material';

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

const ContactModal = ({ open, handleClose }) => (
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
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={1.5}
        >
          <Typography id="transition-modal-title" variant="h3">
            Contact Me
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={1.5}
            sx={{ '& .MuiTextField-root': { width: '100%' } }}
          >
            <TextField required id="first-name" label="First Name" variant="outlined" size="small" />
            <TextField id="last-name" label="Last Name" variant="outlined" size="small" />
          </Stack>
          <TextField required id="email" label="Email" variant="outlined" size="small" />
          <TextField id="subject" label="Subject" variant="outlined" size="small" />
          <TextField
            required
            id="message"
            label="Message"
            variant="outlined"
            multiline
            rows={10}
          />
        </Stack>
        <Button variant="outlined" onClick={handleClose} sx={{ marginTop: '2%' }}>
          Send
        </Button>
      </Box>
    </Fade>
  </Modal>
);

ContactModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ContactModal;
