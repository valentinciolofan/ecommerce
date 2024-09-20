import { s as sanityClient } from '../chunks/page-ssr_DIHUUOGG.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, e as createAstro, m as maybeRenderHead } from '../chunks/astro/server_iDbVhKBp.mjs';
import 'kleur/colors';
import { s as searchBoxValue, $ as $$Layout } from '../chunks/Layout_C9PtLTXJ.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { P as ProductListing } from '../chunks/ProductListing_tkVvB4cZ.mjs';
import { useStore } from '@nanostores/react';
/* empty css                                         */
/* empty css                                */
export { renderers } from '../renderers.mjs';

const categ = ["Man", "Women"];
function CategoryFilter({ onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleChange = (e) => {
    const category = e.target.value;
    let newSelectedCategories = "";
    if (selectedCategory.includes(category)) {
      newSelectedCategories = selectedCategory;
    } else {
      newSelectedCategories = category;
    }
    setSelectedCategory(newSelectedCategories);
    onFilterChange(newSelectedCategories);
  };
  return /* @__PURE__ */ jsxs("div", { className: "category-filter", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "category", children: "Category: " }),
    categ.map((categ2) => /* @__PURE__ */ jsxs("label", { className: "custom-checkbox", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          value: categ2,
          onChange: handleChange,
          checked: selectedCategory.includes(categ2)
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "checkmark" }),
      categ2
    ] }, categ2))
  ] });
}

const collections = ["Jackets", "Shirts", "Pants", "T-shirts", "Shorts"];
const CollectionsFilter = ({ onCollectionsChange }) => {
  const [selectedCollections, setSelectedCollections] = useState([]);
  const handleCollectionsChange = (e) => {
    const collection = e.target.value;
    let newSelectedCollections = [];
    if (selectedCollections.includes(collection)) {
      newSelectedCollections = selectedCollections.filter((c) => c !== collection);
    } else {
      newSelectedCollections = [...selectedCollections, collection];
    }
    setSelectedCollections(newSelectedCollections);
    onCollectionsChange(newSelectedCollections);
  };
  return /* @__PURE__ */ jsxs("div", { className: "collections-filter", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "category", children: "Collections: " }),
    collections.map(
      (collection) => /* @__PURE__ */ jsxs(
        "label",
        {
          className: "custom-checkbox",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                value: collection,
                onChange: handleCollectionsChange
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "checkmark" }),
            collection
          ]
        },
        collection
      )
    )
  ] });
};

const predefinedPriceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $500", min: 200, max: 500 },
  { label: "Over $500", min: 500, max: Infinity }
];
const PriceFilter = ({ selectedPriceRange, onFilterChange }) => {
  const [selectedRange, setSelectedRange] = useState(null);
  const [minPrice, setMinPrice] = useState(selectedPriceRange.minPrice);
  const [maxPrice, setMaxPrice] = useState(selectedPriceRange.maxPrice);
  const handleRangeSelect = (range) => {
    setSelectedRange(range);
    setMinPrice(range.min);
    setMaxPrice(range.max === Infinity ? selectedPriceRange.maxPrice : range.max);
  };
  const handleMinChange = (e) => {
    setMinPrice(Number(e.target.value));
    setSelectedRange(null);
  };
  const handleMaxChange = (e) => {
    setMaxPrice(Number(e.target.value));
    setSelectedRange(null);
  };
  useEffect(() => {
    if (typeof onFilterChange === "function") {
      onFilterChange({ min: minPrice, max: maxPrice });
    }
  }, [minPrice, maxPrice]);
  return /* @__PURE__ */ jsxs("div", { className: "price-filter", children: [
    /* @__PURE__ */ jsx("label", { children: "Price Range:" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      predefinedPriceRanges.map((range, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            name: "price-range",
            checked: selectedRange === range,
            onChange: () => handleRangeSelect(range)
          }
        ),
        range.label
      ] }) }, index)),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "min-price", children: "Min Price:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "min-price",
            type: "number",
            value: minPrice,
            min: selectedPriceRange.minPrice,
            onChange: handleMinChange
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "max-price", children: "Max Price:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "max-price",
            type: "number",
            value: maxPrice,
            max: selectedPriceRange.maxPrice,
            onChange: handleMaxChange
          }
        )
      ] })
    ] })
  ] });
};

function AvailabilityFilter({ onFilterChange }) {
  const [availability, setAvailability] = useState("");
  const handleChange = (e) => {
    const selectedAvailability = e.target.value;
    setAvailability(selectedAvailability);
    onFilterChange(selectedAvailability);
  };
  return /* @__PURE__ */ jsxs("div", { className: "availability-filter", children: [
    /* @__PURE__ */ jsx("label", { children: "Availability:" }),
    /* @__PURE__ */ jsxs("label", { className: "custom-checkbox", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          value: "true",
          checked: availability === "true",
          onChange: () => handleChange({ target: { value: "true" } })
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "checkmark" }),
      "In Stock"
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "custom-checkbox", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          value: "false",
          checked: availability === "false",
          onChange: () => handleChange({ target: { value: "false" } })
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "checkmark" }),
      "Out of Stock"
    ] })
  ] });
}

