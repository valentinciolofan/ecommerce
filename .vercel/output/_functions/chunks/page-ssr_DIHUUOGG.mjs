import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"1ymeft4k","dataset":"production","useCdn":false,"studioBasePath":"/admin"}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
