import {SassAPI} from "./sass.api";

export default class Sass  {
  // Commands inherited from SassAPI
  writeFile: SassAPI['writeFile'];
  readFile: SassAPI['readFile'];
  listFiles: SassAPI['listFiles'];
  removeFile: SassAPI['removeFile'];
  clearFiles: SassAPI['clearFiles'];
  lazyFiles: SassAPI['lazyFiles'];
  preloadFiles: SassAPI['preloadFiles'];
  options: SassAPI['options'];
  compile: SassAPI['compile'];
  compileFile: SassAPI['compileFile'];

  constructor(workerUrl: any);

  destroy(): void;
  importer(importerCallback: any, callback: any): void;
}
