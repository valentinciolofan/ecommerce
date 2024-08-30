import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BGAxjtBF.mjs';
import { manifest } from './manifest_Cvrxa6On.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/_---params_.astro.mjs');
const _page2 = () => import('./pages/about-us.astro.mjs');
const _page3 = () => import('./pages/accessibility.astro.mjs');
const _page4 = () => import('./pages/administrator.astro.mjs');
const _page5 = () => import('./pages/cart.astro.mjs');
const _page6 = () => import('./pages/checkout/shipping.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/cookies-information.astro.mjs');
const _page9 = () => import('./pages/delivery-information.astro.mjs');
const _page10 = () => import('./pages/help.astro.mjs');
const _page11 = () => import('./pages/login.astro.mjs');
const _page12 = () => import('./pages/privacy-policy.astro.mjs');
const _page13 = () => import('./pages/product/_slug_.astro.mjs');
const _page14 = () => import('./pages/profile.astro.mjs');
const _page15 = () => import('./pages/purchase-conditions.astro.mjs');
const _page16 = () => import('./pages/register.astro.mjs');
const _page17 = () => import('./pages/return-policy.astro.mjs');
const _page18 = () => import('./pages/shop.astro.mjs');
const _page19 = () => import('./pages/terms.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/about-us.astro", _page2],
    ["src/pages/accessibility.astro", _page3],
    ["src/pages/administrator.astro", _page4],
    ["src/pages/cart.astro", _page5],
    ["src/pages/checkout/shipping.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/cookies-information.astro", _page8],
    ["src/pages/delivery-information.astro", _page9],
    ["src/pages/help.astro", _page10],
    ["src/pages/login.astro", _page11],
    ["src/pages/privacy-policy.astro", _page12],
    ["src/pages/product/[slug].astro", _page13],
    ["src/pages/profile.astro", _page14],
    ["src/pages/purchase-conditions.astro", _page15],
    ["src/pages/register.astro", _page16],
    ["src/pages/return-policy.astro", _page17],
    ["src/pages/shop.astro", _page18],
    ["src/pages/terms.astro", _page19],
    ["src/pages/index.astro", _page20]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "679e1e04-ef40-4f69-9845-b54daefa0851",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
