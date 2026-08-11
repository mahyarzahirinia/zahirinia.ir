import "vinext/types";

declare module "cloudflare:workers" {
  export const env: {
    // The starter keeps D1 optional; GitHub Pages static export never reads it.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    DB?: any;
  };
}
