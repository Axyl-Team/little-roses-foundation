import { env } from "@/env";
import canUseDOM from "./canUseDOM";

export const getServerSideURL = () => {
  return (
    env.NEXT_PUBLIC_SERVER_URL ||
    (env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  );
};

export const getClientSideURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol;
    const domain = window.location.hostname;
    const port = window.location.port;

    return `${protocol}//${domain}${port ? `:${port}` : ""}`;
  }

  // Server-side fallback - only use NEXT_PUBLIC_* vars
  return env.NEXT_PUBLIC_SERVER_URL || "";
};
