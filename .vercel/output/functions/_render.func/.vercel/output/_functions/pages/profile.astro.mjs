import { s as sanityClient } from '../chunks/page-ssr_DIHUUOGG.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_iDbVhKBp.mjs';
import 'kleur/colors';
import { u as userSession, $ as $$Layout } from '../chunks/Layout_C9PtLTXJ.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { u as urlFor } from '../chunks/urlFor_D6lAtocX.mjs';
/* empty css                                         */
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const UserProfile = ({ products }) => {
  const profileInfo = useStore(userSession);
  const [activeSection, setActiveSection] = useState("profileInformation");
  const [editableFields, setEditableFields] = useState({});
  const [editMode, setEditMode] = useState({});
  const [error, setError] = useState(null);
  const [wishlistUpdated, setWishlistUpdated] = useState(false);
  const handleButtonClick = (button) => {
    setActiveSection(button);
    localStorage.setItem("currentSection", button);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableFields({
      ...editableFields,
      [name]: value
    });
  };
  const handleEditClick = (field) => {
    setEditMode({
      ...editMode,
      [field]: !editMode[field]
    });
  };
  const handleSaveClick = async (field) => {
    const updatedInfo = {
      [field]: editableFields[field] || profileInfo[field]
    };
    try {
      const response = await fetch("http://localhost:3000/update-profile", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedInfo)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Server responded with status ${response.status}: ${errorData.error}`);
      }
      const data = await response.json();
      setEditMode({
        ...editMode,
        [field]: false
      });
      setError(null);
    } catch (error2) {
      console.error("Error updating profile:", error2);
      setError(`Failed to update profile: ${error2.message}`);
    }
  };
  const renderEditableField = (label, name, type = "text") => {
    const value = editableFields[name] ?? profileInfo?.[name] ?? "";
    return /* @__PURE__ */ jsxs("div", { className: "input-with-icon", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: `profile-user-${name}`, children: label }),
      /* @__PURE__ */ jsxs("div", { className: "input-container", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type,
            name,
            value,
            readOnly: !editMode[name],
            onChange: handleInputChange
          }
        ),
        /* @__PURE__ */ jsx(
          "svg",
          {
            onClick: () => handleEditClick(name),
            xmlns: "http://www.w3.org/2000/svg",
            width: "1em",
            height: "1em",
            viewBox: "0 0 512 512",
            children: /* @__PURE__ */ jsx("path", { fill: "black", d: "m362.7 19.3l-48.4 48.4l130 130l48.4-48.4c25-25 25-65.5 0-90.5l-39.4-39.5c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2c-2.5 8.5-.2 17.6 6 23.8s15.3 8.5 23.7 6.1L151 475.7c14.1-4.2 27-11.8 37.4-22.2l233.3-233.2z" })
          }
        ),
        editMode[name] && /* @__PURE__ */ jsx("button", { onClick: () => handleSaveClick(name), children: "Save" })
      ] })
    ] });
  };
  useEffect(() => {
    if (profileInfo && products) {
      const updatedWishlist = profileInfo.wishlist.map((productId) => {
        const foundProduct = products.find((p) => p.slug.current === productId);
        return foundProduct || productId;
      });
      if (JSON.stringify(profileInfo.wishlist) !== JSON.stringify(updatedWishlist)) {
        userSession.set({ ...profileInfo, wishlist: updatedWishlist });
      }
      setWishlistUpdated(true);
    }
    const currentSection = localStorage.getItem("currentSection");
    if (currentSection !== null) {
      setActiveSection(currentSection);
    }
  }, [profileInfo, products]);
  console.log(profileInfo);
  const handleWishlistProduct = async (e) => {
    try {
      const slug = e.target.closest("SVG").parentNode.parentNode.firstChild.pathname.slice(9);
      const response = await fetch("http://localhost:3000/remove-wishlist-product", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ slug })
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const removeProduct = await response.json();
      if (removeProduct.status === "OK") {
        const updatedWishlist = profileInfo.wishlist.filter((product) => product.slug.current !== slug);
        userSession.set({ ...profileInfo, wishlist: updatedWishlist });
      } else {
        console.error("Error:", removeProduct.message || "Failed to remove product from wishlist");
      }
    } catch (error2) {
      console.error("Error handling wishlist product:", error2.message);
      alert("An error occurred while trying to remove the product from your wishlist. Please try again later.");
    }
  };
  if (!profileInfo) {
    return /* @__PURE__ */ jsx("div", { children: "Loading..." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "profile-container", children: [
    /* @__PURE__ */ jsx("h2", { children: "Profile" }),
    /* @__PURE__ */ jsxs("div", { className: "profile-wrapper", children: [
      /* @__PURE__ */ jsxs("div", { className: "profile-info left-col", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: `profile-button ${activeSection === "profileInformation" ? "active" : ""}`,
            onClick: () => handleButtonClick("profileInformation"),
            children: [
              /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.5em", height: "1.5em", viewBox: "0 0 32 32", children: /* @__PURE__ */ jsx("path", { fill: "black", d: "M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z" }) }) }),
              /* @__PURE__ */ jsx("span", { children: "My account" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: `profile-button ${activeSection === "profileOrders" ? "active" : ""}`,
            onClick: () => handleButtonClick("profileOrders"),
            children: [
              /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxs("g", { fill: "none", stroke: "black", strokeWidth: "2", children: [
                /* @__PURE__ */ jsx("rect", { width: "14", height: "17", x: "5", y: "4", rx: "2" }),
                /* @__PURE__ */ jsx("path", { strokeLinecap: "round", d: "M9 9h6m-6 4h6m-6 4h4" })
              ] }) }) }),
              /* @__PURE__ */ jsx("span", { children: "My orders" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: `profile-button ${activeSection === "profileWishlist" ? "active" : ""}`,
            onClick: () => handleButtonClick("profileWishlist"),
            children: [
              /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3" }) }) }),
              /* @__PURE__ */ jsx("span", { children: "My Wishlist" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "profile-info right-col", children: [
        activeSection === "profileInformation" && /* @__PURE__ */ jsxs("div", { className: "profile-personal-information", children: [
          /* @__PURE__ */ jsx("h4", { children: "Personal Information" }),
          error && /* @__PURE__ */ jsx("p", { className: "error", children: error }),
          renderEditableField("Name", "name"),
          renderEditableField("Birth Date", "birthdate", "date"),
          renderEditableField("Phone", "phone"),
          /* @__PURE__ */ jsx("p", { children: "Delivery Address" }),
          renderEditableField("County", "county"),
          renderEditableField("City", "city"),
          renderEditableField("Address", "address")
        ] }),
        activeSection === "profileOrders" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { children: "My Orders" }),
          profileInfo.orders.length ? /* @__PURE__ */ jsxs("table", { className: "orders-table", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { children: "Order ID" }),
              /* @__PURE__ */ jsx("th", { children: "Order Date" }),
              /* @__PURE__ */ jsx("th", { className: "order-status", children: "Status" }),
              /* @__PURE__ */ jsx("th", { children: "Receipt" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: profileInfo.orders.map(
              (order, index) => /* @__PURE__ */ jsxs("tr", { className: index % 2 === 0 ? "" : "table-row1", children: [
                /* @__PURE__ */ jsxs("td", { children: [
                  "#",
                  order.order_id
                ] }),
                /* @__PURE__ */ jsx("td", { children: order.order_date.slice(0, 10) }),
                /* @__PURE__ */ jsx("td", { className: "order-status", children: order.order_status }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("a", { href: order.receipt_url, children: "View receipt" }) })
              ] }, order.order_id)
            ) })
          ] }) : /* @__PURE__ */ jsxs("p", { children: [
            "You didn't placed any order yet. You can see our products ",
            /* @__PURE__ */ jsx("a", { href: "/shop", children: "here" })
          ] })
        ] }),
        activeSection === "profileWishlist" && /* @__PURE__ */ jsx("div", { className: "all-products", children: /* @__PURE__ */ jsxs("div", { className: "all-products-wrapper", children: [
          /* @__PURE__ */ jsx("h4", { children: "My Wishlist" }),
          /* @__PURE__ */ jsx("ul", { children: profileInfo.wishlist.length > 0 && profileInfo.wishlist.every((product) => product?.slug?.current !== void 0) ? profileInfo.wishlist.map((product) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/product/" + product.slug.current, children: /* @__PURE__ */ jsxs("div", { className: "products", children: [
            /* @__PURE__ */ jsxs("div", { className: "wishlist-product-image", children: [
              /* @__PURE__ */ jsx("img", { src: urlFor(product.image).url(), alt: "" }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  onClick: handleWishlistProduct,
                  className: "btn-wishlist-product-remove",
                  children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1em",
                      height: "1em",
                      viewBox: "0 0 256 256",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fill: "currentColor",
                          d: "M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"
                        }
                      )
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "product-details", children: /* @__PURE__ */ jsx("div", { className: "product-title-and-price", children: /* @__PURE__ */ jsx("span", { children: product.title }) }) })
          ] }) }) }, product.slug.current)) : /* @__PURE__ */ jsxs("li", { children: [
            "Ups .. you didn't add any product to your wishlist yet. View all available products ",
            /* @__PURE__ */ jsx("a", { href: "/shop", children: "here" })
          ] }) })
        ] }) })
      ] })
    ] })
  ] });
};

const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const productQuery = `*[_type == "product"] {
  title, slug, image, availability
}`;
  const products = await sanityClient.fetch(productQuery);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Profile | fashionCulture", "data-astro-cid-wwes6yjo": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "UserProfile", UserProfile, { "products": products, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/components/ReactComponents/UserProfile", "client:component-export": "default", "data-astro-cid-wwes6yjo": true })} ` })} `;
}, "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/profile.astro", void 0);

const $$file = "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Profile,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
