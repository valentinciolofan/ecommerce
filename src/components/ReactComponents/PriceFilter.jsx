import React, { useState, useEffect } from 'react';

const predefinedPriceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: '$200 - $500', min: 200, max: 500 },
  { label: 'Over $500', min: 500, max: Infinity },
];

function PriceFilter({ filters, onFilterChange }) {
  const [selectedRange, setSelectedRange] = useState(null);
  const [minPrice, setMinPrice] = useState(filters.minPrice);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice);

  const handleRangeSelect = (range) => {
    setSelectedRange(range);
    setMinPrice(range.min);
    setMaxPrice(range.max === Infinity ? filters.maxPrice : range.max);
  };

  const handleMinChange = (e) => {
    setMinPrice(Number(e.target.value));
    setSelectedRange(null); // Deselect pre-defined ranges
  };

  const handleMaxChange = (e) => {
    setMaxPrice(Number(e.target.value));
    setSelectedRange(null); // Deselect pre-defined ranges
  };

  useEffect(() => {
    if (typeof onFilterChange === 'function') {
      onFilterChange({ min: minPrice, max: maxPrice });
    }
  }, [minPrice, maxPrice]);

  return (
    <div className="price-filter">
      <label>Price Range:</label>
      <ul>
        {predefinedPriceRanges.map((range, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="price-range"
                checked={selectedRange === range}
                onChange={() => handleRangeSelect(range)}
              />
              {range.label}
            </label>
          </li>
        ))}
      </ul>

      <label htmlFor="min-price">Min Price:</label>
      <input
        id="min-price"
        type="number"
        value={minPrice}
        min={filters.minPrice}
        onChange={handleMinChange}
      />

      <label htmlFor="max-price">Max Price:</label>
      <input
        id="max-price"
        type="number"
        value={maxPrice}
        max={filters.maxPrice}
        onChange={handleMaxChange}
      />
    </div>
  );
}

export default PriceFilter;
