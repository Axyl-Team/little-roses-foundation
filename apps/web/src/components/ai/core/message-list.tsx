import { ConversationContent } from "@workspace/ui/components/ai-elements/conversation";
import { Loader } from "@workspace/ui/components/ai-elements/loader";
import { SystemMessage } from "@workspace/ui/components/ai-elements/system-message";
import type { UIMessage } from "ai";
import type { ChatStatus } from "../types";
import { ChatMessage } from "./chat-message";

interface MessageListProps {
  messages: UIMessage[];
  status: ChatStatus;
  error: Error | null | undefined;
  onRegenerate: () => void;
}

export function MessageList({
  messages,
  status,
  error,
  onRegenerate,
}: MessageListProps) {
  const isStreaming = status === "streaming";
  const isReady = status === "ready";

  return (
    <ConversationContent>
      {messages.map((message, messageIndex) => {
        const isLastMessage = messageIndex === messages.length - 1;

        return (
          <ChatMessage
            isLastMessage={isLastMessage}
            isReady={isReady}
            isStreaming={isStreaming}
            key={message.id}
            message={message}
            onRegenerate={onRegenerate}
          />
        );
      })}

      {error && (
        <SystemMessage
          cta={{
            label: "Retry",
            onClick: () => window.location.reload(),
          }}
          fill
          variant="error"
        >
          Something went wrong. Please try again.
        </SystemMessage>
      )}

      {status === "submitted" && (
        <div>
          <Loader />
        </div>
      )}
    </ConversationContent>
  );
}
