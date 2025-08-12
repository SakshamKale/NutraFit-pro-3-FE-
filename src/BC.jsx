// ButterChicken.jsx
import React from 'react';
import './PaneerTikka.css';

import logo from './Screenshot 2025-06-30 221420.jpg';
import BCImg from './img/BC.jpg'
import { useNavigate } from 'react-router';

const ButterChicken = () => {
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
        <h1>Butter Chicken</h1>
        <p>Here’s a complete breakdown of Butter Chicken</p>
        <img src={BCImg} alt="Butter Chicken" />
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <ul>
              <li>500g boneless chicken (cut into pieces)</li>
              <li>1/2 cup yogurt</li>
              <li>1 tbsp ginger-garlic paste</li>
              <li>1 tsp red chili powder</li>
              <li>1/2 tsp turmeric powder</li>
              <li>1 tsp garam masala</li>
              <li>1/2 tsp cumin powder</li>
              <li>1/2 tsp coriander powder</li>
              <li>3 tomatoes (pureed)</li>
              <li>2 tbsp butter</li>
              <li>2 tbsp cream</li>
              <li>1 tbsp oil</li>
              <li>Salt to taste</li>
              <li>Fresh coriander for garnish</li>
            </ul>
          </div>
          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>15 minutes</strong><br />Preparation</p>
              <p><strong>25 minutes</strong><br />Cooking Time</p>
              <p><strong>~40 minutes</strong><br />Total Time</p>
            </div>
            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per serving approx.)</span></h3>
              <p><strong>320 kcal</strong> Calories</p>
              <p><strong>28g</strong> Protein</p>
              <p><strong>9g</strong> Carbs</p>
              <p><strong>20g</strong> Fat</p>
              <p><strong>2g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/JxSwBpEiYeQ?si=LSbfD6giCDy7S2tu"
          title="Butter Chicken Recipe"
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
            <li>In a bowl, combine yogurt, chili powder, turmeric, ginger-garlic paste, and salt.</li>
            <li>Add chicken and marinate for at least 1 hour (or overnight).</li>
          </ul>

          <h4>Cook Chicken</h4>
          <ul>
            <li>Heat oil in a pan and cook marinated chicken until slightly charred and cooked through.</li>
            <li>Set aside.</li>
          </ul>

          <h4>Prepare Gravy</h4>
          <ul>
            <li>In the same pan, add butter. Add tomato puree and cook until oil separates.</li>
            <li>Add cumin, coriander, garam masala, salt, and a little water.</li>
            <li>Add the cooked chicken and simmer for 5–7 minutes.</li>
            <li>Stir in cream and cook for another 2 minutes.</li>
          </ul>

          <h4>Serve</h4>
          <ul>
            <li>Garnish with fresh coriander and extra cream if desired.</li>
            <li>Serve hot with naan or rice.</li>
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

export default ButterChicken;
