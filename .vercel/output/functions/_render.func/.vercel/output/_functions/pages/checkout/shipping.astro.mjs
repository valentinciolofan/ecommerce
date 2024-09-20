import '../../chunks/page-ssr_DIHUUOGG.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_iDbVhKBp.mjs';
import 'kleur/colors';
import { c as cartStore, $ as $$Layout } from '../../chunks/Layout_C9PtLTXJ.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useCallback, useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { loadStripe } from '@stripe/stripe-js';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

const OrderDetails = ({ onDetailsFilled, collectOrderInfo }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { className: "title-delivery-details", children: "DELIVERY DETAILS" }),
    /* @__PURE__ */ jsxs("div", { className: "form-delivery-details", children: [
      /* @__PURE__ */ jsx("input", { type: "text", name: "name", placeholder: "NAME*", onChange: collectOrderInfo, required: true }),
      /* @__PURE__ */ jsx("input", { type: "text", name: "surname", placeholder: "SURNAME/S*", onChange: collectOrderInfo, required: true }),
      /* @__PURE__ */ jsx("input", { type: "text", name: "address", placeholder: "ADDRESS*", onChange: collectOrderInfo, required: true }),
      /* @__PURE__ */ jsx("input", { type: "text", name: "additionalInfo", placeholder: "ADDITIONAL INFORMATION*", onChange: collectOrderInfo }),
      /* @__PURE__ */ jsx("input", { type: "text", name: "city", placeholder: "CITY/TOWN*", onChange: collectOrderInfo, required: true }),
      /* @__PURE__ */ jsx("input", { type: "text", name: "postcode", placeholder: "POSTCODE*", onChange: collectOrderInfo, required: true }),
      /* @__PURE__ */ jsx("input", { type: "text", name: "region", placeholder: "REGION*", onChange: collectOrderInfo, required: true }),
      /* @__PURE__ */ jsx("p", { className: "contact-delivery-details", children: "CONTACT INFORMATION" }),
      /* @__PURE__ */ jsx("small", { children: "We will use it to update the status of your delivery" }),
      /* @__PURE__ */ jsx("input", { type: "text", name: "email", placeholder: "EMAIL*", onChange: collectOrderInfo, required: true }),
      /* @__PURE__ */ jsx("input", { type: "text", name: "phone", placeholder: "PHONE*", onChange: collectOrderInfo, required: true }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "btn-shipping-continue",
          onClick: () => onDetailsFilled(true),
          children: "CONTINUE"
        }
      )
    ] })
  ] });
};

const stripePromise = loadStripe("pk_test_51PVVxaEZbF6dio7iTjo5JguBuXPvFmlSfPJrZUkzEaksQnUuVP9nt3z74pjCzpI6O6qu3KuwSRYAK3N2Ft5xzIy700JPHkXNap");
const CheckoutButton = ({ cartItems }) => {
  console.log(cartItems);
  const handleCheckout = useCallback(async () => {
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cartItems)
    });
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });
    if (result.error) {
      console.error(result.error.message);
    }
  }, []);
  return /* @__PURE__ */ jsx("button", { onClick: handleCheckout, className: "btn-checkout", children: "Checkout" });
};
const Payment = ({ cartItems }) => {
  return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsx(CheckoutButton, { cartItems }) });
};

