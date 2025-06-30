import React, { createContext, useContext, useState } from 'react';

// Create context for sidebar state
const SidebarContext = createContext();

// Sidebar Provider
export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const value = {
    isOpen,
    setIsOpen,
    toggle: () => setIsOpen(!isOpen)
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};

// Hook to use sidebar context
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

// Sidebar components
export const Sidebar = ({ children, className = '', ...props }) => {
  return (
    <aside className={className} {...props}>
      {children}
    </aside>
  );
};

export const SidebarHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export const SidebarContent = ({ children, className = '', ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export const SidebarFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}; 