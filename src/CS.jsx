// ChickenSukka.jsx
import React from 'react';
import './PaneerTikka.css';

import logo from './Screenshot 2025-06-30 221420.jpg';
import CSimg from './img/CS.jpg'
import { useNavigate } from 'react-router';

const ChickenSukka = () => {
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
        <h1>Chicken Sukka</h1>
        <p>Here’s a complete breakdown of Chicken Sukka</p>
        <img src={CSimg} alt="Chicken Sukka" />
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <ul>
              <li>500g chicken (bone-in or boneless)</li>
              <li>1 cup grated coconut</li>
              <li>2 onions (sliced)</li>
              <li>1 tsp ginger-garlic paste</li>
              <li>1 tsp red chili powder</li>
              <li>1/2 tsp turmeric powder</li>
              <li>1 tsp coriander powder</li>
              <li>1/2 tsp garam masala</li>
              <li>1 tsp mustard seeds</li>
              <li>Curry leaves</li>
              <li>2 tbsp oil</li>
              <li>Salt to taste</li>
              <li>Fresh coriander for garnish</li>
            </ul>
          </div>
          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>15 minutes</strong><br />Preparation</p>
              <p><strong>30 minutes</strong><br />Cooking Time</p>
              <p><strong>~45 minutes</strong><br />Total Time</p>
            </div>
            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per serving approx.)</span></h3>
              <p><strong>350 kcal</strong> Calories</p>
              <p><strong>28g</strong> Protein</p>
              <p><strong>6g</strong> Carbs</p>
              <p><strong>22g</strong> Fat</p>
              <p><strong>3g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/SC5LJP31cZk?si=Z8PXssyCquRVyEp0" // Replace with actual Sukka recipe video ID
          title="Chicken Sukka Recipe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Preparation</h4>
          <ul>
            <li>Clean and cut the chicken into small pieces.</li>
            <li>Marinate with turmeric, chili powder, and salt. Set aside for 15 minutes.</li>
          </ul>

          <h4>Make Masala</h4>
          <ul>
            <li>Dry roast grated coconut until golden brown. Set aside.</li>
            <li>Heat oil in a pan, add mustard seeds and curry leaves.</li>
            <li>Sauté onions until golden, then add ginger-garlic paste.</li>
          </ul>

          <h4>Cook Chicken</h4>
          <ul>
            <li>Add the marinated chicken and cook until it's almost done.</li>
            <li>Add roasted coconut, coriander powder, and garam masala.</li>
            <li>Cook uncovered until dry and all spices coat the chicken well.</li>
          </ul>

          <h4>Serve</h4>
          <ul>
            <li>Garnish with fresh coriander.</li>
            <li>Serve hot with rice, roti, or neer dosa.</li>
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

export default ChickenSukka;
