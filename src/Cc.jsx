import React, { useState, useEffect } from 'react';

import './Cc.css';
import { useNotifications } from '../context/NotificationContext';

import { useNavigate } from 'react-router-dom';
import carbImg from './carb.png';
import proteinImg from './protein.png';
import fatImg from './fat.png';
import bfImg from './bf3.jpg';
import lunchImg from './lunch3.jpg';
import dinnerImg from './dinner3.jpg';
import caloriImg from './calori1.png';
import logo from './Screenshot 2025-06-30 221420.jpg';
import userApi2  from './axiosinstance2';
const Cc = () => {
  
const product = { 
  Eggs:    { name: 'Eggs', carbs: 0.01, protein: 0.063, fats: 0.053, cal: 0.78, unit: 'pcs' },  // per 1 egg
  Oats:    { name: 'Oats', carbs: 0.27, protein: 0.05, fats: 0.03, cal: 1.5, unit: 'g' },       // per 1g
  Panner:  { name: 'Panner', carbs: 0.04, protein: 0.18, fats: 0.22, cal: 2.65, unit: 'g' },
  Soya:    { name: 'Soya', carbs: 0.09, protein: 0.17, fats: 0.06, cal: 1.72, unit: 'g' },
  Milk:    { name: 'Milk', carbs: 0.12, protein: 0.08, fats: 0.05, cal: 1.03, unit: 'g' },
  Bread:   { name: 'Bread', carbs: 0.13, protein: 0.03, fats: 0.01, cal: 0.7, unit: 'pcs' },
  Banana:  { name: 'Banana', carbs: 0.27, protein: 0.013, fats: 0.003, cal: 1.05, unit: 'g' },
  Rice:    { name: 'Rice', carbs: 0.45, protein: 0.042, fats: 0.004, cal: 2.05, unit: 'g' },
  Dal:     { name: 'Dal', carbs: 0.20, protein: 0.09, fats: 0.03, cal: 1.70, unit: 'g' },
  Chicken: { name: 'Chicken', carbs: 0, protein: 0.27, fats: 0.036, cal: 1.65, unit: 'g' },
  Roti:    { name: 'Roti', carbs: 18 / 40, protein: 3 / 40, fats: 1 / 40, cal: 90 / 40, unit: 'pcs' },  // Assuming avg roti 40g
  Chapati: { name: 'Chapati', carbs: 18 / 40, protein: 3.5 / 40, fats: 1 / 40, cal: 90 / 40, unit: 'pcs' },
  Salad:   { name: 'Salad', carbs: 0.10, protein: 0.01, fats: 0.002, cal: 0.40, unit: 'g' },
  Curd:    { name: 'Curd', carbs: 0.047, protein: 0.035, fats: 0.03, cal: 0.60, unit: 'g' },
  Soup:    { name: 'Soup', carbs: 0.08, protein: 0.02, fats: 0.015, cal: 0.50, unit: 'g' },
};


const recipeMap = {
  'Oats with Banana': ['Oats', 'Banana', 'Milk'],
  'Boiled Eggs & Toast': ['Eggs', 'Bread'],
  'Banana Smoothie': ['Banana', 'Milk'],
  'Muesli Banana Mix': ['Oats', 'Banana', 'Curd'],
  'Yogurt with Seeds': ['Curd'],

  'Chicken Rice Bowl': ['Chicken', 'Rice'],
  'Paneer & Brown Rice': ['Panner', 'Rice'],
  'Tofu Noodles': ['Soya'],
  'Dal, Rice & Veggies': ['Dal', 'Rice', 'Salad'],
  'Fish with Salad': ['Chicken', 'Salad'],

  'Chicken & Broccoli': ['Chicken', 'Salad'],
  'Veg Soup & Toast': ['Soup', 'Bread'],
  'Paneer Bhurji': ['Panner'],
  'Eggs & Greens': ['Eggs', 'Salad'],
  'Moong Dal Khichdi': ['Dal', 'Rice'],
};

const [showMenu, setShowMenu] = useState(false);
const [mealData, setMealData] = useState({ bf: [], lun: [], din: [] });
const [selectedFood, setSelectedFood] = useState(null);
const [showSectionMenu, setShowSectionMenu] = useState(false);
const [recentlyUpdatedMeal, setRecentlyUpdatedMeal] = useState(null);
const { history } = useNotifications();
  const [showHistory, setShowHistory] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);


const goal = { carbs: 300, protein: 150, fats: 70, cal: 2000 };
const maxTotal = goal.carbs + goal.protein + goal.fats + goal.cal; // 2520


