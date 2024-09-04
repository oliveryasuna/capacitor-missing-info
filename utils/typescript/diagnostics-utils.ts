import ts from 'typescript';

const DEFAULT_FORMAT_DIAGNOSTICS_HOST: ts.FormatDiagnosticsHost = {
  getCurrentDirectory: ts.sys.getCurrentDirectory,
  getCanonicalFileName: ((fileName: string): string => fileName),
  getNewLine: (() => ts.sys.newLine)
};

const formatDiagnostics = ((diagnostics: (ts.Diagnostic | ts.Diagnostic[])): string => {
  const diagnosticsArray: ts.Diagnostic[] = (Array.isArray(diagnostics) ? diagnostics : [diagnostics]);

  return ts.formatDiagnosticsWithColorAndContext(diagnosticsArray, DEFAULT_FORMAT_DIAGNOSTICS_HOST);
});

export {
  DEFAULT_FORMAT_DIAGNOSTICS_HOST,
  formatDiagnostics
};
