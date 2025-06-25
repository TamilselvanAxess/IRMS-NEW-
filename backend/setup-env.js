import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, '.env');

const envContent = `PORT=3001
MONGO_URI=mongodb://localhost:27017/your_database_name
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
EMAIL_FROM=noreply@yourapp.com

# Instructions:
# 1. Replace 'your_database_name' with your actual MongoDB database name
# 2. Replace 'your_super_secret_jwt_key_here_change_this_in_production' with a strong secret key
# 3. For email functionality, update EMAIL_USER, EMAIL_PASS, and EMAIL_FROM
# 4. For production, use environment variables or a secure configuration management system
`;

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file created successfully!');
  console.log('📝 Please update the .env file with your actual values:');
  console.log('   - MONGO_URI: Your MongoDB connection string');
  console.log('   - JWT_SECRET: A strong secret key for JWT tokens');
  console.log('   - EMAIL_*: Your email configuration (optional)');
} else {
  console.log('⚠️  .env file already exists. Skipping creation.');
}

console.log('\n🚀 To start the backend server:');
console.log('   cd backend');
console.log('   npm run dev'); 