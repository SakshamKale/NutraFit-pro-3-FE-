// Prawns.jsx
import React from 'react';
import './PaneerTikka.css';

import logo from './Screenshot 2025-06-30 221420.jpg';
import PrawnsImg from './img/Prawns.jpg';
import { useNavigate } from 'react-router';

const Prawns = () => {
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
        <h1>Prawns Masala</h1>
        <p>Here’s a complete breakdown of Prawns Masala</p>
        <img src={PrawnsImg} alt="Prawns Masala" />
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <ul>
              <li>300g prawns (cleaned and deveined)</li>
              <li>1 onion (finely chopped)</li>
              <li>1 tomato (pureed)</li>
              <li>1 tsp ginger-garlic paste</li>
              <li>1 green chili (chopped)</li>
              <li>1/2 tsp turmeric powder</li>
              <li>1 tsp red chili powder</li>
              <li>1 tsp coriander powder</li>
              <li>1/2 tsp garam masala</li>
              <li>1/2 tsp mustard seeds</li>
              <li>1 sprig curry leaves</li>
              <li>2 tbsp oil</li>
              <li>Salt to taste</li>
              <li>Fresh coriander for garnish</li>
            </ul>
          </div>
          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>10 minutes</strong><br />Preparation</p>
              <p><strong>15 minutes</strong><br />Cooking Time</p>
              <p><strong>~25 minutes</strong><br />Total Time</p>
            </div>
            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per serving approx.)</span></h3>
              <p><strong>180 kcal</strong> Calories</p>
              <p><strong>20g</strong> Protein</p>
              <p><strong>4g</strong> Carbs</p>
              <p><strong>10g</strong> Fat</p>
              <p><strong>1g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/_g9RiFvg7cs?si=E09lqjOzmuQIbAaS"
          title="Prawns Masala Recipe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Prepare Base</h4>
          <ul>
            <li>Heat oil in a pan. Add mustard seeds and let them splutter.</li>
            <li>Add curry leaves, green chili, and chopped onion. Sauté until golden.</li>
            <li>Add ginger-garlic paste and cook for a minute.</li>
          </ul>

          <h4>Add Tomato & Spices</h4>
          <ul>
            <li>Add tomato puree and cook until oil separates.</li>
            <li>Add turmeric, chili powder, coriander powder, and salt. Cook well.</li>
          </ul>

          <h4>Cook Prawns</h4>
          <ul>
            <li>Add prawns and stir gently. Cook for 5–7 minutes until they turn pink and are cooked through.</li>
            <li>Sprinkle garam masala and mix well.</li>
          </ul>

          <h4>Serve</h4>
          <ul>
            <li>Garnish with fresh coriander leaves.</li>
            <li>Serve hot with rice or chapati.</li>
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

export default Prawns;
