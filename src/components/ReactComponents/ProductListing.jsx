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
const ProductListing = ({ products, searchedProducts, selectedPriceRange, selectedCategory, selectedCollections, selectedColors, selectedMaterials, selectedSizes, selectedAvailability }) => {
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
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.slug.current}>
            <a href={"/product/" + product.slug.current}>
              <div className="products">
                <img src={urlFor(product.images[0]).url()} alt="" />
                <div className="product-details">
                  <span>{product.title}</span>
                  <span>${product.price}</span>
                </div>
              </div>
            </a>


            <AddtoCart productDetails={{
              slug: product.slug.current,
              title: product.title,
              price: product.price,
              color: product.color,
              size: product.size,
              image: product.image
            }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListing;


