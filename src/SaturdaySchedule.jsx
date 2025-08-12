import React, { useEffect } from 'react';
import logo from './Screenshot 2025-06-30 221420.jpg';
import workImg from './img/work.jpg';
import { useNavigate } from 'react-router';
import './MondaySchedule.css';
import './Schedule.css' 
const SaturdaySchedule = () => {
  let nav = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('selectedData6'));
    if (data) {
      document.getElementById('i1').src = data[0].src;
      document.getElementById('i2').src = data[1].src;
      document.getElementById('i3').src = data[2].src;
      document.getElementById('i4').src = data[3].src;
      document.getElementById('i5').src = data[4].src;
      document.getElementById('t1').textContent = data[0].text;
      document.getElementById('t2').textContent = data[1].text;
      document.getElementById('t3').textContent = data[2].text;
      document.getElementById('t4').textContent = data[3].text;
      document.getElementById('t5').textContent = data[4].text;
    }
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
         <span onClick={()=>{nav('/monday')}}>MON</span>
            <span onClick={()=>{nav('/tuesday')}}>TUE</span>
          <span onClick={()=>{nav('/wednesday')}}>WED</span>
          <span onClick={()=>{nav('/thursday')}}>THU</span>
          <span onClick={()=>{nav('/friday')}}>FRI</span>
          <span style={{ backgroundColor: '#1F2B3F', color: 'white', borderRadius: '5px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SAT</span>
       <span onClick={()=>{nav('/sunday')}}>SUN</span>
        </div>
      </div>

      <div className="box22">
        <div className="inbox22">
          <div className="ch11" id="ch11">
            <span style={{ position: 'relative', right: '120px', fontWeight: 500 }}>Time</span>
            <span style={{ position: 'relative', right: '120px', fontWeight: 500 }}>Activity</span>
          </div>

          {[
            { time: '6:30 AM', label: 'Morning Strength Training', id: 1 },
            { time: '7:30 AM', label: 'Breakfast', id: 2 },
            { time: '12:00 PM', label: 'Work', id: null, staticImg: workImg },
            { time: '1:00 PM', label: 'Lunch', id: 3 },
            { time: '6:00 PM', label: 'Evening Cardio Session', id: 4 },
            { time: '7:30 PM', label: 'Dinner', id: 5 },
          ].map((item, index) => (
            <div className="ch" key={index}>
              <span className="time">{item.time}</span>
              <div className="img2" style={{ backgroundColor: "white", border: "none" }}>
                <img
                  className="img6" 
                  id={item.id ? `i${item.id}` : undefined}
                  src={item.staticImg || ''}
                  alt=""
                style={{ display: "block", width: "100%", height: "auto" }}
                />
              </div>
              <span className="t35">
                {item.label}
                {item.id && <span className="t36" id={`t${item.id}`}></span>}
              </span>
            </div>
          ))}
        </div>
      </div>
      <button className="plan-btn" onClick={()=>{nav('/saturdaymenu')}}>
  + Plan your Day
</button>
    </>
  );
};

export default SaturdaySchedule;
