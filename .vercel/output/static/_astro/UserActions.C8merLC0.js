import{j as o}from"./jsx-runtime.CzgMDNMm.js";import{r as l}from"./index.DQ2WTIsS.js";import{b as w,u as p,a as c}from"./UserContext.6V2hC7ai.js";import{U as d,a as f,b as m}from"./UserWishlistIcon.CJASrB20.js";/* empty css                               */import u from"./Searchbar.B6yuf-G2.js";import"./urlFor.DCL5kvad.js";import"./image-url.umd.B12jX_S8.js";function x({session:e,handleLogOut:t}){const[s,r]=l.useState(!1);l.useEffect(()=>{(async()=>{await w()})()},[]);const a=async h=>{e&&(r(!0),console.log(e))},i=()=>{r(!1)},n=()=>{e?.hasOwnProperty("name")?(console.log(e.hasOwnProperty("name")),window.location.href="/profile"):(console.log(e?.hasOwnProperty("name")),window.location.href="/login")};return o.jsxs("div",{onClick:n,onMouseOver:a,onMouseOut:i,style:{position:"relative",display:"inline-block"},children:[o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 32 32",children:o.jsx("path",{fill:"black",d:"M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"})}),s&&o.jsx(d,{session:e,handleLogOut:t})]})}const g=({session:e})=>{const[t,s]=l.useState(!1),r=n=>{window.location.href="/cart",console.log(n)},a=async n=>{s(!0)},i=()=>{s(!1)};return o.jsxs("div",{onMouseOver:a,onMouseOut:i,style:{position:"relative",display:"inline-block"},children:[o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 14 14",onClick:r,children:o.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M12.28 6H1.72a1 1 0 0 0-1 1.2l1.1 5.5a1 1 0 0 0 1 .8h8.36a1 1 0 0 0 1-.8l1.1-5.5a1 1 0 0 0-1-1.2M9 2.5L11 6M3 6l2-3.5"})}),t&&o.jsx(f,{})]})},M=()=>{let e=p(c);const t=async()=>{try{if((await fetch("http://localhost:3000/logout",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}})).ok)c.set(!1),window.location.href="/login";else throw new Error("Failed to log out")}catch(s){console.error("Logout failed:",s)}};return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"searchBar-disable",children:o.jsx(u,{})}),o.jsx(x,{session:e,handleLogOut:t}),o.jsx(m,{session:e}),o.jsx(g,{session:e})]})};export{M as default};