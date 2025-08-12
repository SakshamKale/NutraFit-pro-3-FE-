import React, { useEffect, useState } from 'react';
import { useNotifications } from '../context/NotificationContext';


import Typed from 'typed.js';

 
import userApi2  from './axiosinstance2';

import logo from './Screenshot 2025-06-30 221420.jpg';
import h1 from './img/h1.jpg';
import h2 from './img/h2.jpeg';   
import h3 from './img/h3 - Copy.jpg';
import h5 from './img/h5.webp';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  let nav = useNavigate();  
  const { history } = useNotifications();
const [showHistory, setShowHistory] = useState(false);
const [sidebarOpen, setSidebarOpen] = useState(false);
  const [totalCalories, setTotalCalories] = useState(0);
  
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
    const stored = localStorage.getItem('totalCalories');
    if (stored) setTotalCalories(parseInt(stored));
  }, []);
  useEffect(() => {
    const typed = new Typed('#typed', {
      strings: [
        'Fuel your body, feed your goals',
        'Consistency creates confidence',
        'Earn your strength every day',
        'Discipline > Motivation',
        'Your body can. Your mind must.',
        "You don't have to be extreme, just consistent",
      ],
      typeSpeed: 45,
      backSpeed: 30,
      backDelay: 1600,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const quoteSections = [
    {
      img: h1,
      text: 'A healthy outside starts from the inside.',
    },
    {
      img: h2,
      text: 'Maintaining work-life balance is essential for long-term physical and mental health.',
      reverse: true,
    },
    {
      img: h3, 
      text: 'Regular physical activity is essential for maintaining a healthy body and mind.',
    },
    {
      img: h5,
      text: 'Regular exercise, proper sleep, and mindful breaks not only improve productivity but also support a healthier lifestyle.',
      reverse: true,
    },
  ];

  return (
    <div>
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
        <span onClick={()=>{nav('/vegsam')}}>Food Diary</span>
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
      <section className="hero1">
        <p>#1 AI-powered fitness tracking site</p>
        <h1><span id="typed"></span></h1>
        <p>Train smart. Eat clean. Live strong.</p>
      </section>

      <section className="features">
        <div className="feature-card" onClick={() => nav('/recMenu')}>
          <h3>🍽 Food Diary</h3>
          <p>Log meals, macros, and smart AI suggestions</p>
        </div>
        <div className="feature-card" onClick={() => nav('/monday')}>
          <h3>🏋 Workout Plans</h3>
          <p>Quick & efficient workouts tailored to your life</p>
        </div>
        <div className="feature-card" onClick={() => nav('/nutrafitchat')}>
          <h3>🤖 AI Coach</h3>
          <p>24/7 support to keep you motivated and on-track</p>
        </div>
        <div className="feature-card" onClick={() => nav('/Cc')}>
          <h3>🔥 Calorie Counter</h3>
          <p>Track your daily intake and reach your goals.</p>
          <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
            Total Today: <span id="calorieTotal">{totalCalories}</span> kcal
          </p>
        </div>
      </section>

      {quoteSections.map(({ img, text, reverse }, i) => (
        <div key={i} className={`quote-section ${reverse ? 'reverse' : ''}`}>
          <img src={img} alt="quote" />
          <div className="quote-text">{text}</div>
        </div>
      ))}

      <section className="about">
        <h3>About NutraFit</h3>
        <p>
          "Core" represents your essential strength and foundation—both physical and mental—while “Craft” means purposefully shaping and refining your habits, routines, and lifestyle. The main motive of our website is to have a balance in your life to stay fit and to manage your lifestyle. You can schedule your day, eat healthy food and can see how to cook healthy food. You can track your calories, protein and water intake.
        </p>
      </section>

      <footer className="footer">
        NutraFit <br />
        Nutrition tracking for real life. <br />
<a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-youtube" id="lo" style={{color:'white',fontSize:'20px'}}></i>
</a>
<a href="https://www.instagram.com/nutrafit04?igsh=MWhyZDg0b2gwcHF0bA==" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-instagram" id="lo" style={{color:'white',fontSize:'20px'}}></i>
</a>
<a href="https://www.facebook.com/profile.php?id=61578884354045" target="_blank" rel="noopener noreferrer">
   <i className="fa-brands fa-facebook" id="lo" style={{color:'white',fontSize:'20px'}}></i>
</a>
<a href="  https://in.linkedin.com/in/nutrafit-undefined-08336a379 " target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-linkedin" id="lo" style={{color:'white',fontSize:'20px'}}></i>
</a>

      </footer>
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


  <button className="logout-btn" onClick={() => {     nav('/login')}}> Log Out</button>
</div>


    </div>
  );
};

export default HomePage;