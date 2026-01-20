import { type GoogleGenerativeAIProviderOptions, google } from "@ai-sdk/google";
import {
  convertToModelMessages,
  smoothStream,
  stepCountIs,
  streamText,
  type UIMessage,
} from "ai";

// Allow streaming responses up to 60 seconds
export const maxDuration = 60;

export async function POST(req: Request) {
  const {
    messages,
    webSearch,
    model,
  }: { messages: UIMessage[]; webSearch: boolean; model: string } =
    await req.json();

  const result = streamText({
    model: google(model),
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
    },
    tools: {
      ...(webSearch && {
        google_search: google.tools.googleSearch({}),
      }),
    },
  });

  return result.toUIMessageStreamResponse({
    sendReasoning: true,
    sendSources: true,
  });
}
