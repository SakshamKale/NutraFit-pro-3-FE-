// ChickenParmesan.jsx
import React from 'react';
import './PaneerTikka.css';

import logo from './Screenshot 2025-06-30 221420.jpg';
import CPImg from './img/CP.jpg'
import { useNavigate } from 'react-router';

const ChickenParmesan = () => {
  const navigate=useNavigate();
  return (
    <div className='body1000'>
      <header className="header-paneer">
        <div className="logo-circle">
          <img src={logo} alt="NutraFit Logo" />
        </div>
        <div className="title-pan">
          Nutra<span>Fit</span>
        </div>
      </header>

          <span className="plan-btn"  onClick={() => navigate('/recMenu')}>⮘ Back</span> 

      <section className="hero-pan">
        <h1>Chicken Parmesan</h1>
        <p>Here’s a complete breakdown of Chicken Parmesan</p>
        <img src={CPImg} alt="Chicken Parmesan" />
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <ul>
              <li>2 boneless chicken breasts</li>
              <li>1 cup breadcrumbs</li>
              <li>1/2 cup grated Parmesan cheese</li>
              <li>1 egg (beaten)</li>
              <li>1 cup marinara sauce</li>
              <li>1 cup shredded mozzarella cheese</li>
              <li>1/2 tsp garlic powder</li>
              <li>1/2 tsp dried oregano</li>
              <li>Salt and pepper to taste</li>
              <li>2 tbsp olive oil</li>
              <li>Fresh basil leaves (for garnish)</li>
            </ul>
          </div>
          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>15 minutes</strong><br />Preparation</p>
              <p><strong>25 minutes</strong><br />Cooking Time</p>
              <p><strong>~40 minutes</strong><br />Total Time</p>
            </div>
            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per serving approx.)</span></h3>
              <p><strong>430 kcal</strong> Calories</p>
              <p><strong>35g</strong> Protein</p>
              <p><strong>15g</strong> Carbs</p>
              <p><strong>24g</strong> Fat</p>
              <p><strong>2g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/8LgA6gsXR7w?si=YDHkWN-AXHseuEug" // Replace with actual Chicken Parmesan recipe video ID
          title="Chicken Parmesan Recipe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Prepare Chicken</h4>
          <ul>
            <li>Flatten chicken breasts to even thickness using a mallet.</li>
            <li>Season with salt, pepper, and garlic powder.</li>
          </ul>

          <h4>Coat and Cook</h4>
          <ul>
            <li>Mix breadcrumbs with Parmesan and oregano.</li>
            <li>Dip chicken in beaten egg, then coat in breadcrumb mixture.</li>
            <li>Heat oil in a pan and fry chicken until golden brown on both sides.</li>
          </ul>

          <h4>Bake</h4>
          <ul>
            <li>Place fried chicken in a baking dish. Top with marinara sauce and mozzarella.</li>
            <li>Bake at 180°C (350°F) for 15–20 minutes until cheese is melted and bubbly.</li>
          </ul>

          <h4>Serve</h4>
          <ul>
            <li>Garnish with fresh basil.</li>
            <li>Serve with spaghetti or a side salad.</li>
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

export default ChickenParmesan;
