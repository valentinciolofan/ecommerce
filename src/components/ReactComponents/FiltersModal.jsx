import React, { useState, useEffect } from 'react';
import CategoryFilter from './CategoryFilter';
import CollectionsFilter from './CollectionsFilter'
import PriceFilter from './PriceFilter';
import AvailabilityFilter from './AvailabilityFilter';
import ColorFilter from './ColorFilter';
import SizeFilter from './SizeFilter';
import MaterialFilter from './MaterialFilter';

function FiltersModal({
  selectedPriceRange,
  onPriceChange,
  onCategoryChange,
  onCollectionsChange,
  onAvailabilityChange,
  onColorChange,
  onSizeChange,
  onMaterialChange,
  showModal,
  closeModal
}) {
  const [visible, setVisible] = useState(showModal);

  useEffect(() => {
    setVisible(showModal);
  }, [showModal]);

  return (
    <div className={`filters-modal ${visible ? 'visible' : ''}`}>
      <div className="filters-modal-content">
        <button className="btn-close" onClick={closeModal}>
          &times;
        </button>
        <p><b>Filters</b></p>
        <div className="filters-scroll">
          <CategoryFilter onFilterChange={onCategoryChange} />
          <CollectionsFilter onCollectionsChange={onCollectionsChange} />
          <PriceFilter selectedPriceRange={selectedPriceRange} onFilterChange={onPriceChange} />
          <AvailabilityFilter onFilterChange={onAvailabilityChange} /> 
          <ColorFilter onFilterChange={onColorChange} />
          <SizeFilter onFilterChange={onSizeChange} />
          <MaterialFilter onFilterChange={onMaterialChange} /> 
        </div>
      </div>
    </div>
  );
}

export default FiltersModal;
