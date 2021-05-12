import {SassAPI} from "./sass.api";
import {SassResolvePaths} from "./sass.resolve-paths";

export default interface Sass extends SassResolvePaths, SassAPI {}
