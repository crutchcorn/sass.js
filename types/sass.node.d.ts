import SassSync from './sass.sync';

declare const compileFile: {
  (path: any, options: any, callback: any): void;
  importFileToSass(path: any, done: any): void;
  Sass: SassSync,
}

export = compileFile;
