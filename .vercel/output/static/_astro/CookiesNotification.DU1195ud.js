import{j as e}from"./jsx-runtime.CzgMDNMm.js";import{r as o}from"./index.DQ2WTIsS.js";const u=()=>{const[s,t]=o.useState(!1),[c,i]=o.useState(!1);o.useEffect(()=>{localStorage.getItem("cookiesAccepted")||t(!0)},[]);const n=()=>{localStorage.setItem("cookiesAccepted","true"),i(!0),setTimeout(()=>t(!1),500)},a=()=>{localStorage.setItem("cookiesAccepted","false"),i(!0),setTimeout(()=>t(!1),500)};return s?e.jsx("div",{className:`cookies-notification-container ${c?"slide-out":"slide-in"}`,children:e.jsxs("div",{className:"cookies-notification-wrapper",children:[e.jsx("h3",{children:"Cookies Settings"}),e.jsxs("p",{children:["We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this, as outlined in our ",e.jsx("a",{href:"/privacy-policy",children:"Privacy Policy"}),"."]}),e.jsxs("div",{className:"cookies-buttons",children:[e.jsx("button",{type:"button",onClick:n,children:"Accept"}),e.jsx("button",{type:"button",onClick:a,children:"Reject"})]})]})}):null};export{u as default};