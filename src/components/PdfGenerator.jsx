import React from 'react';

const PdfGenerator = () => {
  const pdfUrl = "generated.pdf"; 
  const fileName = pdfUrl; 

  return (
    <div className=" max-w-sm mx-auto mt-10 text-center">
      <h2 className="text-xl font-bold mb-4"> </h2>
      <a
        href={pdfUrl}
        download={fileName}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Download PDF
      </a>
    </div>
  );
};

export default PdfGenerator;










/*import React, { useState } from 'react';

const PdfGenerator = () => {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    // Create a temporary URL for download
    const fileBlobURL = URL.createObjectURL(selectedFile);
    setFileURL(fileBlobURL);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="text-lg font-bold mb-4">Upload File to Generate Download Link</h2>

      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4"
      />

      {file && (
        <div className="mt-4">
          <p className="text-gray-700">Uploaded: <strong>{file.name}</strong></p>

          <a
            href={fileURL}
            download={file.name}
            className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Download File
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfGenerator;
*/










/*import React from "react";
import jsPDF from "jspdf";

const PdfGenerator = () => {
  const generatePdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Hello from jsPDF in React!", 20, 20);

    doc.setFontSize(12);
    //doc.text("This PDF was created in-browser using jsPDF.", 20, 30);

    // Optional: add more content (images, tables, text)
    // doc.addImage(...);
    // doc.autoTable({ html: "#my-table" });

    doc.save("generated.pdf");
  };

  return (
    <div className="p-4">
      <button
        onClick={generatePdf}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Download PDF
      </button>
    </div>
  );
};

export default PdfGenerator;
*/