import React from 'react';
import './RegistrationForm.css';
import logo from './Screenshot 2025-06-30 221420.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import userApi2 from './axiosinstance2';
const RegistrationForm = () => {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
  Name: '',
  Age: '',
  Gender: '',
  Hft: '',
  Hin: '',
  Wei: '',
  FG: '',
  AL: '',
  AMC: ''
});
const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
      
      
    };



const handleSubmit = async (e) => {
  e.preventDefault();

  const { Name, Age, Gender, Hft, Hin, Wei, FG, AL } = formData;

  if (!(Name && Age && Gender && Hft && Hin && Wei && FG && AL)) {
    alert("Please fill all required fields");
    return;
  }

  try {
    const { data } = await userApi2.post('/addformdata', formData);
    if (data?.Success) {
      alert(data.Message);
      nav('/home');
    } else {
      alert(data?.Message || "Something went wrong");
    }
  } catch (err) {
    alert("Server Error: " + err.message);
  }
};

  return (
    <div className="reg-container">
      <div className="reg-left">
        <div className="reg-brand">
          <div className="reg-logo" />
          <span className="reg-title fade-in-left">
  Nutra<span className="highlight" style={{color:"#ffffffff"}}>Fit</span>
</span>

        </div>
        <div className="reg-quote fade-in-left">
          <h2>Registration <span className="highlight">Form</span></h2>
          <p>"Fuel your body, elevate your life."</p>
        </div>
        <div className="reg-socials">
          <i><a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer">
 <i className="fa-brands fa-youtube"></i>
</a>
<a href="https://www.instagram.com/nutrafit04?igsh=MWhyZDg0b2gwcHF0bA==" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-instagram"></i>
</a>
<a href="https://www.facebook.com/profile.php?id=61578884354045" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-facebook"></i>
</a>
<a href="  https://in.linkedin.com/in/nutrafit-undefined-08336a379 " target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-linkedin"></i>
</a></i>
        
        </div>
      </div>

      <div className="reg-right">
        <h3 className="form-title fade-in-right">Let's know you better</h3>

        <form className="reg-form animated-form" onSubmit={handleSubmit}>


          <div className="form-group fade-in-up">
            <label>Name</label>
            <input type="text" required name='Name' value={formData.Name} onChange={handleInputChange} />
          </div>
          <div className="form-row">
            <div className="form-group fade-in-up">
              <label>Age</label>
              <input type="number" min="0" required name='Age' value={formData.Age} onChange={handleInputChange} />
            </div>
            <div className="form-group fade-in-up">
              <label>Gender</label>
              <select required name='Gender' value={formData.Gender} onChange={handleInputChange}>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group fade-in-up">
           <div className="input-group">
  <label htmlFor="height" className="input-label">Height (ft / in)</label>
  <div className="height-inputs">
    <input type="text" placeholder="ft" name='Hft' value={formData.Hft} onChange={handleInputChange} />
    <input type="text" placeholder="in" name='Hin' value={formData.Hin} onChange={handleInputChange} />
  </div>
</div>

            </div>
            <div className="form-group fade-in-up">
              <label>Weight (kg)</label>
              <input type="number" min="0" required name='Wei' value={formData.Wei} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group fade-in-up">
            <label>Fitness Goal</label>
            <select required name='FG' value={formData.FG} onChange={handleInputChange}>
              <option value="">Select</option>
              <option>Lose Weight</option>
              <option>Gain Muscle</option>
              <option>Stay Fit</option>
            </select>
          </div>
          <div className="form-group fade-in-up">
            <label>Activity Level</label>
            <select required name='AL' value={formData.AL} onChange={handleInputChange}>
              <option value="">Select</option>
              <option>Sedentary</option>
              <option>Lightly Active</option>
              <option>Moderately Active</option>
              <option>Very Active</option>
            </select>
          </div>
          <div className="form-group fade-in-up">
            <div className="input-group">
              <label style={{width:"200px",height:"10px"}}>Any Medical Conditions</label>
            
            </div>
            <textarea placeholder="Optional" rows="3" name='AMC' value={formData.AMC} onChange={handleInputChange} />
          </div>
          <button type="submit" className="reg-btn fade-in-up delay-3">Register</button>

        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
