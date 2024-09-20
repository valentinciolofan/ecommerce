import '../chunks/page-ssr_DIHUUOGG.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_iDbVhKBp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C9PtLTXJ.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "fashionCulture | Login", "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="login-container" data-astro-cid-sgpqyurt> <div class="login-page-image" data-astro-cid-sgpqyurt> <img src="images/loginpageimg.png" data-astro-cid-sgpqyurt> </div> <div class="form-container" data-astro-cid-sgpqyurt> <div class="form-container-col" data-astro-cid-sgpqyurt> <h4 class="form-container-col-title" data-astro-cid-sgpqyurt>Sign In</h4> <p class="text-1" data-astro-cid-sgpqyurt>
Enter your details below in order to access your account
</p> </div> <form method="post" data-astro-cid-sgpqyurt> <input type="text" placeholder="Enter your email address" name="email" required data-astro-cid-sgpqyurt> <input type="password" placeholder="Enter your password" name="password" required data-astro-cid-sgpqyurt> <div class="remember-me-and-forgot-pass" data-astro-cid-sgpqyurt> <span data-astro-cid-sgpqyurt> <label for="rememberMe" class="text-1" data-astro-cid-sgpqyurt> <input id="rememberMe" type="checkbox" name="remember" value="remember" data-astro-cid-sgpqyurt> <span class="custom-checkbox" data-astro-cid-sgpqyurt></span>
Remember me
</label> </span> <a href="#" class="password-forgot text-1" data-astro-cid-sgpqyurt>Forgot your password?</a> </div> <input type="submit" value="Login" data-astro-cid-sgpqyurt> <p class="form-container-p-to-register text-1" data-astro-cid-sgpqyurt>
Don't have an account?<a href="/register" class="form-link-redirect-to-page" data-astro-cid-sgpqyurt><b data-astro-cid-sgpqyurt> Register</b></a> </p> </form> <div class="login-form-container-footer" data-astro-cid-sgpqyurt> <div class="login-form-container-links" data-astro-cid-sgpqyurt> <span data-astro-cid-sgpqyurt><a href="/cookies-information" class="form-link-redirect-to-page" data-astro-cid-sgpqyurt>Cookies</a></span> <span data-astro-cid-sgpqyurt><a href="/privacy-policy" class="form-link-redirect-to-page" data-astro-cid-sgpqyurt>Legal Policy</a></span> <span data-astro-cid-sgpqyurt>&copy; Copyright 2024</span> </div> </div> </div> </div>   ` })}`;
}, "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/login.astro", void 0);

const $$file = "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
