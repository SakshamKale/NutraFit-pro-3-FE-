import React from 'react';
import './PaneerTikka.css'; // Shared CSS

import logo from './Screenshot 2025-06-30 221420.jpg';
import gingerChickenImg from '../REC/6.jpeg'; // Add this image
import { useNavigate } from 'react-router';

const GingerChicken = () => {
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
        <h1>GINGER CHICKEN</h1>
        <p>A flavorful and protein-rich Indian dish where chicken is cooked with fresh ginger and aromatic spices.</p>
        <img src={gingerChickenImg} alt="Ginger Chicken" />
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <p><strong>For Ginger Chicken:</strong></p>
            <ul>
              <li>200g Boneless chicken, cut into pieces</li>
              <li>2 tbsp Ginger, julienned</li>
              <li>1 medium Onion, finely chopped</li>
              <li>1 medium Tomato, pureed</li>
              <li>1 tsp Turmeric powder</li>
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
              <p><strong>230 kcal</strong> Calories</p>
              <p><strong>28g</strong> Protein</p>
              <p><strong>3g</strong> Carbs</p>
              <p><strong>12g</strong> Fat</p>
              <p><strong>2g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube */}
      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/aezzSLKGN8A?si=y9O0X5JXKMdViF2d" // Replace with actual video if available
          title="Ginger Chicken – Ranveer Brar"
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
            <li>Heat oil in a pan. Sauté onions until golden.</li>
            <li>Add turmeric, red chili powder, coriander powder, and ginger. Cook for 1–2 minutes.</li>
            <li>Add tomato puree and cook until oil separates.</li>
          </ul>

          <h4>Cook Chicken</h4>
          <ul>
            <li>Add chicken pieces and salt. Cook on medium heat for 10–12 minutes until chicken is fully cooked.</li>
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

export default GingerChicken;
