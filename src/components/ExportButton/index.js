import React from 'react';

const ExportButton = ({ onExport }) => {
  return (
    <div className="export-button">
      <button id="export-pdf" onClick={onExport}>Export as PDF</button>
    </div>
  );
};

export default ExportButton;
