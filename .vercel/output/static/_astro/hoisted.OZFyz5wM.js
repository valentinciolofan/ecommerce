import"./hoisted.DoFFGRQj.js";const s="http://localhost:3000/register";async function a(e,r){try{const t=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(t.ok)window.location.href="/login";else throw t.status===422?alert("Please make sure that all the input fields are completed accordingly!"):t.status===409&&alert("There is already an account with this email address!"),new Error(`HTTP error! Status: ${t.status}`);const o=await t.text();console.log(o)}catch(t){console.error("Error:",t)}}function n(e){e.preventDefault();const r=e.target,t=new FormData(r),o=Object.fromEntries(t.entries());console.log(o),a(s,o)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("form");e&&e.addEventListener("submit",n)});