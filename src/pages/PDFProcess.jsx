import React, { useState } from 'react';
import { FileText, Loader2, AlertCircle } from 'lucide-react';

const PDFProcess = ({ file, onProcessComplete }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const uploadFile = async () => {
    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('Ufile', file);

      const url = new URL('http://127.0.0.1:8000/api/upload-pdf');
      url.searchParams.append('user_id', 'user123');
      url.searchParams.append('pages', '1');

      const res = await fetch(url.toString(), {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.detail || 'Failed to process.');
        return;
      }

      onProcessComplete(result);
    } catch (err) {
      setError('Network error.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-indigo-50 p-4 text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Process</h2>
        <div className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded">
          <FileText className="h-6 w-6 text-blue-500" />
          <span>{file.name}</span>
        </div>

        <button
          disabled={uploading}
          onClick={uploadFile}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50 flex items-center justify-center"
        >
          {uploading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
          {uploading ? 'Processing...' : 'Process'}
        </button>

        {error && (
          <div className="mt-4 flex items-center text-red-600">
            <AlertCircle className="w-4 h-4 mr-1" />
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFProcess;
