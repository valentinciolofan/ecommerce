import '../chunks/page-ssr_DIHUUOGG.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_iDbVhKBp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C9PtLTXJ.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ecommerce | Register", "data-astro-cid-qraosrxq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-qraosrxq> <div class="register-container" data-astro-cid-qraosrxq> <div class="register-page-image" data-astro-cid-qraosrxq> <img src="images/registerpageimg.png" alt="Register Image" data-astro-cid-qraosrxq> </div> <div class="form-container" data-astro-cid-qraosrxq> <h1 data-astro-cid-qraosrxq>Create Your Account</h1> <p data-astro-cid-qraosrxq>Let's create a new ecommerce account for you!</p> <form method="post" data-astro-cid-qraosrxq> <input type="text" placeholder="Enter your full name" name="name" required data-astro-cid-qraosrxq> <input type="text" placeholder="Enter your email address" name="email" required data-astro-cid-qraosrxq> <input type="password" placeholder="Enter your password" name="password" required data-astro-cid-qraosrxq> <input type="password" placeholder="Confirm your password" name="confirm-password" required data-astro-cid-qraosrxq> <input type="text" placeholder="Enter your city" name="city" required data-astro-cid-qraosrxq> <input type="text" placeholder="Enter your county" name="county" required data-astro-cid-qraosrxq> <input type="text" placeholder="Enter your address" name="address" required data-astro-cid-qraosrxq> <input type="date" placeholder="Enter your birthday" name="birthday" data-astro-cid-qraosrxq> <input type="text" placeholder="Enter your phone number" name="phone" required data-astro-cid-qraosrxq> <div class="terms-and-conditions" data-astro-cid-qraosrxq> <input type="checkbox" id="termsandconditions" name="termsandconditions" value="Terms and conditions" required data-astro-cid-qraosrxq> <label for="termsandconditions" data-astro-cid-qraosrxq> <a href="terms" data-astro-cid-qraosrxq>I agree with terms and conditions</a> </label> </div> <input type="submit" value="Register" data-astro-cid-qraosrxq> </form> </div> </div> </main> ` })}  `;
}, "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/register.astro", void 0);

const $$file = "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Register,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
