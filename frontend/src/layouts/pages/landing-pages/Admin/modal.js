// src/layouts/pages/landing-pages/Admin/modal.js
import React from 'react';
import PropTypes from 'prop-types';
import MKBox from 'components/MKBox'; // Adjust path
import MKTypography from 'components/MKTypography'; // Adjust path
import MKButton from 'components/MKButton'; // Adjust path
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const UserModal = ({ open, onClose, title, children }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <MKButton onClick={onClose} color="primary">Close</MKButton>
      </DialogActions>
    </Dialog>
  );
};

UserModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default UserModal;
