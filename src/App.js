import React, { useState } from 'react';
import Header from './components/Header';
import ExportButton from './components/ExportButton';
import Main from './components/Main';
import './App.css';
import { read, utils } from 'xlsx';
import JSZip from 'jszip';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';

const App = () => {
  const [resumeData, setResumeData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
        
        const formattedData = jsonData.slice(1).map((row) => ({
          name: row[0],
          contactDetails: row[1],
          dob: row[2],
          qualification: row[3],
          ssc: row[4],
          hsc: row[5],
          graduation: row[6],
          computerKnowledge: row[7],
          languageKnowledge: row[8],
          readyToRelocate: row[9],
          reasonNotToRelocate: row[10],
          areaOfInterest: row[11],
        }));
        
        setResumeData(formattedData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleExport = async () => {
    const zip = new JSZip();

    const resumeElements = document.querySelectorAll('.resume');
    const promises = Array.from(resumeElements).map(async (element, index) => {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, 'PNG', 0, 0);
      zip.file(`resume_${index + 1}.pdf`, pdf.output('blob'));
    });

    await Promise.all(promises);

    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'resumes.zip');
    });
  };

  return (
    <div>
      <Header />
      <input type="file" onChange={handleFileUpload} />
      <ExportButton onExport={handleExport} />
      <Main resumeData={resumeData} />
    </div>
  );
};

export default App;
