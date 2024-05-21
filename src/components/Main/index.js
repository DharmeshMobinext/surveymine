import React from 'react';

const Main = ({ resumeData }) => {
  return (
    <div className="resume-container">
      {resumeData.map((data, index) => (
        <div key={index} className="resume" id={`resume-${index + 1}`}>
          <h1>Resume {index + 1}</h1>
          <div className="resume-section">
            <h2>Personal Information</h2>
            <table className="resume-table">
              <tr>
                <th>Name</th>
                <td>{data.name}</td>
              </tr>
              <tr>
                <th>Contact Details</th>
                <td>{data.contactDetails}</td>
              </tr>
              <tr>
                <th>Date of Birth</th>
                <td>{data.dob}</td>
              </tr>
            </table>
          </div>

          <div className="resume-section">
            <h2>Educational Qualifications</h2>
            <table className="resume-table">
              <tr>
                <th>Qualification</th>
                <td>{data.qualification}</td>
              </tr>
              <tr>
                <th>10th Percentage and Year</th>
                <td>{data.ssc}</td>
              </tr>
              <tr>
                <th>12th Percentage and Year</th>
                <td>{data.hsc}</td>
              </tr>
              <tr>
                <th>Graduation Percentage and Year</th>
                <td>{data.graduation}</td>
              </tr>
            </table>
          </div>

          <div className="resume-section">
            <h2>Skills and Experience</h2>
            <table className="resume-table">
              <tr>
                <th>Computer Knowledge</th>
                <td>{data.computerKnowledge}</td>
              </tr>
              <tr>
                <th>Language Knowledge</th>
                <td>{data.languageKnowledge}</td>
              </tr>
            </table>
          </div>

          <div className="resume-section">
            <h2>Ready to Relocate</h2>
            <table className="resume-table">
              <tr>
                <th>Ready to relocate</th>
                <td>{data.readyToRelocate}</td>
              </tr>
              <tr>
                <th>If No, Reason</th>
                <td>{data.readyToRelocate === 'No' ? data.reasonNotToRelocate : 'N/A'}</td>
              </tr>
            </table>
          </div>

          <div className="resume-section">
            <h2>Areas of Interest</h2>
            <table className="resume-table">
              <tr>
                <td colSpan="2">{data.areaOfInterest}</td>
              </tr>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
