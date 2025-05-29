import React, { useState } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';

const PDFUpload = ({ onFileSelect }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFile = (selectedFile) => {
    setError('');
    if (selectedFile.type !== 'application/pdf') {
      setError('Please select a PDF file only.');
      return;
    }
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB.');
      return;
    }
    setFile(selectedFile);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const proceed = () => {
    if (file) onFileSelect(file);
  };

  return (
    <div className="min-h-screen min-w-screen  flex flex-col items-center justify-center bg-blue-50 p-4 text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Upload your PDF</h2>
        <input type="file" accept="application/pdf" onChange={handleFileChange} className="mb-4" />
        {file && (
          <div className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded">
            <FileText className="h-6 w-6 text-red-500" />
            <span>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
          </div>
        )}
        {error && (
          <div className="mt-2 flex items-center text-red-600">
            <AlertCircle className="w-4 h-4 mr-1" />
            <span>{error}</span>
          </div>
        )}
        <button
          disabled={!file}
          onClick={proceed}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PDFUpload;
