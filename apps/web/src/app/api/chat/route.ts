import { type GoogleGenerativeAIProviderOptions, google } from "@ai-sdk/google";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import {
  convertToModelMessages,
  smoothStream,
  stepCountIs,
  streamText,
  type UIMessage,
} from "ai";
import { env } from "@/env";
import { getCurrentDateTool, getTimeTool } from "@/lib/tool";

// Allow streaming responses up to 60 seconds
export const maxDuration = 60;

const openrouter = createOpenRouter({
  apiKey: env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
  const {
    messages,
    webSearch,
    model,
  }: { messages: UIMessage[]; webSearch: boolean; model: string } =
    await req.json();

  try {
    const result = streamText({
      model: openrouter(model),
      system: "You are a helpful assistant with access to tools.",
      messages: await convertToModelMessages(messages),
      stopWhen: stepCountIs(5),
      experimental_transform: smoothStream(),
      providerOptions: {
        google: {
          thinkingConfig: {
            thinkingBudget: webSearch ? 2048 : 4096,
            includeThoughts: true,
          },
        } satisfies GoogleGenerativeAIProviderOptions,
        openRouter: {
          webSearch: true,
          reasoningSummary: "auto",
        },
      },
      tools: {
        ...(webSearch && {
          google_search: google.tools.googleSearch({}),
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
