import { createDeepInfra } from "@ai-sdk/deepinfra";
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

const deepinfra = createDeepInfra({
  baseURL: "https://openrouter.ai/api/v1/chat/completions",
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
      model: deepinfra(model),
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
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
