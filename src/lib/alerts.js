// Simple alerts/notifications/popups service

import Swal from 'sweetalert2';

const primaryBtnColor = '#f5222d';

export const showError = ({ title = 'Error', description = 'An error has occurred', confirmText = 'OK' } = {}) =>
  Swal.fire({
    title,
    text: description,
    icon: 'error',
    confirmButtonText: confirmText,
    confirmButtonColor: primaryBtnColor,
  });

export const showSuccess = ({
  title = 'Done',
  description = 'The operation was completed successfully',
  confirmText = 'OK',
} = {}) =>
  Swal.fire({
    title,
    text: description,
    icon: 'success',
    confirmButtonText: confirmText,
    confirmButtonColor: primaryBtnColor,
  });

export const showConfirmation = ({
  title = 'Confirmation required',
  description = 'Please confirm to continue',
  confirmText = 'Accept',
  cancelText = 'Cancel',
} = {}) =>
  new Promise(async (resolve) => {
    const result = await Swal.fire({
      title,
      showCancelButton: true,
      reverseButtons: true,
      text: description,
      icon: 'warning',
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      confirmButtonColor: primaryBtnColor,
    });

    resolve(result.isConfirmed);
  });
