import React, { useEffect,useState } from 'react';
import './NutraFitRecipes.css';

import { useNavigate } from 'react-router';
import logo from './Screenshot 2025-06-30 221420.jpg';
import { useNotifications } from './NotificationContext';
import userApi2  from './axiosinstance2';
import vsimg from './img/vegetable-sambar-01.jpg'
import PTimg from './img/PaneerTikka.jpg'
import rajmaImg from './img/Rajma.jpg'
import soyaImg from './img/Soya.jpg'
import PBImg from './img/PannerBurji.jpg'
import KPImg from './img/KadaiPaanner.jpg'
import CTimg  from './img/CT.jpg'
import ECImg  from './img/EC.jpg'
import PrawnsImg from './img/Prawns.jpg';
import BCImg from './img/BC.jpg'
import CSimg from './img/CS.jpg'
import CPImg from './img/CP.jpg'





const NutraFitRecipes = () => {
    const nav1000=useNavigate();
      const { history } = useNotifications();
      const [showHistory, setShowHistory] = useState(false);
      const [sidebarOpen, setSidebarOpen] = useState(false);
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
    
  return (
    <div className="body200">
      {/* NAVBAR */}
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
        <span onClick={()=>{nav1000('/home')}}>Home</span>
        <span onClick={()=>{nav1000('/recMenu')}}>Food Diary</span>
        <span onClick={()=>{nav1000('/monday')}}>Workout Plans</span>
        <span onClick={()=>{nav1000('/nutrafitchat')}}>AI Coach</span>
        <span onClick={()=>{nav1000('/Cc')}}>Calorie Counter</span>
        
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
      {/* HERO SECTION */}
 <div className="hero-glass">
  <div className="hero-glass-content">
    <h1 className="hero-glass-text">
      <span className="hero-glass-highlight">Spice up your plate,</span><br />
      <span className="hero-glass-secondary">power up your life.</span>
    </h1>
    
  </div>
</div>




      {/* HEADER LINE */}
      <div className="section-header">OUR RECIPE OUR INBOX</div>

      {/* SUB HEADING */}
      <div className="sub-heading">
        Simple recipes made for <span>real, actual, everyday life.</span>
      </div>

      {/* VEG RECIPES */}
      <div className="category">
        <h3>VEG</h3>
        <div className="recipes">
          {[
            { src: vsimg, label: 'VEGETABLE SAMBAR', path:'/vegsam' },
            { src: PTimg, label: 'PANEER TIKKA',path:'/pannert' },
            { src: rajmaImg, label: 'RAJMA',path:'/rajma' },
            { src: soyaImg, label: 'SOYA CURRY',path:'/soya' },
            { src: PBImg, label: 'PANEER BHURJI',path:'/PB' },
            {
              src: KPImg,
              label: 'KADAI PANEER',
              path:'/KP'
            }
          ].map((item, index) => (
  <div
    className="recipe-card-new"
    key={`veg-${index}`}
    onClick={() => nav1000(item.path)}
    style={{ cursor: 'pointer' }}
  >
    <img src={item.src} alt={item.label} />
    <div className="recipe-label">{item.label}</div>
  </div>
))}
        </div>
      </div>

      {/* NON VEG RECIPES */}
      <div className="category">
        <h3>NON VEG</h3>
        <div className="recipes">
          {[
            { src: CTimg, label: 'CHICKEN TIKKA',path:'/CT' },
            { src: ECImg, label: 'EGG CURRY',path:'/EC' },
            { src: PrawnsImg, label: 'PRAWNS',path:'/Praw' },
            { src:BCImg, label: 'BUTTER CHICKEN',path:'/BC' },
            { src: CSimg, label: 'CHICKEN SUKKA',path:'/CS' },
            {
              src: CPImg,
              label: 'CHICKEN PARMESAN',path:'/CP'
            }
          ].map((item, index) => (
  <div
    className="recipe-card-new"
    key={`nonveg-${index}`}
    onClick={() => nav1000(item.path)}
    style={{ cursor: 'pointer' }}
  >
    <img src={item.src} alt={item.label} />
    <div className="recipe-label">{item.label}</div>
  </div>
))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <h4>About NutraFit</h4>
        <p>
          "Core" represents your essential strength and foundation—both physical and mental—while "Crush" means purposefully shaping and refining your habits, routines, and lifestyle.<br /><br />
          The NutraFit app lets users take control of their life by planning, tracking and managing lifestyle. You can schedule your day, eat healthy food and so on.<br />
          You can track your calories, protein and water intake.
        </p>

        <div className="footer-bottom">
          <div className="brand">Nutra<span>Fit</span></div>
          <div className="footer-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="insta" />
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384023.png" alt="facebook" />
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" alt="youtube" />
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="linkedin" />
          </div>
        </div>
      </div>
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
      
      
        <button className="logout-btn" onClick={() => nav1000('/login')}> Log Out</button>
      </div>
      
    </div>
  );
};

export default NutraFitRecipes;
