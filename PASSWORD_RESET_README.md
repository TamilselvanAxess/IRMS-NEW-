# Password Reset Implementation

This document describes the complete password reset functionality that has been implemented in the IRMS application.

## Overview

The password reset system allows users to:
1. Request a password reset via email
2. Receive a secure reset link via email
3. Set a new password using the reset link
4. Receive confirmation when the password is successfully reset

## Components

### Frontend Components

1. **Login.jsx** - Updated to include "Forgot password?" link
2. **ForgotPassword.jsx** - New component for requesting password reset
3. **ResetPassword.jsx** - New component for setting new password with token

### Backend Components

1. **userController.js** - Contains `initiatePasswordReset` and `resetPassword` functions
2. **emailService.js** - Handles sending password reset and confirmation emails
3. **userModel.js** - Updated with reset token fields
4. **userRoute.js** - Contains password reset routes

## Routes

### Frontend Routes
- `/login` - Login page with forgot password link
- `/forgot-password` - Request password reset page
- `/reset-password/:token` - Reset password with token page

### Backend Routes
- `POST /api/user/forgot-password` - Initiate password reset
- `POST /api/user/reset-password/:token` - Reset password with token

## How It Works

### 1. Request Password Reset
1. User clicks "Forgot password?" on login page
2. User enters their email address
3. System validates email and sends reset link if user exists
4. User receives email with reset link (valid for 1 hour)

### 2. Reset Password
1. User clicks reset link in email
2. User is taken to reset password page with token in URL
3. User enters new password and confirms it
4. System validates token and updates password
5. User receives confirmation email
6. User can now login with new password

## Security Features

- Reset tokens are hashed before storing in database
- Tokens expire after 1 hour
- Tokens are single-use (deleted after password reset)
- Email addresses are normalized (lowercase, trimmed)
- No information disclosure about email existence
- Password validation (minimum 6 characters)

## Email Configuration

To enable email functionality, set these environment variables in your backend:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=http://localhost:5173
```

### Supported Email Providers
- Gmail
- Outlook/Hotmail
- Yahoo
- Generic SMTP

## Usage

### For Users
1. Go to login page
2. Click "Forgot password?"
3. Enter your email address
4. Check your email for reset link
5. Click the link and set new password
6. Login with new password

### For Developers
The system is fully integrated and ready to use. No additional configuration needed beyond email setup.

## Testing

1. Start the backend server: `cd backend && npm start`
2. Start the frontend server: `cd frontend && npm run dev`
3. Navigate to `http://localhost:5173`
4. Test the forgot password flow

## Files Modified/Created

### Frontend
- `src/pages/auth/Login.jsx` - Updated with forgot password functionality
- `src/pages/auth/ForgotPassword.jsx` - New component
- `src/pages/auth/ResetPassword.jsx` - New component
- `src/store/slices/authSlice.js` - Added password reset actions
- `src/App.jsx` - Added routing
- `src/main.jsx` - Added React Router
- `src/pages/index.js` - Added exports

### Backend
- `src/controller/userController.js` - Added password reset functions
- `src/services/emailService.js` - Email functionality
- `src/model/userModel.js` - Added reset token fields
- `src/routes/userRoute.js` - Added password reset routes

## Dependencies Added
- `react-router-dom` - For frontend routing
- `nodemailer` - For email functionality (backend)

## Notes

- The system uses Redux for state management
- All components follow the existing design system
- Error handling is comprehensive
- Loading states are properly managed
- The implementation is production-ready 