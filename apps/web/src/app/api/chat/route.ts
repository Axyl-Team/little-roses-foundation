import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { tavilyExtract, tavilySearch } from "@tavily/ai-sdk";
import {
  convertToModelMessages,
  smoothStream,
  stepCountIs,
  streamText,
  type UIMessage,
} from "ai";
import { env } from "@/env";
import { getCurrentDateTool, getTimeTool } from "@/lib/tool";

// Allow streaming responses up to 300 seconds
export const maxDuration = 300;

const openrouter = createOpenRouter({
  apiKey: env.OPENROUTER_API_KEY,
});

interface ChatRequest {
  messages: UIMessage[];
  webSearch: boolean;
  model: string;
}

export async function POST(req: Request) {
  const { messages, webSearch, model }: ChatRequest = await req.json();

  try {
    const result = streamText({
      model: openrouter(model),
      system: "You are a helpful assistant with access to tools.",
      messages: await convertToModelMessages(messages),
      stopWhen: stepCountIs(15),
      experimental_transform: smoothStream(),
      tools: {
        ...(webSearch && {
          webSearch: tavilySearch({
            searchDepth: "basic",
            maxResults: 5,
          }),
          webExtract: tavilyExtract({
            searchDepth: "basic",
            maxResults: 5,
          }),
        }),
        getTime: getTimeTool,
        getCurrentDate: getCurrentDateTool,
      },
    });

    return result.toUIMessageStreamResponse({
      sendReasoning: true,
      sendSources: true,
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
