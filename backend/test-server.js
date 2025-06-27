import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock user data
const mockUsers = [
  {
    id: '1',
    username: 'testuser',
    email: 'test@example.com',
    password: 'password123' // In real app, this would be hashed
  }
];

// JWT secret
const JWT_SECRET = 'test-secret-key';

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: '1d',
  });
};

// Mock authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = mockUsers.find(u => u.id === decoded.id);
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Test server is running!' });
});

// Login endpoint
app.post('/api/user/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = mockUsers.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user);

  res.json({
    message: 'Login successful',
    user: {
      id: user.id,
      name: user.username,
      email: user.email,
    },
    token: token,
  });
});

// Register endpoint
app.post('/api/user/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Username, email, and password are required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  // Check if user already exists
  const existingUser = mockUsers.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User with this email already exists' });
  }

  // Create new user
  const newUser = {
    id: (mockUsers.length + 1).toString(),
    username,
    email,
    password
  };

  mockUsers.push(newUser);

  const token = generateToken(newUser);

  res.status(201).json({
    message: 'Registration successful',
    user: {
      id: newUser.id,
      name: newUser.username,
      email: newUser.email,
    },
    token: token,
  });
});

// Get current user endpoint
app.get('/api/user/me', authenticateToken, (req, res) => {
  res.json({
    message: 'User retrieved successfully',
    user: {
      id: req.user.id,
      name: req.user.username,
      email: req.user.email,
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET  / - Test connection');
  console.log('  POST /api/user/login - Login');
  console.log('  POST /api/user/register - Register');
  console.log('  GET  /api/user/me - Get current user (requires auth)');
}); 