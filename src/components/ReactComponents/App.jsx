import React, { useEffect, useState } from 'react';
import FiltersModal from './FiltersModal';
import ProductListing from './ProductListing';
import { searchBoxValue } from '../UserContext';
import { useStore } from '@nanostores/react';
import './mystyle.css'

const App = ({ products }) => {
  const searchValue = useStore(searchBoxValue);
  const [showModal, setShowModal] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState({ minPrice: 0, maxPrice: 1000 });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    const searchedProductsD = products.filter(product =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchedProducts(searchedProductsD);

    const handleResize = () => {
      if (window.matchMedia('(min-width: 1120px)').matches) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [searchValue, products]);


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
    <section>
      <div className='shop-container'>
        <div className='shop-wrapper'>
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
            openModal={openModal}
          />
        </div>
      </div>
    </section>

  );
}

export default App;
