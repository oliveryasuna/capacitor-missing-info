import {defineConfig, mergeConfig} from 'vitest/config';
import {vitestCommonConfig} from '../../../utils/vitest-utils';

export default mergeConfig(
    vitestCommonConfig(__dirname),
    defineConfig({})
);
