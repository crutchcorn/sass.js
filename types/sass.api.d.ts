export enum SassStyle {
  nested = 1,
  expanded = 2,
  compact = 3,
  compressed = 4,
}

export interface SassAPI {
  style: SassStyle;

  options(options: any, callback: any): any;

  writeFile(filename: any, text: any, callback: any): any;

  readFile(filename: any, callback: any): any;

  listFiles(filename: any, callback: any): any;

  removeFile(filename: any, callback: any): any;

  clearFiles(callback: any): any;

  lazyFiles(base: any, directory: any, files: any, callback: any): any;

  preloadFiles(base: any, directory: any, files: any, callback: any): any;

  compile(text: any, _options: any, callback: any, _compileFile: any): any;

  compileFile(filename: any, _options: any, callback: any): any;
}
