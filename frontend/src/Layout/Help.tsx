import React from 'react';

const Help: React.FC = () => {
  return (
    <div className="space-y-6 ">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Help & Support</h1>
        <p className="text-gray-600">Find answers to common questions and get support for the IRMS system.</p>
      </div>

      {/* Search */}
      {/* <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <svg className="w-6 h-6 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div> */}

      {/* FAQ Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: 'How do I reset my password?',
                answer: 'Click on the "Forgot Password" link on the login page and follow the instructions sent to your email.'
              },
              {
                question: 'How do I add a new candidate?',
                answer: 'Navigate to the "New Candidate" section from the sidebar and fill out the enrollment form.'
              },
              {
                question: 'How do I view participant progress?',
                answer: 'Go to the Participants Dashboard to see all participant information and progress tracking.'
              },
              {
                question: 'How do I generate reports?',
                answer: 'Use the Analytics Dashboard to view and export various reports and statistics.'
              },
              {
                question: 'How do I manage user permissions?',
                answer: 'Access the Users List from the sidebar to manage user roles and permissions.'
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                <h3 className="text-sm font-medium text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
          <div className="space-y-3">
            {[
              { title: 'User Manual', description: 'Complete guide to using IRMS', icon: '📖' },
              { title: 'Video Tutorials', description: 'Step-by-step video guides', icon: '🎥' },
              { title: 'API Documentation', description: 'Technical documentation', icon: '🔧' },
              { title: 'System Status', description: 'Check system availability', icon: '📊' },
              { title: 'Release Notes', description: 'Latest updates and features', icon: '📝' },
            ].map((link, index) => (
              <button
                key={index}
                className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{link.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{link.title}</p>
                    <p className="text-xs text-gray-500">{link.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">Email Support</h3>
            <p className="text-xs text-gray-500 mb-2">support@irms.com</p>
            <p className="text-xs text-gray-400">Response within 24 hours</p>
          </div>

          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">Phone Support</h3>
            <p className="text-xs text-gray-500 mb-2">+1 (555) 123-4567</p>
            <p className="text-xs text-gray-400">Mon-Fri, 9AM-6PM EST</p>
          </div>

          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">Live Chat</h3>
            <p className="text-xs text-gray-500 mb-2">Available 24/7</p>
            <p className="text-xs text-gray-400">Instant response</p>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">System Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">Version</p>
            <p className="text-sm font-medium text-gray-900">v2.1.0</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">Last Updated</p>
            <p className="text-sm font-medium text-gray-900">Jan 15, 2024</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">Browser Support</p>
            <p className="text-sm font-medium text-gray-900">Chrome, Firefox, Safari, Edge</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">Status</p>
            <p className="text-sm font-medium text-green-600">All Systems Operational</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help; 