import React, { useEffect, useState } from 'react';
import logo from './Screenshot 2025-06-30 221420.jpg';
import workImg from './img/work.jpg';
import './MondaySchedule.css'; 
import { useNavigate } from 'react-router';
const ThursdaySchedule = () => {
  const [data, setData] = useState([]);
let nav = useNavigate();
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('selectedData4'));
    if (saved) setData(saved);
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="NutraFit Logo" className="logo-icon" style={{borderRadius:"50%"}} />
          <div className="logo-text">Nutra<span>Fit</span></div>
        </div>
        <div className="header-icons">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/appointment-reminders--v1.png" alt="Notifications" />
          <img src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png" alt="Profile" />
        </div>
      </header>

      <nav className="navbar">
        <span onClick={()=>{nav('/home')}}>Home</span>
        <span onClick={()=>{nav('/recMenu')}}>Food Diary</span>
        <span onClick={()=>{nav('/monday')}}>Workout Plans</span>
        <span onClick={()=>{nav('/nutrafitchat')}}>AI Coach</span>
        <span onClick={()=>{nav('/Cc')}}>Calorie Counter</span>
       
      </nav>

         <div className="box20">
        
        <div className="t32" style={{position:"relative",left:"500px"}}>
          Daily Fitness Schedule
          
        </div>
        <div className='t100' style={{position:"relative",left:"20px"}}>Stay on track with your workout and meal plan</div>
        
      </div>
    

      <div className="box21">
        <div className="inbox21">
          <span onClick={()=>{nav('/monday')}} >MON</span>
             <span onClick={()=>{nav('/tuesday')}}>TUE</span>
          <span onClick={()=>{nav('/wednesday')}}>WED</span>
          <span style={{ backgroundColor: '#1F2B3F', color: 'white', borderRadius: '5px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>THU</span>
          <span onClick={()=>{nav('/friday')}}>FRI</span>
          <span onClick={()=>{nav('/saturday')}}>SAT</span>
          <span onClick={()=>{nav('/sunday')}}>SUN</span>
        </div>
      </div>

      <div className="box22">
        <div className="inbox22">
          <div className="ch11" id="ch11">
            <span style={{ position: 'relative', right: '120px', fontWeight: 500 }}>Time</span>
            <span style={{ position: 'relative', right: '120px', fontWeight: 500 }}>Activity</span>
          </div>

          {['6:30 AM', '7:30 AM', '12:00 PM', '1:00 PM', '6:00 PM', '7:30 PM'].map((time, i) => (
            <div className="ch" key={i}>
              <span className="time">{time}</span>
              <div className="img2" style={{ backgroundColor: "white", border: "none" }}>
                {i === 2 ? (
                  <img src={workImg} alt="Work" className="img6" />
                ) : (
                  <img src={data[i < 2 ? i : i - 1]?.src || ''} alt="" className="img6" style={{ display: "block", width: "100%", height: "auto" }} />
                )}
              </div>
              <span className="t35">
                {['Morning Strength Training', 'Breakfast', 'Work', 'Lunch', 'Evening Cardio Session', 'Dinner'][i]}
                {i !== 2 && (
                  <span className="t36">
                    {data[i < 2 ? i : i - 1]?.text || ''}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
      <button className="plan-btn" onClick={()=>{nav('/thursdaymenu')}}>
  + Plan your Day
</button>
    </>
  );
};

export default ThursdaySchedule;
