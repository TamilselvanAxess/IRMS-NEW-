import bcrypt from 'bcryptjs';
import connectDB from './src/config/db.js';
import User from './src/model/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

const createTestUser = async () => {
  try {
    await connectDB();
    
    // Check if test user already exists
    const existingUser = await User.findOne({ email: 'test@example.com' });
    
    if (existingUser) {
      console.log('✅ Test user already exists:');
      console.log('   Email: test@example.com');
      console.log('   Password: password123');
      return;
    }

    // Create test user
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    const testUser = new User({
      username: 'Test User',
      email: 'test@example.com',
      password: hashedPassword,
    });

    await testUser.save();
    
    console.log('✅ Test user created successfully!');
    console.log('📧 Email: test@example.com');
    console.log('🔑 Password: password123');
    console.log('\n💡 You can now test the login functionality with these credentials.');
    
  } catch (error) {
    console.error('❌ Error creating test user:', error.message);
  } finally {
    process.exit(0);
  }
};

createTestUser(); 