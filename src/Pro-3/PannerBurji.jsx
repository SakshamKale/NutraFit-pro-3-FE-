import React from 'react';
import './PaneerTikka.css'; // Shared CSS

import logo from './Screenshot 2025-06-30 221420.jpg';
import sproutImg from '../REC/4.jpeg'; // Make sure to add this image file
import { useNavigate } from 'react-router';

const SproutSalad = () => {
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
        <h1>SPROUT SALAD</h1>
        <p>A light, protein- and fiber-rich Indian-style sprout salad for a healthy bite.</p>
        <img src={sproutImg} alt="Sprout Salad" />
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <p><strong>For Salad:</strong></p>
            <ul>
              <li>1 cup Mixed sprouts (moong, chana, matki)</li>
              <li>½ cup Chopped cucumber</li>
              <li>½ cup Chopped tomato</li>
              <li>⅓ cup Finely chopped onion</li>
              <li>1 small Green chili, finely chopped (optional)</li>
              <li>Fresh coriander leaves, chopped</li>
              <li>Lemon juice (to taste)</li>
              <li>Salt & black pepper to taste</li>
            </ul>
          </div>

          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>10 minutes</strong><br />Preparation</p>
              <p><strong>0 minutes</strong><br />Cooking Time</p>
              <p><strong>~10 minutes</strong><br />Total Time</p>
            </div>

            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per 1 cup serving, approx.)</span></h3>
              <p><strong>100 kcal</strong> Calories</p>
              <p><strong>7g</strong> Protein</p>
              <p><strong>14g</strong> Carbs</p>
              <p><strong>2g</strong> Fat</p>
              <p><strong>5g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube */}
      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/K843BPF6OV0?si=UTOVuxkc5h2yhHT7"
          title="Refreshing Indian Salad by Ranveer Brar"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Directions */}
      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Prepare the Sprouts</h4>
          <ul>
            <li>If not pre-cooked, blanch sprouts in boiling water briefly, then drain and cool.</li>
          </ul>

          <h4>Chop & Mix</h4>
          <ul>
            <li>In a large bowl, combine sprouts, chopped cucumber, tomato, onion, and green chili (if using).</li>
          </ul>

          <h4>Season</h4>
          <ul>
            <li>Drizzle with lemon juice. Season with salt and freshly ground black pepper. Toss well.</li>
          </ul>

          <h4>Garnish & Serve</h4>
          <ul>
            <li>Garnish with fresh coriander leaves and serve immediately as a healthy snack or side.</li>
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

export default SproutSalad;
