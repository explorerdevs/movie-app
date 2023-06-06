import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react(), svgr({ exportAsDefault: true })],
    server: { port: 3000, open: true },
    resolve: { alias: [{ find: '@src', replacement: '/src/' }] },
    base: command !== 'serve' ? '/movie-app/' : '/',
  };
});
