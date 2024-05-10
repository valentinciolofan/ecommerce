import React, { useState } from 'react';

function AvailabilityFilter({ onFilterChange }) {
  const [availability, setAvailability] = useState('');

  const handleChange = (e) => {
    const selectedAvailability = e.target.value;
    setAvailability(selectedAvailability);
    onFilterChange(selectedAvailability);
  };

  return (
    <div className="availability-filter">
      <label>Availability:</label>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          value="in-stock"
          checked={availability === 'in-stock'}
          onChange={() => handleChange({ target: { value: 'in-stock' } })}
        />
        <span className="checkmark"></span>
        In Stock
      </label>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          value="out-of-stock"
          checked={availability === 'out-of-stock'}
          onChange={() => handleChange({ target: { value: 'out-of-stock' } })}
        />
        <span className="checkmark"></span>
        Out of Stock
      </label>
    </div>
  );
}

export default AvailabilityFilter;
