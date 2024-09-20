import '../chunks/page-ssr_DIHUUOGG.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_iDbVhKBp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C9PtLTXJ.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "fashionCulture | Unleash Your Style Potential", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <section class="landing-page" data-astro-cid-j7pv25f6> <div class="landing-page-container" data-astro-cid-j7pv25f6> <div class="landing-page-wrapper" data-astro-cid-j7pv25f6> <div class="hero-page-left-col" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>UNLEASH YOUR STYLE POTENTIAL</h1> <p class="paragraph-landing-page" data-astro-cid-j7pv25f6>
Discover fashion that empowers you. Embrace your
							individuality with our carefully curated collection
							of clothes designed to make a statement.
</p> <div class="CTA-buttons" data-astro-cid-j7pv25f6> <a href="/shop" data-astro-cid-j7pv25f6>See all products</a> <a href="/contact" data-astro-cid-j7pv25f6>Get in touch</a> </div> <div class="facts-landing-page" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6><p class="fact" data-astro-cid-j7pv25f6>1M+</p><p data-astro-cid-j7pv25f6>Customers</p></span> <span data-astro-cid-j7pv25f6><p class="fact" data-astro-cid-j7pv25f6>200+</p><p data-astro-cid-j7pv25f6>Products</p></span> <span data-astro-cid-j7pv25f6><p class="fact" data-astro-cid-j7pv25f6>10</p><p data-astro-cid-j7pv25f6>Stores</p></span> </div> </div> <div class="hero-page-right-col" data-astro-cid-j7pv25f6> <div class="hero-page-images" data-astro-cid-j7pv25f6> <img src="/images/moon.svg" class="hero-page-moon-svg" data-astro-cid-j7pv25f6> <img src="/images/hero-page-guy.svg" class="hero-page-guy-svg" data-astro-cid-j7pv25f6> </div> </div> </div> </div> </section> <!-- end of landing page section --> <!-- second section --> <section class="second-section" data-astro-cid-j7pv25f6> <div class="second-section-container" data-astro-cid-j7pv25f6> <div class="second-section-cards" data-astro-cid-j7pv25f6> <div class="second-section-col jackets" data-astro-cid-j7pv25f6> <h2 class="second-section-title" data-astro-cid-j7pv25f6>
FIND YOUR PERFECT FIT
</h2> <p data-astro-cid-j7pv25f6>
Explore our diverse categories and uncover clothing
							that suits your lifestyle. From chic essentials to
							bold statement pieces, we have it all.
</p> <img src="images/jackets.svg" alt="jackets" data-astro-cid-j7pv25f6> <h1 class="absolute-paragraph" data-astro-cid-j7pv25f6>JACKETS</h1> </div> <div class="second-section-col pants" data-astro-cid-j7pv25f6> <img src="images/pants.png" alt="pants" data-astro-cid-j7pv25f6> <h1 class="absolute-paragraph" data-astro-cid-j7pv25f6>PANTS</h1> </div> <div class="second-section-col shorts" data-astro-cid-j7pv25f6> <img src="images/shorts.png" alt="shorts" data-astro-cid-j7pv25f6> <h1 class="absolute-paragraph" data-astro-cid-j7pv25f6>SHORTS</h1> </div> </div> </div> </section> <!-- end of second section --> <!-- third section --> <!-- <section class="slider-section">
			<div class="slider-container">
				<h3 class="slider-title">ELEVATE YOUR WARDROBE</h3>
				<p class="slider-description">
					Upgrade your style with our premium clothing selection.
					Explore our range of fashionable garments that blend
					quality, comfort, and trendsetting designs.
				</p>

				<div class="slider-wrapper">
					<button
						class="slider-prev-button"
						aria-label="Previous slide">&lt;</button
					>
					<div class="slider">
						<div class="slider-slides">
							{
								products.map((product) => (
									<div class="slider-slide">
										<a href={\`/product/\${product.slug.current}\`}>
											<img
												src={urlFor(
													product.image,
												)?.url()}
												alt={product.title as string}
											/>
											<div class="slider-product-details">
												<p class="slider-product-title title-1">
													{product.title}
												</p>
												<p class="slider-product-price title-1">
													\${product.price}
												</p>
											</div>
										</a>
									</div>
								))
							}
						</div>
					</div>
					<button class="slider-next-button" aria-label="Next slide"
						>&gt;</button
					>
				</div>
			</div>
		</section> --> <!-- end of third section --> </main>  ` })} `;
}, "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/index.astro", void 0);

const $$file = "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
