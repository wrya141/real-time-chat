import { treaty } from "@elysiajs/eden";
import type { App } from "../app/api/[[...slugs]]/route";

const getBaseUrl = () => {
  // Browser → same origin
  if (typeof window !== "undefined") return "/api";

  // Server (SSR on Vercel)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}/api`;
  }

  // Local dev fallback
  return "http://localhost:3000/api";
};

export const client = treaty<App>(getBaseUrl()).api;
