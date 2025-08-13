import React from 'react';
import './PaneerTikka.css'; // Shared CSS

import logo from './Screenshot 2025-06-30 221420.jpg';
import garlicLemonFishImg from '../REC/7.jpeg'; // Add this image
import { useNavigate } from 'react-router';

const GarlicLemonFish = () => {
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
        <h1>GARLIC LEMON FISH</h1>
        <p>Fish fillets marinated with garlic, lemon, and mild spices, then pan-grilled for a healthy, flavorful meal.</p>
        <img src={garlicLemonFishImg} alt="Garlic Lemon Fish" />
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <p><strong>For Garlic Lemon Fish:</strong></p>
            <ul>
              <li>2 Fish fillets (150–200g each)</li>
              <li>2 tsp Garlic paste</li>
              <li>1 tbsp Lemon juice</li>
              <li>1 tsp Olive oil or any cooking oil</li>
              <li>1 tsp Black pepper</li>
              <li>1/2 tsp Red chili powder (optional)</li>
              <li>Salt to taste</li>
              <li>Fresh coriander or parsley for garnish</li>
            </ul>
          </div>
          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>10 minutes</strong><br />Preparation</p>
              <p><strong>12 minutes</strong><br />Cooking Time</p>
              <p><strong>~22 minutes</strong><br />Total Time</p>
            </div>
            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per fillet, approx.)</span></h3>
              <p><strong>200 kcal</strong> Calories</p>
              <p><strong>24g</strong> Protein</p>
              <p><strong>2g</strong> Carbs</p>
              <p><strong>10g</strong> Fat</p>
              <p><strong>1g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube */}
      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/522BBAsijU0?si=9J6ID4dEi4ghgoud" // Replace with actual video link
          title="Garlic Lemon Fish – Ranveer Brar"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Directions */}
      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Marinate Fish</h4>
          <ul>
            <li>Mix garlic paste, lemon juice, black pepper, red chili powder, salt, and oil in a bowl.</li>
            <li>Coat fish fillets evenly and let them marinate for 10–15 minutes.</li>
          </ul>

          <h4>Cook Fish</h4>
          <ul>
            <li>Heat a non-stick pan or grill. Cook fillets for 5–6 minutes on each side until golden and cooked through.</li>
          </ul>

          <h4>Garnish & Serve</h4>
          <ul>
            <li>Garnish with fresh coriander or parsley. Serve hot with steamed veggies or rice.</li>
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

export default GarlicLemonFish;
