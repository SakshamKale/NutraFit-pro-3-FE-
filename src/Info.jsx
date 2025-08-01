import React from 'react';
import { getStudentData } from './DataForm';
import './CommonForm.css';

const Info = () => {
  const studentData = getStudentData();

  if (studentData.id === 1) {
    return (
      <div className="student-info">
        <h1>Information</h1>
        <p><strong>Name:</strong> {studentData.name}</p>
        <p><strong>Age:</strong> {studentData.age}</p>
        <p><strong>Course:</strong> {studentData.course}</p>
        <p><strong>Gender:</strong> {studentData.gender}</p>
      </div>
    );
  } else if (studentData.id === 2) {
    return (
      <div className="admin-info">
        <h1>Information</h1>
        <p><strong>Name:</strong> {studentData.name}</p>
        <p><strong>Employee ID:</strong> {studentData.employeeId}</p>
        <p><strong>Department:</strong> {studentData.department}</p>
        <p><strong>Role:</strong> {studentData.role}</p>
      </div>
    );
  } else {
    return (
      <div className="info-missing">
        <h1>No Data Available</h1>
      </div>
    );
  }
};

export default Info;
