import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Button, 
  Input, 
  Select, 
  Card, 
  Alert, 
  Checkbox, 
  Spinner,
  ThemeSelector
} from './index';
import ApiTest from './ApiTest';
import AuthStatus from './AuthStatus';
import RegisterForm from '../forms/RegisterForm';
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  Star, 
  Download, 
  Settings,
  Trash2,
  Plus
} from 'lucide-react';

const ComponentShowcase = () => {
  const { isDark, theme, branding, colorScheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    category: '',
    tags: [],
    notifications: false,
    terms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      addAlert('success', 'Form submitted successfully!');
    }, 2000);
  };

  const addAlert = (type, message) => {
    const newAlert = { id: Date.now(), type, message };
    setAlerts(prev => [...prev, newAlert]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      setAlerts(prev => prev.filter(alert => alert.id !== newAlert.id));
    }, 5000);
  };

  const removeAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const selectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'billing', label: 'Billing Question' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'modern', label: 'Modern' }
  ];

  const tagOptions = [
    { value: 'react', label: 'React' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'tailwind', label: 'Tailwind CSS' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'python', label: 'Python' },
    { value: 'javascript', label: 'JavaScript' }
  ];

  return (
    <div className={`min-h-screen p-4 sm:p-8 transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white' 
        : 'bg-gradient-to-br from-white via-gray-50 to-white text-gray-900'
    }`}>
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            isDark 
              ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent'
          }`}>
            Reusable Components Showcase
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            A comprehensive collection of modern, theme-aware React components
          </p>
        </div>

        {/* Theme Selector */}
        <div className="mb-8">
          <ThemeSelector />
        </div>

        {/* API Connection Test */}
        <div className="mb-8">
          <Card variant="glass">
            <Card.Header>
              <Card.Title>Backend API Connection</Card.Title>
              <Card.Subtitle>Test the connection to your backend server</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <ApiTest />
            </Card.Content>
          </Card>
        </div>

        {/* Authentication Status */}
        <div className="mb-8">
          <Card variant="glass">
            <Card.Header>
              <Card.Title>Authentication Status</Card.Title>
              <Card.Subtitle>Current Redux auth state and user information</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <AuthStatus />
            </Card.Content>
          </Card>
        </div>

        {/* Register Form */}
        <div className="mb-8">
          <Card variant="glass">
            <Card.Header>
              <Card.Title>Register Form</Card.Title>
              <Card.Subtitle>Form for user registration</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <RegisterForm />
            </Card.Content>
          </Card>
        </div>

        {/* Alerts Section */}
        <div className="mb-8">
          <Card variant="glass">
            <Card.Header>
              <Card.Title>Alert Components</Card.Title>
              <Card.Subtitle>Different types of notification alerts</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div className="space-y-4">
                <Alert type="success" title="Success!">
                  This is a success alert with a title and message.
                </Alert>
                <Alert type="error" title="Error Occurred">
                  This is an error alert showing what errors look like.
                </Alert>
                <Alert type="warning" title="Warning">
                  This is a warning alert for important notices.
                </Alert>
                <Alert type="info" title="Information">
                  This is an info alert for general information.
                </Alert>
                
                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    onClick={() => addAlert('success', 'Success message added!')}
                  >
                    Add Success
                  </Button>
                  <Button 
                    size="sm" 
                    variant="danger"
                    onClick={() => addAlert('error', 'Error message added!')}
                  >
                    Add Error
                  </Button>
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={() => addAlert('warning', 'Warning message added!')}
                  >
                    Add Warning
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => addAlert('info', 'Info message added!')}
                  >
                    Add Info
                  </Button>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Dynamic Alerts */}
        {alerts.length > 0 && (
          <div className="mb-8 space-y-2">
            {alerts.map(alert => (
              <Alert
                key={alert.id}
                type={alert.type}
                dismissible
                onDismiss={() => removeAlert(alert.id)}
              >
                {alert.message}
              </Alert>
            ))}
          </div>
        )}

        {/* Button Showcase */}
        <div className="mb-8">
          <Card variant="glass">
            <Card.Header>
              <Card.Title>Button Components</Card.Title>
              <Card.Subtitle>Various button styles and states</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div className="space-y-6">
                {/* Button Variants */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Button Variants</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary" icon={<Star className="w-4 h-4" />}>
                      Primary
                    </Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="success" icon={<Download className="w-4 h-4" />}>
                      Success
                    </Button>
                    <Button variant="danger" icon={<Trash2 className="w-4 h-4" />}>
                      Danger
                    </Button>
                  </div>
                </div>

                {/* Button Sizes */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Button Sizes</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>

                {/* Button States */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Button States</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button disabled>Disabled</Button>
                    <Button loading>Loading</Button>
                    <Button icon={<Settings className="w-4 h-4" />}>
                      With Icon
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Form Components */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Input Components */}
          <Card variant="glass">
            <Card.Header>
              <Card.Title>Input Components</Card.Title>
              <Card.Subtitle>Form inputs with various features</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <form className="space-y-6">
                <Input
                  label="Full Name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  icon={<User className="w-4 h-4" />}
                  variant="glass"
                />
                
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  icon={<Mail className="w-4 h-4" />}
                  variant="glass"
                />
                
                <Input
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  icon={<Lock className="w-4 h-4" />}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className={`p-1 rounded-md transition-colors ${
                        isDark 
                          ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50' 
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                      }`}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  }
                  variant="glass"
                />

                <Input
                  label="Username (with error)"
                  placeholder="Enter username"
                  error="Username is required"
                  icon={<User className="w-4 h-4" />}
                  variant="glass"
                />
              </form>
            </Card.Content>
          </Card>

          {/* Select Components */}
          <Card variant="glass">
            <Card.Header>
              <Card.Title>Select Components</Card.Title>
              <Card.Subtitle>Dropdown and multi-select components</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div className="space-y-6">
                <Select
                  label="Category"
                  name="category"
                  options={selectOptions}
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Select a category"
                  variant="glass"
                  clearable
                />

                <Select
                  label="Tags (Multi-select)"
                  name="tags"
                  options={tagOptions}
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="Select tags"
                  variant="glass"
                  multiple
                  searchable
                  maxItems={10}
                />

                <Select
                  label="Searchable Select"
                  options={tagOptions}
                  placeholder="Search and select..."
                  variant="glass"
                  searchable
                  clearable
                />
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Checkbox and Spinner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Checkbox Components */}
          <Card variant="glass">
            <Card.Header>
              <Card.Title>Checkbox Components</Card.Title>
              <Card.Subtitle>Form checkboxes with validation</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div className="space-y-4">
                <Checkbox
                  name="notifications"
                  checked={formData.notifications}
                  onChange={(e) => setFormData({...formData, notifications: e.target.checked})}
                  label="Receive email notifications"
                  variant="glass"
                />
                
                <Checkbox
                  name="terms"
                  checked={formData.terms}
                  onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                  label="I agree to the terms and conditions"
                  variant="glass"
                />

                <Checkbox
                  label="Required field (with error)"
                  error="This field is required"
                  variant="glass"
                />

                <Checkbox.Group>
                  <Checkbox label="Option 1" />
                  <Checkbox label="Option 2" />
                  <Checkbox label="Option 3" />
                </Checkbox.Group>
              </div>
            </Card.Content>
          </Card>

          {/* Spinner Components */}
          <Card variant="glass">
            <Card.Header>
              <Card.Title>Spinner Components</Card.Title>
              <Card.Subtitle>Loading indicators and animations</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3">Spinner Variants</h4>
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="text-center">
                      <Spinner variant="ring" />
                      <p className="text-xs mt-2">Ring</p>
                    </div>
                    <div className="text-center">
                      <Spinner variant="dots" />
                      <p className="text-xs mt-2">Dots</p>
                    </div>
                    <div className="text-center">
                      <Spinner variant="pulse" />
                      <p className="text-xs mt-2">Pulse</p>
                    </div>
                    <div className="text-center">
                      <Spinner variant="bars" />
                      <p className="text-xs mt-2">Bars</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Spinner Sizes</h4>
                  <div className="flex flex-wrap items-center gap-4">
                    <Spinner size="xs" />
                    <Spinner size="sm" />
                    <Spinner size="md" />
                    <Spinner size="lg" />
                    <Spinner size="xl" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">With Text</h4>
                  <Spinner text="Loading data..." />
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Form Submission */}
        <div className="mb-8">
          <Card variant="glass">
            <Card.Header>
              <Card.Title>Form Submission</Card.Title>
              <Card.Subtitle>Complete form with all components</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    icon={<User className="w-4 h-4" />}
                    variant="glass"
                    required
                  />
                  
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    icon={<Mail className="w-4 h-4" />}
                    variant="glass"
                    required
                  />
                </div>

                <Select
                  label="Category"
                  name="category"
                  options={selectOptions}
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Select a category"
                  variant="glass"
                  required
                />

                <div className="space-y-4">
                  <Checkbox
                    name="notifications"
                    checked={formData.notifications}
                    onChange={(e) => setFormData({...formData, notifications: e.target.checked})}
                    label="Receive email notifications"
                    variant="glass"
                  />
                  
                  <Checkbox
                    name="terms"
                    checked={formData.terms}
                    onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                    label="I agree to the terms and conditions"
                    variant="glass"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  loading={loading}
                  className="w-full"
                  icon={loading ? <Spinner /> : <Plus className="w-4 h-4" />}
                >
                  {loading ? 'Submitting...' : 'Submit Form'}
                </Button>
              </form>
            </Card.Content>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center">
          <Card variant="glass">
            <Card.Content>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Current theme: <span className="font-semibold">{theme}</span> | 
                Branding: <span className="font-semibold">{branding}</span> | 
                Colors: <span className="font-semibold">{colorScheme}</span>
              </p>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase; 