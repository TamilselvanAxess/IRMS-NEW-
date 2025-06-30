import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast from './Toast';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = Date.now() + Math.random();
    const newToast = { id, ...toast };
    setToasts(prev => [...prev, newToast]);
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const showToast = useCallback((message, options = {}) => {
    return addToast({ message, ...options });
  }, [addToast]);

  const success = useCallback((message, options = {}) => {
    return showToast(message, { type: 'success', ...options });
  }, [showToast]);

  const error = useCallback((message, options = {}) => {
    return showToast(message, { type: 'error', ...options });
  }, [showToast]);

  const warning = useCallback((message, options = {}) => {
    return showToast(message, { type: 'warning', ...options });
  }, [showToast]);

  const info = useCallback((message, options = {}) => {
    return showToast(message, { type: 'info', ...options });
  }, [showToast]);

  const value = {
    toasts,
    addToast,
    removeToast,
    showToast,
    success,
    error,
    warning,
    info,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed inset-0 pointer-events-none z-50">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            position={toast.position}
            className={toast.className}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastContainer; 