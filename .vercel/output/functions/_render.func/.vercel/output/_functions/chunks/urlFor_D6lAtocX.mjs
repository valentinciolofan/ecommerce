import { s as sanityClient } from './page-ssr_DIHUUOGG.mjs';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export { urlFor as u };
