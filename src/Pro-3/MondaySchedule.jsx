import React, { use, useEffect, useState } from 'react';
import logo from './Screenshot 2025-06-30 221420.jpg';
import workImg from './img/work.jpg';
import './MondaySchedule.css';
import {useNavigate } from 'react-router';
import userApi2  from './axiosinstance2';

import { useNotifications } from '../context/NotificationContext';

const MondaySchedule = () => {
  const [data, setData] = useState([]);
  const { history } = useNotifications();
        const [showHistory, setShowHistory] = useState(false);
        const [sidebarOpen, setSidebarOpen] = useState(false);
    let nav=useNavigate()
    const [profileImage, setProfileImage] = useState("https://img.icons8.com/ios-filled/100/ffffff/user.png");
const [userData, setUserData] = useState();
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await userApi2.get('/getformdata');
      if (res.data?.Success) {
        setUserData(res.data.data);
      }
    } catch (err) {
      console.error('Failed to fetch user data:', err);
    }
  };

  fetchData();
}, []);


const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => setProfileImage(reader.result);
  reader.readAsDataURL(file);
};
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('selectedData1'));
    if (localData) setData(localData);
  }, []);

  return (
    <>
     <header className="header">
        <div className="header-left">
          <img src={logo} alt="NutraFit Logo" className="logo-icon" style={{borderRadius:"50%"}} />
          <div className="logo-text">Nutra<span>Fit</span></div>
        </div>
        <div className="header-icons">
          <img
  src="https://img.icons8.com/ios-filled/50/ffffff/appointment-reminders--v1.png"
  alt="Notifications"
  onClick={() => setShowHistory(!showHistory)}
  style={{ cursor: 'pointer' }}
/>


          <img
  src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png"
  alt="Profile"
  onClick={() => setSidebarOpen(true)}
  style={{ cursor: 'pointer' }}
/>
        </div>
      </header>

      <nav className="navbar">
        <span onClick={()=>{nav('/home')}}>Home</span>
        <span onClick={()=>{nav('/recMenu')}}>Food Diary</span>
        <span onClick={()=>{nav('/monday')}}>Workout Plans</span>
        <span onClick={()=>{nav('/nutrafitchat')}}>AI Coach</span>
        <span onClick={()=>{nav('/Cc')}}>Calorie Counter</span>
       
      </nav>
{showHistory && (
  <div className="notification-history">
    <h4>Notifications</h4>
    <ul>
      {history.length === 0 ? (
        <li>No notifications yet.</li>
      ) : (
        history.map((msg, i) => <li key={i}>{msg}</li>)
      )}
    </ul>
  </div>
)}
      <div className="box20">
         
        <div className="t32" style={{position:"relative",left:"500px"}}>
          Daily Fitness Schedule
          
        </div>
        <div className='t100' style={{position:"relative",left:"20px"}}>Stay on track with your workout and meal plan</div>
        
      </div>
    
      <div className="box21">
        <div className="inbox21">
          <span style={{ backgroundColor: '#1F2B3F', color: 'white', borderRadius: '5px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>MON</span>
            <span onClick={()=>{nav('/tuesday')}}>TUE</span>
          <span onClick={()=>{nav('/wednesday')}}>WED</span>
          <span onClick={()=>{nav('/thursday')}}>THU</span>
          <span onClick={()=>{nav('/friday')}}>FRI</span>
          <span onClick={()=>{nav('/saturday')}}>SAT</span>
          <span onClick={()=>{nav('/sunday')}}>SUN</span>
        </div>
      </div>

      <div className="box22" >
        <div className="inbox22">
          <div className="ch11" id="ch11">
            <span style={{ position: 'relative', right: '120px', fontWeight: '500' }}>Time</span>
            <span style={{ position: 'relative', right: '120px', fontWeight: '500' }}>Activity</span>
          </div>

          {[
            ['6:30 AM', 'Morning Strength Training', 0],
            ['7:30 AM', 'Breakfast', 1],
            ['12:00 PM', 'Work', 'static'],
            ['1:00 PM', 'Lunch', 2],
            ['6:00 PM', 'Evening Cardio Session', 3],
            ['7:30 PM', 'Dinner', 4]
          ].map(([time, title, index], idx) => (
            <div className="ch" key={idx}>
              <span className="time">{time}</span>
              <div className="img2"  style={{ backgroundColor: "white", border: "none" }} >
                <img
                
                  src={index === 'static' ? workImg : data[index]?.src || ''}
                  alt=""
                  className="img6"
                  style={{ display: "block", width: "100%"   }}
                  
                />
              </div>
              <span className="t35" >
                {title}
                {index !== 'static' && <span className="t36">{data[index]?.text || ''}</span>}
              </span>
            </div>
          ))}
        </div>
        
      </div>
      <button className="plan-btn" onClick={()=>{nav('/monmenu')}}>
  + Plan your Day
</button>
<div className={`profile-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h3>👤 My Fitness Profile</h3>
            <span className="close-btn" onClick={() => setSidebarOpen(false)}>&times;</span>
          </div>
        
          <div className="profile-picture-container">
            <img id="profileImage" src={profileImage} alt="Profile" />
            <label htmlFor="uploadInput" className="upload-icon">+</label>
            <input id="uploadInput" type="file" accept="image/*" hidden onChange={handleImageUpload} />
          </div>
        
          <section className="user-info">
          <h4>Basic Information</h4>
          <ul>
            <li><strong>Full Name:</strong> {userData?.Name || "N/A"}</li>
            <li><strong>Age:</strong> {userData?.Age || "N/A"}</li>
            <li><strong>Height:</strong> {userData ? `${userData.Hft} ft ${userData.Hin} in` : "N/A"}</li>
            <li><strong>Weight:</strong> {userData?.Wei ? `${userData.Wei} kg` : "N/A"}</li>
            <li><strong>Medical Condition:</strong> {userData?.AMC || "None"}</li>
          </ul>
        </section>
        
        <section className="user-info fitness-section">
          <h4>Fitness Details</h4>
          <ul>
            <li><strong>Fitness Goal:</strong> {userData?.FG || "N/A"}</li>
            <li><strong>Activity Level:</strong> {userData?.AL || "N/A"}</li>
          </ul>
        </section>
        
        
          <button className="logout-btn" onClick={() => nav('/login')}> Log Out</button>
        </div>
        
    </>
  );
};

export default MondaySchedule;
