import React from 'react';
import { CheckCircle } from 'lucide-react';

const PDFSuccess = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-green-50 p-4 text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Process Complete!</h2>
        <p className="text-gray-600">Your PDF has been successfully processed.</p>
      </div>
    </div>
  );
};

export default PDFSuccess;
