// Simple alerts/notifications/popups service

import Swal from 'sweetalert2';

const primaryBtnColor = '#f5222d';

export const showError = ({ title, description, confirmText }) =>
  Swal.fire({
    title: title || 'Error',
    text: description || 'An error has occurred',
    icon: 'error',
    confirmButtonText: confirmText || 'OK',
    confirmButtonColor: primaryBtnColor,
  });

export const showSuccess = ({ title, description, confirmText }) =>
  Swal.fire({
    title: title || 'Done',
    text: description || 'The operation was completed successfully',
    icon: 'success',
    confirmButtonText: confirmText || 'OK',
    confirmButtonColor: primaryBtnColor,
  });

export const showConfirmation = ({ title, description, confirmText, cancelText }) =>
  new Promise(async (resolve) => {
    const result = await Swal.fire({
      title: title || 'Confirmation required',
      showCancelButton: true,
      reverseButtons: true,
      text: description || 'Please confirm to continue',
      icon: 'warning',
      confirmButtonText: confirmText || 'Accept',
      cancelButtonText: cancelText || 'Cancel',
      confirmButtonColor: primaryBtnColor,
    });

    resolve(result.isConfirmed);
  });
