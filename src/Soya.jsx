// SoyaCurry.jsx
import React from 'react';
import './PaneerTikka.css';

import logo from './Screenshot 2025-06-30 221420.jpg';
import soyaImg from './img/Soya.jpg'
import { useNavigate } from 'react-router';

const SoyaCurry = () => {
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
        <h1>Soya Curry</h1>
        <p>Here’s a complete breakdown of Soya Curry</p>
        <img src={soyaImg} alt="Soya Curry" />
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <ul>
              <li>1 cup soya chunks</li>
              <li>2 medium onions, chopped</li>
              <li>2 tomatoes, pureed</li>
              <li>1 tsp ginger-garlic paste</li>
              <li>1 tsp cumin seeds</li>
              <li>1 tsp coriander powder</li>
              <li>1/2 tsp turmeric</li>
              <li>1 tsp red chili powder</li>
              <li>1 tsp garam masala</li>
              <li>Salt to taste</li>
              <li>2 tbsp oil</li>
              <li>Fresh coriander to garnish</li>
            </ul>
          </div>
          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>10 minutes</strong><br />Preparation</p>
              <p><strong>20–25 minutes</strong><br />Cooking Time</p>
              <p><strong>~35 minutes</strong><br />Total Time</p>
            </div>
            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per 1 cup serving, approx.)</span></h3>
              <p><strong>210 kcal</strong> Calories</p>
              <p><strong>17g</strong> Protein</p>
              <p><strong>15g</strong> Carbs</p>
              <p><strong>8g</strong> Fat</p>
              <p><strong>6g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/CiDuAQDPBSs?si=jUyRHQ6VhMvobQ-w"
          title="Soya Curry Recipe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Prep the Soya</h4>
          <ul>
            <li>Soak soya chunks in hot water for 10 minutes. Squeeze out excess water.</li>
          </ul>

          <h4>Make the Masala</h4>
          <ul>
            <li>Heat oil, add cumin seeds. Sauté onions till golden brown.</li>
            <li>Add ginger-garlic paste, sauté for 1–2 mins.</li>
            <li>Add tomato puree and cook until oil separates.</li>
            <li>Mix in all spices and cook 2–3 mins.</li>
          </ul>

          <h4>Cook the Curry</h4>
          <ul>
            <li>Add soaked soya chunks. Mix well.</li>
            <li>Add 1–1.5 cups of water and simmer for 10–15 mins.</li>
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

export default SoyaCurry;
