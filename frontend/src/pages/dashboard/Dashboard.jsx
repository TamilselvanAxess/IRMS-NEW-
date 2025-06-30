import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logout } from '../../store/slices/authSlice';
import { toggleTheme, selectIsDark } from '../../store/slices/themeSlice';
import ThemeToggle from '../../components/common/ThemeToggle';
import { LoadingScreen } from '../../components/common';
import { LogOut, User, Settings } from 'lucide-react';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const isDark = useAppSelector(selectIsDark);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    // Add a small delay to show the logout state
    setTimeout(() => {
      dispatch(logout());
    }, 300);
  };

  // Show loading screen if user is not authenticated (prevent flickering)
  if (!isAuthenticated) {
    return <LoadingScreen message="Redirecting to login..." variant="ring" />;
  }

  // Show loading screen during logout
  if (isLoggingOut) {
    return <LoadingScreen message="Logging out..." variant="ring" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                IRMS Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {user?.email || 'User'}
                </span>
              </div>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Welcome Card */}
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <User className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                        Welcome
                      </dt>
                      <dd className="text-lg font-medium text-gray-900 dark:text-white">
                        {user?.name || user?.email || 'User'}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Theme Status Card */}
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Settings className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                        Current Theme
                      </dt>
                      <dd className="text-lg font-medium text-gray-900 dark:text-white">
                        {isDark ? 'Dark' : 'Light'}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Authentication Status Card */}
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`h-6 w-6 rounded-full ${isAuthenticated ? 'bg-green-400' : 'bg-red-400'}`} />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                        Authentication
                      </dt>
                      <dd className="text-lg font-medium text-gray-900 dark:text-white">
                        {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Redux State Display */}
          <div className="mt-8 bg-white dark:bg-gray-800 shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
                Redux State
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Auth State
                  </h4>
                  <pre className="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto">
                    {JSON.stringify(
                      {
                        user: user ? { email: user.email, name: user.name } : null,
                        isAuthenticated,
                        hasToken: !!localStorage.getItem('token'),
                      },
                      null,
                      2
                    )}
                  </pre>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Theme State
                  </h4>
                  <pre className="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto">
                    {JSON.stringify(
                      {
                        theme: isDark ? 'dark' : 'light',
                        isDark,
                        isLight: !isDark,
                      },
                      null,
                      2
                    )}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 