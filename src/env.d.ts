/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly SESSION_TOKEN: string;
  readonly TMDB_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
