# Full-Stack Authentication App

A modern React + Node.js application with Redux state management, MongoDB database, and JWT authentication.

## 🏗️ Project Structure

```
├── frontend/          # React + TypeScript + Redux + Vite
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── store/         # Redux store and slices
│   │   └── services/      # API service layer
└── backend/           # Node.js + Express + MongoDB
    ├── src/
    │   ├── config/        # Database configuration
    │   ├── controller/    # Route controllers
    │   ├── middleware/    # Authentication middleware
    │   ├── model/         # MongoDB models
    │   ├── routes/        # API routes
    │   └── services/      # Email services
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### 1. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
node setup-env.js

# Edit .env file with your configuration
# - MONGO_URI: Your MongoDB connection string
# - JWT_SECRET: A strong secret key
# - EMAIL_*: Email configuration (optional)

# Create test user
node create-test-user.js

# Start development server
npm run dev
```

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Configuration

### Backend Environment Variables (.env)

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/your_database_name
JWT_SECRET=your_super_secret_jwt_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
EMAIL_FROM=noreply@yourapp.com
```

### Frontend Configuration

The frontend is configured to connect to `http://localhost:3000/api` by default. You can modify this in `src/services/api.ts`.

## 🗄️ Database Setup

### MongoDB Local Setup

1. Install MongoDB locally or use MongoDB Atlas
2. Update `MONGO_URI` in your `.env` file
3. Run the test user creation script: `node create-test-user.js`

### Test Credentials

After running the setup script, you can test with:
- **Email:** `test@example.com`
- **Password:** `password123`

## 🔐 Authentication Features

### Backend API Endpoints

- `POST /api/user/login` - User login
- `GET /api/user/me` - Get current user (protected)
- `POST /api/user/forgot-password` - Initiate password reset
- `POST /api/user/reset-password/:token` - Reset password with token

### Frontend Features

- ✅ User login with validation
- ✅ JWT token management
- ✅ Redux state management
- ✅ Protected routes
- ✅ Forgot password functionality
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling

## 🛠️ Development

### Backend Development

```bash
cd backend
npm run dev  # Starts with nodemon for auto-reload
```

### Frontend Development

```bash
cd frontend
npm run dev  # Starts Vite dev server
```

### Database Operations

```bash
# Create test user
node create-test-user.js

# View database (using MongoDB Compass or mongo shell)
mongo your_database_name
```

## 📁 Key Files

### Backend
- `server.js` - Main server file
- `src/config/db.js` - Database connection
- `src/middleware/auth.js` - JWT authentication middleware
- `src/controller/userController.js` - User authentication logic
- `src/model/userModel.js` - User database schema

### Frontend
- `src/App.tsx` - Main application component
- `src/components/Login.tsx` - Login form component
- `src/store/slices/authSlice.ts` - Redux authentication slice
- `src/services/api.ts` - API service layer

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcrypt
- Protected API routes
- CORS configuration
- Input validation
- Error handling

## 🧪 Testing

1. Start both backend and frontend servers
2. Navigate to `http://localhost:5173` (or your frontend port)
3. Use test credentials to login
4. Test forgot password functionality
5. Check browser console for API responses

## 🚀 Production Deployment

### Backend
- Set up environment variables
- Use a production MongoDB instance
- Configure proper CORS settings
- Set up SSL/TLS certificates

### Frontend
- Build the application: `npm run build`
- Deploy to a static hosting service
- Update API base URL for production

## 📝 Notes

- The backend runs on port 3000 by default
- The frontend runs on port 5173 by default (Vite)
- JWT tokens are stored in localStorage
- Email functionality requires proper SMTP configuration
- For production, use environment variables for all secrets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE). 