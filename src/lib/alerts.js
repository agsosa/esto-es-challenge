// Simple alerts/notifications/popups service

import Swal from 'sweetalert2';

export const showError = ({ title, description, confirmText }) =>
  Swal.fire({
    title: title || 'Error',
    text: description || 'An error has occurred',
    icon: 'error',
    confirmButtonText: confirmText || 'OK',
  });

export const showSuccess = ({ title, description, confirmText }) =>
  Swal.fire({
    title: title || 'Done',
    text: description || 'The operation was completed successfully',
    icon: 'success',
    confirmButtonText: confirmText || 'OK',
  });

export const showConfirmation = ({ title, description, confirmText, cancelText }) =>
  new Promise(async (resolve) => {
    const result = await Swal.fire({
      title: title || 'Confirmation required',
      showCancelButton: true,
      text: description || 'Please confirm to continue',
      icon: 'warning',
      confirmButtonText: confirmText || 'Accept',
      cancelButtonText: cancelText || 'Cancel',
    });

    resolve(result.isConfirmed);
  });