const storeAddresses = [
  "123 Fashion Ave, New York, NY 10001",
  "456 Style St, Los Angeles, CA 90001",
  "789 Trend Blvd, Miami, FL 33101",
  "321 Chic Dr, Dallas, TX 75201",
  "654 Couture Ln, Chicago, IL 60601",
  "987 Glamour Rd, San Francisco, CA 94101",
  "246 Vogue Pl, Seattle, WA 98101",
  "135 Elegance Ave, Boston, MA 02101",
  "753 Style Pkwy, Houston, TX 77001",
  "864 Trendy Way, Atlanta, GA 30301"
];
const ShippingProducts = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [storeSelected, setStoreSelected] = useState(false);
  const [detailsFilled, setDetailsFilled] = useState(false);
  const [orderInfo, setOrderInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const cartItems = useStore(cartStore);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedStep = localStorage.getItem("currentStep");
      const savedDeliveryMethod = localStorage.getItem("deliveryMethod");
      const savedDetailsFilled = localStorage.getItem("detailsFilled") === "true";
      const savedOrderInfo = localStorage.getItem("orderInfo");
      if (savedStep !== null) setCurrentStep(parseInt(savedStep, 10));
      if (savedDeliveryMethod) setDeliveryMethod(savedDeliveryMethod);
      if (savedOrderInfo) setOrderInfo(JSON.parse(savedOrderInfo));
      setDetailsFilled(savedDetailsFilled);
    }
    setOrderInfo((prevOrderInfo) => ({
      ...prevOrderInfo,
      items: cartItems.items,
      total: cartItems.total
    }));
    setLoading(false);
  }, [cartItems]);
  useEffect(() => {
    if (Object.keys(orderInfo).length !== 0 && typeof window !== "undefined") {
      localStorage.setItem("orderInfo", JSON.stringify(orderInfo));
    }
  }, [orderInfo]);
  const handleDeliverySelection = (method) => {
    setDeliveryMethod(method);
    setStoreSelected(false);
    setDetailsFilled(false);
    setOrderInfo((previousOrderInfo) => ({
      ...previousOrderInfo,
      delivery_method: method === "home" ? "Courier" : "Pick-up in store"
    }));
    if (typeof window !== "undefined") {
      localStorage.setItem("deliveryMethod", method);
      localStorage.setItem("detailsFilled", false);
    }
  };
  const handleSelectStore = (storeNr) => {
    setStoreSelected(storeNr);
    setOrderInfo((prevOrderInfo) => ({
      ...prevOrderInfo,
      address: storeAddresses[storeNr - 1]
    }));
  };
  const handleDetailsFilled = (isFilled) => {
    setDetailsFilled(isFilled);
    if (typeof window !== "undefined") {
      localStorage.setItem("detailsFilled", isFilled);
    }
  };
  const collectOrderInfo = (e) => {
    const { name, value } = e.target;
    setOrderInfo((prevOrderInfo) => ({
      ...prevOrderInfo,
      [name]: value
    }));
  };
  const handleBack = () => {
    const resetState = () => {
      setCurrentStep(0);
      setDetailsFilled(false);
      if (typeof window !== "undefined") {
        localStorage.setItem("currentStep", 0);
        localStorage.setItem("detailsFilled", false);
      }
    };
    const resetDeliveryMethod = () => {
      setDeliveryMethod("");
      if (typeof window !== "undefined") {
        localStorage.removeItem("deliveryMethod");
      }
    };
    if (deliveryMethod === "home") {
      if (detailsFilled) {
        resetState();
        setDeliveryMethod("home");
      } else {
        resetDeliveryMethod();
      }
    }
    if (deliveryMethod === "store") {
      if (!storeSelected) {
        resetDeliveryMethod();
      } else if (storeSelected > 0) {
        setDeliveryMethod("store");
        setStoreSelected(false);
      }
      if (detailsFilled && currentStep === 1) {
        resetState();
        setDeliveryMethod("store");
        setStoreSelected(1);
      }
    }
  };
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const sessionId = query.get("session_id");
    if (sessionId !== null) {
      const checkPaymentStatus = async () => {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/check-payment-status/${sessionId}`);
        const result = await response.json();
        setLoading(false);
        if (result.status === "paid") {
          setCurrentStep(2);
          await orderDetails(orderInfo);
          if (typeof window !== "undefined") {
            localStorage.removeItem("cart");
          }
        }
      };
      checkPaymentStatus();
    }
    if (detailsFilled && deliveryMethod === "home") {
      setCurrentStep(1);
    } else if (storeSelected && deliveryMethod === "store" && detailsFilled) {
      setStoreSelected(false);
      setCurrentStep(1);
    }
    if (currentStep === 2 && !orderInfo.orderId) {
      setLoading(true);
    }
  }, [detailsFilled, deliveryMethod, storeSelected]);
  const orderDetails = async (data) => {
    setLoading(true);
    await fetch("http://localhost:3000/generate-receipt", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => response.json()).then((response) => {
      console.log(orderInfo);
      setOrderInfo((prevOrderInfo) => ({
        ...prevOrderInfo,
        orderId: response.orderId
      }));
      setLoading(false);
      console.log(orderInfo);
    });
  };
  if (loading) {
    return /* @__PURE__ */ jsx("p", { children: "Loading..." });
  }
  return /* @__PURE__ */ jsx("div", { className: "shipping-products-container", children: /* @__PURE__ */ jsxs("div", { className: "shipping-products-wrapper", children: [
    /* @__PURE__ */ jsxs("div", { className: "hg-bread", children: [
      /* @__PURE__ */ jsxs("div", { className: `hg-bread-col ${currentStep === 0 ? "active" : ""}`, children: [
        /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 0H0V16H16V0ZM8.863 4.96027H8.323C7.99 5.21227 7.405 5.39227 7 5.42827V6.06727C7.288 6.05827 7.729 5.98627 8.089 5.86927V11.2783H8.863V4.96027Z", fill: "black" }) }),
        /* @__PURE__ */ jsx("p", { children: "DELIVERY" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `hg-bread-col ${currentStep === 1 ? "active" : ""}`, children: [
        /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 0H0V16H16V0ZM10.641 10.354H8.8815C8.159 10.354 7.4535 10.3625 7.19 10.371C9.706 8.74753 10.3605 8.09303 10.3605 6.86903C10.3605 5.77253 9.57 4.93103 8.329 4.93103C7.02 4.93103 6.2465 5.80653 6.1615 6.98803L6.884 7.05603C6.9435 6.14653 7.445 5.59403 8.312 5.59403C9.1875 5.59403 9.6125 6.18903 9.6125 6.88603C9.6125 7.88053 8.992 8.40753 6.204 10.3115V11H10.641V10.354Z", fill: "black" }) }),
        /* @__PURE__ */ jsx("p", { children: "PAYMENT" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `hg-bread-col ${currentStep === 2 ? "active" : ""}`, children: [
        /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 0H0V16H16V0ZM10.7175 9.27453C10.7175 8.44153 10.216 7.97403 9.54448 7.78703C10.182 7.56603 10.4625 7.04753 10.4625 6.52053C10.4625 5.47503 9.55298 4.93103 8.54148 4.93103C7.25798 4.93103 6.55248 5.67053 6.39098 6.60553L7.08798 6.75853C7.19848 6.05303 7.64048 5.56853 8.53298 5.56853C9.18748 5.56853 9.72298 5.90003 9.72298 6.56303C9.72298 7.03053 9.35748 7.50653 8.45648 7.50653C8.10798 7.50653 7.76798 7.49803 7.39398 7.48103V8.12703C7.76798 8.11003 8.10798 8.10153 8.41398 8.10153C9.14498 8.10153 9.96948 8.41603 9.96948 9.24053C9.96948 9.94603 9.44248 10.4645 8.48198 10.4645C7.49598 10.4645 6.96048 9.88653 6.88398 9.03653L6.16998 9.13003C6.26348 10.218 7.07948 11.102 8.49048 11.102C9.81648 11.102 10.7175 10.3625 10.7175 9.27453Z", fill: "black" }) }),
        /* @__PURE__ */ jsx("p", { children: "SUMMARY" })
      ] })
    ] }),
    currentStep === 0 && deliveryMethod === "" && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "checkout-delivery-title", children: "SELECT DELIVERY METHOD" }),
      /* @__PURE__ */ jsxs("div", { className: "select-delivery", children: [
        /* @__PURE__ */ jsx("div", { className: "select-delivery-option", onClick: () => handleDeliverySelection("store"), children: /* @__PURE__ */ jsx("p", { className: "delivery-method-title", children: "Pick-up in store" }) }),
        /* @__PURE__ */ jsx("div", { className: "select-delivery-option", onClick: () => handleDeliverySelection("home"), children: /* @__PURE__ */ jsx("p", { className: "delivery-method-title", children: "Home delivery" }) })
      ] })
    ] }),
    currentStep === 0 && deliveryMethod === "store" && storeSelected === false && /* @__PURE__ */ jsxs("div", { className: "select-delivery", children: [
      /* @__PURE__ */ jsx("svg", { onClick: handleBack, xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fill: "black", d: "m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z" }) }),
      /* @__PURE__ */ jsx("p", { children: "Choose a store:" }),
      /* @__PURE__ */ jsx("div", { className: "select-delivery-option", onClick: () => handleSelectStore(1), children: "123 Fashion Ave, New York, NY 10001" }),
      /* @__PURE__ */ jsx("div", { className: "select-delivery-option", onClick: () => handleSelectStore(2), children: "456 Style St, Los Angeles, CA 90001" }),
      /* @__PURE__ */ jsx("div", { className: "select-delivery-option", onClick: () => handleSelectStore(3), children: "789 Trend Blvd, Miami, FL 33101" }),
      /* @__PURE__ */ jsx("div", { className: "select-delivery-option", onClick: () => handleSelectStore(4), children: "321 Chic Dr, Dallas, TX 75201" }),
      /* @__PURE__ */ jsx("div", { className: "select-delivery-option", onClick: () => handleSelectStore(5), children: "654 Couture Ln, Chicago, IL 60601" }),
      /* @__PURE__ */ jsx("div", { className: "select-delivery-option", onClick: () => handleSelectStore(6), children: "987 Glamour Rd, San Francisco, CA 94101" }),
      /* @__PURE__ */ jsx("div", { className: "select-delivery-option", onClick: () => handleSelectStore(7), children: "246 Vogue Pl, Seattle, WA 98101" }),
      /* @__PURE__ */ jsx("div", { className: "select-delivery-option", onClick: () => handleSelectStore(8), children: "135 Elegance Ave, Boston, MA 02101" }),
      /* @__PURE__ */ jsx("div", { className: "select-delivery-option", onClick: () => handleSelectStore(9), children: "753 Style Pkwy, Houston, TX 77001" }),
      /* @__PURE__ */ jsx("div", { className: "select-delivery-option", onClick: () => handleSelectStore(10), children: "864 Trendy Way, Atlanta, GA 30301" })
    ] }),
    storeSelected > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("svg", { onClick: handleBack, xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fill: "black", d: "m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z" }) }),
      /* @__PURE__ */ jsx("p", { className: "title-delivery-details", children: "DELIVERY DETAILS" }),
      /* @__PURE__ */ jsxs("div", { className: "form-delivery-details", children: [
        /* @__PURE__ */ jsx("input", { type: "text", name: "name", placeholder: "NAME*", onChange: collectOrderInfo, required: true }),
        /* @__PURE__ */ jsx("input", { type: "text", name: "surname", placeholder: "SURNAME/S*", onChange: collectOrderInfo, required: true }),
        /* @__PURE__ */ jsx("input", { type: "text", name: "additionalInfo", placeholder: "ADDITIONAL INFORMATION*", onChange: collectOrderInfo }),
        /* @__PURE__ */ jsx("p", { className: "contact-delivery-details", children: "CONTACT INFORMATION" }),
        /* @__PURE__ */ jsx("small", { children: "We will use it to update the status of your delivery" }),
        /* @__PURE__ */ jsx("input", { type: "text", name: "email", placeholder: "EMAIL*", onChange: collectOrderInfo, required: true }),
        /* @__PURE__ */ jsx("input", { type: "text", name: "phone", placeholder: "PHONE*", onChange: collectOrderInfo, required: true }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "btn-shipping-continue",
            onClick: () => handleDetailsFilled(true),
            children: "CONTINUE"
          }
        )
      ] })
    ] }),
    currentStep === 0 && deliveryMethod === "home" && /* @__PURE__ */ jsxs("div", { className: "home-delivery", children: [
      /* @__PURE__ */ jsx("svg", { onClick: handleBack, xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fill: "black", d: "m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z" }) }),
      /* @__PURE__ */ jsx(OrderDetails, { onDetailsFilled: handleDetailsFilled, collectOrderInfo })
    ] }),
    currentStep === 1 && detailsFilled && /* @__PURE__ */ jsxs("div", { className: "order-summary", children: [
      /* @__PURE__ */ jsx("svg", { onClick: handleBack, xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fill: "black", d: "m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z" }) }),
      /* @__PURE__ */ jsxs("div", { className: "final-delivery-address", children: [
        /* @__PURE__ */ jsx("p", { children: "Contact information" }),
        /* @__PURE__ */ jsxs("span", { children: [
          orderInfo.surname,
          " ",
          orderInfo.name
        ] }),
        deliveryMethod === "home" ? /* @__PURE__ */ jsxs("span", { children: [
          ", ",
          orderInfo.city,
          " ",
          orderInfo.region
        ] }) : "",
        /* @__PURE__ */ jsxs("span", { children: [
          ", ",
          orderInfo.phone
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Address" }),
        deliveryMethod === "store" ? /* @__PURE__ */ jsx("span", { children: "fashionCulture" }) : "",
        /* @__PURE__ */ jsx("span", { children: orderInfo.address }),
        orderInfo.additionalInfo ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("p", { children: "Additional Information" }),
          /* @__PURE__ */ jsx("span", { children: orderInfo.additionalInfo })
        ] }) : ""
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "cart-items", children: [
        /* @__PURE__ */ jsx("p", { children: "Your Cart" }),
        /* @__PURE__ */ jsx("ul", { children: cartItems.items.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "cart-item", children: [
          /* @__PURE__ */ jsx("span", { className: "cart-item-title", children: item.title }),
          /* @__PURE__ */ jsxs("span", { className: "cart-item-quantity", children: [
            "Qty: ",
            item.quantity
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "cart-item-price", children: [
            "$",
            item.price
          ] })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsx(Payment, { cartItems })
    ] }),
    currentStep === 2 && /* @__PURE__ */ jsxs("div", { className: "summary-columns", children: [
      /* @__PURE__ */ jsxs("div", { className: "summary-first-col", children: [
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "10em", height: "10em", viewBox: "0 0 256 256", children: /* @__PURE__ */ jsx("path", { fill: "black", d: "M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-52.2 6.84l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32" }) }),
        /* @__PURE__ */ jsx("h4", { children: "Your order is made!" }),
        /* @__PURE__ */ jsx("p", { children: "Congratulations! Your order has been successfully proceed, we will pick up your order as soon as possible!" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "summary-second-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "summary-order-id-and-delivery", children: [
          /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "2em", height: "2em", viewBox: "0 0 32 32", children: [
            /* @__PURE__ */ jsx("path", { fill: "black", d: "m23 1l-6 6l1.415 1.402L22 4.818V21H10V10H8v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4.815l3.586 3.587L29 7z" }),
            /* @__PURE__ */ jsx("path", { fill: "black", d: "M18.5 19h-5c-.827 0-1.5-.673-1.5-1.5v-5c0-.827.673-1.5 1.5-1.5h5c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5M14 17h4v-4h-4zm2 14v-2c7.168 0 13-5.832 13-13c0-1.265-.181-2.514-.538-3.715l1.917-.57C30.79 13.1 31 14.542 31 16c0 8.271-6.729 15-15 15M1.621 20.285A15 15 0 0 1 1 16C1 7.729 7.729 1 16 1v2C8.832 3 3 8.832 3 16c0 1.265.181 2.515.538 3.715z" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Order ID #",
              orderInfo.orderId
            ] }),
            /* @__PURE__ */ jsx("small", { className: "summary-delivery-type", children: "Express Delivery" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "summary-info-columns", children: /* @__PURE__ */ jsxs("div", { className: "summary-info-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "summary-info-row", children: [
            /* @__PURE__ */ jsx("p", { className: "summary-info-col", children: "Shipper Name" }),
            /* @__PURE__ */ jsx("p", { className: "summary-info", children: "fashionCulture Inc." }),
            /* @__PURE__ */ jsxs("div", { className: "summary-info-row", children: [
              /* @__PURE__ */ jsx("p", { className: "summary-info-col", children: "From" }),
              /* @__PURE__ */ jsx("p", { className: "summary-info", children: "Str. Avenue, New York, NY, 10025" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "summary-info-row", children: [
            /* @__PURE__ */ jsx("p", { className: "summary-info-col", children: "Recipient Name" }),
            /* @__PURE__ */ jsxs("p", { className: "summary-info", children: [
              orderInfo.surname,
              " ",
              orderInfo.name
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "summary-info-row", children: [
              /* @__PURE__ */ jsx("p", { className: "summary-info-col", children: "To" }),
              /* @__PURE__ */ jsx("p", { className: "summary-info", children: orderInfo.address })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "btn-back-shopping",
          onClick: () => {
            window.location.href = "/shop";
            localStorage.removeItem("orderInfo");
          },
          children: "BACK TO SHOPPING"
        }
      )
    ] })
  ] }) });
};

const $$Shipping = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ecommerce Shipping" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ShippingProducts", ShippingProducts, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/components/ReactComponents/ShippingProducts", "client:component-export": "default" })} ` })}`;
}, "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/checkout/shipping.astro", void 0);

const $$file = "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/checkout/shipping.astro";
const $$url = "/checkout/shipping";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Shipping,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
