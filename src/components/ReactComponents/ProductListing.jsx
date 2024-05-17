import React, { useState, useEffect } from 'react';
import { addToCart, cartStore } from '../UserContext';
import "./products.css"
import urlFor from '../../utils/urlFor';


export const AddtoCart = ({ productDetails  }) => {
  const addToCart = () => {
    console.log(productDetails);

  };

  return (
    <button onClick={addToCart}>
      Add to Cart
    </button>
  );
};
const ProductListing = ({ products, searchedProducts, selectedPriceRange, selectedCategory, selectedCollections, selectedColors, selectedMaterials, selectedSizes, selectedAvailability}) => {
  const [filteredProducts, setFilteredProducts] = useState(searchedProducts);
  const [minPrice, maxPrice] = Object.values(selectedPriceRange);
  

  useEffect(() => {
    let filtered;
    // state false if there is one which is selected and don t have filters applied
    if (searchedProducts.length === 0) {
      filtered = searchedProducts;
    } else {
      filtered = searchedProducts;
    }

    // if (selectedColors.length === 0) {
    //   filtered = products; // if there isn't any color selected, then show all products
    // } else {
    //   filtered = products.filter(product => selectedColors.includes(product.color)); // Filter based on selected colors
    // }
    console.log(filtered);

    // if (selectedPriceRange.length === 0) {
    //   filtered = filtered;
    // } else {
    //   filtered = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    // }

    if (selectedCategory.length === 0) {
      filtered = filtered;
    } else {
      filtered = products.filter(product => selectedCategory.includes(product.categories[0].title));
    }

    if (selectedCollections.length === 0) {
      filtered = filtered;
    } else {
      filtered = products.filter(product => selectedCollections.includes(product.collection[0].title));
    }
   
    if (selectedMaterials.length === 0) {
      filtered = filtered;
    } else {
      filtered = filtered.filter(product => selectedMaterials.includes(product.material));
    }

    if (selectedSizes.length === 0) {
      filtered = filtered;
    } else {
      filtered = filtered.filter(product => selectedSizes.includes(product.size));
    }
    if (selectedAvailability.length === 0) {
      filtered = filtered;
    } else {
      filtered = filtered.filter(product => selectedAvailability.includes(product.availability));
    }
    console.log(filtered);

    setFilteredProducts(filtered);
      
  }, [products, searchedProducts, selectedPriceRange, selectedCategory, selectedCollections, selectedColors, selectedMaterials, selectedSizes, selectedAvailability]);
  
  return (
    <div className="all-products">
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.slug.current}>
            <a href={"/product/" + product.slug.current}>
              <div className="products">
                <img src={urlFor(product.images[0]).url()} alt=""/>
                <div className="product-details">
                  <span>{product.title}</span>
                  <span>${product.price}</span>
                </div>
              </div>
            </a>
          <AddtoCart />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListing;


