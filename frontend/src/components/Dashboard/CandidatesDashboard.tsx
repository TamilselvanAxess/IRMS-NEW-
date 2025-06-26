import React from 'react'

const CandidatesDashboard: React.FC = () => {
  return (
    // <div className="space-y-6">
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //     <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-blue-100 text-sm font-medium">Total Candidates</p>
    //           <p className="text-3xl font-bold">1,234</p>
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
    //           <p className="text-green-100 text-sm font-medium">Active Candidates</p>
    //           <p className="text-3xl font-bold">892</p>
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
    //           <p className="text-yellow-100 text-sm font-medium">Pending Review</p>
    //           <p className="text-3xl font-bold">156</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-purple-100 text-sm font-medium">Completed</p>
    //           <p className="text-3xl font-bold">186</p>
    //         </div>
    //         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //     <div className="bg-white rounded-lg shadow-sm p-6">
    //       <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Candidates</h3>
    //       <div className="space-y-3">
    //         {[
    //           { name: 'John Doe', email: 'john.doe@example.com', status: 'Active', date: '2024-01-15' },
    //           { name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Pending', date: '2024-01-14' },
    //           { name: 'Mike Johnson', email: 'mike.johnson@example.com', status: 'Completed', date: '2024-01-13' },
    //           { name: 'Sarah Wilson', email: 'sarah.wilson@example.com', status: 'Active', date: '2024-01-12' },
    //         ].map((candidate, index) => (
    //           <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
    //             <div>
    //               <p className="font-medium text-gray-900">{candidate.name}</p>
    //               <p className="text-sm text-gray-500">{candidate.email}</p>
    //             </div>
    //             <div className="text-right">
    //               <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
    //                 candidate.status === 'Active' ? 'bg-green-100 text-green-800' :
    //                 candidate.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
    //                 'bg-blue-100 text-blue-800'
    //               }`}>
    //                 {candidate.status}
    //               </span>
    //               <p className="text-xs text-gray-500 mt-1">{candidate.date}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="bg-white rounded-lg shadow-sm p-6">
    //       <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
    //       <div className="space-y-3">
    //         <button className="w-full text-left p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
    //           <div className="flex items-center">
    //             <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mr-3">
    //               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    //               </svg>
    //             </div>
    //             <div>
    //               <p className="font-medium text-gray-900">Add New Candidate</p>
    //               <p className="text-sm text-gray-500">Enroll a new candidate</p>
    //             </div>
    //           </div>
    //         </button>

    //         <button className="w-full text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
    //           <div className="flex items-center">
    //             <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
    //               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    //               </svg>
    //             </div>
    //             <div>
    //               <p className="font-medium text-gray-900">View Reports</p>
    //               <p className="text-sm text-gray-500">Generate candidate reports</p>
    //             </div>
    //           </div>
    //         </button>

    //         <button className="w-full text-left p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
    //           <div className="flex items-center">
    //             <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
    //               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    //               </svg>
    //             </div>
    //             <div>
    //               <p className="font-medium text-gray-900">Favorites</p>
    //               <p className="text-sm text-gray-500">View favorite candidates</p>
    //             </div>
    //           </div>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <h1>Candidates Dashboard</h1>
  )
}

export default CandidatesDashboard