const [totals, setTotals] = useState({ carbs: 0, protein: 0, fats: 0, cal: 0 });
const [profileImage, setProfileImage] = useState("https://img.icons8.com/ios-filled/100/ffffff/user.png");
const [userData, setUserData] = useState();
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await userApi2.get('/getformdata');
      if (res.data?.Success) {
        setUserData(res.data.data);
      }
    } catch (err) {
      console.error('Failed to fetch user data:', err);
    }
  };

  fetchData();
}, []);


const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => setProfileImage(reader.result);
  reader.readAsDataURL(file);
};

  
const hClick = (food) => {
  const data = product[food];
  if (!data) return;

  const mealCounts = {
    bf: mealData.bf.length,
    lun: mealData.lun.length,
    din: mealData.din.length,
  };

  const targetMeal = Object.keys(mealCounts).reduce((a, b) =>
    mealCounts[a] <= mealCounts[b] ? a : b
  );

  const updatedMealData = { ...mealData };
  updatedMealData[targetMeal] = [
  ...updatedMealData[targetMeal],
  {
    name: food,
    base: product[food],
    quantity: 1
  }
];

  setMealData(updatedMealData);

  setTotals(prev => ({
    carbs: prev.carbs + data.carbs,
    protein: prev.protein + data.protein,
    fats: prev.fats + data.fats,
    cal: prev.cal + data.cal
  }));
};

  const getBarWidth = (value, max) => `${Math.min((value / max) * 100, 100)}%`;

let nav1 = useNavigate();
useEffect(() => {
  const selectedData = JSON.parse(localStorage.getItem('selectedData1')) || [];

  let newTotals = { carbs: 0, protein: 0, fats: 0, cal: 0 };
  let newMealData = { bf: [], lun: [], din: [] };

  selectedData.forEach((section) => {
    const ingredients = recipeMap[section.text];
    const mealType = section.meal || 'bf';  // fallback to 'bf'

    if (!ingredients) return;

    ingredients.forEach((food) => {
      const data = product[food];
      if (!data) return;

      newMealData[mealType].push({
  name: food,
  base: product[food],
  quantity: 1
});


      newTotals.carbs += data.carbs;
      newTotals.protein += data.protein;
      newTotals.fats += data.fats;
      newTotals.cal += data.cal;
    });
  });

  setTotals(newTotals);
  setMealData(newMealData);
}, []);

const handleConfirmAdd = (section) => {
  const data = product[selectedFood];
  if (!data) return;

  const updatedMealData = { ...mealData };
 updatedMealData[section] = [
  ...updatedMealData[section],
  {
    name: selectedFood,
    base: product[selectedFood],
    quantity: 1
  }
];

  setMealData(updatedMealData);
setRecentlyUpdatedMeal(section);
setTimeout(() => setRecentlyUpdatedMeal(null), 1000); // reset after animation

  setTotals(prev => ({
    carbs: prev.carbs + data.carbs,
    protein: prev.protein + data.protein,
    fats: prev.fats + data.fats,
    cal: prev.cal + data.cal
  }));

  setSelectedFood(null);
  setShowSectionMenu(false);
  setShowMenu(false);
};

