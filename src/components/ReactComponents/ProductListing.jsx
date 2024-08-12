import React, { useState, useEffect } from 'react';
import { addToCart, cartStore } from '../UserContext';
import "./products.css"
import urlFor from '../../utils/urlFor';


export const AddtoCart = ({ productDetails }) => {
  const handleAddToCart = () => {
    addToCart({
      slug: productDetails.slug,
      title: productDetails.title,
      color: productDetails.color,
      price: productDetails.price,
      size: productDetails.size,
      image: productDetails.image
    })
    console.log(productDetails.slug);

  };

  return (
    <div className='wrapBtnAddToCart'>
      <button
        className="btn-addToCart"
        onClick={handleAddToCart}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
          />
        </svg>
        Add to cart
      </button>
    </div>
  );
};
const ProductListing = ({ openModal, products, searchedProducts, selectedPriceRange, selectedCategory, selectedCollections, selectedColors, selectedMaterials, selectedSizes, selectedAvailability }) => {
  const [filteredProducts, setFilteredProducts] = useState(searchedProducts);
  const [minPrice, maxPrice] = Object.values(selectedPriceRange);


  useEffect(() => {
    let filtered = products;

    if (searchedProducts.length !== 0) {
      filtered = searchedProducts;
    }

    if (selectedColors.length !== 0) {
      filtered = filtered.filter(product => selectedColors.includes(product.color)); // Filter based on selected colors
    }

    if (minPrice >= 0 && maxPrice !== 0) {
      filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    if (selectedCategory.length !== 0) {
      filtered = filtered.filter(product => selectedCategory.includes(product.categories[0].title));
    }

    if (selectedCollections.length !== 0) {
      filtered = filtered.filter(product => selectedCollections.includes(product.collection[0].title));
    }

    if (selectedMaterials.length !== 0) {
      filtered = filtered.filter(product => selectedMaterials.includes(product.material));
    }

    if (selectedSizes.length !== 0) {
      filtered = filtered.filter(product => selectedSizes.includes(product.size));
    }

    if (selectedAvailability.length !== 0) {
      filtered = filtered.filter(product => selectedAvailability.includes(product.availability));
    }

    setFilteredProducts(filtered);

  }, [products, searchedProducts, selectedPriceRange, selectedCategory, selectedCollections, selectedColors, selectedMaterials, selectedSizes, selectedAvailability]);

  return (
    <div className="all-products">
      <div className='all-products-wrapper'>
        <h2>Find Your Style</h2>
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
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.slug.current}>
              <a href={"/product/" + product.slug.current}>
                <div className="products">
                  <div>
                  <img src={urlFor(product.images[0]).url()} alt="" />
                  </div>
                  <div className="product-details">
                    <div className="product-title-and-price">
                      <span>{product.title}</span>
                      <span>${product.price}</span>
                    </div>
                      
                  </div>
                </div>
              </a>
              <AddtoCart productDetails={{
                         title: product.title,
                         slug: product.slug.current,
                         color: product.color,
                         price: product.price,
                         size: product.size,
                         image: product.image
                       }} />
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default ProductListing;


