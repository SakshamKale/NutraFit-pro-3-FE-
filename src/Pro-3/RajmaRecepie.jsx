import React from 'react';
import './PaneerTikka.css'; // Shared CSS

import logo from './Screenshot 2025-06-30 221420.jpg';
import theplaImg from '../REC/3.jpeg'; // Make sure to add this image file
import { useNavigate } from 'react-router';

const MethiThepla = () => {
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
        <h1>METHI THEPLA</h1>
        <p>Soft, flavorful Gujarati flatbreads made with fresh fenugreek leaves (methi).</p>
        <img src={theplaImg} alt="Methi Thepla" />
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <p><strong>For the Dough:</strong></p>
            <ul>
              <li>1 cup Whole wheat flour (atta)</li>
              <li>½ cup Fresh fenugreek leaves (methi), finely chopped</li>
              <li>2–3 tbsp Yogurt (curd)</li>
              <li>1 tsp Ginger-green chili paste</li>
              <li>½ tsp Turmeric powder</li>
              <li>½ tsp Red chili powder (optional)</li>
              <li>Salt to taste</li>
              <li>1 tsp Sesame seeds</li>
              <li>1 tbsp Oil</li>
              <li>Water as needed</li>
            </ul>
            <p><strong>For Cooking:</strong></p>
            <ul>
              <li>Oil or ghee for greasing the tava</li>
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
              <h3>Nutrition Facts <span>(per 1 thepla, approx.)</span></h3>
              <p><strong>150 kcal</strong> Calories</p>
              <p><strong>4g</strong> Protein</p>
              <p><strong>25g</strong> Carbs</p>
              <p><strong>3g</strong> Fat</p>
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
          src="https://www.youtube.com/embed/l-6wWsZoFpE?si=wlCVEue9ZG1CU4Di"
          title="Methi Thepla Recipe – Ranveer Brar"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Directions */}
      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Prepare the Dough</h4>
          <ul>
            <li>In a bowl, mix wheat flour, chopped methi leaves, yogurt, ginger-green chili paste, turmeric, chili powder (if using), salt, sesame seeds, and 1 tbsp oil.</li>
            <li>Add water gradually to form a soft, pliable dough. Cover and rest for 10 minutes.</li>
          </ul>

          <h4>Shape & Roll</h4>
          <ul>
            <li>Divide the dough into golf-ball-sized portions. Dust each ball with flour and roll into thin discs (about 6-7 inches in diameter).</li>
          </ul>

          <h4>Cook the Thepla</h4>
          <ul>
            <li>Heat a tava or non-stick pan on medium flame. Place the rolled thepla, cook until you see small bubbles, flip.</li>
            <li>Apply a little oil or ghee, cook until golden spots appear on both sides.</li>
          </ul>

          <h4>Serve</h4>
          <ul>
            <li>Serve warm with yogurt, pickle, or chutney, or pack them for travel and snacks.</li>
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

export default MethiThepla;
