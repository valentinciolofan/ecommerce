import"./hoisted.DoFFGRQj.js";let o=0;n(o);const d=document.querySelector(".prev"),a=document.querySelector(".next");d&&a&&(d.addEventListener("click",()=>{o-=1,n(o)}),a.addEventListener("click",()=>{o+=1,n(o)}));function n(e){const l=document.querySelectorAll(".product-image"),c=l.length;e>=c&&(o=0),e<0&&(o=c-1),l.forEach(r=>{r.classList.remove("active")}),l[o].classList.add("active")}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".slider"),l=document.querySelectorAll(".slider-slide"),c=document.querySelector(".slider-prev-button"),r=document.querySelector(".slider-next-button");if(l.length>0&&e){let t=0;const s=l[0]?.offsetWidth||0,i=e.scrollWidth-e.clientWidth;r&&c&&(r.addEventListener("click",()=>{t<i?(e.scrollBy({left:s,behavior:"smooth"}),t+=s):(e.scrollTo({left:0,behavior:"smooth"}),t=0)}),c.addEventListener("click",()=>{t>0?(e.scrollBy({left:-s,behavior:"smooth"}),t-=s):(e.scrollTo({left:i,behavior:"smooth"}),t=i)}),setInterval(()=>{t<i?(e.scrollBy({left:s,behavior:"smooth"}),t+=s):(e.scrollTo({left:0,behavior:"smooth"}),t=0)},5e3))}});
