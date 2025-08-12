import React from 'react';
import './PaneerTikka.css'

import logo from './Screenshot 2025-06-30 221420.jpg';

import PTimg from './img/PaneerTikka.jpg'
import { useNavigate } from 'react-router';
// import youtubeIcon from './img/youtube.png';
// import instagramIcon from './img/instagram.svg';
// import youtubeSvg from './img/youtube.svg';
// import facebookIcon from './img/facebook.svg';
// import linkedinIcon from './img/linkedin.svg';


const PaneerTikka = () => {
  const navigate1=useNavigate();
  return (
    <div className='body1000'>
      {/* Header */}
      <header className="header-paneer">
        <span className="plan-btn"  onClick={() => navigate1('/recMenu')}>⮘ Back</span> 
        <div className="logo-circle">
          <img src={logo} alt="NutraFit Logo" />
        </div>
        <div className="title-pan">
          Nutra<span>Fit</span>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-pan">
        <h1>Paneer Tikka</h1>
        <p>Here’s a complete breakdown of Paneer Tikka</p>
        <img src={PTimg} alt="Paneer Tikka" />
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <p><strong>For the marinade:</strong></p>
            <ul>
              <li>½ cup thick curd (yogurt)</li>
              <li>1 tsp red chili powder</li>
              <li>½ tsp turmeric</li>
              <li>½ tsp garam masala</li>
              <li>½ tsp kasuri methi</li>
              <li>½ tsp chaat masala</li>
              <li>1 tsp ginger-garlic paste</li>
              <li>¼ tsp ajwain</li>
              <li>2 tsp roasted besan</li>
              <li>1 tbsp lemon juice</li>
              <li>Salt to taste</li>
              <li>3 tsp oil</li>
            </ul>
            <p><strong>For the tikka:</strong></p>
            <ul>
              <li>½ onion (petals)</li>
              <li>½ capsicum (red & green)</li>
              <li>5 cubes paneer</li>
            </ul>
          </div>
          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>15–20 minutes</strong><br />Preparation</p>
              <p><strong>25–30 minutes</strong><br />Cooking Time</p>
              <p><strong>~45 minutes</strong><br />Total Time</p>
            </div>
            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per 1 cup serving, approx.)</span></h3>
              <p><strong>180 kcal</strong> Calories</p>
              <p><strong>9g</strong> Protein</p>
              <p><strong>28g</strong> Carbs</p>
              <p><strong>6g</strong> Fat</p>
              <p><strong>7g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube */}
      <div className="youtube">
    
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/c-oVDb-O2Q8"
    title="Paneer Tikka Recipe"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

      {/* Directions */}
      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Make the Marinade</h4>
          <ul>
            <li>In a bowl, whisk together thick curd (yogurt) with spices like red chili powder, turmeric, garam masala, coriander powder, kasuri methi, chaat masala, ginger-garlic paste, lemon juice, and salt.</li>
            <li><strong>Optional:</strong> Add roasted besan (gram flour) and a touch of mustard oil for that authentic smoky flavor.</li>
          </ul>

          <h4>Add Paneer & Veggies</h4>
          <ul>
            <li>Toss in cubes of paneer, onion petals, and bell peppers (red/green).</li>
            <li>Mix gently to coat everything evenly.</li>
          </ul>

          <h4>Marinate</h4>
          <ul>
            <li>Cover and refrigerate for at least 30 minutes. For deeper flavor, marinate for 2–4 hours.</li>
          </ul>

          <h4>Skewer</h4>
          <ul>
            <li>Thread paneer and veggies alternately onto skewers. Or cook directly on pan or air fryer.</li>
          </ul>

          <h4>Cook</h4>
          <ul>
            <li><strong>Tawa:</strong> Cook on medium heat with a little oil.</li>
            <li><strong>Oven:</strong> 230°C (450°F), bake 10 mins + broil 2–3 mins.</li>
            <li><strong>Air Fryer:</strong> 200°C (390°F) for 5 mins, brush and cook 2 more mins.</li>
          </ul>

          <h4>Serve</h4>
          <ul>
            <li>Sprinkle with chaat masala and lemon juice.</li>
            <li>Pair with mint chutney, onion rings, and lemon wedges.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="brand">
            <h3>Nutra<span>Fit</span></h3>
            <p>Nutrition tracking for real life.</p>
          </div>
          <div className="socials">
            {/* <img src={} alt="Instagram" />
            <img src={} alt="YouTube" />
            <img src={} alt="Facebook" />
            <img src={} alt="LinkedIn" /> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaneerTikka;
