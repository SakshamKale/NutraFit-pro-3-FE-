import React from 'react';
import './PaneerTikka.css'; // Shared CSS

import logo from './Screenshot 2025-06-30 221420.jpg';
import vsimg from './img/vegetable-sambar-01.jpg'
import { useNavigate } from 'react-router';
const VegetableSambar = () => {
  const navigate1=useNavigate();
  return (
    <div className='body1000'>
      {/* Header */}
      <header className="header-paneer">
        <span className="plan-btn"  onClick={() => navigate1('/recMenu')}>⮘ Back</span> 
        <div className="logo-circle">
          <img src={logo} alt="NutraFit Logo" />
        </div>
        <div className="title-pan">
          Nutra<span>Fit</span>
        </div>
      </header>
      {/* Hero */}
      <section className="hero-pan">
        
        <h1>Vegetable Sambar</h1>
        <p>A hearty and flavorful Indian stew – Vegetable Sambar</p>
        <img src={vsimg} alt="Vegetable Sambar" />
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <p><strong>For Sambar:</strong></p>
            <ul>
              <li>½ cup Toor dal (pigeon peas)</li>
              <li>1.5–2 cups Mixed vegetables (carrot, drumstick, pumpkin, etc.)</li>
              <li>1 tbsp Tamarind paste or lemon-sized ball</li>
              <li>1 medium Tomato, chopped</li>
              <li>¼ tsp Turmeric powder</li>
              <li>1.5–2 tbsp Sambar powder</li>
              <li>Salt to taste</li>
              <li>Water as needed</li>
            </ul>

            <p><strong>For Tempering (Tadka):</strong></p>
            <ul>
              <li>1–2 tbsp Oil or ghee</li>
              <li>1 tsp Mustard seeds</li>
              <li>1–2 Dried red chilies</li>
              <li>Curry leaves</li>
              <li>Pinch of Asafoetida (hing)</li>
            </ul>

            <p><strong>Optional:</strong></p>
            <ul>
              <li>Fresh coriander leaves (for garnish)</li>
              <li>½ tsp Jaggery (for sweetness)</li>
            </ul>
          </div>

          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>15–20 minutes</strong><br />Preparation</p>
              <p><strong>25–30 minutes</strong><br />Cooking Time</p>
              <p><strong>~45 minutes</strong><br />Total Time</p>
            </div>

            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per 1 cup serving, approx.)</span></h3>
              <p><strong>180 kcal</strong> Calories</p>
              <p><strong>9g</strong> Protein</p>
              <p><strong>32g</strong> Carbs</p>
              <p><strong>4g</strong> Fat</p>
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
    src="https://www.youtube.com/embed/XvvObytWWSc?si=9RjDHloKUThSzppZ"
    title="Paneer Tikka Recipe"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


      {/* Directions */}
      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Cook the Dal</h4>
          <ul>
            <li>Rinse ½ cup toor dal well. Pressure cook with 2 cups water, ¼ tsp turmeric, and a few drops of oil for 3–4 whistles or until soft. Mash and set aside.</li>
          </ul>

          <h4>Cook the Vegetables</h4>
          <ul>
            <li>Boil chopped vegetables with enough water, a bit of turmeric, salt, and tomato. Cook until just tender.</li>
          </ul>

          <h4>Prepare Tamarind Water</h4>
          <ul>
            <li>Soak tamarind in warm water for 10 mins or dilute paste in ½ cup water to make juice.</li>
          </ul>

          <h4>Combine Everything</h4>
          <ul>
            <li>Add tamarind water and sambar powder to the vegetables. Simmer 5–7 minutes. Add mashed dal and simmer another 5–10 mins.</li>
          </ul>

          <h4>Tempering (Tadka)</h4>
          <ul>
            <li>Heat oil or ghee. Add mustard seeds (splutter), dried chilies, curry leaves, hing. Pour over sambar and mix.</li>
          </ul>

          <h4>Garnish and Serve</h4>
          <ul>
            <li>Garnish with coriander. Serve hot with rice, idli, dosa, or upma.</li>
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

export default VegetableSambar;
