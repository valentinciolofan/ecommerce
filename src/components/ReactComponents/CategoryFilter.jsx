import React, { useState } from 'react';

const categ = ['Man', 'Women'];

function CategoryFilter({ onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (e) => {
    const category = e.target.value;
    let newSelectedCategories = '';

    if (selectedCategory.includes(category)) {
      newSelectedCategories = selectedCategory;
    } else {
      newSelectedCategories = category;
    }
    

    setSelectedCategory(newSelectedCategories);
    onFilterChange(newSelectedCategories);
  };


  return (
    <div className="category-filter">
      <label htmlFor="category">Category: </label>
      {categ.map(categ => (
        <label key={categ} className="custom-checkbox">
          <input
            type="checkbox"
            value={categ}
            onChange={handleChange}
            checked={selectedCategory.includes(categ)}
          />
          <span className="checkmark"></span>
          {categ}
        </label>
      ))}
    </div>
  );
}

export default CategoryFilter;
