import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './hooks/redux';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/dashboard/Dashboard';
import Demo from './pages/Demo';

function App() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
        } />
        <Route path="/forgot-password" element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <ForgotPassword />
        } />
        <Route path="/reset-password/:token" element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <ResetPassword />
        } />
        
        {/* Protected routes */}
        <Route path="/dashboard" element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
        } />
        
        {/* Demo route */}
        <Route path="/demo" element={<Demo />} />
        
        {/* Default redirects */}
        <Route path="/" element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
        } />
        <Route path="*" element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
        } />
      </Routes>
    </div>
  );
}

export default App;
