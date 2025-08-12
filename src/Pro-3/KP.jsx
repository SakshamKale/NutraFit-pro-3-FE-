// KadahiPaneer.jsx
import React from 'react';
import './PaneerTikka.css';

import logo from './Screenshot 2025-06-30 221420.jpg';
import KPImg from './img/KadaiPaanner.jpg'
import { useNavigate } from 'react-router';

const KadahiPaneer = () => {
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
        <h1>Kadahi Paneer</h1>
        <p>Here’s a complete breakdown of Kadahi Paneer</p>
        <img src={KPImg} alt="Kadahi Paneer" />
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <ul>
              <li>200g paneer (cubed)</li>
              <li>1 onion (sliced)</li>
              <li>1 capsicum (sliced)</li>
              <li>2 tomatoes (pureed)</li>
              <li>1 tsp ginger-garlic paste</li>
              <li>1/2 tsp cumin seeds</li>
              <li>1/2 tsp turmeric powder</li>
              <li>1 tsp coriander powder</li>
              <li>1 tsp red chili powder</li>
              <li>1/2 tsp garam masala</li>
              <li>1 tsp kasuri methi (dried fenugreek)</li>
              <li>1 tbsp oil or ghee</li>
              <li>Salt to taste</li>
              <li>Fresh coriander for garnish</li>
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
              <h3>Nutrition Facts <span>(per serving approx.)</span></h3>
              <p><strong>250 kcal</strong> Calories</p>
              <p><strong>13g</strong> Protein</p>
              <p><strong>10g</strong> Carbs</p>
              <p><strong>18g</strong> Fat</p>
              <p><strong>3g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/nRPmoioNisI?si=Yyg-qbTfbfsVlN44"
          title="Kadahi Paneer Recipe"
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
            <li>Heat oil or ghee in a kadahi. Add cumin seeds and let them splutter.</li>
            <li>Add sliced onions and sauté till golden.</li>
            <li>Mix in ginger-garlic paste and cook for a minute.</li>
          </ul>

          <h4>Cook Vegetables</h4>
          <ul>
            <li>Add tomato puree and cook until oil separates.</li>
            <li>Stir in turmeric, chili powder, coriander powder, and salt.</li>
            <li>Add sliced capsicum and cook for 3–4 minutes.</li>
          </ul>

          <h4>Add Paneer & Finish</h4>
          <ul>
            <li>Add paneer cubes and mix gently.</li>
            <li>Sprinkle garam masala and crushed kasuri methi.</li>
            <li>Simmer for 2–3 minutes and turn off the heat.</li>
          </ul>

          <h4>Serve</h4>
          <ul>
            <li>Garnish with fresh coriander.</li>
            <li>Serve hot with naan, roti, or jeera rice.</li>
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

export default KadahiPaneer;
