import React from "react";
import "./login.css";

export default function Login() {
  const vegRecipes = [
    { name: "VEGETABLE SAMBAR", image: "" },
    { name: "PANEER TIKKA", image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Tandoori-Paneer-Tikka-Recipe.jpg" },
    { name: "RAJMA", image: "https://myfoodstory.com/wp-content/uploads/2021/09/Rajma-Recipe-3.jpg" },
    { name: "SOYA CURRY", image: "https://vegecravings.com/wp-content/uploads/2018/08/Soya-Chunks-Curry-Recipe-Step-By-Step-Instructions.jpg" },
    { name: "PANEER BHURJI", image: "https://www.secondrecipe.com/wp-content/uploads/2021/12/paneer-bhurji-veg.jpg" },
    { name: "KADAI PANEER", image: "https://www.cookwithmanali.com/wp-content/uploads/2019/08/Kadai-Paneer-Restaurant-Style.jpg" }
  ];

  const nonVegRecipes = [
    { name: "CHICKEN TIKKA", image: "https://myfoodstory.com/wp-content/uploads/2021/11/Chicken-Tikka-2.jpg" },
    { name: "EGG CURRY", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/egg-curry-recipe.jpg" },
    { name: "PRAWNS", image: "" },
    { name: "BUTTER CHICKEN", image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/12/Butter-Chicken-Recipe.jpg" },
    { name: "CHICKEN SUKKA", image: "https://i.pinimg.com/736x/40/3b/f4/403bf48c20392aa0c65bfb7f71676d68.jpg" },
    { name: "CHICKEN PARMESAN", image: "https://i0.wp.com/smartypantskitchen.com/wp-content/uploads/2021/03/Chicken-Parmesan-skillet-500x500-1.jpg" }
  ];

  const RecipeSection = ({ title, recipes }) => (
    <div className="category">
      <h3>{title}</h3>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.image} alt={recipe.name} />
            <div className="recipe-label">{recipe.name}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Health_icon.png/768px-Health_icon.png" alt="logo" />
        <div className="brand">Nutra<span>Fit</span></div>
      </div>

      {/* HERO SECTION */}
      <div className="hero">
        <div>
          <div className="hero-text">Cook your<br />favourite food Items</div>
          <button className="track-button">Track your nutrition</button>
        </div>
        <img src="https://i.imgur.com/Ws3C4p2.jpg" alt="hero" />
      </div>

      {/* HEADER */}
      <div className="section-header">OUR RECIPE OUR INBOX</div>
      <div className="sub-heading">
        Simple recipes made for <span>real, actual, everyday life.</span>
      </div>

      {/* RECIPES */}
      <RecipeSection title="VEG" recipes={vegRecipes} />
      <RecipeSection title="NON VEG" recipes={nonVegRecipes} />

      {/* FOOTER */}
      <div className="footer">
        <h4>About NutraFit</h4>
        <p>
          "Core" represents your essential strength and foundation—both physical and mental—while "Crush" means purposefully shaping and refining your habits, routines, and lifestyle.
          <br /><br />
          The NutraFit app lets users take control of their life by planning, tracking and managing lifestyle.
          You can schedule your day, eat healthy food and so on.<br />
          You can track your calories, protein and water intake.
        </p>

        <div className="footer-bottom">
          <div className="brand">Nutra<span>Fit</span></div>
          <div className="footer-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="insta" />
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384023.png" alt="facebook" />
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" alt="youtube" />
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
}