import ts from 'typescript';
import {formatDiagnostics} from './diagnostics-utils';
import process from 'process';
import path from 'path';

const readTsconfig = ((fileName: string): ts.ParsedCommandLine => {
  const readConfigFileResult = ts.readConfigFile(fileName, ts.sys.readFile);

  if(readConfigFileResult.error) {
    const output: string = formatDiagnostics(readConfigFileResult.error);

    process.stderr.write(output);
    process.exit(1);
  }

  const compilerOptions: ts.ParsedCommandLine = ts.parseJsonConfigFileContent(readConfigFileResult.config, ts.sys, path.dirname(fileName));

  if(compilerOptions.errors.length) {
    const output: string = formatDiagnostics(compilerOptions.errors);

    process.stderr.write(output);
    process.exit(1);
  }

  return compilerOptions;
});

export {
  readTsconfig
};
