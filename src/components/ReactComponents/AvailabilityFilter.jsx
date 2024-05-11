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
          value="true"
          checked={availability === 'true'}
          onChange={() => handleChange({ target: { value: 'true' } })}
        />
        <span className="checkmark"></span>
        In Stock
      </label>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          value="false"
          checked={availability === 'false'}
          onChange={() => handleChange({ target: { value: 'false' } })}
        />
        <span className="checkmark"></span>
        Out of Stock
      </label>
    </div>
  );
}

export default AvailabilityFilter;
