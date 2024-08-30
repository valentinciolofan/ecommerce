import { s as sanityClient } from '../../chunks/page-ssr_DIHUUOGG.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, e as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_iDbVhKBp.mjs';
import 'kleur/colors';
import { p as productDetailsStore, $ as $$Layout } from '../../chunks/Layout_D1ojY-ez.mjs';
import { A as AddtoCart } from '../../chunks/ProductListing_BaplNkMb.mjs';
import { jsx, Fragment } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { u as urlFor } from '../../chunks/urlFor_D6lAtocX.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const ProductSizes = ({ sizes }) => {
  const productDetails = useStore(productDetailsStore);
  useEffect(() => {
    if (sizes && sizes.length > 0 && !productDetails.selectedSize) {
      productDetailsStore.set({
        ...productDetails,
        selectedSize: sizes[0].size
      });
    }
  }, [sizes, productDetails]);
  const handleSizeClick = (size) => {
    productDetailsStore.set({
      ...productDetails,
      selectedSize: size
    });
    console.log(productDetailsStore.get().selectedSize + " size selected");
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("ul", { className: "product-sizes-list", children: sizes && sizes.map((size) => /* @__PURE__ */ jsx(
    "li",
    {
      className: `text-1 size-option ${size.size === productDetails.selectedSize ? "selected" : ""}`,
      onClick: () => handleSizeClick(size.size),
      children: size.size.toUpperCase()
    },
    size.size
  )) }) });
};

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  const products = await sanityClient.fetch(`*[_type == "product"]{
    slug,
    title,
    price,
    images,
    image,
    color,
    description,
    availability,
    sizes,
    material,
    categories[]->{title}, 
    collection[]->{title}
  }`);
  console.log(products);
  const getRandomProducts = (currentSlug) => {
    const filteredProducts = products.filter(
      (p) => p.slug.current !== currentSlug
    );
    const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  };
  const paths = await Promise.all(
    products.map(async (product) => {
      const relatedProducts = getRandomProducts(product.slug.current);
      return {
        params: { slug: product.slug.current },
        props: {
          product,
          relatedProducts
        }
      };
    })
  );
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { product, relatedProducts } = Astro2.props;
  const structuredSizes = [];
  for (let i = 0; i < product.sizes.length; i += 2) {
    structuredSizes.push({
      size: product.sizes[i],
      stock: product.sizes[i + 1]
    });
  }
  const productDetails = {
    slug,
    title: product.title,
    price: product.price,
    color: product.color,
    size: "",
    image: product.image
  };
  console.log(product);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${product.title} - fashionCulture`, "data-astro-cid-hyvzkcdj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-hyvzkcdj> <section class="product-container" data-astro-cid-hyvzkcdj> <div class="product-wrapper" data-astro-cid-hyvzkcdj> <div class="product-images" data-astro-cid-hyvzkcdj> <div class="product-image-wrapper" data-astro-cid-hyvzkcdj> ${product.images.map((image, index) => renderTemplate`<img${addAttribute(`product-image ${index === 0 ? "active" : ""}`, "class")}${addAttribute(urlFor(image).url(), "src")}${addAttribute(product.title, "alt")} data-astro-cid-hyvzkcdj>`)} </div> <a class="prev" data-astro-cid-hyvzkcdj>&#10094;</a> <a class="next" data-astro-cid-hyvzkcdj>&#10095;</a> </div> <!-- product information such as title, price, description --> <aside class="product-info" data-astro-cid-hyvzkcdj> <div data-astro-cid-hyvzkcdj> <div class="product-info-title-and-wishlist" data-astro-cid-hyvzkcdj> <p class="product-info-title text-1" data-astro-cid-hyvzkcdj>${product.title}</p> ${renderComponent($$result2, "AddToWishlist", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-hyvzkcdj": true, "client:component-path": "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/components/ReactComponents/Header/UserWishlistIcon", "client:component-export": "AddToWishlist" })} </div> <p class="product-info-price text-1" data-astro-cid-hyvzkcdj>$${product.price}</p> </div> <p class="text-1" data-astro-cid-hyvzkcdj>${product.description}</p> <div class="size-select" data-astro-cid-hyvzkcdj> <p class="text-1" data-astro-cid-hyvzkcdj>Select a size:</p> ${renderComponent($$result2, "ProductSizes", ProductSizes, { "sizes": structuredSizes, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/components/ProductSizes", "client:component-export": "default", "data-astro-cid-hyvzkcdj": true })} </div> <div class="add-to-cart-wrapper" data-astro-cid-hyvzkcdj> ${renderComponent($$result2, "AddtoCart", AddtoCart, { "productDetails": productDetails, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/components/ReactComponents/ProductListing", "client:component-export": "AddtoCart", "data-astro-cid-hyvzkcdj": true })} </div> </aside> <!--end of product info ### title, price, size --> </div> </section> <section class="slider-section" data-astro-cid-hyvzkcdj> <div class="slider-container" data-astro-cid-hyvzkcdj> <p class="slider-description" data-astro-cid-hyvzkcdj>You might also be interested in</p> <div class="slider-wrapper" data-astro-cid-hyvzkcdj> <button class="slider-prev-button" aria-label="Previous slide" data-astro-cid-hyvzkcdj>&lt;</button> <div class="slider" data-astro-cid-hyvzkcdj> <div class="slider-slides" data-astro-cid-hyvzkcdj> ${relatedProducts.map(
    (product2) => {
      return renderTemplate`<div class="slider-slide" data-astro-cid-hyvzkcdj> <a${addAttribute(product2.slug.current, "href")} data-astro-cid-hyvzkcdj> <img${addAttribute(urlFor(product2.image)?.url(), "src")}${addAttribute(product2.title, "alt")} data-astro-cid-hyvzkcdj> <div class="slider-product-details" data-astro-cid-hyvzkcdj> <p class="slider-product-title title-1" data-astro-cid-hyvzkcdj> ${product2.title} </p> <p class="slider-product-price title-1" data-astro-cid-hyvzkcdj>
$${product2.price} </p> </div> </a> </div>`;
    }
  )} </div> </div> <button class="slider-next-button" aria-label="Next slide" data-astro-cid-hyvzkcdj>&gt;</button> </div> </div> </section> </main>  ` })} `;
}, "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/product/[slug].astro", void 0);

const $$file = "D:/Facultate/Anul 3/Semestrul 2/Licenta/Ecommerce/src/pages/product/[slug].astro";
const $$url = "/product/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
