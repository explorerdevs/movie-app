interface ImportMetaEnv {
  readonly SESSION_TOKEN: string;
  readonly TMDB_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}
