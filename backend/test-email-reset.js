import dotenv from 'dotenv';
import { sendPasswordResetEmail } from './src/services/emailService.js';

dotenv.config();

const testEmailReset = async () => {
  try {
    console.log('🧪 Testing email reset functionality...');
    console.log('📧 Email configuration:');
    console.log(`   - EMAIL_USER: ${process.env.EMAIL_USER}`);
    console.log(`   - FRONTEND_URL: ${process.env.FRONTEND_URL}`);
    console.log(`   - JWT_SECRET: ${process.env.JWT_SECRET ? 'Set' : 'Not set'}`);
    
    // Test email
    const testEmail = process.env.EMAIL_USER || 'test@example.com';
    const testToken = 'test-reset-token-123456';
    
    console.log(`\n📤 Sending test email to: ${testEmail}`);
    
    const result = await sendPasswordResetEmail(testEmail, testToken);
    
    console.log('\n✅ Email test successful!');
    console.log('📧 Result:', result);
    
    if (result.previewUrl) {
      console.log(`🔗 Email preview URL: ${result.previewUrl}`);
    }
    
  } catch (error) {
    console.error('\n❌ Email test failed:', error.message);
    console.log('\n🔧 Troubleshooting tips:');
    console.log('1. Check your EMAIL_USER and EMAIL_PASS in .env');
    console.log('2. For Gmail, use an App Password instead of your regular password');
    console.log('3. Enable "Less secure app access" or use 2FA with App Password');
    console.log('4. Check if your email provider allows SMTP access');
  }
};

testEmailReset(); 