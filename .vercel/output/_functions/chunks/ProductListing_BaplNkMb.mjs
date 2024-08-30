import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { p as productDetailsStore, a as addToCart } from './Layout_D1ojY-ez.mjs';
/* empty css                                 */
import { u as urlFor } from './urlFor_D6lAtocX.mjs';

const AddtoCart = ({ productDetails }) => {
  const productDetailsFromStore = useStore(productDetailsStore);
  const handleAddToCart = () => {
    addToCart({
      slug: productDetails.slug,
      title: productDetails.title,
      color: productDetails.color,
      price: productDetails.price,
      size: productDetailsFromStore.selectedSize,
      image: productDetails.image
    });
    console.log("Added to cart with size: ", productDetailsFromStore.selectedSize);
  };
  return /* @__PURE__ */ jsx("div", { className: "wrapBtnAddToCart", children: /* @__PURE__ */ jsxs(
    "button",
    {
      className: "btn-addToCart",
      onClick: handleAddToCart,
      children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "1.5em",
            height: "1.5em",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                fill: "white",
                d: "M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
              }
            )
          }
        ),
        "Add to cart"
      ]
    }
  ) });
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
      filtered = filtered.filter((product) => selectedColors.includes(product.color));
    }
    if (minPrice >= 0 && maxPrice !== 0) {
      filtered = filtered.filter((product) => product.price >= minPrice && product.price <= maxPrice);
    }
    if (selectedCategory.length !== 0) {
      filtered = filtered.filter((product) => selectedCategory.includes(product.categories[0].title));
    }
    if (selectedCollections.length !== 0) {
      filtered = filtered.filter((product) => selectedCollections.includes(product.collection[0].title));
    }
    if (selectedMaterials.length !== 0) {
      filtered = filtered.filter((product) => selectedMaterials.includes(product.material));
    }
    if (selectedSizes.length !== 0) {
      filtered = filtered.filter((product) => selectedSizes.includes(product.size));
    }
    if (selectedAvailability.length !== 0) {
      filtered = filtered.filter((product) => selectedAvailability.includes(product.availability));
    }
    setFilteredProducts(filtered);
  }, [products, searchedProducts, selectedPriceRange, selectedCategory, selectedCollections, selectedColors, selectedMaterials, selectedSizes, selectedAvailability]);
  return /* @__PURE__ */ jsx("div", { className: "all-products", children: /* @__PURE__ */ jsxs("div", { className: "all-products-wrapper", children: [
    /* @__PURE__ */ jsx("h4", { className: "shop-page-title", children: "Find Your Style" }),
    /* @__PURE__ */ jsx("div", { className: "sort-and-filter-buttons", children: /* @__PURE__ */ jsxs("button", { id: "btnFilters", type: "button", onClick: openModal, children: [
      /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 512 512", children: /* @__PURE__ */ jsx("path", { fill: "none", stroke: "black", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32, d: "M32 144h448M112 256h288M208 368h96" }) }) }),
      /* @__PURE__ */ jsx("span", { children: "Filters" })
    ] }) }),
    /* @__PURE__ */ jsx("ul", { children: filteredProducts.map((product) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/product/" + product.slug.current, children: /* @__PURE__ */ jsxs("div", { className: "products", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: urlFor(product.images[0]).url(), alt: "" }) }),
      /* @__PURE__ */ jsxs("div", { className: "product-title-and-price", children: [
        /* @__PURE__ */ jsx("p", { children: product.title }),
        /* @__PURE__ */ jsxs("p", { children: [
          "$",
          product.price
        ] })
      ] })
    ] }) }) }, product.slug.current)) })
  ] }) });
};

export { AddtoCart as A, ProductListing as P };
