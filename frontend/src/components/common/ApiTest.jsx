import React, { useState } from 'react';
import apiService from '../../services/api/apiService';

const ApiTest = () => {
  const [testResult, setTestResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    try {
      const result = await apiService.testConnection();
      setTestResult({ success: true, data: result });
    } catch (error) {
      setTestResult({ success: false, error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">API Connection Test</h3>
      <button
        onClick={testConnection}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Connection'}
      </button>
      
      {testResult && (
        <div className={`mt-4 p-3 rounded ${testResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {testResult.success ? (
            <div>
              <p className="font-semibold">✅ Connection Successful!</p>
              <p className="text-sm mt-1">Backend is running and accessible</p>
            </div>
          ) : (
            <div>
              <p className="font-semibold">❌ Connection Failed</p>
              <p className="text-sm mt-1">Error: {testResult.error}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ApiTest; 