// Rajma.jsx
import React from 'react';
import './PaneerTikka.css';

import logo from './Screenshot 2025-06-30 221420.jpg';
import rajmaImg from './img/Rajma.jpg'
import { useNavigate } from 'react-router';

const Rajma = () => {
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
        <h1>Rajma</h1>
        <p>Here’s a complete breakdown of Rajma</p>
        <img src={rajmaImg} alt="Rajma" />
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <ul>
              <li>1 cup rajma (kidney beans)</li>
              <li>2 medium onions, chopped</li>
              <li>2 tomatoes, pureed</li>
              <li>1 tsp ginger-garlic paste</li>
              <li>1 tsp cumin seeds</li>
              <li>1 tsp coriander powder</li>
              <li>1/2 tsp turmeric</li>
              <li>1 tsp red chili powder</li>
              <li>1 tsp garam masala</li>
              <li>Salt to taste</li>
              <li>2 tbsp oil or ghee</li>
              <li>Fresh coriander to garnish</li>
            </ul>
          </div>
          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>8 hours soak + 15 min</strong><br />Preparation</p>
              <p><strong>25–30 minutes</strong><br />Cooking Time</p>
              <p><strong>~45 minutes</strong><br />Total Time</p>
            </div>
            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per 1 cup serving, approx.)</span></h3>
              <p><strong>215 kcal</strong> Calories</p>
              <p><strong>13g</strong> Protein</p>
              <p><strong>40g</strong> Carbs</p>
              <p><strong>3g</strong> Fat</p>
              <p><strong>10g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/e7N93e5dKtM?si=uHuY729Oiz46sHYb"
          title="Rajma Recipe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Soak & Pressure Cook</h4>
          <ul>
            <li>Soak rajma overnight or for 8 hours.</li>
            <li>Pressure cook with water and salt until soft (3–5 whistles).</li>
          </ul>

          <h4>Prepare Masala</h4>
          <ul>
            <li>Heat oil, add cumin seeds. Sauté onions until golden.</li>
            <li>Add ginger-garlic paste and cook for 1 min.</li>
            <li>Add tomato puree and cook till oil separates.</li>
            <li>Add all powdered spices and cook 2–3 mins.</li>
          </ul>

          <h4>Combine & Simmer</h4>
          <ul>
            <li>Add boiled rajma along with water. Mix well.</li>
            <li>Simmer 10–15 mins. Mash a few beans to thicken gravy.</li>
          </ul>

          <h4>Serve</h4>
          <ul>
            <li>Garnish with fresh coriander.</li>
            <li>Serve hot with rice or roti.</li>
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

export default Rajma;
