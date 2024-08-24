import React from 'react';
import Swal from 'sweetalert2';

const showAlert = (title, text, icon, confirmButtonText) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: confirmButtonText,
  });
};

export default showAlert;
