import React from 'react';

const AnalyticDashboard: React.FC = () => {
  return (
    // <div className="space-y-6">
    //   Header Stats
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //     <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-blue-100 text-sm font-medium">Total Revenue</p>
    //           <p className="text-3xl font-bold">$124,563</p>
    //           <p className="text-blue-100 text-sm">+12.5% from last month</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-green-100 text-sm font-medium">Active Users</p>
    //           <p className="text-3xl font-bold">2,847</p>
    //           <p className="text-green-100 text-sm">+8.2% from last month</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-purple-100 text-sm font-medium">Conversion Rate</p>
    //           <p className="text-3xl font-bold">24.8%</p>
    //           <p className="text-purple-100 text-sm">+2.1% from last month</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-orange-100 text-sm font-medium">Avg. Session</p>
    //           <p className="text-3xl font-bold">4m 32s</p>
    //           <p className="text-orange-100 text-sm">+0.8% from last month</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   Charts Section
    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //     <div className="bg-white rounded-lg shadow-sm p-6">
    //       <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h3>
    //       <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
    //         <div className="text-center">
    //           <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    //           </svg>
    //           <p className="text-gray-500">Chart visualization would go here</p>
    //           <p className="text-sm text-gray-400">Revenue trends over time</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-white rounded-lg shadow-sm p-6">
    //       <h3 className="text-lg font-semibold text-gray-900 mb-4">User Activity</h3>
    //       <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
    //         <div className="text-center">
    //           <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    //           </svg>
    //           <p className="text-gray-500">Chart visualization would go here</p>
    //           <p className="text-sm text-gray-400">Daily active users</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   Recent Activity
    //   <div className="bg-white rounded-lg shadow-sm p-6">
    //     <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
    //     <div className="space-y-4">
    //       {[
    //         { action: 'New user registered', user: 'john.doe@example.com', time: '2 minutes ago', type: 'user' },
    //         { action: 'Payment received', user: 'jane.smith@example.com', time: '5 minutes ago', type: 'payment' },
    //         { action: 'Report generated', user: 'admin@example.com', time: '10 minutes ago', type: 'report' },
    //         { action: 'System backup completed', user: 'system', time: '15 minutes ago', type: 'system' },
    //         { action: 'New candidate enrolled', user: 'enrollment@example.com', time: '20 minutes ago', type: 'enrollment' },
    //       ].map((activity, index) => (
    //         <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
    //           <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
    //             activity.type === 'user' ? 'bg-blue-100 text-blue-600' :
    //             activity.type === 'payment' ? 'bg-green-100 text-green-600' :
    //             activity.type === 'report' ? 'bg-purple-100 text-purple-600' :
    //             activity.type === 'system' ? 'bg-gray-100 text-gray-600' :
    //             'bg-orange-100 text-orange-600'
    //           }`}>
    //             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    //             </svg>
    //           </div>
    //           <div className="flex-1">
    //             <p className="text-sm font-medium text-gray-900">{activity.action}</p>
    //             <p className="text-xs text-gray-500">{activity.user}</p>
    //           </div>
    //           <span className="text-xs text-gray-400">{activity.time}</span>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   Quick Analytics
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //     <div className="bg-white rounded-lg shadow-sm p-6">
    //       <h4 className="text-md font-semibold text-gray-900 mb-3">Top Performing Pages</h4>
    //       <div className="space-y-3">
    //         {[
    //           { page: '/dashboard', views: '12,847', growth: '+15%' },
    //           { page: '/candidates', views: '8,234', growth: '+8%' },
    //           { page: '/reports', views: '6,123', growth: '+12%' },
    //         ].map((item, index) => (
    //           <div key={index} className="flex justify-between items-center">
    //             <span className="text-sm text-gray-600">{item.page}</span>
    //             <div className="text-right">
    //               <p className="text-sm font-medium text-gray-900">{item.views}</p>
    //               <p className="text-xs text-green-600">{item.growth}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="bg-white rounded-lg shadow-sm p-6">
    //       <h4 className="text-md font-semibold text-gray-900 mb-3">User Demographics</h4>
    //       <div className="space-y-3">
    //         {[
    //           { age: '18-25', percentage: '32%', color: 'bg-blue-500' },
    //           { age: '26-35', percentage: '45%', color: 'bg-green-500' },
    //           { age: '36-45', percentage: '18%', color: 'bg-purple-500' },
    //           { age: '46+', percentage: '5%', color: 'bg-orange-500' },
    //         ].map((item, index) => (
    //           <div key={index} className="flex items-center space-x-3">
    //             <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
    //             <span className="text-sm text-gray-600 flex-1">{item.age}</span>
    //             <span className="text-sm font-medium text-gray-900">{item.percentage}</span>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="bg-white rounded-lg shadow-sm p-6">
    //       <h4 className="text-md font-semibold text-gray-900 mb-3">System Health</h4>
    //       <div className="space-y-4">
    //         <div>
    //           <div className="flex justify-between text-sm mb-1">
    //             <span className="text-gray-600">CPU Usage</span>
    //             <span className="text-gray-900">68%</span>
    //           </div>
    //           <div className="w-full bg-gray-200 rounded-full h-2">
    //             <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
    //           </div>
    //         </div>
    //         <div>
    //           <div className="flex justify-between text-sm mb-1">
    //             <span className="text-gray-600">Memory Usage</span>
    //             <span className="text-gray-900">45%</span>
    //           </div>
    //           <div className="w-full bg-gray-200 rounded-full h-2">
    //             <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
    //           </div>
    //         </div>
    //         <div>
    //           <div className="flex justify-between text-sm mb-1">
    //             <span className="text-gray-600">Disk Usage</span>
    //             <span className="text-gray-900">82%</span>
    //           </div>
    //           <div className="w-full bg-gray-200 rounded-full h-2">
    //             <div className="bg-orange-600 h-2 rounded-full" style={{ width: '82%' }}></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <h1>Analytic Dashboard</h1>
  );
};

export default AnalyticDashboard;
