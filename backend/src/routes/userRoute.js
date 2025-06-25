import express from 'express';
import { login, getMe, forgetPassword, initiatePasswordReset, resetPassword } from '../controller/userController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/login', login);
router.post('/forgot-password', initiatePasswordReset);
router.post('/reset-password/:token', resetPassword);
router.post('/forget-password/:token', forgetPassword); // Legacy endpoint for backward compatibility

// Protected routes
router.get('/me', protect, getMe);

export default router;