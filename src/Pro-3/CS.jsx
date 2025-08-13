import React from 'react';
import './PaneerTikka.css'; // Shared CSS

import logo from './Screenshot 2025-06-30 221420.jpg';
import prawnSpinachImg from '../REC/10.jpeg'; // Add this image
import { useNavigate } from 'react-router';

const PrawnSpinachCurry = () => {
  const navigate1 = useNavigate();
  return (
    <div className='body1000'>
      {/* Header */}
      <header className="header-paneer">
        <span className="plan-btn" onClick={() => navigate1('/recMenu')}>⮘ Back</span>
        <div className="logo-circle">
          <img src={logo} alt="NutraFit Logo" />
        </div>
        <div className="title-pan">
          Nutra<span>Fit</span>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-pan">
        <h1>PRAWN AND SPINACH CURRY</h1>
        <p>A healthy, protein-rich prawn curry cooked with fresh spinach and aromatic Indian spices.</p>
        <img src={prawnSpinachImg} alt="Prawn and Spinach Curry" />
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <p><strong>For Prawn and Spinach Curry:</strong></p>
            <ul>
              <li>200g Prawns, cleaned</li>
              <li>2 cups Spinach, chopped</li>
              <li>1 medium Onion, finely chopped</li>
              <li>1 medium Tomato, pureed</li>
              <li>1 tsp Ginger-garlic paste</li>
              <li>1/2 tsp Turmeric powder</li>
              <li>1 tsp Red chili powder</li>
              <li>1 tsp Coriander powder</li>
              <li>1 tsp Oil</li>
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
              <h3>Nutrition Facts <span>(per serving, approx.)</span></h3>
              <p><strong>210 kcal</strong> Calories</p>
              <p><strong>22g</strong> Protein</p>
              <p><strong>5g</strong> Carbs</p>
              <p><strong>10g</strong> Fat</p>
              <p><strong>3g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube */}
      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/663hVQxffQU?si=ubY-iTUO-wk07KUo" // Replace with actual video link
          title="Prawn and Spinach Curry – Ranveer Brar"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Directions */}
      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Prepare Masala</h4>
          <ul>
            <li>Heat oil in a pan. Sauté onions until golden, then add ginger-garlic paste and cook 1–2 mins.</li>
            <li>Add turmeric, chili powder, coriander powder, and tomato puree. Cook until oil separates.</li>
          </ul>

          <h4>Cook Spinach and Prawns</h4>
          <ul>
            <li>Add chopped spinach and cook 3–4 minutes until wilted.</li>
            <li>Add prawns, salt, and mix well. Cook 5–7 minutes until prawns turn pink and cooked through.</li>
          </ul>

          <h4>Garnish & Serve</h4>
          <ul>
            <li>Garnish with fresh coriander. Serve hot with steamed rice or roti.</li>
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
            {/* Icons can go here if needed */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrawnSpinachCurry;
