import React from 'react';
import './PaneerTikka.css'; // Shared CSS

import logo from './Screenshot 2025-06-30 221420.jpg';
import salmonImg from '../REC/8.jpeg'; // Add this image
import { useNavigate } from 'react-router';

const GrilledTandooriSalmon = () => {
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
        <h1>GRILLED TANDOORI SALMON</h1>
        <p>Salmon fillets marinated in yogurt and Indian spices, grilled to perfection for a healthy, protein-rich meal.</p>
        <img src={salmonImg} alt="Grilled Tandoori Salmon" />
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <p><strong>For Marinade & Salmon:</strong></p>
            <ul>
              <li>2 Salmon fillets (150–200g each)</li>
              <li>2 tbsp Yogurt (low-fat)</li>
              <li>1 tsp Turmeric powder</li>
              <li>1 tsp Red chili powder</li>
              <li>1 tsp Garam masala</li>
              <li>1 tsp Lemon juice</li>
              <li>1 tsp Ginger-garlic paste</li>
              <li>Salt to taste</li>
              <li>Fresh coriander or dill (for garnish)</li>
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
              <p><strong>280 kcal</strong> Calories</p>
              <p><strong>25g</strong> Protein</p>
              <p><strong>4g</strong> Carbs</p>
              <p><strong>18g</strong> Fat</p>
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
          src="https://www.youtube.com/embed/Wrt7EVxYiF0?si=Opry2ZMQS92ta5Lz" // Replace with a relevant Ranveer Brar video if available
          title="Grilled Tandoori Salmon – Ranveer Brar"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Directions */}
      <section className="directions">
        <h2>Directions</h2>
        <div className="steps">
          <h4>Prepare Marinade</h4>
          <ul>
            <li>Mix yogurt, turmeric, chili powder, garam masala, lemon juice, ginger-garlic paste, and salt in a bowl.</li>
          </ul>

          <h4>Marinate Salmon</h4>
          <ul>
            <li>Coat salmon fillets evenly with the marinade. Cover and refrigerate for 15–30 minutes.</li>
          </ul>

          <h4>Grill Salmon</h4>
          <ul>
            <li>Preheat the grill or oven to 200°C (400°F). Place fillets on a baking tray or grill pan.</li>
            <li>Grill for 12–15 minutes or until salmon is cooked through and slightly charred on top.</li>
          </ul>

          <h4>Garnish & Serve</h4>
          <ul>
            <li>Garnish with fresh coriander or dill. Serve hot with a side salad or steamed vegetables.</li>
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

export default GrilledTandooriSalmon;
