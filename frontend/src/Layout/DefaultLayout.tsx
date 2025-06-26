import React, { useState } from "react";
import { LogOut, HelpCircle, Menu, Home, Users, FileText, BarChart3, UserCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import type { AppDispatch } from "../store";
import toast from 'react-hot-toast';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface User {
  role?: string;
  fullName?: string;
  avatarUrl?: string;
}

interface RootState {
  auth: {
    user: User;
  };
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const getPageTitle = () => {
    const path = location.pathname;
    switch (path) {
      case "/adminDashboard":
        return "Analytics Dashboard";
      case "/candidatesTable":
        return "Dashboard";
      case "/enrollForm":
        return "Enrolment Form";
      case "/allUsers":
        return "Users List";
      case "/participantDashboard":
        return "Participants";
      case "/help":
        return "Help & Support";
      default:
        return "Dashboard";
    }
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = async () => {
    try {
      console.log('Starting logout process...');
      
      // Use the simple logout action for immediate state clearing
      dispatch(logout());
      
      // Show success message
      toast.success('Logged out successfully');
      
      // Navigate to login page
      navigate("/login", { replace: true });
      setShowLogoutModal(false);
    } catch (error) {
      console.error("Logout error:", error);
      // Fallback: manually clear everything
      localStorage.removeItem('token');
      toast.error('Logout failed, but you have been signed out');
      navigate("/login", { replace: true });
      setShowLogoutModal(false);
    }
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const userRole = user?.role || "";

  const menuItems: MenuItem[] = [
    {
      id: "analytics-dashboard",
      label: "Analytics Dashboard",
      icon: <BarChart3 size={20} />,
      path: "/adminDashboard",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Home size={20} />,
      path: "/candidatesTable",
    },
    {
      id: "participants",
      label: "Participants",
      icon: <UserCheck size={20} />,
      path: "/participantDashboard",
    },
    {
      id: "users-list",
      label: "Users List",
      icon: <Users size={20} />,
      path: "/allUsers",
    },
    ...(userRole === "enroll" || userRole === "detail"
      ? [
          {
            id: "new-candidate",
            label: "New Candidate",
            icon: <FileText size={20} />,
            path: "/enrollForm",
          },
        ]
      : []),
  ];

  const handleMenuClick = (item: MenuItem) => {
    navigate(item.path);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <div
        className={`bg-white shadow-xl flex flex-col transition-all duration-300 ease-in-out ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Logo Section */}
        <div className="h-20 flex items-center justify-center border-b border-gray-100 px-4">
          <div className="flex items-center justify-center w-full">
            <div className={`transition-all duration-300 ${
              sidebarOpen ? "h-10 w-auto" : "h-8 w-auto"
            }`}>
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xl px-4 py-2 rounded-lg">
                {sidebarOpen ? "IRMS" : "I"}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 px-4 py-6 flex flex-col space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={item.id}
                onClick={() => handleMenuClick(item)}
                className={`group relative flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-200 ${
                  isActive ? "scale-110" : "group-hover:scale-105"
                }`}>
                  {item.icon}
                </div>
                {sidebarOpen && (
                  <span className="text-sm font-medium whitespace-nowrap overflow-hidden">
                    {item.label}
                  </span>
                )}
                {!sidebarOpen && (
                  <div className="absolute left-20 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-lg">
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="px-4 py-4 border-t border-gray-100">
          <div className="flex flex-col space-y-2">
            <div
              onClick={toggleSidebar}
              className="group flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer hover:bg-gray-50 transition-all duration-200"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <Menu size={20} className="text-gray-500 group-hover:text-gray-700 transition-colors" />
              </div>
              {sidebarOpen && (
                <span className="text-sm text-gray-700 font-medium">Toggle Sidebar</span>
              )}
              {!sidebarOpen && (
                <div className="absolute left-20 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-lg">
                  Toggle Sidebar
                </div>
              )}
            </div>

            <div
              onClick={() => navigate("/help")}
              className="group flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer hover:bg-gray-50 transition-all duration-200"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <HelpCircle size={20} className="text-gray-500 group-hover:text-gray-700 transition-colors" />
              </div>
              {sidebarOpen && (
                <span className="text-sm text-gray-700 font-medium">Get Help</span>
              )}
              {!sidebarOpen && (
                <div className="absolute left-20 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-lg">
                  Get Help
                </div>
              )}
            </div>

            <div
              onClick={handleLogoutClick}
              className="group flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer hover:bg-red-50 hover:text-red-600 transition-all duration-200"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <LogOut size={20} className="text-gray-500 group-hover:text-red-600 transition-colors" />
              </div>
              {sidebarOpen && (
                <span className="text-sm text-gray-700 font-medium group-hover:text-red-600">Log Out</span>
              )}
              {!sidebarOpen && (
                <div className="absolute left-20 bg-red-600 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-lg">
                  Log Out
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Header */}
        <header className="h-20 bg-white shadow-lg flex items-center justify-between px-8 sticky top-0 z-20 rounded-b-3xl mx-4 mt-4 border border-gray-200">
          <div className="flex items-center gap-5">
            {!sidebarOpen && (
              <button
                onClick={toggleSidebar}
                className="p-2 hover:bg-gray-100 text-gray-600 rounded-xl transition duration-200 cursor-pointer"
                aria-label="Open sidebar"
              >
                <Menu size={24} />
              </button>
            )}
            <div className="leading-none">
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-wide">
                {getPageTitle()}
              </h1>
              <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-1"></div>
            </div>
          </div>

          {/* User Profile and Notifications */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            {/* <div className="relative">
              <button className="p-2 hover:bg-gray-100 text-gray-600 rounded-xl transition duration-200">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
            </div> */}

            {/* User Profile */}
            <div className="flex items-center gap-4 pr-2">
              <div className="relative">
                <img
                  src={user?.avatarUrl || "https://i.pravatar.cc/40"}
                  alt="Profile"
                  className="w-11 h-11 rounded-full object-cover border-2 border-gray-300 shadow"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user?.fullName || "User"
                    )}&background=6366f1&color=fff&size=40`;
                  }}
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white shadow"></span>
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-base font-semibold text-gray-900">
                  {user?.fullName || "User"}
                </span>
                <span className="text-sm text-gray-500">
                  {userRole === "enroll"
                    ? "Enrollment User"
                    : userRole === "superadmin"
                    ? "Super Admin"
                    : userRole === "admin"
                    ? "Admin"
                    : userRole === "finance"
                    ? "Finance"
                    : "User"}
                </span>
              </div>
              {/* <ChevronDown size={16} className="text-gray-400" /> */}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50 min-h-0">
          {children}
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <LogOut size={20} className="text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Confirm Logout</h3>
                <p className="text-sm text-gray-500">Are you sure you want to logout?</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              You will need to sign in again to access your account.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleLogoutCancel}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition duration-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleLogoutConfirm}
                className="flex-1 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg font-medium transition duration-200 cursor-pointer"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
