import {SassAPI} from "./sass.api";
import {SassResolvePaths} from "./sass.resolve-paths";

declare global {
  interface Sass extends SassResolvePaths, SassAPI {}
}
