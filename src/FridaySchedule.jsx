import { useEffect } from 'react';
import logo from './Screenshot 2025-06-30 221420.jpg';
import workImg from './img/work.jpg';
import { useNavigate } from 'react-router';
import './MondaySchedule.css'; 
const FridaySchedule = () => {
  let nav = useNavigate();
  useEffect(() => {
  const data = JSON.parse(localStorage.getItem('selectedData5'));
  if (data) {
    data.forEach((item, idx) => {
      const imgEl = document.getElementById(`i${idx + 1}`);
      const textEl = document.getElementById(`t${idx + 1}`);

      if (item.src) {
        imgEl.src = item.src;
        imgEl.style.display = 'inline'; // show image
      } else {
        imgEl.src = ''; 
        imgEl.style.display = 'none'; // hide image if no src
      }
      textEl.textContent = item.text;
    });
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
          <span style={{ backgroundColor: '#1F2B3F', color: 'white', borderRadius: '5px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>FRI</span>
                   <span onClick={()=>{nav('/saturday')}}>SAT</span>
          <span onClick={()=>{nav('/sunday')}}>SUN</span>

        </div>
      </div>

      <div className="box22">
        <div className="inbox22">
          <div className="ch11" id="ch11">
            <span style={{ position: 'relative', right: '120px' }}>Time</span>
            <span style={{ position: 'relative', right: '120px' }}>Activity</span>
          </div>

          <div className="ch">
            <span className="time">6:30 AM</span>
            <div className="img2"><img id="i1" className="img6" alt="" /></div>
            <span className="t35">Morning Strength Training <span id="t1" className="t36"></span></span>
          </div>

          <div className="ch">
            <span className="time">7:30 AM</span>
            <div className="img2"><img id="i2" className="img6" alt="" /></div>
            <span className="t35">Breakfast <span id="t2" className="t36"></span></span>
          </div>

          <div className="ch">
            <span className="time">12:00 PM</span>
            <div className="img2"><img src={workImg} className="img6" alt="Work" /></div>
            <span className="t35">Work</span>
          </div>

          <div className="ch">
            <span className="time">1:00 PM</span>
            <div className="img2"><img id="i3" className="img6" alt="" /></div>
            <span className="t35">Lunch <span id="t3" className="t36"></span></span>
          </div>

          <div className="ch">
            <span className="time">6:00 PM</span>
            <div className="img2"><img id="i4" className="img6" alt="" /></div>
            <span className="t35">Evening Cardio Session <span id="t4" className="t36"></span></span>
          </div>

          <div className="ch">
            <span className="time">7:30 PM</span>
            <div className="img2"><img id="i5" className="img6" alt="" /></div>
            <span className="t35">Dinner <span id="t5" className="t36"></span></span>
          </div>
        </div>
      </div>
      <button className="plan-btn" onClick={()=>{nav('/fridaymenu')}}>
  + Plan your Day
</button>
    </>
  );
};

export default FridaySchedule;
