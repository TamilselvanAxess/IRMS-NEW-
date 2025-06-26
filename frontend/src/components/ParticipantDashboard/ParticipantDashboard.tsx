import React from 'react';

const ParticipantDashboard: React.FC = () => {
  return (
    // <div className="space-y-6">
    //   Header Stats
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //     <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-indigo-100 text-sm font-medium">Total Participants</p>
    //           <p className="text-3xl font-bold">1,847</p>
    //           <p className="text-indigo-100 text-sm">+15.3% from last month</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-green-100 text-sm font-medium">Active Participants</p>
    //           <p className="text-3xl font-bold">1,234</p>
    //           <p className="text-green-100 text-sm">+8.7% from last month</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-yellow-100 text-sm font-medium">Pending Approval</p>
    //           <p className="text-3xl font-bold">89</p>
    //           <p className="text-yellow-100 text-sm">-12.5% from last month</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-red-100 text-sm font-medium">Completed Programs</p>
    //           <p className="text-3xl font-bold">524</p>
    //           <p className="text-red-100 text-sm">+23.1% from last month</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   Participant List
    //   <div className="bg-white rounded-lg shadow-sm">
    //     <div className="p-6 border-b border-gray-200">
    //       <div className="flex items-center justify-between">
    //         <h3 className="text-lg font-semibold text-gray-900">Participant Management</h3>
    //         <div className="flex space-x-3">
    //           <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
    //             Export Data
    //           </button>
    //           <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
    //             Add Participant
    //           </button>
    //         </div>
    //       </div>
    //     </div>
        
    //     <div className="overflow-x-auto">
    //       <table className="min-w-full divide-y divide-gray-200">
    //         <thead className="bg-gray-50">
    //           <tr>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Participant
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Program
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Status
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Progress
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Start Date
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Actions
    //             </th>
    //           </tr>
    //         </thead>
    //         <tbody className="bg-white divide-y divide-gray-200">
    //           {[
    //             { name: 'John Doe', email: 'john.doe@example.com', program: 'Web Development', status: 'Active', progress: 75, startDate: '2024-01-15' },
    //             { name: 'Jane Smith', email: 'jane.smith@example.com', program: 'Data Science', status: 'Active', progress: 45, startDate: '2024-01-20' },
    //             { name: 'Mike Johnson', email: 'mike.johnson@example.com', program: 'UI/UX Design', status: 'Completed', progress: 100, startDate: '2023-12-01' },
    //             { name: 'Sarah Wilson', email: 'sarah.wilson@example.com', program: 'Mobile Development', status: 'Pending', progress: 0, startDate: '2024-02-01' },
    //             { name: 'David Brown', email: 'david.brown@example.com', program: 'Cybersecurity', status: 'Active', progress: 60, startDate: '2024-01-10' },
    //           ].map((participant, index) => (
    //             <tr key={index} className="hover:bg-gray-50">
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <div className="flex items-center">
    //                   <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
    //                     <span className="text-indigo-600 font-medium text-sm">
    //                       {participant.name.split(' ').map(n => n[0]).join('')}
    //                     </span>
    //                   </div>
    //                   <div className="ml-4">
    //                     <div className="text-sm font-medium text-gray-900">{participant.name}</div>
    //                     <div className="text-sm text-gray-500">{participant.email}</div>
    //                   </div>
    //                 </div>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <div className="text-sm text-gray-900">{participant.program}</div>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
    //                   participant.status === 'Active' ? 'bg-green-100 text-green-800' :
    //                   participant.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
    //                   'bg-yellow-100 text-yellow-800'
    //                 }`}>
    //                   {participant.status}
    //                 </span>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <div className="flex items-center">
    //                   <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
    //                     <div 
    //                       className={`h-2 rounded-full ${
    //                         participant.progress >= 100 ? 'bg-green-500' :
    //                         participant.progress >= 50 ? 'bg-blue-500' :
    //                         'bg-yellow-500'
    //                       }`}
    //                       style={{ width: `${participant.progress}%` }}
    //                     ></div>
    //                   </div>
    //                   <span className="text-sm text-gray-900">{participant.progress}%</span>
    //                 </div>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
    //                 {participant.startDate}
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
    //                 <div className="flex space-x-2">
    //                   <button className="text-indigo-600 hover:text-indigo-900">View</button>
    //                   <button className="text-gray-600 hover:text-gray-900">Edit</button>
    //                   <button className="text-red-600 hover:text-red-900">Remove</button>
    //                 </div>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>

    //   Program Statistics
    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //     <div className="bg-white rounded-lg shadow-sm p-6">
    //       <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Distribution</h3>
    //       <div className="space-y-4">
    //         {[
    //           { program: 'Web Development', participants: 456, percentage: 35, color: 'bg-blue-500' },
    //           { program: 'Data Science', participants: 324, percentage: 25, color: 'bg-green-500' },
    //           { program: 'UI/UX Design', participants: 234, percentage: 18, color: 'bg-purple-500' },
    //           { program: 'Mobile Development', participants: 189, percentage: 14, color: 'bg-orange-500' },
    //           { program: 'Cybersecurity', participants: 156, percentage: 8, color: 'bg-red-500' },
    //         ].map((item, index) => (
    //           <div key={index} className="flex items-center justify-between">
    //             <div className="flex items-center space-x-3">
    //               <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
    //               <span className="text-sm text-gray-600">{item.program}</span>
    //             </div>
    //             <div className="text-right">
    //               <p className="text-sm font-medium text-gray-900">{item.participants}</p>
    //               <p className="text-xs text-gray-500">{item.percentage}%</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="bg-white rounded-lg shadow-sm p-6">
    //       <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
    //       <div className="space-y-4">
    //         {[
    //           { action: 'New participant enrolled', program: 'Web Development', time: '2 minutes ago' },
    //           { action: 'Program completed', program: 'Data Science', time: '15 minutes ago' },
    //           { action: 'Progress updated', program: 'UI/UX Design', time: '1 hour ago' },
    //           { action: 'Assessment submitted', program: 'Mobile Development', time: '2 hours ago' },
    //           { action: 'Certificate issued', program: 'Cybersecurity', time: '3 hours ago' },
    //         ].map((activity, index) => (
    //           <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
    //             <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
    //             <div className="flex-1">
    //               <p className="text-sm font-medium text-gray-900">{activity.action}</p>
    //               <p className="text-xs text-gray-500">{activity.program} • {activity.time}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   Quick Actions
    //   <div className="bg-white rounded-lg shadow-sm p-6">
    //     <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    //       <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-colors">
    //         <div className="text-center">
    //           <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    //           </svg>
    //           <p className="text-sm font-medium text-gray-900">Add New Participant</p>
    //           <p className="text-xs text-gray-500">Enroll someone new</p>
    //         </div>
    //       </button>
          
    //       <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors">
    //         <div className="text-center">
    //           <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    //           </svg>
    //           <p className="text-sm font-medium text-gray-900">Generate Report</p>
    //           <p className="text-xs text-gray-500">Export participant data</p>
    //         </div>
    //       </button>
          
    //       <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors">
    //         <div className="text-center">
    //           <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    //           </svg>
    //           <p className="text-sm font-medium text-gray-900">Send Notifications</p>
    //           <p className="text-xs text-gray-500">Message participants</p>
    //         </div>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <h1>Participant Dashboard</h1>
  );
};

export default ParticipantDashboard;