const handleQuantityChange = (mealIndex, itemIndex, newQty) => {
  const mealKey = ['bf', 'lun', 'din'][mealIndex];
  const updatedMeals = { ...mealData };

  updatedMeals[mealKey][itemIndex].quantity = newQty;
  setMealData(updatedMeals);

  // Only recalculate if quantity is valid (not empty string)
  if (newQty === '') return;

  const newTotals = { carbs: 0, protein: 0, fats: 0, cal: 0 };
  Object.values(updatedMeals).flat().forEach(item => {
    const q = item.quantity || 0;
    newTotals.carbs += item.base.carbs * q;
    newTotals.protein += item.base.protein * q;
    newTotals.fats += item.base.fats * q;
    newTotals.cal += item.base.cal * q;
  });
  setTotals(newTotals);
};
const handleRemoveItem = (mealKey, index) => {
  const updatedMealData = { ...mealData };
  const removedItem = updatedMealData[mealKey][index];

  updatedMealData[mealKey].splice(index, 1); // remove item from that meal

  setMealData(updatedMealData);

  // Recalculate totals
  const newTotals = { carbs: 0, protein: 0, fats: 0, cal: 0 };
  Object.values(updatedMealData).flat().forEach(item => {
    const q = item.quantity || 0;
    newTotals.carbs += item.base.carbs * q;
    newTotals.protein += item.base.protein * q;
    newTotals.fats += item.base.fats * q;
    newTotals.cal += item.base.cal * q;
  });

  setTotals(newTotals);
};
useEffect(() => {
  localStorage.setItem('totalCalories', totals.cal);
}, [totals.cal]);


  return (
    <div className='body'>
      <header className="header">
              <div className="header-left">
                <img src={logo} alt="NutraFit Logo" className="logo-icon" style={{borderRadius:"50%"}} />
                <div className="logo-text">Nutra<span>Fit</span></div>
              </div>
              <div className="header-icons">
                 <img
  src="https://img.icons8.com/ios-filled/50/ffffff/appointment-reminders--v1.png"
  alt="Notifications"
  onClick={() => setShowHistory(!showHistory)}
  style={{ cursor: 'pointer' }}
/>


          <img
  src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png"
  alt="Profile"
  onClick={() => setSidebarOpen(true)}
  style={{ cursor: 'pointer' }}
/>
              </div>
            </header>
      
            <nav className="navbar">
              <span onClick={()=>{nav1('/home')}}>Home</span>
              <span onClick={()=>{nav1('/recMenu')}}>Food Diary</span>
              <span onClick={()=>{nav1('/monday')}}>Workout Plans</span>
              <span onClick={()=>{nav1('/nutrafitchat')}}>AI Coach</span>
              <span onClick={()=>{nav1('/Cc')}}>Calorie Counter</span>
             
            </nav>
                  {showHistory && (
  <div className="notification-history">
    <h4>Notifications</h4>
    <ul>
      {history.length === 0 ? (
        <li>No notifications yet.</li>
      ) : (
        history.map((msg, i) => <li key={i}>{msg}</li>)
      )}
    </ul>
  </div>
)}

      <h1 className="cc-header">Calorie Counter</h1>

      <div className="ct-main">
        <div className="ct-top">
          <div className="ct-intop">
            <div className="ct-img1" style={{ backgroundImage: `url(${carbImg})` }}><span className="ct-t1">Carbohydrates</span></div>
            <div className="ct-img1" style={{ backgroundImage: `url(${proteinImg})` }}><span className="ct-t1" style={{left:"20px"}}>Protein</span></div>
            <div className="ct-img1" style={{ backgroundImage: `url(${fatImg})` }}><span className="ct-t1" style={{left:"20px"}}>Fats</span></div>

            <div className="ct-pb1"><div className="ct-pbo" style={{ backgroundColor: 'rgb(246, 169, 141)' }}><div className="ct-pbi" style={{ backgroundColor: 'orangered', width: getBarWidth(totals.carbs, goal.carbs) }}></div></div></div>
            <div className="ct-pb1"><div className="ct-pbo" style={{ backgroundColor: 'rgb(143, 143, 255)' }}><div className="ct-pbi" style={{ backgroundColor: 'blue', width: getBarWidth(totals.protein, goal.protein) }}></div></div></div>
            <div className="ct-pb1"><div className="ct-pbo" style={{ backgroundColor: 'rgb(205, 252, 134)' }}><div className="ct-pbi" style={{ backgroundColor: 'yellowgreen', width: getBarWidth(totals.fats, goal.fats) }}></div></div></div>
          </div>

          <div className="ct-intop1">
            <div className="ct-img2" style={{ backgroundImage: `url(${caloriImg})` }}></div>
            <div className="ct-pb2"><div className="ct-pbo1" style={{ backgroundColor: 'rgb(253, 253, 120)' }}><div className="ct-pbi1" style={{ backgroundColor: 'orange', width: getBarWidth(totals.cal, goal.cal) }}><span className="ct-t1">Calories</span></div></div></div>
          </div>
        </div>

        <div className="ct-add-btn-wrapper"><button className="ct-bu" onClick={() => setShowMenu(true)}>+ Add Food Item</button></div>

        {['Breakfast', 'Lunch', 'Dinner'].map((meal, i) => (
          <div  key={meal}
  className={`ct-sec ${recentlyUpdatedMeal === ['bf', 'lun', 'din'][i] ? 'animate-meal' : ''}`}
          style={i > 0 ? { position: 'relative', top: `${i * 100}px` } : {}}
        >
        
            <div className="ct-sec1" >
              <table cellPadding="1" style={{position:"relative",left:"0px"}}>
                <thead>
                  <tr style={{ backgroundColor: 'rgb(210, 210, 210)' }}>
                    <th style={{ width: '120px' }}>{meal}</th>
    <th style={{ width: '60px' }}>Carbs</th>
    <th style={{ width: '70px' }}>Protein</th>
    <th style={{ width: '30px' }}>Fats</th>
    <th style={{ width: '80px' }}>Calories</th>
    <th style={{ width: '100px' }}>Quantity</th>
    <th style={{ width: '60px' }}>Remove</th>

                  </tr>
                </thead>
                <tbody>
 {['bf', 'lun', 'din'][i] &&
  mealData[['bf', 'lun', 'din'][i]].map((row, idx) => (
    <tr key={idx}>
      <th>{row.name}</th>
      <th>{(row.base.carbs * row.quantity).toFixed(1)}</th>
      <th>{(row.base.protein * row.quantity).toFixed(1)}</th>
      <th>{(row.base.fats * row.quantity).toFixed(1)}</th>
      <th>{(row.base.cal * row.quantity).toFixed(1)}</th>
      <th>
        <input
  type="number"
  min="0.1"
  step={row.base.unit === 'pcs' ? 1 : 0.1}
  value={row.quantity === '' ? '' : row.quantity}
  onChange={(e) => {
    const val = e.target.value;
    const parsed = val === '' ? '' : parseFloat(val);
    handleQuantityChange(i, idx, parsed);
  }}
  className="quantity-input"
/>
 {row.base.unit}
      </th>
      <th>
        <button style={{width:"40px",height:"40px" ,backgroundColor:"transparent",border:"2px solid red",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"} } onClick={() => handleRemoveItem(['bf', 'lun', 'din'][i], idx)}>
          ❌
        </button>
      </th>
    </tr>
  ))
}

</tbody>


              </table>
            </div>
            <div className="ct-pb3">
              <div className="ct-img3" style={{ backgroundImage: `url(${[bfImg, lunchImg, dinnerImg][i]})` }}></div>
              <div className="ct-pbo3"><div className="ct-pbi3" style={{
  backgroundColor: ['#B3E0F4', '#FFC450', '#D85353'][i],
  width: getBarWidth(
    mealData[['bf', 'lun', 'din'][i]].reduce(
      (sum, item) =>
        sum +
        item.quantity *
        (item.base.carbs + item.base.protein + item.base.fats + item.base.cal),
      0
    ),
    maxTotal
  )
}}></div>
<span className="ct-t2">Macros of {meal}</span>

</div>
            </div>
          </div>
        ))}

        {showMenu && (
  <div className="ct-full">
    <div className="ct-menu">
      {Object.keys(product).map((item, i) => (
        <span key={i} onClick={() => {
          setSelectedFood(item);
          setShowSectionMenu(true);
        }}>{item}</span>
      ))}
      <button onClick={() => setShowMenu(false)}>Back</button>
    </div>

    {/* 🆕 Section selection prompt */}
    {showSectionMenu && selectedFood && (
      <div className="ct-section-select" style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        marginTop: '10px',
        textAlign: 'center'
      }}>
        <p>Select section for: <strong>{selectedFood}</strong></p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
          <button onClick={() => handleConfirmAdd('bf')} className="ct-bu" style={{position:"relative",top:"10px"}}>Breakfast</button>
          <button onClick={() => handleConfirmAdd('lun')} className="ct-bu"style={{position:"relative",top:"10px"}}>Lunch</button>
          <button onClick={() => handleConfirmAdd('din')} className="ct-bu"style={{position:"relative",top:"10px"}}>Dinner</button>
        </div>
      </div>
    )}
  </div>
)}

      </div>
      <div className={`profile-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>👤 My Fitness Profile</h3>
          <span className="close-btn" onClick={() => setSidebarOpen(false)}>&times;</span>
        </div>
      
        <div className="profile-picture-container">
          <img id="profileImage" src={profileImage} alt="Profile" />
          <label htmlFor="uploadInput" className="upload-icon">+</label>
          <input id="uploadInput" type="file" accept="image/*" hidden onChange={handleImageUpload} />
        </div>
      
        <section className="user-info">
        <h4>Basic Information</h4>
        <ul>
          <li><strong>Full Name:</strong> {userData?.Name || "N/A"}</li>
          <li><strong>Age:</strong> {userData?.Age || "N/A"}</li>
          <li><strong>Height:</strong> {userData ? `${userData.Hft} ft ${userData.Hin} in` : "N/A"}</li>
          <li><strong>Weight:</strong> {userData?.Wei ? `${userData.Wei} kg` : "N/A"}</li>
          <li><strong>Medical Condition:</strong> {userData?.AMC || "None"}</li>
        </ul>
      </section>
      
      <section className="user-info fitness-section">
        <h4>Fitness Details</h4>
        <ul>
          <li><strong>Fitness Goal:</strong> {userData?.FG || "N/A"}</li>
          <li><strong>Activity Level:</strong> {userData?.AL || "N/A"}</li>
        </ul>
      </section>
      
      
        <button className="logout-btn" onClick={() => nav1('/login')}> Log Out</button>
      </div>
      
    </div>
  );
};

export default Cc;
