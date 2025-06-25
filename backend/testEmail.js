import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const testEmail = async () => {
  try {
    console.log('Testing email configuration...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Configured' : 'Not configured');
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Configured' : 'Not configured');
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('\n❌ Email credentials not configured!');
      console.log('Please set EMAIL_USER and EMAIL_PASS environment variables.');
      console.log('Follow the EMAIL_SETUP.md guide to configure your email service.');
      return;
    }
    
    // Determine email service based on email address
    let transporter;
    let serviceName = 'Unknown';
    
    if (process.env.EMAIL_USER.includes('@gmail.com')) {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });
      serviceName = 'Gmail';
    } else if (process.env.EMAIL_USER.includes('@outlook.com') || process.env.EMAIL_USER.includes('@hotmail.com')) {
      transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });
      serviceName = 'Outlook';
    } else if (process.env.EMAIL_USER.includes('@yahoo.com')) {
      transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });
      serviceName = 'Yahoo';
    } else {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: process.env.SMTP_PORT || 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });
      serviceName = 'SMTP';
    }
    
    // Verify connection
    await transporter.verify();
    console.log(`✅ ${serviceName} SMTP connection successful!`);
    
    // Send test email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself for testing
      subject: 'Test Email - Password Reset System',
      html: `
        <h2>✅ Email System Working!</h2>
        <p>Your password reset email system is now configured and working with ${serviceName}.</p>
        <p>You can now receive password reset emails in your inbox.</p>
        <p><strong>Test completed at:</strong> ${new Date().toLocaleString()}</p>
      `
    });
    
    console.log(`✅ Test email sent successfully to your ${serviceName} inbox!`);
    console.log('Message ID:', info.messageId);
    
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\n🔧 Troubleshooting:');
      console.log('1. Make sure 2-Factor Authentication is enabled on your email account');
      console.log('2. Generate an App Password (not your regular password)');
      console.log('3. Check that EMAIL_USER and EMAIL_PASS are correct in .env');
      console.log('4. For Gmail: Use App Password from Google Account settings');
      console.log('5. For Outlook: Use App Password from Microsoft Account settings');
    }
  }
};

testEmail(); 