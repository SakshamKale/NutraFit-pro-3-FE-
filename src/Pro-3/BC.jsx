import React from 'react';
import './PaneerTikka.css'; // Shared CSS

import logo from './Screenshot 2025-06-30 221420.jpg';
import bakedMasalaFishImg from '../REC/]9.jpeg'; // Add this image
import { useNavigate } from 'react-router';

const BakedMasalaFish = () => {
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
        <h1>BAKED MASALA FISH</h1>
        <p>Fish fillets coated with Indian spices and baked for a healthy, flavorful meal rich in protein and omega-3s.</p>
        <img src={bakedMasalaFishImg} alt="Baked Masala Fish" />
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <p><strong>For Baked Masala Fish:</strong></p>
            <ul>
              <li>2 Fish fillets (150–200g each)</li>
              <li>1 tsp Ginger-garlic paste</li>
              <li>1 tsp Turmeric powder</li>
              <li>1 tsp Red chili powder</li>
              <li>1 tsp Coriander powder</li>
              <li>1 tsp Lemon juice</li>
              <li>1 tsp Olive oil or any cooking oil</li>
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
              <h3>Nutrition Facts <span>(per fillet, approx.)</span></h3>
              <p><strong>220 kcal</strong> Calories</p>
              <p><strong>25g</strong> Protein</p>
              <p><strong>3g</strong> Carbs</p>
              <p><strong>12g</strong> Fat</p>
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
          src="https://www.youtube.com/embed/sqPXxYmLXlw?si=qq-lqjtBDU8g2vv5" // Replace with actual video link
          title="Baked Masala Fish – Ranveer Brar"
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
            <li>Mix ginger-garlic paste, turmeric, chili powder, coriander powder, lemon juice, oil, and salt to make a paste.</li>
          </ul>

          <h4>Marinate Fish</h4>
          <ul>
            <li>Coat fish fillets with the spice paste and let it marinate for 15 minutes.</li>
          </ul>

          <h4>Bake Fish</h4>
          <ul>
            <li>Preheat oven to 200°C (400°F). Place fillets on a baking tray lined with parchment paper.</li>
            <li>Bake for 12–15 minutes until cooked through and slightly golden.</li>
          </ul>

          <h4>Garnish & Serve</h4>
          <ul>
            <li>Garnish with fresh coriander. Serve hot with steamed vegetables or rice.</li>
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

export default BakedMasalaFish;
