interface Fetcher {
  fetch(request: Request): Promise<Response>;
}

// The starter keeps D1 optional for the portfolio; this is enough for static
// export type-checking without coupling the app to Wrangler's runtime types.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface D1Database {}

declare module "cloudflare:workers" {
  export const env: {
    // The starter keeps D1 optional; GitHub Pages static export never reads it.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    DB?: any;
  };
}
