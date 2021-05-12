export enum SassStyle {
  nested = 1,
  expanded = 2,
  compact = 3,
  compressed = 4,
}

export interface SassAPI {
  style: SassStyle;

  // TODO: Match the docs
  // https://github.com/medialize/sass.js/blob/master/docs/api.md#libsass-compile-options
  options(options: 'defaults' | unknown, callback?: () => void): void;

  writeFile(filename: string, text: string, callback?: (val: boolean) => void): void;
  writeFile(filename: Record<string, string>, callback?: (map: Record<string, boolean>) => void): void;

  readFile(filename: string, callback?: (content: string | undefined) => void): void;
  readFile(filename: string[], callback?: (map: Record<string, string | undefined>) => void): void;

  listFiles(callback?: (list: string[]) => void): void;

  removeFile(filename: string, callback?: (success: boolean) => void): void;
  removeFile(filename: string[], callback: (results: Record<string, boolean>) => void): void;

  clearFiles(callback: () => void): void;

  /**
   * @deprecated
   * @see https://github.com/medialize/sass.js/blob/master/docs/api.md#lazyloading-files-deprecated
   */
  lazyFiles(base: string, directory: string, files: string[], callback: () => void): void;

  preloadFiles(base: string, directory: string, files: string[], callback: () => void): void;

  // TODO: Type
  // @see https://github.com/medialize/sass.js/blob/master/docs/api.md#compiling-strings
  // @see https://github.com/medialize/sass.js/blob/master/docs/api.md#the-response-object
  compile(text: any, _options: any, callback: any, _compileFile: any): any;

  compileFile(filename: any, _options: any, callback: any): any;
}
