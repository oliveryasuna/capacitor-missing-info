import {defineConfig, searchForWorkspaceRoot} from 'vite';
import {DEV_SERVER_PORT} from '../../../utils/dev';
import reactVitePlugin from '@vitejs/plugin-react';
import vitePluginTsconfigPaths from '../../../utils/vite-plugin-tsconfig-paths';
import path from 'path';

export default defineConfig({
  resolve: {
    preserveSymlinks: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: true
  },
  server: {
    host: true,
    port: DEV_SERVER_PORT,
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd())]
    }
  },
  plugins: [
    vitePluginTsconfigPaths({project: path.resolve(__dirname, 'tsconfig.app.json')}),
    reactVitePlugin()
  ]
});
