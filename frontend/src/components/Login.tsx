import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Users, Mail, Lock } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store';
import { loginUser, forgotPassword, clearError } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuthenticated } = useAppSelector((state) => state.auth);
  
  const [values, setValues] = useState<Record<string, string>>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      toast.success('Login successful!');
      // You can navigate to a dashboard or home page here
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const fields = [
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      icon: <Mail className="w-5 h-5" />,
      validation: (value: string) => {
        if (!value) return 'Email is required'
        if (!/\S+@\S+\.\S+/.test(value)) return 'Email is invalid'
        return ''
      }
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      icon: <Lock className="w-5 h-5" />,
      validation: (value: string) => {
        if (!value) return 'Password is required'
        if (value.length < 6) return 'Password must be at least 6 characters'
        return ''
      }
    }
  ];

  // Clear error when component mounts
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  // Validate all fields
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    fields.forEach(field => {
      if (field.validation) {
        const error = field.validation(values[field.name]);
        if (error) newErrors[field.name] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name: string, value: string) => {
    setValues(v => ({ ...v, [name]: value }));
    setErrors(e => ({ ...e, [name]: '' }));
    // Clear Redux error when user starts typing
    if (error) {
      dispatch(clearError());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    dispatch(loginUser(values as { email: string; password: string }))
      .unwrap()
      .then(() => {
        toast.success('Logged in successfully!');
      })
      .catch((err) => {
        toast.error(err || 'Login failed');
      });
  };

  const handleForgetPassword = async () => {
    if (!forgotPasswordEmail) {
      setForgotPasswordMessage('Please enter your email address');
      toast.error('Please enter your email address');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(forgotPasswordEmail)) {
      setForgotPasswordMessage('Please enter a valid email address');
      toast.error('Please enter a valid email address');
      return;
    }

    setForgotPasswordLoading(true);
    setForgotPasswordMessage('');
    
    try {
      const result = await dispatch(forgotPassword(forgotPasswordEmail)).unwrap();
      setForgotPasswordMessage(result.message);
      toast.success(result.message || 'Reset link sent!');
      if (result.previewUrl) {
        console.log('Email preview URL:', result.previewUrl);
      }
    } catch (error) {
      setForgotPasswordMessage(error as string);
      toast.error(error as string);
    } finally {
      setForgotPasswordLoading(false);
    }
  };

  if (showForgotPassword) {
    return (
      <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0 rotate-180 top-[-50%]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
            style={{
              pointerEvents: 'none',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)',
            }}
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>
        </div>

        {/* Content */}
        <main className="absolute inset-0 z-50 w-full h-full flex items-center justify-center lg:justify-around p-4">
          <div className="hidden lg:block w-1/3">
            <img src="https://v-accel.ai/hero-bg.svg" alt="description" className="w-full h-auto" />
          </div>
          <div className="bg-white/0 border border-white/10 p-8 rounded-2xl shadow-3xl flex flex-col gap-4 min-w-[320px] max-w-[90vw] w-full sm:w-[400px]">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Forgot Password
              </h1>
              <p className="text-gray-400">Enter your email to reset your password</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  className="w-full pl-10 pr-4 bg-transparent text-gray-500 backdrop-blur-lg shadow-inner py-3 border border-gray-700 rounded-lg focus:outline-none transition-all duration-200"
                  placeholder="Enter your email"
                  required
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500">
                  <Mail className="w-5 h-5" />
                </span>
              </div>
            </div>

            {forgotPasswordMessage && (
              <div className={`p-3 rounded text-sm ${
                forgotPasswordMessage.includes('successfully') 
                  ? 'bg-green-100 border border-green-400 text-green-700' 
                  : 'bg-red-100 border border-red-400 text-red-700'
              }`}>
                {forgotPasswordMessage}
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
                className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200"
              >
                Back to Login
              </button>
              <button
                type="button"
                onClick={handleForgetPassword}
                disabled={forgotPasswordLoading}
                className="flex-1 bg-gradient-to-r to-blue-600 from-purple-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {forgotPasswordLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Reset Link'
                )}
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 rotate-180 top-[-50%]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
          style={{
            pointerEvents: 'none',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)',
          }}
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>

      {/* Content */}
      <main className="absolute inset-0 z-50 w-full h-full flex items-center justify-center lg:justify-around p-4">
        <div className="hidden lg:block w-1/3">
          <img src="https://v-accel.ai/hero-bg.svg" alt="description" className="w-full h-auto" />
        </div>
        <form
          className="bg-white/0 border border-white/10 p-8 rounded-2xl shadow-3xl flex flex-col gap-4 min-w-[320px] max-w-[90vw] w-full sm:w-[400px]"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-gray-400">Sign in to your account</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          
          {fields.map(field => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-500 mb-2">
                {field.label}
              </label>
              <div className="relative">
                <input
                  type={
                    field.type === 'password'
                      ? showPassword
                        ? 'text'
                        : 'password'
                      : field.type
                  }
                  value={values[field.name]}
                  onChange={e => handleChange(field.name, e.target.value)}
                  className={`w-full pl-10 pr-4 bg-transparent text-gray-500 backdrop-blur-lg shadow-inner py-3 border border-gray-700 rounded-lg focus:outline-none transition-all duration-200 ${errors[field.name] ? 'border-red-500' : ''
                    }`}
                  placeholder={field.placeholder}
                  required
                />
                {field.icon && (
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500">
                    {field.icon}
                  </span>
                )}
                {field.type === 'password' && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(s => !s)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                )}
              </div>
              {errors[field.name] && (
                <p className="text-xs text-red-500 mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}
          
          {/* Forgot password option */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors font-medium"
              onClick={() => setShowForgotPassword(true)}
            >
              Forgot password?
            </button>
          </div>
          
          <button
            type="submit"
            className="w-full mt-5 bg-gradient-to-r to-blue-600 from-purple-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:shadow-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 hover:shadow-xl border-t-transparent rounded-full animate-spin mr-2"></div>
                Signing in...
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;