import React, { useState } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "./SideBar";
import { LogOut, HelpCircle, Menu, ChevronDown } from "lucide-react";
import { FaUsersGear } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { LuRotateCwSquare } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/slices/authSlice";
import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";

export default function DefaultLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
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

  const handleLogoutConfirm = () => {
    try {
      dispatch(logoutUser());
      navigate("/login");
      showSuccessToast("Logged out successfully!");
      setShowLogoutModal(false);
    } catch (error) {
      showErrorToast("Error logging out");
      console.error("Logout error:", error);
      setShowLogoutModal(false);
    }
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const iconSize = 26;

  // Ensure user object exists before accessing properties
  const userRole = user?.role || "";

  const menuItems = [
    ...(userRole === "superadmin" || userRole === "finance" || userRole === "admin"
      ? [
          {
            id: "dashboard",
            label: "Analytics Dashboard",
            icon: <MdDashboard size={iconSize} />,
            path: "/adminDashboard",
          },
        ]
      : []),
    {
      id: "dashboard2",
      label: "Dashboard",
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
      path: "/candidatesTable",
    },
    ...(userRole === "enroll" || userRole == "detail"
      ? [
          {
            id: "new-candidate",
            label: "New Candidate",
            icon: (
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            path: "/enrollForm",
          },
        ]
      : []),
    ...(userRole === "superadmin" || userRole === "admin"
      ? [
          {
            id: "users-list",
            label: "Users List",
            icon: <FaUsersGear size={iconSize} />,
            path: "/allUsers",
          },
          {
            id: "participants",
            label: "Participants",
            icon: <LuRotateCwSquare size={iconSize} />,
            path: "/participantDashboard",
          },
        ]
      : []),
  ];

  const handleMenuClick = (item) => {
    navigate(item.path);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <div
          className={`bg-white shadow-lg flex flex-col transition-all duration-300 ease-in-out rounded-r-[32px] border-r border-gray-100 ${
            sidebarOpen ? "w-64" : "w-20"
          }`}
        >
          <SidebarHeader className="h-24 flex items-center justify-center border-b border-gray-100 px-4">
            <div className="flex items-center justify-center w-full">
              {/* Placeholder Logo */}
              <div className={`flex items-center justify-center transition-all duration-300 ${
                sidebarOpen ? "h-12 w-auto" : "h-16 w-auto"
              }`}>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-xl px-4 py-2 rounded-lg">
                  {sidebarOpen ? "IRMS" : "I"}
                </div>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent className="flex-1 px-4 py-6 flex flex-col space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <div
                  key={item.id}
                  onClick={() => handleMenuClick(item)}
                  className={`group flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                      : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
                  }`}
                >
                  <div
                    className={`w-6 h-6 flex items-center justify-center transition-transform duration-200 ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  >
                    {React.cloneElement(item.icon, { size: 20 })}
                  </div>
                  {sidebarOpen && (
                    <span className="text-sm font-semibold whitespace-nowrap overflow-hidden">
                      {item.label}
                    </span>
                  )}
                  {!sidebarOpen && (
                    <div className="absolute left-20 bg-gray-900 text-white px-2 py-1 rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                      {item.label}
                    </div>
                  )}
                </div>
              );
            })}
          </SidebarContent>

          <SidebarFooter className="px-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              <div
                onClick={toggleSidebar}
                className="group flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer hover:bg-gray-50 transition-all duration-200"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <Menu size={20} className="text-gray-500 group-hover:text-gray-700 transition-colors" />
                </div>
                {sidebarOpen && (
                  <span className="text-sm text-gray-700 font-medium">Toggle Sidebar</span>
                )}
              </div>

              <div
                onClick={() => navigate("/help")}
                className="group flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer hover:bg-gray-50 transition-all duration-200"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <HelpCircle size={20} className="text-gray-500 group-hover:text-gray-700 transition-colors" />
                </div>
                {sidebarOpen && (
                  <span className="text-sm text-gray-700 font-medium">Get Help</span>
                )}
              </div>

              <div
                onClick={handleLogoutClick}
                className="group flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer hover:bg-red-50 hover:text-red-600 transition-all duration-200"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <LogOut size={20} className="text-gray-500 group-hover:text-red-600 transition-colors" />
                </div>
                {sidebarOpen && (
                  <span className="text-sm text-gray-700 font-medium group-hover:text-red-600">Log Out</span>
                )}
              </div>
            </div>
          </SidebarFooter>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          {/* Header */}
          <header className="h-20 bg-white shadow-md flex items-center justify-between px-8 sticky top-0 z-20 rounded-[32px] mb-6 mx-6 mt-4 border border-gray-200">
            <div className="flex items-center gap-5">
              {!sidebarOpen && (
                <button
                  onClick={toggleSidebar}
                  className="p-2 hover:bg-gray-100 text-gray-600 rounded-xl transition duration-200"
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

            {/* Clean and elegant user profile display */}
            <div className="flex items-center gap-4 pr-2">
              <div className="relative">
                <img
                  src={user?.avatarUrl || "https://i.pravatar.cc/40"}
                  alt="Profile"
                  className="w-11 h-11 rounded-full object-cover border-2 border-gray-300 shadow"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
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
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto bg-gray-50 rounded-tl-[32px] min-h-0">
            <div className="h-full">{children}</div>
          </main>
        </div>

        {/* Logout Confirmation Modal */}
        {showLogoutModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-96 max-w-md mx-4">
              <div className="flex items-center gap-3 mb-4">
                <LogOut size={20} className="text-red-500" />
                <span className="text-lg font-semibold">Confirm Logout</span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Are you sure you want to logout? You will need to sign in again to access your account.
              </p>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={handleLogoutCancel}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogoutConfirm}
                  className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-lg transition-colors font-medium"
                >
                  Yes, Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </SidebarProvider>
  );
} 