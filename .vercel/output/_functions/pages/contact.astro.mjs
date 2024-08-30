import '../chunks/page-ssr_DIHUUOGG.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_iDbVhKBp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D1ojY-ez.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ecommerce | Contact", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>Contact Us</h1> <div class="form-container" id="formContainer" data-astro-cid-uw5kdbxl> <form method="post" data-astro-cid-uw5kdbxl> <input type="text" placeholder="Enter your name" name="name" required data-astro-cid-uw5kdbxl> <input type="email" placeholder="Enter your email address" name="email" required data-astro-cid-uw5kdbxl> <textarea placeholder="Enter your message" name="message" rows="6" required data-astro-cid-uw5kdbxl></textarea> <input type="submit" value="Send Message" data-astro-cid-uw5kdbxl> </form> </div> <div class="modal" id="successModal" data-astro-cid-uw5kdbxl> <div class="modal-content" data-astro-cid-uw5kdbxl> <h2 data-astro-cid-uw5kdbxl>Thank you!</h2> <p data-astro-cid-uw5kdbxl>
Your message has been sent successfully. We will get back to
                    you shortly.
</p> <button data-astro-cid-uw5kdbxl>Back to shopping</button> </div> </div> </main>   ` })}`;
}, "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/contact.astro", void 0);

const $$file = "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