const colors = ["black", "white", "beige", "blue", "grey", "red", "green", "brown", "yellow", "pink"];
const ColorFilter = ({ onFilterChange }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const handleChange = (e) => {
    const color = e.target.value;
    let newSelectedColors;
    if (selectedColors.includes(color)) {
      newSelectedColors = selectedColors.filter((c) => c !== color);
    } else {
      newSelectedColors = [...selectedColors, color];
    }
    setSelectedColors(newSelectedColors);
    onFilterChange(newSelectedColors);
  };
  return /* @__PURE__ */ jsxs("div", { className: "color-filter", children: [
    /* @__PURE__ */ jsx("label", { children: "Colors:" }),
    colors.map((color) => /* @__PURE__ */ jsxs("label", { className: "custom-checkbox", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          value: color,
          checked: selectedColors.includes(color),
          onChange: handleChange
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "checkmark" }),
      color.charAt(0).toUpperCase() + color.slice(1)
    ] }, color))
  ] });
};

const sizes = ["s", "m", "l", "xl", "xxl"];
function SizeFilter({ onFilterChange }) {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const handleChange = (e) => {
    const size = e.target.value;
    const newSelectedSizes = selectedSizes.includes(size) ? selectedSizes.filter((s) => s !== size) : [...selectedSizes, size];
    setSelectedSizes(newSelectedSizes);
    onFilterChange(newSelectedSizes);
  };
  return /* @__PURE__ */ jsxs("div", { className: "size-filter", children: [
    /* @__PURE__ */ jsx("label", { children: "Sizes:" }),
    sizes.map((size) => /* @__PURE__ */ jsxs("label", { className: "custom-checkbox", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          value: size,
          checked: selectedSizes.includes(size),
          onChange: handleChange
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "checkmark" }),
      size.toUpperCase()
    ] }, size))
  ] });
}

const materials = ["cotton", "linen", "wool", "silk", "leather", "synthetic"];
function MaterialFilter({ onFilterChange }) {
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const handleChange = (e) => {
    const material = e.target.value;
    const newSelectedMaterials = selectedMaterials.includes(material) ? selectedMaterials.filter((m) => m !== material) : [...selectedMaterials, material];
    setSelectedMaterials(newSelectedMaterials);
    onFilterChange(newSelectedMaterials);
  };
  return /* @__PURE__ */ jsxs("div", { className: "material-filter", children: [
    /* @__PURE__ */ jsx("label", { children: "Materials:" }),
    materials.map((material) => /* @__PURE__ */ jsxs("label", { className: "custom-checkbox", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          value: material,
          checked: selectedMaterials.includes(material),
          onChange: handleChange
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "checkmark" }),
      material.charAt(0).toUpperCase() + material.slice(1)
    ] }, material))
  ] });
}

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
  return /* @__PURE__ */ jsx("div", { className: `filters-modal ${visible ? "visible" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "filters-modal-content", children: [
    /* @__PURE__ */ jsx("button", { className: "btn-close", onClick: closeModal, children: "×" }),
    /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("b", { children: "Filters" }) }),
    /* @__PURE__ */ jsxs("div", { className: "filters-scroll", children: [
      /* @__PURE__ */ jsx(CategoryFilter, { onFilterChange: onCategoryChange }),
      /* @__PURE__ */ jsx(CollectionsFilter, { onCollectionsChange }),
      /* @__PURE__ */ jsx(PriceFilter, { selectedPriceRange, onFilterChange: onPriceChange }),
      /* @__PURE__ */ jsx(AvailabilityFilter, { onFilterChange: onAvailabilityChange }),
      /* @__PURE__ */ jsx(ColorFilter, { onFilterChange: onColorChange }),
      /* @__PURE__ */ jsx(SizeFilter, { onFilterChange: onSizeChange }),
      /* @__PURE__ */ jsx(MaterialFilter, { onFilterChange: onMaterialChange })
    ] })
  ] }) });
}

const App = ({ products }) => {
  const searchValue = useStore(searchBoxValue);
  const [showModal, setShowModal] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState({ minPrice: 0, maxPrice: 1e3 });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  useEffect(() => {
    const searchedProductsD = products.filter(
      (product) => product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchedProducts(searchedProductsD);
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1120px)").matches) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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
  };
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
  return /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("div", { className: "shop-container", children: /* @__PURE__ */ jsxs("div", { className: "shop-wrapper", children: [
    /* @__PURE__ */ jsx(
      FiltersModal,
      {
        selectedPriceRange,
        onPriceChange: handlePriceChange,
        onCategoryChange: handleCategoryChange,
        onCollectionsChange: handleCollectionsChange,
        onAvailabilityChange: handleAvailabilityChange,
        onColorChange: handleColorChange,
        onSizeChange: handleSizeChange,
        onMaterialChange: handleMaterialChange,
        showModal,
        closeModal
      }
    ),
    /* @__PURE__ */ jsx(
      ProductListing,
      {
        products,
        searchedProducts,
        selectedPriceRange,
        selectedCategory,
        selectedCollections,
        selectedAvailability,
        selectedColors,
        selectedSizes,
        selectedMaterials,
        openModal
      }
    )
  ] }) }) });
};

const $$Astro = createAstro();
const $$Shop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Shop;
  const productQuery = `*[_type == "product"] {
  title, slug, description, price, image, images, stock, categories[]->{title, slug}, collection[]->{title, slug}, color, size, material, availability, rating
}`;
  const products = await sanityClient.fetch(productQuery);
  console.log(products);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "fashionCulture | Shop", "data-astro-cid-5w43p2qc": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main data-astro-cid-5w43p2qc></main>   ${renderComponent($$result2, "App", App, { "products": products, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/components/ReactComponents/App.jsx", "client:component-export": "default", "data-astro-cid-5w43p2qc": true })} ` })}  `;
}, "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/shop.astro", void 0);

const $$file = "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/shop.astro";
const $$url = "/shop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Shop,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
