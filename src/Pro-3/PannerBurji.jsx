// PaneerBhurji.jsx
import React from 'react';
import './PaneerTikka.css';

import logo from './Screenshot 2025-06-30 221420.jpg';
import PBImg from './img/PannerBurji.jpg'
import { useNavigate } from 'react-router';

const PaneerBhurji = () => {
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
        <h1>Paneer Bhurji</h1>
        <p>Here’s a complete breakdown of Paneer Bhurji</p>
        <img src={PBImg} alt="Paneer Bhurji" />
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <ul>
              <li>200g paneer (crumbled)</li>
              <li>1 medium onion, finely chopped</li>
              <li>1 tomato, finely chopped</li>
              <li>1 green chili, chopped</li>
              <li>1 tsp ginger-garlic paste</li>
              <li>1/2 tsp turmeric powder</li>
              <li>1 tsp red chili powder</li>
              <li>1/2 tsp garam masala</li>
              <li>1/2 tsp cumin seeds</li>
              <li>1 tbsp oil or butter</li>
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
              <h3>Nutrition Facts <span>(per 1 cup serving, approx.)</span></h3>
              <p><strong>220 kcal</strong> Calories</p>
              <p><strong>14g</strong> Protein</p>
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
          src="https://www.youtube.com/embed/-w5uBstq3Ok?si=TBBgSiWISOfiUQAA"
          title="Paneer Bhurji Recipe"
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
            <li>Heat oil or butter in a pan. Add cumin seeds and let them splutter.</li>
            <li>Sauté onions till golden brown.</li>
            <li>Add green chili and ginger-garlic paste. Cook for a minute.</li>
          </ul>

          <h4>Add Tomatoes & Spices</h4>
          <ul>
            <li>Add chopped tomatoes and cook till they turn soft and mushy.</li>
            <li>Add turmeric, chili powder, salt, and garam masala. Mix well.</li>
          </ul>

          <h4>Cook Paneer</h4>
          <ul>
            <li>Add crumbled paneer. Mix and cook for 3–5 minutes on low heat.</li>
          </ul>

          <h4>Serve</h4>
          <ul>
            <li>Garnish with chopped coriander leaves.</li>
            <li>Serve hot with roti, paratha, or toast.</li>
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

export default PaneerBhurji;
