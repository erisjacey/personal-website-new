import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  Snackbar, Alert,
} from '@mui/material';

// eslint-disable-next-line react/jsx-props-no-spreading
const CustomizedAlert = forwardRef((props, ref) => <Alert elevation={6} ref={ref} variant="filled" {...props} />);

const FormSubmitSnackbar = ({ open, handleClose, success }) => (
  <Snackbar
    open={open}
    autoHideDuration={10000}
    onClose={handleClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  >
    <CustomizedAlert severity={success ? 'success' : 'error'} onClose={handleClose} sx={{ width: '100%' }}>
      {success ? 'Success!' : 'Error occurred.'}
    </CustomizedAlert>
  </Snackbar>
);

FormSubmitSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
};

export default FormSubmitSnackbar;
