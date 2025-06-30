// Toast utility functions for showing success and error messages
// These functions will use the existing Toast system from the components

import { toast } from '../components/common/ToastContainer';

export const showSuccessToast = (message, options = {}) => {
  toast.success(message, {
    duration: 3000,
    ...options
  });
};

export const showErrorToast = (message, options = {}) => {
  toast.error(message, {
    duration: 3000,
    ...options
  });
};

export const showInfoToast = (message, options = {}) => {
  toast.info(message, {
    duration: 3000,
    ...options
  });
};

export const showWarningToast = (message, options = {}) => {
  toast.warning(message, {
    duration: 3000,
    ...options
  });
}; 