import React from 'react';
import './PaneerTikka.css'; // Shared CSS

import logo from './Screenshot 2025-06-30 221420.jpg';
import moongImg from '../REC/1.jpg';
import { useNavigate } from 'react-router';

const MoongDalChilla = () => {
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
        <h1>MOONG DAL CHILLA</h1>
        <p>A protein-packed, savory Indian pancake made from yellow lentils.</p>
        <img src={moongImg} alt="Moong Dal Chilla" />
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2>Ingredients</h2>
        <div className="content">
          <div className="left">
            <p><strong>For Chilla Batter:</strong></p>
            <ul>
              <li>1 cup Split yellow moong dal (soaked 3–4 hrs)</li>
              <li>1–2 Green chilies</li>
              <li>1-inch Ginger piece</li>
              <li>Salt to taste</li>
              <li>½ tsp Cumin seeds</li>
              <li>Water as needed</li>
            </ul>

            <p><strong>For Mixing:</strong></p>
            <ul>
              <li>½ cup Chopped onion</li>
              <li>½ cup Chopped tomato</li>
              <li>¼ cup Chopped coriander leaves</li>
              <li>Grated carrot (optional)</li>
            </ul>

            <p><strong>Cooking:</strong></p>
            <ul>
              <li>Oil or ghee for greasing</li>
            </ul>
          </div>

          <div className="right">
            <div className="prep-box">
              <h3>Prep Time</h3>
              <p><strong>15 minutes</strong><br />Preparation</p>
              <p><strong>15 minutes</strong><br />Cooking Time</p>
              <p><strong>~30 minutes</strong><br />Total Time</p>
            </div>

            <div className="nutrition-box">
              <h3>Nutrition Facts <span>(per 1 chilla, approx.)</span></h3>
              <p><strong>120 kcal</strong> Calories</p>
              <p><strong>6g</strong> Protein</p>
              <p><strong>20g</strong> Carbs</p>
              <p><strong>2g</strong> Fat</p>
              <p><strong>4g</strong> Fiber</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube */}
      <div className="youtube">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/nB3Mc5_0SZA"
          title="Moong Dal Chilla Recipe"
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
            <li>Drain soaked moong dal. Blend with ginger, green chilies, cumin, and a little water into a smooth batter.</li>
          </ul>

          <h4>Add Vegetables</h4>
          <ul>
            <li>Transfer batter to a bowl. Mix in onion, tomato, coriander, and optional grated carrot. Add salt.</li>
          </ul>

          <h4>Cook the Chilla</h4>
          <ul>
            <li>Heat a non-stick tawa, lightly grease with oil or ghee. Pour a ladle of batter, spread gently.</li>
            <li>Cook on medium flame until golden brown on one side, flip and cook the other side.</li>
          </ul>

          <h4>Serve</h4>
          <ul>
            <li>Serve hot with green chutney or curd for a wholesome meal.</li>
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

export default MoongDalChilla;
