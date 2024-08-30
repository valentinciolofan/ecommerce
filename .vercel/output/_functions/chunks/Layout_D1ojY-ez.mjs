import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, b as renderHead, g as renderSlot, e as createAstro } from './astro/server_iDbVhKBp.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';
/* empty css                                 */
/* empty css                            */
import 'clsx';

const userSession = atom(null);

atom(null);

const searchBoxValue = atom('');

const productDetailsStore = atom('');


// Use persistentAtom to store the cart state in localStorage
const cartStore = persistentAtom('cart', {
  items: [],
  total: 0
}, {
  encode: JSON.stringify,
  decode: JSON.parse
});

function addToCart(product) {
  const currentCart = cartStore.get();
  const existingItem = currentCart.items.find(item => item.slug === product.slug && item.size === product.size);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    currentCart.items.push({ ...product, quantity: 1 });
  }

  calculateTotal(currentCart);
}


function calculateTotal(currentCart) {
  // Calculate the new total based on items in the cart
  const total = currentCart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  // Create a new cart object with the updated total
  const updatedCart = {
    ...currentCart, // Spread the existing properties
    total, // Update the total
  };
  
  // Set the new cart state in the store
  cartStore.set(updatedCart);
}

const SearchBar = () => {
  const inputValue = useStore(searchBoxValue);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const handleInputChange = (e) => {
    const inputValue2 = e.target.value;
    searchBoxValue.set(inputValue2);
  };
  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  };
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
      inputRef.current.blur();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: `search-container ${isOpen ? "open" : ""}`, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ref: inputRef,
        type: "text",
        placeholder: "Search for a product",
        value: inputValue,
        className: "search-bar",
        onChange: handleInputChange
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "searchBox-svg", onClick: toggleSearchBar, children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fill: "none", stroke: "black", strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" }) }) })
  ] });
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <div class="header-container" data-astro-cid-3ef6ksr2> <div class="header-wrapper" data-astro-cid-3ef6ksr2> <div class="logo-and-hamburger" data-astro-cid-3ef6ksr2> <button class="btn-open-nav" data-astro-cid-3ef6ksr2>☰</button> <a href="/" class="logo" data-astro-cid-3ef6ksr2>fashionCulture</a> </div> <nav class="nav-container" data-astro-cid-3ef6ksr2> <div class="nav-content" data-astro-cid-3ef6ksr2> <a href="javascript:void(0)" class="btn-close-nav" data-astro-cid-3ef6ksr2>✖</a> <a href="/" data-astro-cid-3ef6ksr2>Home</a> <a href="/shop" data-astro-cid-3ef6ksr2>Products</a> <a href="/about-us" data-astro-cid-3ef6ksr2>About Us</a> <a href="/contact" data-astro-cid-3ef6ksr2>Contact Us</a> </div> </nav> <div class="action-elements" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "UserActions", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-3ef6ksr2": true, "client:component-path": "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/components/ReactComponents/Header/UserActions", "client:component-export": "default" })} </div> </div> <div class="searchBox" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "SearchBar", SearchBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/components/ReactComponents/Searchbar", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true })} </div> </div> </header>  `;
}, "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="footer-container" data-astro-cid-sz7xmlte> <div class="footer-wrapper" data-astro-cid-sz7xmlte> <a href="/shop" class="logo" data-astro-cid-sz7xmlte>fashionCulture</a> <div class="footer-section" data-astro-cid-sz7xmlte> <span class="footer-title" data-astro-cid-sz7xmlte> <p class="footer-social-links-title" data-astro-cid-sz7xmlte>Social</p> </span> <div class="footer-social-media-links" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte><a href="https://www.facebook.com" data-astro-cid-sz7xmlte>Facebook</a></span> <span data-astro-cid-sz7xmlte><a href="https://www.instagram.com" data-astro-cid-sz7xmlte>Instagram</a></span> <span data-astro-cid-sz7xmlte><a href="https://www.tiktok.com" data-astro-cid-sz7xmlte>TikTok</a></span> <span data-astro-cid-sz7xmlte><a href="https://www.x.com" data-astro-cid-sz7xmlte>X</a></span> </div> </div> <div class="footer-columns" data-astro-cid-sz7xmlte> <div class="footer-column" data-astro-cid-sz7xmlte> <span class="footer-title" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>Help</p> <svg width="16" height="16" viewBox="0 0 16 16" fill="" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 8.24264C3.5 7.9665 3.72386 7.74264 4 7.74264L7.74264 7.74264L7.74264 4C7.74264 3.72386 7.9665 3.5 8.24264 3.5C8.51878 3.5 8.74264 3.72386 8.74264 4L8.74264 7.74264H12.4853C12.7614 7.74264 12.9853 7.9665 12.9853 8.24264C12.9853 8.51878 12.7614 8.74264 12.4853 8.74264H8.74264L8.74264 12.4853C8.74264 12.7614 8.51878 12.9853 8.24264 12.9853C7.9665 12.9853 7.74264 12.7614 7.74264 12.4853L7.74264 8.74264L4 8.74264C3.72386 8.74264 3.5 8.51878 3.5 8.24264Z" fill="#fff" data-astro-cid-sz7xmlte></path> </svg> </span> <div class="footer-links" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte><a href="/contact" data-astro-cid-sz7xmlte>Contact</a></span> <span data-astro-cid-sz7xmlte><a href="/help" data-astro-cid-sz7xmlte>Help</a></span> <span data-astro-cid-sz7xmlte><a href="/accessibility" data-astro-cid-sz7xmlte>Accessibility</a></span> <span data-astro-cid-sz7xmlte><a href="#" data-astro-cid-sz7xmlte>Order tracking</a></span> </div> </div> <div class="footer-column" data-astro-cid-sz7xmlte> <span class="footer-title" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>Services</p> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 8.24264C3.5 7.9665 3.72386 7.74264 4 7.74264L7.74264 7.74264L7.74264 4C7.74264 3.72386 7.9665 3.5 8.24264 3.5C8.51878 3.5 8.74264 3.72386 8.74264 4L8.74264 7.74264H12.4853C12.7614 7.74264 12.9853 7.9665 12.9853 8.24264C12.9853 8.51878 12.7614 8.74264 12.4853 8.74264H8.74264L8.74264 12.4853C8.74264 12.7614 8.51878 12.9853 8.24264 12.9853C7.9665 12.9853 7.74264 12.7614 7.74264 12.4853L7.74264 8.74264L4 8.74264C3.72386 8.74264 3.5 8.51878 3.5 8.24264Z" fill="#fff" data-astro-cid-sz7xmlte></path> </svg> </span> <div class="footer-links" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte><a href="/delivery-information" data-astro-cid-sz7xmlte>Delivery Information</a></span> </div> </div> <div class="footer-column" data-astro-cid-sz7xmlte> <span class="footer-title" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>Legal</p> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 8.24264C3.5 7.9665 3.72386 7.74264 4 7.74264L7.74264 7.74264L7.74264 4C7.74264 3.72386 7.9665 3.5 8.24264 3.5C8.51878 3.5 8.74264 3.72386 8.74264 4L8.74264 7.74264H12.4853C12.7614 7.74264 12.9853 7.9665 12.9853 8.24264C12.9853 8.51878 12.7614 8.74264 12.4853 8.74264H8.74264L8.74264 12.4853C8.74264 12.7614 8.51878 12.9853 8.24264 12.9853C7.9665 12.9853 7.74264 12.7614 7.74264 12.4853L7.74264 8.74264L4 8.74264C3.72386 8.74264 3.5 8.51878 3.5 8.24264Z" fill="#fff" data-astro-cid-sz7xmlte></path> </svg> </span> <div class="footer-links" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte><a href="/purchase-conditions" data-astro-cid-sz7xmlte>Purchase Conditions</a></span> <span data-astro-cid-sz7xmlte><a href="/privacy-policy" data-astro-cid-sz7xmlte>Privacy Policy</a></span> <span data-astro-cid-sz7xmlte><a href="/return-policy" data-astro-cid-sz7xmlte>Return Policy</a></span> <span data-astro-cid-sz7xmlte><a href="/cookies-information" data-astro-cid-sz7xmlte>Cookies Information</a></span> </div> </div> <div class="footer-column" data-astro-cid-sz7xmlte> <span class="footer-title" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>Company</p> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 8.24264C3.5 7.9665 3.72386 7.74264 4 7.74264L7.74264 7.74264L7.74264 4C7.74264 3.72386 7.9665 3.5 8.24264 3.5C8.51878 3.5 8.74264 3.72386 8.74264 4L8.74264 7.74264H12.4853C12.7614 7.74264 12.9853 7.9665 12.9853 8.24264C12.9853 8.51878 12.7614 8.74264 12.4853 8.74264H8.74264L8.74264 12.4853C8.74264 12.7614 8.51878 12.9853 8.24264 12.9853C7.9665 12.9853 7.74264 12.7614 7.74264 12.4853L7.74264 8.74264L4 8.74264C3.72386 8.74264 3.5 8.51878 3.5 8.24264Z" fill="#fff" data-astro-cid-sz7xmlte></path> </svg> </span> <div class="footer-links" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte><a href="/about-us" data-astro-cid-sz7xmlte>About fashionCulture</a></span> </div> </div> </div> </div> </div> </footer>  `;
}, "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/components/Footer.astro", void 0);

