// EggCurry.jsx
import React from 'react';
import './PaneerTikka.css';

import logo from './Screenshot 2025-06-30 221420.jpg';
import ECImg  from './img/EC.jpg'
import { useNavigate } from 'react-router';

const EggCurry = () => {
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
        <h1>Egg Curry</h1>
        <p>Here’s a complete breakdown of Egg Curry</p>
        <img src={ECImg} alt="Egg Curry" />
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <ul>
              <li>4 boiled eggs</li>
              <li>2 onions (finely chopped)</li>
              <li>2 tomatoes (pureed)</li>
              <li>1 green chili (chopped)</li>
              <li>1 tsp ginger-garlic paste</li>
              <li>1/2 tsp turmeric powder</li>
              <li>1 tsp red chili powder</li>
              <li>1 tsp coriander powder</li>
              <li>1/2 tsp garam masala</li>
              <li>1 tsp cumin seeds</li>
              <li>2 tbsp oil</li>
              <li>Salt to taste</li>
              <li>Fresh coriander for garnish</li>
            </ul>
          </div>
          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>10 minutes</strong><br />Preparation</p>
              <p><strong>20 minutes</strong><br />Cooking Time</p>
              <p><strong>~30 minutes</strong><br />Total Time</p>
            </div>
            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per serving approx.)</span></h3>
              <p><strong>270 kcal</strong> Calories</p>
              <p><strong>17g</strong> Protein</p>
              <p><strong>8g</strong> Carbs</p>
              <p><strong>18g</strong> Fat</p>
              <p><strong>2g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/pqGMxHIfcXg?si=tRMp4qqndN4JEPjN"
          title="Egg Curry Recipe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Prepare Masala</h4>
          <ul>
            <li>Heat oil in a pan. Add cumin seeds and let them crackle.</li>
            <li>Sauté onions until golden brown.</li>
            <li>Add ginger-garlic paste and green chili. Cook for a minute.</li>
            <li>Add tomato puree and cook until oil separates.</li>
          </ul>

          <h4>Add Spices</h4>
          <ul>
            <li>Mix in turmeric, red chili powder, coriander powder, and salt.</li>
            <li>Cook for 3–4 minutes until the masala thickens.</li>
          </ul>

          <h4>Add Eggs</h4>
          <ul>
            <li>Make small slits in boiled eggs and add them to the masala.</li>
            <li>Stir gently to coat the eggs well. Add some water for gravy.</li>
            <li>Simmer for 5 minutes. Add garam masala at the end.</li>
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

export default EggCurry;
