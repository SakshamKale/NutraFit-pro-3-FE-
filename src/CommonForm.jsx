// CommonForm.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import StudentForm from './StudentForm';
import AdminForm from './AdminForm';
import Info from './Info';
import './CommonForm.css';

const CommonForm = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/student" element={<StudentForm />} />
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
};

const DefaultPage = () => {
  const nav = useNavigate();
  const [designation, setDesignation] = useState("");

  const HandleChange = (e) => {
    setDesignation(e.target.value);
  };

  const HandleClick = () => {
    if (designation === "Student") {
      nav("/student");
    } else if (designation === "Admin") {
      nav("/admin");
    } else {
      alert("Please select a designation");
    }
  };

  return (
    <div className="default-container">
      <label style={{width:"300px"}}>Enter your preferred Position</label>
      
      <div style={{position:"relative", left:"-100px"}}><div><input type="radio" name="des" id="stu" value={'Student'} onChange={HandleChange} />
      <label htmlFor="stu">Student</label></div>
      
        <div><input type="radio" name="des" id="adm" value={'Admin'} onChange={HandleChange} />
      <label htmlFor="adm">Admin</label></div></div>
      
      <button onClick={HandleClick} style={{position:"relative", left:"-10px"}}>Submit</button>
    </div>
  );
};

export default CommonForm;
