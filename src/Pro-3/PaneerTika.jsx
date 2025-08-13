import React from 'react';
import './PaneerTikka.css'; // Shared CSS

import logo from './Screenshot 2025-06-30 221420.jpg';
import ragiImg from '../REC/2.jpeg';
import { useNavigate } from 'react-router';

const RagiDosa = () => {
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
        <h1>RAGI DOSA</h1>
        <p>A nutritious South Indian dosa made with ragi flour, rich in calcium and fiber.</p>
        <img src={ragiImg} alt="Ragi Dosa" />
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <p><strong>For Ragi Dosa Batter:</strong></p>
            <ul>
              <li>1 cup Ragi (finger millet) flour</li>
              <li>½ cup Rice flour</li>
              <li>¼ cup Semolina (sooji/rava)</li>
              <li>1 cup Curd (slightly sour)</li>
              <li>1–1.5 cups Water (as needed)</li>
              <li>Salt to taste</li>
            </ul>

            <p><strong>Optional Add-ins:</strong></p>
            <ul>
              <li>1 small Onion, finely chopped</li>
              <li>1–2 Green chilies, finely chopped</li>
              <li>Fresh coriander leaves, chopped</li>
            </ul>

            <p><strong>For Cooking:</strong></p>
            <ul>
              <li>Oil or ghee for greasing</li>
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
              <h3>Nutrition Facts <span>(per dosa, approx.)</span></h3>
              <p><strong>110 kcal</strong> Calories</p>
              <p><strong>3g</strong> Protein</p>
              <p><strong>22g</strong> Carbs</p>
              <p><strong>2g</strong> Fat</p>
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
          src="https://www.youtube.com/embed/jEOtna3oZLo?si=qNPAFT9h-OV9B6ay"
          title="Ragi Dosa Recipe by Ranveer Brar"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Directions */}
      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Prepare the Batter</h4>
          <ul>
            <li>In a mixing bowl, combine ragi flour, rice flour, semolina, curd, and salt.</li>
            <li>Add water gradually to make a smooth, flowing batter. Rest for 10–15 minutes.</li>
          </ul>

          <h4>Add Vegetables (Optional)</h4>
          <ul>
            <li>Mix in onion, green chili, and coriander if you like a masala-style dosa.</li>
          </ul>

          <h4>Cook the Dosa</h4>
          <ul>
            <li>Heat a non-stick tawa, lightly grease it. Pour batter and spread thin in a circular motion.</li>
            <li>Cook on medium flame until crisp, flip if desired for extra cooking.</li>
          </ul>

          <h4>Serve</h4>
          <ul>
            <li>Serve hot with coconut chutney and sambar.</li>
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

export default RagiDosa;
