import React from 'react';
import './PaneerTikka.css'; // Shared CSS

import logo from './Screenshot 2025-06-30 221420.jpg';
import upmaImg from '../REC/5.jpeg'; // Add this image to your assets
import { useNavigate } from 'react-router';

const VegetableUpma = () => {
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
        <h1>VEGETABLE UPMA</h1>
        <p>A nourishing and savory South Indian breakfast made with semolina and veggies.</p>
        <img src={upmaImg} alt="Vegetable Upma" />
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <p><strong>For Upma:</strong></p>
            <ul>
              <li>1 cup Rava / Semolina</li>
              <li>1 tbsp Oil or Ghee</li>
              <li>1 tsp Mustard seeds</li>
              <li>1 tsp Chana dal</li>
              <li>1 tsp Urad dal</li>
              <li>1–2 Green chilies, sliced</li>
              <li>1 small Onion, finely chopped</li>
              <li>Mixed vegetables (carrot, peas, beans), ~1 cup</li>
              <li>¼ tsp Turmeric powder (optional)</li>
              <li>Salt to taste</li>
              <li>2–2.5 cups Water</li>
            </ul>
          </div>
          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>10 minutes</strong><br />Preparation</p>
              <p><strong>10 minutes</strong><br />Cooking Time</p>
              <p><strong>~20 minutes</strong><br />Total Time</p>
            </div>
            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per 1 cup serving, approx.)</span></h3>
              <p><strong>170 kcal</strong> Calories</p>
              <p><strong>4g</strong> Protein</p>
              <p><strong>30g</strong> Carbs</p>
              <p><strong>5g</strong> Fat</p>
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
          src="https://www.youtube.com/embed/Fz20kYmUcuY?si=m4kxb2NKmvHGTesz"
          title="Quinoa Upma – Ranveer Brar (Vegetable Upma Variation)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Directions */}
      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Roast Semolina</h4>
          <ul>
            <li>Dry roast the semolina on medium heat until light golden and fragrant. Keep aside.</li>
          </ul>

          <h4>Prepare Tadka</h4>
          <ul>
            <li>Heat oil/ghee in a pan. Add mustard seeds, chana dal, and urad dal. Let them splutter and turn golden.</li>
            <li>Add green chilies and onions—sauté until translucent.</li>
          </ul>

          <h4>Cook Vegetables</h4>
          <ul>
            <li>Add mixed vegetables, turmeric (if using), and salt. Sauté briefly, then add water. Bring to a simmer.</li>
          </ul>

          <h4>Finish Upma</h4>
          <ul>
            <li>Slowly add roasted semolina while stirring continuously to avoid lumps.</li>
            <li>Cook on low flame, stirring until all water is absorbed and upma turns soft and fluffy.</li>
          </ul>

          <h4>Serve</h4>
          <ul>
            <li>Serve hot with a squeeze of lemon or fresh coconut garnish for added flavor.</li>
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

export default VegetableUpma;
