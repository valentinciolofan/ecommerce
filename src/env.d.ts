/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
    readonly PUBLIC_API_URL: string;
    // Add other environment variables here
    readonly PUBLIC_STRIPE_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }