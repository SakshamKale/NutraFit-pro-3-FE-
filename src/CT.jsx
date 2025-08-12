// ChickenTikka.jsx
import React from 'react';
import './PaneerTikka.css';

import logo from './Screenshot 2025-06-30 221420.jpg';
import CTimg  from './img/CT.jpg'
import { useNavigate } from 'react-router';

const ChickenTikka = () => {
  const navigate1=useNavigate();
  return (
    <div className='body1000'>
      <header className="header-paneer">
        <span className="plan-btn"  onClick={() => navigate1('/recMenu')}>⮘ Back</span> 
        <div className="logo-circle">
          <img src={logo} alt="NutraFit Logo" />
        </div>
        <div className="title-pan">
          Nutra<span>Fit</span>
        </div>
      </header>

      <section className="hero-pan">
        <h1>Chicken Tikka</h1>
        <p>Here’s a complete breakdown of Chicken Tikka</p>
        <img src={CTimg} alt="Chicken Tikka" />
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <ul>
              <li>500g boneless chicken (cut into cubes)</li>
              <li>1/2 cup thick yogurt</li>
              <li>1 tbsp ginger-garlic paste</li>
              <li>1 tsp red chili powder</li>
              <li>1/2 tsp turmeric powder</li>
              <li>1 tsp garam masala</li>
              <li>1 tsp cumin powder</li>
              <li>1 tsp coriander powder</li>
              <li>1 tbsp lemon juice</li>
              <li>1 tbsp oil</li>
              <li>Salt to taste</li>
              <li>Chaat masala for garnish</li>
              <li>Fresh coriander & onion rings (for serving)</li>
            </ul>
          </div>
          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>15 minutes</strong><br />Preparation</p>
              <p><strong>20 minutes</strong><br />Cooking Time</p>
              <p><strong>~35 minutes</strong><br />Total Time</p>
            </div>
            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per serving approx.)</span></h3>
              <p><strong>290 kcal</strong> Calories</p>
              <p><strong>30g</strong> Protein</p>
              <p><strong>6g</strong> Carbs</p>
              <p><strong>16g</strong> Fat</p>
              <p><strong>2g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/VhijkWkuSKo?si=dXghwt5Az_zWQMWe"
          title="Chicken Tikka Recipe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Marinate Chicken</h4>
          <ul>
            <li>In a bowl, mix yogurt, lemon juice, ginger-garlic paste, and all spices.</li>
            <li>Add chicken pieces and coat well. Marinate for at least 1 hour (overnight preferred).</li>
          </ul>

          <h4>Cook Chicken</h4>
          <ul>
            <li>Preheat grill, oven, or tawa. Drizzle some oil on top of marinated chicken.</li>
            <li>Cook the chicken till charred and fully cooked, turning occasionally.</li>
          </ul>

          <h4>Serve</h4>
          <ul>
            <li>Sprinkle chaat masala on top.</li>
            <li>Serve hot with green chutney, onion rings, and lemon wedges.</li>
          </ul>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="brand">
            <h3>Nutra<span>Fit</span></h3>
            <p>Nutrition tracking for real life.</p>
          </div>
          <div className="socials">
            {/* Icons if needed */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChickenTikka;
