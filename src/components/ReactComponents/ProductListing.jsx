import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { productDetailsStore, addToCart, cartStore } from '../UserContext';
import "./mystyle.css"
import urlFor from '../../utils/urlFor';

export const AddtoCart = ({ productDetails }) => {
  const productDetailsFromStore = useStore(productDetailsStore);

  const handleAddToCart = () => {
    addToCart({
      slug: productDetails.slug,
      title: productDetails.title,
      color: productDetails.color,
      price: productDetails.price,
      size: productDetailsFromStore.selectedSize,
      image: productDetails.image,
    });

    console.log('Added to cart with size: ', productDetailsFromStore.selectedSize);
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


const ProductListing = ({ openModal, products, searchedProducts, selectedPriceRange, selectedCategory, selectedCollections, selectedColors, selectedMaterials, selectedSizes, selectedAvailability, FiltersModalComponent }) => {
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
        <h4 className="shop-page-title">Find Your Style</h4>
        <div className="sort-and-filter-buttons">
        <button id="btnFilters" type="button" onClick={openModal}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M32 144h448M112 256h288M208 368h96"></path></svg>
          </span>

          <span>
            Filters
            </span>
        </button>
        {/* <button id="btnSorting" type="button">
          <span>
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 21 21"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" d="m10.5 12.5l4 4.107l4-4.107m-8-4l-4-4l-4 3.997m4-3.997v12m8-12v12"></path></svg>
         </span>
         <span> 
         Sort by
         </span>
        </button> */}
        </div>


        <ul>
          {filteredProducts.map((product) => (
            <li key={product.slug.current}>
              <a href={"/product/" + product.slug.current}>
                <div className="products">
                  <div>
                    <img src={urlFor(product.images[0]).url()} alt="" />
                  </div>
                  <div className="product-title-and-price">
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                  </div>
                </div>
              </a>
              {/* <AddtoCart productDetails={{
                         title: product.title,
                         slug: product.slug.current,
                         color: product.color,
                         price: product.price,
                         size: product.size,
                         image: product.image
                       }} /> no more needed after refactoring the front end for products */}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default ProductListing;


