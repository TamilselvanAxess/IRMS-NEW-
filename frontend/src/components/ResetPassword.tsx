import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock, ArrowLeft } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store';
import { resetPassword, clearError } from '../store/slices/authSlice';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ResetPassword: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  
  const [values, setValues] = useState<Record<string, string>>({
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const fields = [
    {
      name: 'password',
      type: 'password',
      label: 'New Password',
      placeholder: 'Enter your new password',
      icon: <Lock className="w-5 h-5" />,
      validation: (value: string) => {
        if (!value) return 'Password is required'
        if (value.length < 6) return 'Password must be at least 6 characters'
        return ''
      }
    },
    {
      name: 'confirmPassword',
      type: 'password',
      label: 'Confirm Password',
      placeholder: 'Confirm your new password',
      icon: <Lock className="w-5 h-5" />,
      validation: (value: string) => {
        if (!value) return 'Please confirm your password'
        if (value !== values.password) return 'Passwords do not match'
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    if (!token) {
      setErrors({ confirmPassword: 'Reset token is missing' });
      toast.error('Reset token is missing');
      return;
    }

    try {
      const result = await dispatch(resetPassword({ token, password: values.password })).unwrap();
      setSuccessMessage(result.message);
      toast.success(result.message || 'Password reset successful!');
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      // Error is handled by Redux
      toast.error(error as string);
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

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
        <div className="bg-white/0 border border-white/10 p-8 rounded-2xl shadow-3xl flex flex-col gap-4 min-w-[320px] max-w-[90vw] w-full sm:w-[400px] relative">
          {/* Back Button */}
          <button
            onClick={handleBackToLogin}
            className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Login
          </button>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Reset Password
            </h1>
            <p className="text-gray-400">Enter your new password</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              {successMessage}
              <p className="text-sm mt-2">Redirecting to login page...</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} noValidate>
            {fields.map(field => (
              <div key={field.name} className="mb-4">
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    type={
                      field.type === 'password'
                        ? (field.name === 'password' ? showPassword : showConfirmPassword)
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
                      onClick={() => {
                        if (field.name === 'password') {
                          setShowPassword(s => !s);
                        } else {
                          setShowConfirmPassword(s => !s);
                        }
                      }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-600 transition-colors"
                    >
                      {(field.name === 'password' ? showPassword : showConfirmPassword) ? 
                        <EyeOff className="w-5 h-5" /> : 
                        <Eye className="w-5 h-5" />
                      }
                    </button>
                  )}
                </div>
                {errors[field.name] && (
                  <p className="text-xs text-red-500 mt-1">{errors[field.name]}</p>
                )}
              </div>
            ))}
            
            <button
              type="submit"
              className="w-full mt-5 bg-gradient-to-r to-blue-600 from-purple-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:shadow-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || !!successMessage}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 hover:shadow-xl border-t-transparent rounded-full animate-spin mr-2"></div>
                  Resetting Password...
                </div>
              ) : (
                'Reset Password'
              )}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ResetPassword; 