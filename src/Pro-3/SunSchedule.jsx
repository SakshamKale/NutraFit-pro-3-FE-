import { useEffect } from 'react';
import logo from './Screenshot 2025-06-30 221420.jpg';
import './MondaySchedule'; // Create and move all the styles there
import workImg from './img/work.jpg';
import { useNavigate } from 'react-router';
const SunSchedule = () => {
  let nav = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('selectedData7'));
    if (!data) return;

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
          <span onClick={()=>{nav('/saturday')}}>SAT</span>
          <span style={{ backgroundColor: '#1F2B3F', color: 'white', borderRadius: '5px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SUN</span>
        </div>
      </div>

      <div className="box22">
        <div className="inbox22">
          <div className="ch11" id="ch11">
            <span style={{ position: 'relative', right: '120px', fontWeight: 500 }}>Time</span>
            <span style={{ position: 'relative', right: '120px', fontWeight: 500 }}>Activity</span>
          </div>

          <div className="ch" id="ch2">
            <span className="time">6:30 AM</span>
            <div className="img2" style={{ backgroundColor: "white", border: "none" }}>
              <img src="" alt="" className="img6" id="i1"  style={{ display: "block", width: "auto" }}/>
            </div>
            <span className="t35">
              Morning Strength Training
              <span className="t36" id="t1" />
            </span>
          </div>

          <div className="ch" id="ch3">
            <span className="time">7:30 AM</span>
            <div className="img2" style={{ backgroundColor: "white", border: "none" }}>
              <img src="" alt="" className="img6" id="i2"  style={{ display: "block", width: "100%", height: "auto" }} />
            </div>
            <span className="t35">
              Breakfast
              <span className="t36" id="t2" />
            </span>
          </div>

          <div className="ch" id="ch3">
            <span className="time">12:00 PM</span>
            <div className="img2" style={{ backgroundColor: "white", border: "none" }}>
              <img src={workImg} alt="" className="img6"  style={{ display: "block", width: "100%", height: "auto" }} />
            </div>
            <span className="t35">Work</span>
          </div>

          <div className="ch" id="ch3">
            <span className="time">1:00 PM</span>
            <div className="img2" style={{ backgroundColor: "white", border: "none" }}>
              <img src="" alt="" className="img6" id="i3"  style={{ display: "block", width: "100%", height: "auto" }}/>
            </div>
            <span className="t35">
              Lunch <span className="t36" id="t3"   />
            </span>
          </div>

          <div className="ch" id="ch6">
            <span className="time">6:00 PM</span>
            <div className="img2" style={{ backgroundColor: "white", border: "none" }}>
              <img src="" alt="" className="img6" id="i4"  style={{ display: "block", width: "100%", height: "auto" }} />
            </div>
            <span className="t35">
              Evening Cardio Session
              <span className="t36" id="t4" />
            </span>
          </div>

          <div className="ch" id="ch7">
            <span className="time">7:30 PM</span>
            <div className="img2" style={{ backgroundColor: "white", border: "none" }}>
              <img src="" alt="" className="img6" id="i5"  style={{ display: "block", width: "100%", height: "auto" }} />
            </div>
            <span className="t35">
              Dinner
              <span className="t36" id="t5" />
            </span>
          </div>
        </div>
      </div>
      <button className="plan-btn" onClick={()=>{nav('/sundaymenu')}}>
  + Plan your Day
</button>
    </>
  );
};

export default SunSchedule;
