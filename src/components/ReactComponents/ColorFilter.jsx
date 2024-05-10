import React, { useState } from 'react';

const colors = ['black', 'white', 'beige', 'blue', 'grey', 'red', 'green', 'brown', 'yellow', 'pink'];

function ColorFilter({ onFilterChange }) {
  const [selectedColors, setSelectedColors] = useState([]);

  const handleChange = (e) => {
    const color = e.target.value;
    const newSelectedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    setSelectedColors(newSelectedColors);
    onFilterChange(newSelectedColors);
  };

  return (
    <div className="color-filter">
      <label>Colors:</label>
      {colors.map((color) => (
        <label key={color} className="custom-checkbox">
          <input
            type="checkbox"
            value={color}
            checked={selectedColors.includes(color)}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </label>
      ))}
    </div>
  );
}

export default ColorFilter;
