import {defineConfig} from 'vite';
import vitePluginTsconfigPaths from '../../../utils/vite-plugin-tsconfig-paths';
import path from 'path';
import type {ModuleFormat} from 'rollup';

export default defineConfig({
  build: {
    lib: {
      name: 'YearMonthPicker',
      entry: path.resolve(__dirname, 'dist/esm/index.js'),
      formats: ['iife', 'cjs'],
      fileName: ((format: ModuleFormat): string => `plugin.${(format === 'iife' ? 'js' : 'cjs.js')}`)
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        globals: {
          '@capacitor/core': 'capacitorExports'
        }
      },
      external: ['@capacitor/core']
    },
    sourcemap: true,
    minify: true,
    emptyOutDir: false
  },
  plugins: [
    vitePluginTsconfigPaths({project: path.resolve(__dirname, 'tsconfig.lib.json')})
  ]
});
