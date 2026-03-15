import { treaty } from "@elysiajs/eden";
import type { App } from "../app/api/[[...slugs]]/route";

export const client = treaty<App>(
  "https://real-time-temp-chat-git-main-wrya141s-projects.vercel.app/",
).api;
