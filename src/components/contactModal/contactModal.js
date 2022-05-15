import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Fade, Box, Modal, Backdrop,
} from '@mui/material';

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
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Coming Soon!
        </Typography>
      </Box>
    </Fade>
  </Modal>
);

ContactModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ContactModal;