const CookiesNotification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [hideNotification, setHideNotification] = useState(false);
  useEffect(() => {
    const userChoice = localStorage.getItem("cookiesAccepted");
    if (!userChoice) {
      setShowNotification(true);
    }
  }, []);
  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setHideNotification(true);
    setTimeout(() => setShowNotification(false), 500);
  };
  const handleReject = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setHideNotification(true);
    setTimeout(() => setShowNotification(false), 500);
  };
  if (!showNotification) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: `cookies-notification-container ${hideNotification ? "slide-out" : "slide-in"}`, children: /* @__PURE__ */ jsxs("div", { className: "cookies-notification-wrapper", children: [
    /* @__PURE__ */ jsx("h3", { children: "Cookies Settings" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this, as outlined in our ",
      /* @__PURE__ */ jsx("a", { href: "/privacy-policy", children: "Privacy Policy" }),
      "."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "cookies-buttons", children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handleAccept, children: "Accept" }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handleReject, children: "Reject" })
    ] })
  ] }) });
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "CookiesNotification", CookiesNotification, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/components/CookiesNotification", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  <!-- 
	@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
	* {
		margin: 0;
		padding: 0;
	}
	body {
		height: 100vh;
	}
	.wrapper {
		margin-right: auto;
		margin-left: auto;
		max-width: 1360px;
		padding-top: 10px;
		padding-right: 20px;
		padding-left: 20px;
		padding-bottom: 10px;
	}
	h1 {
		font-size: 3em;
		font-family: "Montserrat", sans-serif;
		font-weight: 700;
		font-style: normal;
	}
	p {
		font-size: 1em;
		font-family: "Lato", sans-serif;
		font-weight: 400;
		font-style: normal;
	} --></body></html>`;
}, "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/layouts/Layout.astro", void 0);

export { $$Layout as $, addToCart as a, cartStore as c, productDetailsStore as p, searchBoxValue as s, userSession as u };
