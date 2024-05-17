import React, { useState } from 'react';
import FiltersModal from './FiltersModal';
import ProductListing from './ProductListing';
import SearchBar from './Searchbar';

const App = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const handleInputChange = (e) => {
    const searchedProducts = products.filter(product => {
        return product.title.toLowerCase().includes(e.target.value);
    });
    setSearchedProducts(searchedProducts);
  }
  const handlePriceChange = (range) => {
    setSelectedPriceRange(range);
  };

  const handleCategoryChange = (categorySlug) => {
    setSelectedCategory(categorySlug);
  };
  const handleCollectionsChange = (collections) => {
    setSelectedCollections(collections);
  }

  const handleAvailabilityChange = (availability) => {
    setSelectedAvailability(availability);
  };

  const handleColorChange = (colors) => {
    setSelectedColors(colors);
  };

  const handleSizeChange = (sizes) => {
    setSelectedSizes(sizes);
  };

  const handleMaterialChange = (materials) => {
    setSelectedMaterials(materials);

  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <SearchBar handleInputChange={handleInputChange} products={products} />
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
        selectedPriceRange={selectedPriceRange}
        onPriceChange={handlePriceChange}
        onCategoryChange={handleCategoryChange}
        onCollectionsChange={handleCollectionsChange}
        onAvailabilityChange={handleAvailabilityChange}
        onColorChange={handleColorChange}
        onSizeChange={handleSizeChange}
        onMaterialChange={handleMaterialChange}
        showModal={showModal}
        closeModal={closeModal}
      />

      <ProductListing
        products={products}
        searchedProducts={searchedProducts}
        selectedPriceRange={selectedPriceRange}
        selectedCategory={selectedCategory}
        selectedCollections={selectedCollections}
        selectedAvailability={selectedAvailability}
        selectedColors={selectedColors}
        selectedSizes={selectedSizes}
        selectedMaterials={selectedMaterials}
      />
    </div>
  );
}

export default App;
