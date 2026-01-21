import { tool } from "ai";
import { z } from "zod";

export const getTimeTool = tool({
  description: "Get the current time in a specific timezone",
  inputSchema: z.object({
    timezone: z.string().describe("A valid IANA timezone, e.g. 'Europe/Paris'"),
  }),
  execute: ({ timezone }) => {
    try {
      const now = new Date();
      const time = now.toLocaleString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      return { time, timezone };
    } catch {
      return { error: "Invalid timezone format." };
    }
  },
});
