import '../chunks/page-ssr_DIHUUOGG.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_iDbVhKBp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D1ojY-ez.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const Stats = () => {
  const [status, setStatus] = useState({});
  useEffect(() => {
    const getStats = async () => {
      const getData = await fetch("http://localhost:3000/stats");
      const data = await getData.json();
      setStatus(data);
      console.log(data);
    };
    getStats();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "cards", children: [
    /* @__PURE__ */ jsxs("div", { className: "card red", children: [
      /* @__PURE__ */ jsx("h1", { children: status.total_customers }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.5em", height: "1.5em", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fill: "black", d: "M10 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M7.5 4.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m8-.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-10 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m.6 11.998L5 15a2 2 0 0 1-2-2V9.25A.25.25 0 0 1 3.25 9h1.764c.04-.367.17-.708.365-1H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973a5 5 0 0 1-.304-.975m9.496.975Q14.794 16 15 16a3 3 0 0 0 3-3V9.25C18 8.56 17.44 8 16.75 8h-2.129c.196.292.325.633.365 1h1.764a.25.25 0 0 1 .25.25V13a2 2 0 0 1-2.1 1.998a5 5 0 0 1-.304.975M7.25 8C6.56 8 6 8.56 6 9.25V14a4 4 0 0 0 8 0V9.25C14 8.56 13.44 8 12.75 8zM7 9.25A.25.25 0 0 1 7.25 9h5.5a.25.25 0 0 1 .25.25V14a3 3 0 1 1-6 0z" }) }),
        /* @__PURE__ */ jsx("p", { children: "Total customers" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "card green", children: [
      /* @__PURE__ */ jsx("h1", { children: status.total_sales }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.5em", height: "1.5em", viewBox: "0 0 512 512", children: [
          /* @__PURE__ */ jsx("rect", { width: 448, height: 256, x: 32, y: 80, fill: "none", stroke: "#37ac20", strokeLinejoin: "round", strokeWidth: 32, rx: 16, ry: 16, transform: "rotate(180 256 208)" }),
          /* @__PURE__ */ jsx("path", { fill: "none", stroke: "#37ac20", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32, d: "M64 384h384M96 432h320" }),
          /* @__PURE__ */ jsx("circle", { cx: 256, cy: 208, r: 80, fill: "none", stroke: "#37ac20", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32 }),
          /* @__PURE__ */ jsx("path", { fill: "none", stroke: "#37ac20", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32, d: "M480 160a80 80 0 0 1-80-80M32 160a80 80 0 0 0 80-80m368 176a80 80 0 0 0-80 80M32 256a80 80 0 0 1 80 80" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Total sales" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "card blue", children: [
      /* @__PURE__ */ jsx("h1", { children: status.total_users }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.5em", height: "1.5em", viewBox: "0 0 32 32", children: /* @__PURE__ */ jsx("path", { fill: "black", d: "M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z" }) }),
        /* @__PURE__ */ jsx("p", { children: "Total users" })
      ] })
    ] })
  ] });
};

const OrdersManagement = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const handleOrdersSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();
    console.log(searchInput);
    console.log(filteredOrders);
    if (filteredOrders.length) {
      const newData = orders.filter((order) => {
        if (order !== null && order !== void 0) {
          return order.receiver.toLowerCase().includes(searchInput) || order.order_status.toLowerCase().includes(searchInput) || order.order_date.toLowerCase().includes(searchInput) || order.id.toString().includes(searchInput);
        }
      });
      setFilteredOrders(newData);
    } else {
      setFilteredOrders(orders);
    }
  };
  const handleOrderStatus = (event, index) => {
    const newStatus = event.target.value;
    const orderId = orders[index].id;
    console.log(newStatus, orderId);
    fetch(`http://localhost:3000/api/orders/${orderId}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: newStatus })
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }).then(() => {
      setOrders((prevOrders) => {
        const updatedOrders = [...prevOrders];
        updatedOrders[index].order_status = newStatus;
        setFilteredOrders(updatedOrders);
        return updatedOrders;
      });
    }).catch((error) => console.error("Error updating order status:", error));
  };
  useEffect(() => {
    const getOrders = async () => {
      const data = await fetch("http://localhost:3000/orders");
      const retrievedOrders = await data.json();
      setOrders(retrievedOrders);
      setFilteredOrders(retrievedOrders);
    };
    getOrders();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "orders-container", children: [
    /* @__PURE__ */ jsx("div", { className: "orders-container-first-col", children: /* @__PURE__ */ jsx("h4", { children: "Orders Management" }) }),
    /* @__PURE__ */ jsx("hr", { className: "order-div" }),
    /* @__PURE__ */ jsxs("div", { className: "orders-container-second-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "orders-search-container", children: [
        /* @__PURE__ */ jsx("input", { type: "text", className: "orders-search", placeholder: "Search for an order", onChange: handleOrdersSearch }),
        /* @__PURE__ */ jsx("svg", { className: "search-icon", xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 32 32", children: /* @__PURE__ */ jsx("path", { fill: "none", stroke: "silver", strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" }) })
      ] }),
      /* @__PURE__ */ jsxs("table", { className: "orders-table", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Name" }),
          /* @__PURE__ */ jsx("th", { children: "Order ID" }),
          /* @__PURE__ */ jsx("th", { children: "Order Date" }),
          /* @__PURE__ */ jsx("th", { className: "order-status", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: filteredOrders.map(
          (order, index) => /* @__PURE__ */ jsxs("tr", { className: index % 2 === 0 ? "" : "table-row1", children: [
            /* @__PURE__ */ jsx("td", { children: order.receiver }),
            /* @__PURE__ */ jsx("td", { children: order.id }),
            /* @__PURE__ */ jsx("td", { children: order.order_date.slice(0, 10) }),
            /* @__PURE__ */ jsx("td", { className: "order-status", children: /* @__PURE__ */ jsxs("select", { value: order.order_status, onChange: (e) => handleOrderStatus(e, index), children: [
              /* @__PURE__ */ jsx("option", { children: "Pending" }),
              /* @__PURE__ */ jsx("option", { children: "In progress" }),
              /* @__PURE__ */ jsx("option", { children: "Delivered" })
            ] }) })
          ] }, order.id)
        ) })
      ] })
    ] })
  ] });
};

const Panel = () => {
  return /* @__PURE__ */ jsx("div", { className: "panel", children: /* @__PURE__ */ jsxs("div", { className: "panel-wrapper", children: [
    /* @__PURE__ */ jsx(Stats, {}),
    /* @__PURE__ */ jsx(OrdersManagement, {})
  ] }) });
};

const $$Administrator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "fashionCulture | Panel" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Panel", Panel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/components/Panel", "client:component-export": "default" })} ` })}`;
}, "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/administrator.astro", void 0);

const $$file = "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/administrator.astro";
const $$url = "/administrator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Administrator,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
