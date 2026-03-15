import { treaty } from "@elysiajs/eden";
import type { App } from "../app/api/[[...slugs]]/route";

function getBaseUrl() {
  // browser → same origin
  if (typeof window !== "undefined") {
    return `${window.location.origin}/api`;
  }

  // server (SSR)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}/api`;
  }

  // local development
  return "http://localhost:3000/api";
}

export const client = treaty<App>(getBaseUrl()).api;
