import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtHeader,
  ChainOfThoughtStep,
} from "@workspace/ui/components/ai-elements/chain-of-thought";
import {
  Message,
  MessageAction,
  MessageActions,
  MessageAttachment,
  MessageAttachments,
  MessageContent,
  MessageResponse,
} from "@workspace/ui/components/ai-elements/message";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@workspace/ui/components/ai-elements/reasoning";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@workspace/ui/components/ai-elements/sources";
import type { UIMessage } from "ai";
import { BrainIcon, CopyIcon, RefreshCcwIcon } from "lucide-react";
import { renderDateTool, renderTimeTool } from "./tools";
import type { ChatStatus } from "./types";

interface ChatMessageProps {
  message: UIMessage;
  messageIndex: number;
  totalMessages: number;
  status: ChatStatus;
  selectedModel: string;
  webSearch: boolean;
  onRegenerate: (options: {
    body: { model: string; webSearch: boolean };
  }) => void;
}

export function ChatMessage({
  message,
  messageIndex,
  totalMessages,
  status,
  selectedModel,
  webSearch,
  onRegenerate,
}: ChatMessageProps) {
  const fileParts = message.parts.filter((part) => part.type === "file");
  const textParts = message.parts.filter((part) => part.type === "text");
  const sourceParts = message.parts.filter(
    (part) => part.type === "source-url"
  );
  const reasoningParts = message.parts.filter(
    (part) => part.type === "reasoning"
  );

  const isLastMessage = messageIndex === totalMessages - 1;
  const isStreaming = status === "streaming";

  return (
    <div key={message.id}>
      {message.role === "assistant" && sourceParts.length > 0 && (
        <Sources>
          <SourcesTrigger count={sourceParts.length} />
          {sourceParts.map((part) => (
            <SourcesContent key={part.url}>
              <Source href={part.url} title={part.title} />
            </SourcesContent>
          ))}
        </Sources>
      )}

      {reasoningParts.length === 1 && (
        <Reasoning
          className="w-full"
          isStreaming={isStreaming && isLastMessage}
        >
          <ReasoningTrigger />
          <ReasoningContent>{reasoningParts[0].text}</ReasoningContent>
        </Reasoning>
      )}

      {reasoningParts.length > 1 && (
        <ChainOfThought className="w-full" defaultOpen={false}>
          <ChainOfThoughtHeader>
            {`Reasoning (${reasoningParts.length} steps)`}
          </ChainOfThoughtHeader>
          <ChainOfThoughtContent className="mb-4">
            {message.parts.map((part, i) => {
              if (part.type === "reasoning") {
                const stepIndex = reasoningParts.indexOf(part) + 1;
                return (
                  <ChainOfThoughtStep
                    icon={BrainIcon}
                    key={`${message.id}-${i}`}
                    label={`Step ${stepIndex}`}
                    status={
                      isStreaming &&
                      i === message.parts.length - 1 &&
                      isLastMessage
                        ? "active"
                        : "complete"
                    }
                  >
                    <div className="whitespace-pre-wrap text-muted-foreground text-xs">
                      {part.text}
                    </div>
                  </ChainOfThoughtStep>
                );
              }
              return null;
            })}
          </ChainOfThoughtContent>
        </ChainOfThought>
      )}

      {renderDateTool(message)}
      {renderTimeTool(message)}

      {(fileParts.length > 0 || textParts.length > 0) && (
        <Message from={message.role}>
          {fileParts.length > 0 && (
            <MessageAttachments className="mb-2">
              {fileParts.map((part, i) => (
                <MessageAttachment
                  data={part}
                  key={`${message.id}-file-${i}`}
                />
              ))}
            </MessageAttachments>
          )}

          {textParts.length > 0 && (
            <MessageContent>
              <MessageResponse>
                {textParts.map((part) => part.text).join(" ")}
              </MessageResponse>
            </MessageContent>
          )}

          {message.role === "assistant" &&
            isLastMessage &&
            status === "ready" &&
            textParts.length > 0 && (
              <MessageActions>
                <MessageAction
                  label="Retry"
                  onClick={() =>
                    onRegenerate({
                      body: {
                        model: selectedModel,
                        webSearch,
                      },
                    })
                  }
                >
                  <RefreshCcwIcon className="size-3" />
                </MessageAction>
                <MessageAction
                  label="Copy"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      textParts.map((part) => part.text).join(" ")
                    )
                  }
                >
                  <CopyIcon className="size-3" />
                </MessageAction>
              </MessageActions>
            )}
        </Message>
      )}
    </div>
  );
}
