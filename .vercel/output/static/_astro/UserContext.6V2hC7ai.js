import{r as m}from"./index.DQ2WTIsS.js";let a=[],p=(e,s)=>{let n=[],t={get(){return t.lc||t.listen(()=>{})(),t.value},l:0,lc:0,listen(i,l){return t.lc=n.push(i,l||t.l)/2,()=>{let u=n.indexOf(i);~u&&(n.splice(u,2),--t.lc||t.off())}},notify(i,l){let u=!a.length;for(let r=0;r<n.length;r+=2)a.push(n[r],n[r+1],t.value,i,l);if(u){for(let r=0;r<a.length;r+=5){let d;for(let o=r+1;!d&&(o+=5)<a.length;)a[o]<a[r+1]&&(d=a.push(a[r],a[r+1],a[r+2],a[r+3],a[r+4]));d||a[r](a[r+2],a[r+3],a[r+4])}a.length=0}},off(){},set(i){let l=t.value;l!==i&&(t.value=i,t.notify(l))},subscribe(i,l){let u=t.listen(i,l);return i(t.value),u},value:e};return t};const w=5,g=6,v=10;let L=(e,s,n,t)=>(e.events=e.events||{},e.events[n+v]||(e.events[n+v]=t(i=>{e.events[n].reduceRight((l,u)=>(u(l),l),{shared:{},...i})})),e.events[n]=e.events[n]||[],e.events[n].push(s),()=>{let i=e.events[n],l=i.indexOf(s);i.splice(l,1),i.length||(delete e.events[n],e.events[n+v](),delete e.events[n+v])}),k=1e3,T=(e,s)=>L(e,t=>{let i=s(t);i&&e.events[g].push(i)},w,t=>{let i=e.listen;e.listen=(...u)=>(!e.lc&&!e.active&&(e.active=!0,t()),i(...u));let l=e.off;return e.events[g]=[],e.off=()=>{l(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let u of e.events[g])u();e.events[g]=[]}},k)},()=>{e.listen=i,e.off=l}});function O(e,s,n){let t=new Set([...s,void 0]);return e.listen((i,l,u)=>{t.has(u)&&n(i,l,u)})}function I(e,s={}){let n=m.useCallback(i=>s.keys?O(e,s.keys,i):e.listen(i),[s.keys,e]),t=e.get.bind(e);return m.useSyncExternalStore(n,t,t)}let S=e=>e,f={},E={addEventListener(){},removeEventListener(){}};function x(){try{return typeof localStorage<"u"}catch{return!1}}x()&&(f=localStorage);let q={addEventListener(e,s,n){window.addEventListener("storage",s),window.addEventListener("pageshow",n)},removeEventListener(e,s,n){window.removeEventListener("storage",s),window.removeEventListener("pageshow",n)}};typeof window<"u"&&(E=q);function C(e,s=void 0,n={}){let t=n.encode||S,i=n.decode||S,l=p(s),u=l.set;l.set=o=>{typeof o>"u"?delete f[e]:f[e]=t(o),u(o)};function r(o){o.key===e?o.newValue===null?u(void 0):u(i(o.newValue)):f[e]||u(void 0)}function d(){l.set(f[e]?i(f[e]):s)}return T(l,()=>{if(d(),n.listen!==!1)return E.addEventListener(e,r,d),()=>{E.removeEventListener(e,r,d)}}),l}const y=p(null),U=p(""),M=p("");async function Q(){try{const e=await fetch("http://localhost:3000/check-session",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}),{loggedIn:s,status:n,userInfo:t}=await e.json();s&&n===200&&t!==void 0?y.set(t):y.set(null)}catch(e){console.log("Fetch failed, check the reason:",e),y.set(null)}}const c=C("cart",{items:[],total:0},{encode:JSON.stringify,decode:JSON.parse});function R(e){const s=c.get(),n=s.items.find(t=>t.slug===e.slug&&t.size===e.size);n?n.quantity+=1:s.items.push({...e,quantity:1}),h(s)}function A(e){const s=c.get(),n=s.items.filter(i=>i.slug!==e),t={...s,items:n};h(t),c.set(t)}const _=e=>{const s=c.get(),n=s.items.map(t=>t.slug===e.itemSlug&&t.quantity>0?{...t,quantity:t.quantity-1}:t);c.set({...s,items:n}),h({...s,items:n})},z=e=>{const s=c.get(),n=s.items.map(t=>t.slug===e.itemSlug?{...t,quantity:t.quantity+1}:t);c.set({...s,items:n}),h({...s,items:n})};function h(e){const s=e.items.reduce((t,i)=>t+i.price*i.quantity,0),n={...e,total:s};c.set(n)}export{y as a,Q as b,c,_ as d,R as e,z as i,M as p,A as r,U as s,I as u};