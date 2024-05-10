import React, { useState } from 'react';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

function SizeFilter({ onFilterChange }) {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleChange = (e) => {
    const size = e.target.value;
    const newSelectedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(newSelectedSizes);
    onFilterChange(newSelectedSizes);
  };

  return (
    <div className="size-filter">
      <label>Sizes:</label>
      {sizes.map((size) => (
        <label key={size} className="custom-checkbox">
          <input
            type="checkbox"
            value={size}
            checked={selectedSizes.includes(size)}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          {size}
        </label>
      ))}
    </div>
  );
}

export default SizeFilter;
