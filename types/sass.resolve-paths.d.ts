export interface SassResolvePaths {
  getPathVariations(path: string): string[];
  findPathVariation(stat: (path: string) => void, path: string): string;
}
