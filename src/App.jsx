import React, { useState } from 'react';
import PDFUpload from './pages/PDFUpload';
import PDFProcess from './pages/PDFProcess';
import PDFSuccess from './pages/PDFSuccess';

const App = () => {
  const [step, setStep] = useState(1);
  const [pdfFile, setPdfFile] = useState(null);

  return (
    <>
      {step === 1 && (
        <PDFUpload onFileSelect={(file) => {
          setPdfFile(file);
          setStep(2);
        }} />
      )}

      {step === 2 && pdfFile && (
        <PDFProcess
          file={pdfFile}
          onProcessComplete={() => setStep(3)}
        />
      )}

      {step === 3 && <PDFSuccess />}
    </>
  );
};

export default App;
