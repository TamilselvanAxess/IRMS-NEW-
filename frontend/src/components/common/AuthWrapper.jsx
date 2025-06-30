import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { checkAuthStatus, setAuthInitialized } from '../../store/slices/authSlice';
import { LoadingScreen } from './index';

const AuthWrapper = ({ children }) => {
  const dispatch = useAppDispatch();
  const { token, authInitialized, loading } = useAppSelector((state) => state.auth);
  const [isInitializing, setIsInitializing] = useState(true);
  const [authCheckComplete, setAuthCheckComplete] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      // If no token exists, mark auth as initialized immediately
      if (!token) {
        dispatch(setAuthInitialized());
        setAuthCheckComplete(true);
        setIsInitializing(false);
        return;
      }

      // Only check auth status if we have a token and auth hasn't been initialized
      if (token && !authInitialized) {
        try {
          await dispatch(checkAuthStatus()).unwrap();
        } catch (error) {
          console.log('Auth check failed:', error);
        } finally {
          setAuthCheckComplete(true);
          setIsInitializing(false);
        }
      } else {
        setAuthCheckComplete(true);
        setIsInitializing(false);
      }
    };

    initializeAuth();
  }, [dispatch, token, authInitialized]);

  // Show loading screen during initialization or auth check
  if (isInitializing || (!authInitialized && token) || !authCheckComplete) {
    return (
      <LoadingScreen 
        message={token ? 'Checking authentication...' : 'Initializing...'}
        variant="ring"
      />
    );
  }

  return children;
};

export default AuthWrapper; 