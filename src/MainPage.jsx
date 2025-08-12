import './Mainpage.css'
import img1 from './1.jpg';
import img2 from './2.jpg'; 
import img3 from './3.jpg';
import { useNavigate } from 'react-router';

const MainPage = () => {
  let nav = useNavigate();
  return (
    <div className="body1">
      <nav className="nav fade-in">
        <div className="logo"></div>
        <div className="t1">Nutra<span className="t12">Fit</span></div>
        <button className="b2" onClick={() => { nav('/login') }} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Login</button>
      </nav>

      <div className="f1 fade-in">
        <div className="t2 slide-in-bottom" style={{ position: "relative", top: "-50px" }}>
          <span>
            <b>#1</b> AI - powered fitness tracking site
          </span>
          <p className="t3 slide-in-bottom" style={{ position: "relative", top: "-50px" }}>
            Fitness and <span className="t5">life</span> Balance
          </p>
          <button className="b1 slide-in-bottom" onClick={() => nav('/signup')} style={{ position: "relative", top: "-70px" }}>
            <b>START TODAY &gt;</b>
          </button>
        </div>
        <div className="img1 slide-in-bottom" style={{ position: "relative", left: "50px" }}></div>
      </div>

      <div className="wel fade-in">
        <div className="wel1">
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <span className="t6">WELCOME TO NUTRA<span className="t12">FIT</span></span>
          </div>
        </div>
      </div>

      <div className="ste fade-in">
        <div className="ste1">
          <span className="ch1"><b>- Plan your week</b></span>
          <span className="ch1"><b>- Track your Macros</b></span>
          <span className="ch1"><b>- Count your Calories</b></span>
          <span className="ch"><span className="ch2" style={{ backgroundImage: `url(${img2})` }}></span></span>
          <span className="ch"><span className="ch2" style={{ backgroundImage: `url(${img1})` }}></span></span>
          <span className="ch"><span className="ch2" style={{ backgroundImage: `url(${img3})` }}></span></span>
        </div>
      </div>

      <div className="box fade-in">
        <div className="box1">
          <span className="t10">
            "Your life doesn’t get better by chance, it gets better by change." – Jim Rohn
          </span>
        </div>
      </div>

      <div className="box2 fade-in">
        <div className="inbox2">
          <span className="t11 slide-in-bottom">Hit your health goals in 1-2-3</span>
          <div className="boxgrid">
            <div className="ch10 slide-in-bottom" id="ch111"></div>
            <div className="ch10 slide-in-bottom" id="ch222">
              <span className="t13">1</span>
              <p className="t14 slide-in-bottom">
                Click on <span className="t15">START TODAY </span>
              </p>
            </div>
            <div className="ch10 slide-in-bottom" id="ch333">
              <span className="t13">2</span>
              <span className="t14 slide-in-bottom" style={{ top: '90px' }}>
                Login and <br />
                <span className="t15">Fill the Form</span>
              </span>
            </div>
            <div className="ch10 slide-in-bottom" id="ch444"></div>
            <div className="ch10 slide-in-bottom" id="ch555"></div>
            <div className="ch10 slide-in-bottom" id="ch666">
              <span className="t13">3</span>
              <span className="t14 slide-in-bottom">
                Ready to <span className="t15">Go!</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="box4 fade-in">
        <div className="inbox4">
          <span className="t16">About Nutra<span style={{ color: '#3D80FC' }}>Fit</span></span>
          <p className="t17">
            NutraFit is your all-in-one digital companion designed to help you achieve a balanced and healthy lifestyle. The name blends “Nutrition” and “Fitness,” capturing our mission to support your well-being through smarter choices and consistent habits. NutraFit allows you to track your calories, macros, and water intake with ease, helping you stay on top of your nutrition goals. It also offers a built-in day scheduler so you can structure your meals, workouts, and daily routines without stress. From monitoring your protein, carbs, and fat intake to helping you plan balanced meals, NutraFit ensures that your fitness journey is organized, purposeful, and sustainable. Whether you're aiming to build better habits, stay fit, or simply live healthier, NutraFit brings everything you need into one seamless experience.
          </p>
        </div>
      </div>
    

      <div className="box5 fade-in">
        <div className="box11">
          <div className="box13">
            <span className="t18">Nutra<span className="t12">Fit</span></span>
            <p>Nutrition tracking for real life.</p>
            <button className="b12 slide-in-bottom" onClick={() => nav('/signup')}>
              <b>START TODAY &gt;</b>
            </button>
          </div>
          <div className="logo1"></div>
        </div>
        
        <div className="box12">
          <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-youtube" id="lo" style={{color:'white'}}></i>
</a>
<a href="https://www.instagram.com/nutrafit04?igsh=MWhyZDg0b2gwcHF0bA==" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-instagram" id="lo" style={{color:'white'}}></i>
</a>
<a href="https://www.facebook.com/profile.php?id=61578884354045" target="_blank" rel="noopener noreferrer">
   <i className="fa-brands fa-facebook" id="lo" style={{color:'white'}}></i>
</a>
<a href="  https://in.linkedin.com/in/nutrafit-undefined-08336a379 " target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-linkedin" id="lo" style={{color:'white'}}></i>
</a>
          
          
         
          
        </div>
      </div>
    </div>
  );
};

export default MainPage;
