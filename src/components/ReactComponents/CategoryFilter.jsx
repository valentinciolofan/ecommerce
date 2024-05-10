import React, { useState } from 'react';

function CategoryFilter({ categories, onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange(category);
  };

  // Organize categories into parent-child relationships
  const groupedCategories = categories.reduce((acc, cat) => {
    if (!cat.parentCategory) {
      acc[cat.title] = [];
    } else {
      acc[cat.parentCategory.title] = [...(acc[cat.parentCategory.title] || []), cat];
    }
    return acc;
  }, {});

  return (
    <div className="category-filter">
      <label htmlFor="category">Category: </label>
      <select id="category" value={selectedCategory} onChange={handleChange}>
        <option value="">All</option>
        {Object.keys(groupedCategories).map((parent) => (
          <optgroup key={parent} label={parent}>
            {groupedCategories[parent].map((category) => (
              <option key={category.slug.current} value={category.slug.current}>{category.title}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
