import React, { useState } from 'react';

const materials = ['cotton', 'linen', 'wool', 'silk', 'leather', 'synthetic'];

function MaterialFilter({ onFilterChange }) {
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const handleChange = (e) => {
    const material = e.target.value;
    const newSelectedMaterials = selectedMaterials.includes(material)
      ? selectedMaterials.filter((m) => m !== material)
      : [...selectedMaterials, material];
    setSelectedMaterials(newSelectedMaterials);
    onFilterChange(newSelectedMaterials);
  };

  return (
    <div className="material-filter">
      <label>Materials:</label>
      {materials.map((material) => (
        <label key={material} className="custom-checkbox">
          <input
            type="checkbox"
            value={material}
            checked={selectedMaterials.includes(material)}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          {material.charAt(0).toUpperCase() + material.slice(1)}
        </label>
      ))}
    </div>
  );
}

export default MaterialFilter;
