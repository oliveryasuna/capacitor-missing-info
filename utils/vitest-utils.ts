import type {UserConfig} from 'vitest/config';
import {defineConfig} from 'vitest/config';
import path from 'path';
import vitePluginTsconfigPaths from './vite-plugin-tsconfig-paths';

const vitestCommonConfig = ((dirname: string): UserConfig =>
    defineConfig({
      plugins: [
        vitePluginTsconfigPaths({project: path.resolve(dirname, 'tsconfig.test.json')})
      ],
      test: {
        passWithNoTests: true,
        clearMocks: true,
        globals: true,
        testTimeout: 10000
      }
    }));

export {
  vitestCommonConfig
};
