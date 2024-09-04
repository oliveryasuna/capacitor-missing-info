import {defineConfig, mergeConfig} from 'vitest/config';
import reactVitePlugin from '@vitejs/plugin-react';
import {vitestCommonConfig} from '../../../utils/vitest-utils';

export default mergeConfig(
    vitestCommonConfig(__dirname),
    defineConfig({
      plugins: [
        reactVitePlugin()
      ],
      test: {
        environment: 'jsdom'
      }
    })
);
