import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setStudentData } from './DataForm';
import './CommonForm.css';
const StudentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
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
      setStudentData({ id: 1, name, age, course, gender });
      nav("/info");
    }
  };

  return (
    <div className="form-container">
      <h1>Student Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label>Age: </label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <div>
          <label>Course: </label>
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            
            <option value="JAVA">JAVA</option>
            <option value="C++">C++</option>
            <option value="SQL">SQL</option>
            <option value="JavaScript">JavaScript</option>
          </select>
        </div>

        <div>
          <label>Gender: </label>
          <input type="radio"  name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male
          <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female
          <br />
          <div className='term'><input type="checkbox" onChange={Terms} /> I agree to the terms and conditions</div>
        </div>

        <button type="submit" style={{position:"relative",left:"90px"}}>Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
