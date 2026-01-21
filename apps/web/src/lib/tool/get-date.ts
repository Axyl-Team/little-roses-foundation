import { tool } from "ai";
import { z } from "zod";

export const getCurrentDateTool = tool({
  description: "Get the current date and time with timezone information",
  inputSchema: z.object({}),
  execute: () => {
    const now = new Date();
    return {
      timestamp: now.getTime(),
      iso: now.toISOString(),
      local: now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      }),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      utc: now.toUTCString(),
    };
  },
});
