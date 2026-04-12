import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectPublic = path.resolve(__dirname, 'public');
const reduxIndex = path.resolve(__dirname, 'redux/index.html');

/** Dev: client-side routes like /redux/s26 → redux/index.html */
function reduxSpaFallback() {
  return {
    name: 'redux-spa-fallback',
    configureServer(server) {
      return () => {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split('?')[0] ?? '';
          if (!url.startsWith('/redux/')) return next();
          if (url.startsWith('/redux/assets/')) return next();
          if (path.extname(url)) return next();
          res.setHeader('Content-Type', 'text/html');
          fs.createReadStream(reduxIndex).pipe(res);
        });
      };
    },
  };
}

/** Dev-only: serve /font/* from project public/ (avoid publicDir inside outDir). */
function servePublicFonts() {
  return {
    name: 'serve-public-fonts',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? '';
        if (!url.startsWith('/font/')) return next();
        const rel = path.normalize(decodeURIComponent(url.slice(1)));
        const filePath = path.join(projectPublic, rel);
        if (!filePath.startsWith(projectPublic)) return next();
        fs.stat(filePath, (err, st) => {
          if (err || !st.isFile()) return next();
          const ext = path.extname(filePath).toLowerCase();
          const types = {
            '.otf': 'font/otf',
            '.ttf': 'font/ttf',
            '.woff2': 'font/woff2',
            '.woff': 'font/woff',
          };
          res.setHeader('Content-Type', types[ext] || 'application/octet-stream');
          fs.createReadStream(filePath).pipe(res);
        });
      });
    },
  };
}

export default defineConfig({
  root: 'redux',
  base: '/redux/',
  publicDir: false,
  plugins: [react(), servePublicFonts(), reduxSpaFallback()],
  build: {
    outDir: path.resolve(__dirname, 'dist/redux'),
    emptyOutDir: true,
  },
});
