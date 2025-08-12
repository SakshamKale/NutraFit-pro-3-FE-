import { useState } from 'react';
import './Schedule.css';

import chest1 from './img/chest1.jpeg';
import lower from './img/lower.jpeg';
import back from './img/back.jpeg';
import leg from './img/leg.jpeg';
import upper from './img/upper.jpeg';

import bf1 from './img/bf1.jpeg';
import bf2 from './img/bf2.jpeg';
import bf3 from './img/bf3.jpeg';
import bf4 from './img/bf4.jpeg';
import bf5 from './img/bf5.jpeg';

import l1 from './img/l1.jpeg';
import l2 from './img/l2.jpeg';
import l3 from './img/l3.jpeg';
import l4 from './img/l4.jpeg';
import l5 from './img/l5.jpeg';

import e1 from './img/e1.jpeg';
import e2 from './img/e2.jpeg';
import e3 from './img/e3.jpeg';
import e4 from './img/e4.jpeg';
import dc from './img/dc.jpg';

import d1 from './img/d1.jpeg';
import d2 from './img/d2.jpeg';
import d3 from './img/d3.jpeg';
import d4 from './img/d4.jpeg';
import d5 from './img/d5.jpeg';

const menuSections = [
  {
    title: 'Morning Strength Training',
    items: [
      { src: chest1, text: 'Chest Workout' },
      { src: lower, text: 'Lower Body' },
      { src: back, text: 'Back Body' },
      { src: leg, text: 'Leg Workouts' },
      { src: upper, text: 'Upper Body' },
    ],
  },
  {
    title: 'Breakfast',
    items: [
      { src: bf1, text: 'Oats with Banana' },
      { src: bf2, text: 'Boiled Eggs & Toast' },
      { src: bf3, text: 'Banana Smoothie' },
      { src: bf4, text: 'Muesli Banana Mix' },
      { src: bf5, text: 'Yogurt with Seeds' },
    ],
  },
  {
    title: 'Lunch',
    items: [
      { src: l1, text: 'Chicken Rice Bowl' },
      { src: l2, text: 'Paneer & Brown Rice' },
      { src: l3, text: 'Tofu Noodles' },
      { src: l4, text: 'Dal, Rice & Veggies' },
      { src: l5, text: 'Fish with Salad' },
    ],
  },
  {
    title: 'Evening Cardio Session',
    items: [
      { src: e1, text: 'Treadmill Run' },
      { src: e2, text: 'Jump Rope' },
      { src: e3, text: 'Jogging Session' },
      { src: e4, text: 'Cycling Session' },
      { src: dc, text: 'Dance Cardio' },
    ],
  },
  {
    title: 'Dinner',
    items: [
      { src: d1, text: 'Chicken & Broccoli' },
      { src: d2, text: 'Veg Soup & Toast' },
      { src: d3, text: 'Paneer Bhurji' },
      { src: d4, text: 'Eggs & Greens' },
      { src: d5, text: 'Moong Dal Khichdi' },
    ],
  },
];

const SatMenu = () => {
  const [selected, setSelected] = useState([{}, {}, {}, {}, {}]);
  const [customInput, setCustomInput] = useState(['', '', '', '', '']);

  const handleSelect = (sectionIndex, item) => {
    const updated = [...selected];
    updated[sectionIndex] = { src: item.src, text: item.text };
    setSelected(updated);
  };

  const handleCustomInputChange = (index, value) => {
    const updatedInputs = [...customInput];
    updatedInputs[index] = value;
    setCustomInput(updatedInputs);
  };

  const handleAddCustomItem = (sectionIndex) => {
    const inputValue = customInput[sectionIndex].trim();
    if (!inputValue) return;

    const newItem = { src: '', text: inputValue };
    const updatedSelected = [...selected];
    updatedSelected[sectionIndex] = newItem;
    setSelected(updatedSelected);

    const updatedInputs = [...customInput];
    updatedInputs[sectionIndex] = '';
    setCustomInput(updatedInputs);
  };

  const handleDone = () => {
    localStorage.setItem('selectedData6', JSON.stringify(selected));
    window.location.href = '/saturday'; // handle routing as needed
  };

  return (
    <>
      <nav className="nav">
        <div className="logo3" />
        <div className="t31">
          Nutra<span style={{ color: '#3D80FC' }}>Fit</span>
        </div>
      </nav>

      {menuSections.map((section, sectionIndex) => (
        <div className="box30" key={section.title}>
          <span className="text2">{section.title}</span>
          <div className="inbox30">
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="img4"
                onClick={() => handleSelect(sectionIndex, item)}
              >
                <img
                  src={item.src}
                  alt=""
                  className="img5"
                  style={
                    selected[sectionIndex]?.text === item.text
                      ? {
                          border: '2px solid white',
                          boxShadow: '0 4px 12px rgba(250, 0, 0, 0.3)',
                        }
                      : {}
                  }
                />
                <span className="text1">{item.text}</span>
              </div>
            ))}
          </div>

          <div
  style={{
    marginTop: '8px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative', // Add this
    width: '280px',       // match input width in CSS
    marginLeft: 'auto',
    marginRight: 'auto',
  }}
>
  <input
    type="text"
    placeholder={`Add custom item in ${section.title}`}
    value={customInput[sectionIndex]}
    onChange={(e) => handleCustomInputChange(sectionIndex, e.target.value)}
    onKeyDown={(e) => {
      if (e.key === 'Enter') handleAddCustomItem(sectionIndex);
    }}
    className="custom-input"
  />
  <button
    className="arrow-button"
    onClick={() => handleAddCustomItem(sectionIndex)}
    aria-label="Add custom item"
  >
    ➔
  </button>
</div>

        </div>
      ))}

      <div className="box31">
        <button className="but1" onClick={handleDone}>
          Done
        </button>
      </div>
    </>
  );
};

export default SatMenu;
