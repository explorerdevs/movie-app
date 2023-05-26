/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SESSION_TOKEN: string;
  readonly TMDB_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
