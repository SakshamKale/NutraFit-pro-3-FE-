import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setStudentData } from './DataForm';
import './CommonForm.css';

const AdminForm = () => {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
    const [terms, setTerms] = useState(false);
  const nav = useNavigate();

  function Terms(e) {
    if (e.target.checked) {
      setTerms(true);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
        if (!terms) {
          alert("Please agree to the terms and conditions");
        } else {
          setStudentData({ id: 2, name, employeeId, department, role });
    nav("/info");
        }
    
  };

  return (
    <div>
  <h1 className="form-heading">Admin Form</h1>
  <form onSubmit={handleSubmit} className="form-container">
    <div className="form-group">
      <label className="form-label">Name: </label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
    </div>
    <div className="form-group">
      <label className="form-label">Employee ID: </label>
      <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} className="form-input" />
    </div>
    <div className="form-group">
      <label className="form-label" style={{position:"relative",right:"34px"}}>Department: </label>
      <select value={department} onChange={(e) => setDepartment(e.target.value)} className="form-select">
        
        <option value="HR">HR</option>
        <option value="IT">IT</option>
        <option value="Accounts">Accounts</option>
        <option value="Management">Management</option>
      </select>
    </div>
    <div className="form-group">
      <label className="form-label" style={{position:"relative",left:"12px"}}>Role: </label>
      <input type="radio" name="role" value="Manager" onChange={(e) => setRole(e.target.value)} className="radio-input" /> Manager
      <input type="radio" name="role" value="Supervisor" onChange={(e) => setRole(e.target.value)} className="radio-input" /> Supervisor
      <br />
      <div className="term"><input type="checkbox" onChange={Terms} className="checkbox-input" />I agree to the terms and conditions</div>
    </div>
    <button type="submit" className="form-button">Submit</button>
  </form>
</div>
  );
};

export default AdminForm;
