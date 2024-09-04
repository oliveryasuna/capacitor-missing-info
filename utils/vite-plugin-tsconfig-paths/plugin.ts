import type {AliasOptions, Plugin, UserConfig} from 'vite';
import type {PluginOptions} from './plugin-options';
import {readTsconfig} from '../typescript';
import type ts from 'typescript';
import path from 'path';

const plugin = ((options: PluginOptions = {}): Plugin => ({
  name: 'vite-plugin-tsconfig-paths',
  enforce: 'pre',
  config: ((config: UserConfig): Omit<UserConfig, 'plugins'> => {
    const resolve = (config.resolve ?? {});

    const readTsconfigResult: ts.ParsedCommandLine = readTsconfig(options.project ?? './tsconfig.json');

    const paths: [string, string][] = Object.entries(readTsconfigResult.options.paths ?? {})
        .filter(([key, value]): boolean => (!key.includes('*') && (value.length === 1)))
        .map(([key, value]): [string, string] => [key, path.resolve((readTsconfigResult.options as (ts.CompilerOptions & {pathsBasePath: string})).pathsBasePath, value[0]!)]);

    if(paths.length > 0) {
      let alias: AliasOptions = (resolve.alias ?? {});

      for(const [key, value] of paths) {
        alias = {
          ...alias,
          [key]: value
        };
      }

      config.resolve = {
        ...resolve,
        alias: alias
      };
    }

    return config;
  })
}));

export default plugin;
