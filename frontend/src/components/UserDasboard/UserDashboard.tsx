import React from 'react';

const UserDashboard: React.FC = () => {
  return (
    // <div className="space-y-6">
    //   Header Stats
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //     <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-blue-100 text-sm font-medium">Total Users</p>
    //           <p className="text-3xl font-bold">2,456</p>
    //           <p className="text-blue-100 text-sm">+18.2% from last month</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-green-100 text-sm font-medium">Active Users</p>
    //           <p className="text-3xl font-bold">1,892</p>
    //           <p className="text-green-100 text-sm">+12.5% from last month</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-purple-100 text-sm font-medium">Admins</p>
    //           <p className="text-3xl font-bold">24</p>
    //           <p className="text-purple-100 text-sm">+2 from last month</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-orange-100 text-sm font-medium">New This Week</p>
    //           <p className="text-3xl font-bold">156</p>
    //           <p className="text-orange-100 text-sm">+45 from last week</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   User Management Table
    //   <div className="bg-white rounded-lg shadow-sm">
    //     <div className="p-6 border-b border-gray-200">
    //       <div className="flex items-center justify-between">
    //         <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
    //         <div className="flex space-x-3">
    //           <div className="relative">
    //             <input
    //               type="text"
    //               placeholder="Search users..."
    //               className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
    //             />
    //             <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    //             </svg>
    //           </div>
    //           <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
    //             Add User
    //           </button>
    //         </div>
    //       </div>
    //     </div>
        
    //     <div className="overflow-x-auto">
    //       <table className="min-w-full divide-y divide-gray-200">
    //         <thead className="bg-gray-50">
    //           <tr>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               User
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Role
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Status
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Last Login
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Actions
    //             </th>
    //           </tr>
    //         </thead>
    //         <tbody className="bg-white divide-y divide-gray-200">
    //           {[
    //             { name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago', avatar: 'JD' },
    //             { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Enrollment', status: 'Active', lastLogin: '1 day ago', avatar: 'JS' },
    //             { name: 'Mike Johnson', email: 'mike.johnson@example.com', role: 'Finance', status: 'Inactive', lastLogin: '1 week ago', avatar: 'MJ' },
    //             { name: 'Sarah Wilson', email: 'sarah.wilson@example.com', role: 'Super Admin', status: 'Active', lastLogin: '30 minutes ago', avatar: 'SW' },
    //             { name: 'David Brown', email: 'david.brown@example.com', role: 'Enrollment', status: 'Active', lastLogin: '3 hours ago', avatar: 'DB' },
    //             { name: 'Emily Davis', email: 'emily.davis@example.com', role: 'Admin', status: 'Pending', lastLogin: 'Never', avatar: 'ED' },
    //           ].map((user, index) => (
    //             <tr key={index} className="hover:bg-gray-50">
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <div className="flex items-center">
    //                   <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
    //                     <span className="text-indigo-600 font-medium text-sm">{user.avatar}</span>
    //                   </div>
    //                   <div className="ml-4">
    //                     <div className="text-sm font-medium text-gray-900">{user.name}</div>
    //                     <div className="text-sm text-gray-500">{user.email}</div>
    //                   </div>
    //                 </div>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
    //                   user.role === 'Super Admin' ? 'bg-red-100 text-red-800' :
    //                   user.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
    //                   user.role === 'Finance' ? 'bg-green-100 text-green-800' :
    //                   'bg-blue-100 text-blue-800'
    //                 }`}>
    //                   {user.role}
    //                 </span>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
    //                   user.status === 'Active' ? 'bg-green-100 text-green-800' :
    //                   user.status === 'Inactive' ? 'bg-gray-100 text-gray-800' :
    //                   'bg-yellow-100 text-yellow-800'
    //                 }`}>
    //                   {user.status}
    //                 </span>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
    //                 {user.lastLogin}
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
    //                 <div className="flex space-x-2">
    //                   <button className="text-indigo-600 hover:text-indigo-900">View</button>
    //                   <button className="text-gray-600 hover:text-gray-900">Edit</button>
    //                   <button className="text-red-600 hover:text-red-900">Delete</button>
    //                 </div>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>

    //   User Analytics
    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //     <div className="bg-white rounded-lg shadow-sm p-6">
    //       <h3 className="text-lg font-semibold text-gray-900 mb-4">User Roles Distribution</h3>
    //       <div className="space-y-4">
    //         {[
    //           { role: 'Enrollment Users', count: 1247, percentage: 51, color: 'bg-blue-500' },
    //           { role: 'Admins', count: 456, percentage: 19, color: 'bg-purple-500' },
    //           { role: 'Finance', count: 234, percentage: 10, color: 'bg-green-500' },
    //           { role: 'Super Admins', count: 89, percentage: 4, color: 'bg-red-500' },
    //           { role: 'Other', count: 430, percentage: 16, color: 'bg-gray-500' },
    //         ].map((item, index) => (
    //           <div key={index} className="flex items-center justify-between">
    //             <div className="flex items-center space-x-3">
    //               <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
    //               <span className="text-sm text-gray-600">{item.role}</span>
    //             </div>
    //             <div className="text-right">
    //               <p className="text-sm font-medium text-gray-900">{item.count}</p>
    //               <p className="text-xs text-gray-500">{item.percentage}%</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="bg-white rounded-lg shadow-sm p-6">
    //       <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent User Activities</h3>
    //       <div className="space-y-4">
    //         {[
    //           { action: 'New user registered', user: 'emily.davis@example.com', time: '5 minutes ago' },
    //           { action: 'Role updated', user: 'john.doe@example.com', time: '15 minutes ago' },
    //           { action: 'Password reset', user: 'jane.smith@example.com', time: '1 hour ago' },
    //           { action: 'Account deactivated', user: 'mike.johnson@example.com', time: '2 hours ago' },
    //           { action: 'Login attempt failed', user: 'unknown@example.com', time: '3 hours ago' },
    //         ].map((activity, index) => (
    //           <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
    //             <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
    //             <div className="flex-1">
    //               <p className="text-sm font-medium text-gray-900">{activity.action}</p>
    //               <p className="text-xs text-gray-500">{activity.user} • {activity.time}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   Quick Actions
    //   <div className="bg-white rounded-lg shadow-sm p-6">
    //     <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    //       <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-colors">
    //         <div className="text-center">
    //           <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    //           </svg>
    //           <p className="text-sm font-medium text-gray-900">Add User</p>
    //           <p className="text-xs text-gray-500">Create new account</p>
    //         </div>
    //       </button>
          
    //       <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors">
    //         <div className="text-center">
    //           <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    //           </svg>
    //           <p className="text-sm font-medium text-gray-900">Export Users</p>
    //           <p className="text-xs text-gray-500">Download user data</p>
    //         </div>
    //       </button>
          
    //       <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors">
    //         <div className="text-center">
    //           <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    //           </svg>
    //           <p className="text-sm font-medium text-gray-900">Manage Roles</p>
    //           <p className="text-xs text-gray-500">Configure permissions</p>
    //         </div>
    //       </button>
          
    //       <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-400 hover:bg-orange-50 transition-colors">
    //         <div className="text-center">
    //           <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    //           </svg>
    //           <p className="text-sm font-medium text-gray-900">Security Log</p>
    //           <p className="text-xs text-gray-500">View audit trail</p>
    //         </div>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <h1>User Dashboard</h1>
  );
};

export default UserDashboard;
