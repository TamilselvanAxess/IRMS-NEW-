import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter for Gmail (primary option)
const createGmailTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Create transporter for Outlook/Hotmail (alternative option)
const createOutlookTransporter = () => {
  return nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Create transporter for Yahoo (alternative option)
const createYahooTransporter = () => {
  return nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Create generic SMTP transporter
const createGenericTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Get the appropriate transporter based on email configuration
const getTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email credentials not configured. Please set EMAIL_USER and EMAIL_PASS environment variables.');
  }

  if (process.env.EMAIL_USER.includes('@gmail.com')) {
    return { transporter: createGmailTransporter(), service: 'Gmail' };
  } else if (process.env.EMAIL_USER.includes('@outlook.com') || process.env.EMAIL_USER.includes('@hotmail.com')) {
    return { transporter: createOutlookTransporter(), service: 'Outlook' };
  } else if (process.env.EMAIL_USER.includes('@yahoo.com')) {
    return { transporter: createYahooTransporter(), service: 'Yahoo' };
  } else {
    return { transporter: createGenericTransporter(), service: 'SMTP' };
  }
};

export const sendPasswordResetEmail = async (email, resetToken) => {
  try {
    const { transporter, service } = getTransporter();
    console.log(`Using ${service} to send email to: ${email}`);

    const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/reset-password/${resetToken}`;
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset Request',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { 
              display: inline-block; 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
              color: white; 
              padding: 12px 30px; 
              text-decoration: none; 
              border-radius: 5px; 
              margin: 20px 0;
              font-weight: bold;
            }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .warning { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Password Reset Request</h1>
            </div>
            <div class="content">
              <p>Hello,</p>
              <p>We received a request to reset your password. If you didn't make this request, you can safely ignore this email.</p>
              
              <div class="warning">
                <strong>⚠️ Security Notice:</strong> This link will expire in 1 hour for your security.
              </div>
              
              <p>To reset your password, click the button below:</p>
              <center>
                <a href="${resetUrl}" class="button">Reset Password</a>
              </center>
              
              <p>Or copy and paste this link into your browser:</p>
              <p style="word-break: break-all; background: #e9ecef; padding: 10px; border-radius: 5px; font-family: monospace;">
                ${resetUrl}
              </p>
              
              <p>If you have any questions, please contact our support team.</p>
              <p>Best regards,<br>Your App Team</p>
            </div>
            <div class="footer">
              <p>This is an automated message, please do not reply to this email.</p>
              <p>&copy; 2024 Your App. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Password Reset Request
        
        Hello,
        
        We received a request to reset your password. If you didn't make this request, you can safely ignore this email.
        
        To reset your password, visit the following link:
        ${resetUrl}
        
        This link will expire in 1 hour for your security.
        
        If you have any questions, please contact our support team.
        
        Best regards,
        Your App Team
      `
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log(`✅ Password reset email sent successfully via ${service}`);
    console.log(`📧 Email sent to: ${email}`);
    console.log(`📧 Message ID: ${info.messageId}`);
    
    return {
      success: true,
      messageId: info.messageId,
      emailService: service,
      sentTo: email
    };
  } catch (error) {
    console.error('❌ Error sending password reset email:', error.message);
    throw new Error(`Failed to send password reset email: ${error.message}`);
  }
};

export const sendPasswordResetConfirmation = async (email) => {
  try {
    const { transporter, service } = getTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset Successful',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .success { background: #d4edda; border: 1px solid #c3e6cb; padding: 15px; border-radius: 5px; margin: 20px 0; color: #155724; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Password Reset Successful</h1>
            </div>
            <div class="content">
              <div class="success">
                <strong>Success!</strong> Your password has been reset successfully.
              </div>
              
              <p>Hello,</p>
              <p>This email confirms that your password has been successfully reset.</p>
              <p>You can now log in to your account using your new password.</p>
              
              <p>If you didn't request this password reset, please contact our support team immediately.</p>
              
              <p>Best regards,<br>Your App Team</p>
            </div>
            <div class="footer">
              <p>This is an automated message, please do not reply to this email.</p>
              <p>&copy; 2024 Your App. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Password reset confirmation email sent via ${service}`);
    console.log(`📧 Email sent to: ${email}`);
    
    return {
      success: true,
      messageId: info.messageId,
      emailService: service,
      sentTo: email
    };
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error.message);
    throw new Error(`Failed to send confirmation email: ${error.message}`);
  }
}; 