import {defineWorkspace} from 'vitest/config';
import type {Dirent} from 'fs';
import {existsSync, readdirSync} from 'fs';
import path from 'path';

const packagesPath: string = path.join(__dirname, 'packages');
const vitestConfigPaths: string[] = readdirSync(packagesPath, {withFileTypes: true})
    .map((dirent: Dirent): string => path.join(packagesPath, dirent.name, 'vitest.config.ts'))
    .filter((vitestConfigPath: string): boolean => existsSync(vitestConfigPath))
    .map((vitestConfigPath: string): string => path.relative(__dirname, vitestConfigPath));

export default defineWorkspace(vitestConfigPaths);
