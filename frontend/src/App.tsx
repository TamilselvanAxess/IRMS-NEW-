import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUser } from './store/slices/authSlice'
import type { AppDispatch } from './store'
import apiService from './services/api'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'
import CandidatesDashboard from './components/Dashboard/CandidatesDashboard'
import AnalyticDashboard from './components/AnalyticDashboard/AnalyticDashboard'
import ParticipantDashboard from './components/ParticipantDashboard/ParticipantDashboard'
import UserDashboard from './components/UserDasboard/UserDashboard'
import EnrolmentForm from './components/EnrolmentForm'
import Help from './Layout/Help'
import DefaultLayout from './Layout/DefaultLayout'

interface User {
  role?: string;
  fullName?: string;
  avatarUrl?: string;
}

interface RootState {
  auth: {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
  };
}

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const token = apiService.getToken();
  
  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  // If no token or not authenticated, redirect to login
  if (!token || !isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }
  
  return <DefaultLayout>{children}</DefaultLayout>;
};

// Authentication Initializer Component
const AuthInitializer = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.auth);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = apiService.getToken();
      
      if (token) {
        // Check if token is expired locally first
        if (apiService.isTokenExpired()) {
          console.warn('Token is expired, removing from storage');
          apiService.removeToken();
          setIsInitialized(true);
          return;
        }

        try {
          // Try to get current user data
          await dispatch(getCurrentUser());
        } catch (error) {
          // Only remove token for authentication failures, not network errors
          console.warn('Failed to get current user:', error);
          // Don't remove token for network errors - let the user stay logged in
        }
      }
      
      setIsInitialized(true);
    };

    initializeAuth();
  }, [dispatch]);

  // Show loading spinner while initializing
  if (!isInitialized || isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600">Initializing...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <AuthInitializer>
        <div>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/" element={
              <ProtectedRoute>
                <CandidatesDashboard />
              </ProtectedRoute>
            } />
            
            {/* Protected Routes with DefaultLayout */}
            <Route path="/candidatesTable" element={
              <ProtectedRoute>
                <CandidatesDashboard />
              </ProtectedRoute>
            } />
            <Route path="/adminDashboard" element={
              <ProtectedRoute>
                <AnalyticDashboard />
              </ProtectedRoute>
            } />
            <Route path="/participantDashboard" element={
              <ProtectedRoute>
                <ParticipantDashboard />
              </ProtectedRoute>
            } />
            <Route path="/allUsers" element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            } />
            <Route path="/enrollForm" element={
              <ProtectedRoute>
                <EnrolmentForm />
              </ProtectedRoute>
            } />
            <Route path="/help" element={
              <ProtectedRoute>
                <Help />
              </ProtectedRoute>
            } />
            
            {/* Fallback route */}
            <Route path="*" element={
              <ProtectedRoute>
                <CandidatesDashboard />
              </ProtectedRoute>
            } />
          </Routes>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1f2937',
                color: '#fff',
                border: '1px solid #374151',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </AuthInitializer>
    </Router>
  )
}

export default App
