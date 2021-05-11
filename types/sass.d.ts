import {SassAPI} from "./sass.api";

type SassAPICommands = Pick<SassAPI,
  'writeFile' |
  'readFile' |
  'listFiles' |
  'removeFile' |
  'clearFiles' |
  'lazyFiles' |
  'preloadFiles' |
  'options' |
  'compile' |
  'compileFile'
  >
