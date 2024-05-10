import React, { useState } from 'react';
import FiltersModal from './FiltersModal';
import ProductListing from './ProductListing';

function FiltersWrapper({ products, categories, filters }) {
  const [showModal, setShowModal] = useState(false);
  let selectedPriceRange = { min: filters.minPrice, max: filters.maxPrice };
  let selectedCategory = '';
  let selectedAvailability = '';
  let selectedColors = [];
  let selectedSizes = [];
  let selectedMaterials = [];

  const handlePriceChange = (range) => {
    selectedPriceRange = range;
  };

  const handleCategoryChange = (categorySlug) => {
    selectedCategory = categorySlug;
  };

  const handleAvailabilityChange = (availability) => {
    selectedAvailability = availability;
  };

  const handleColorChange = (colors) => {
    selectedColors = colors;
  };

  const handleSizeChange = (sizes) => {
    selectedSizes = sizes;
  };

  const handleMaterialChange = (materials) => {
    selectedMaterials = materials;
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <button id="btnFilters" type="button" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M22 18.605a.75.75 0 0 1-.75.75h-5.1a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h7.74a2.93 2.93 0 0 1 5.66 0h5.1a.75.75 0 0 1 .75.75m0-13.21a.75.75 0 0 1-.75.75H18.8a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h10.39a2.93 2.93 0 0 1 5.66 0h2.45a.74.74 0 0 1 .75.75m0 6.6a.74.74 0 0 1-.75.75H9.55a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h1.14a2.93 2.93 0 0 1 5.66 0h11.7a.75.75 0 0 1 .75.75"
          />
        </svg>
      </button>

      <FiltersModal
        categories={categories}
        filters={filters}
        onPriceChange={handlePriceChange}
        onCategoryChange={handleCategoryChange}
        onAvailabilityChange={handleAvailabilityChange}
        onColorChange={handleColorChange}
        onSizeChange={handleSizeChange}
        onMaterialChange={handleMaterialChange}
        showModal={showModal}
        closeModal={closeModal}
      />

      <ProductListing
        products={products}
        selectedPriceRange={selectedPriceRange}
        selectedCategory={selectedCategory}
        selectedAvailability={selectedAvailability}
        selectedColors={selectedColors}
        selectedSizes={selectedSizes}
        selectedMaterials={selectedMaterials}
      />
    </div>
  );
}

export default FiltersWrapper;