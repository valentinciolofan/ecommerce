import '../chunks/page-ssr_DIHUUOGG.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_iDbVhKBp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C9PtLTXJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ecommerce Cart" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CartProducts", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/components/ReactComponents/Cart.jsx", "client:component-export": "default" })} ` })}`;
}, "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/cart.astro", void 0);

const $$file = "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/cart.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Cart,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
