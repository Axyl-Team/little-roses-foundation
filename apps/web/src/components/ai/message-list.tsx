import { ConversationContent } from "@workspace/ui/components/ai-elements/conversation";
import { Loader } from "@workspace/ui/components/ai-elements/loader";
import { SystemMessage } from "@workspace/ui/components/ai-elements/system-message";
import type { UIMessage } from "ai";
import { useRouter } from "@/i18n/navigation";
import { ChatMessage } from "./chat-message";
import type { ChatStatus } from "./types";

interface MessageListProps {
  messages: UIMessage[];
  status: ChatStatus;
  error: Error | null | undefined;
  selectedModel: string;
  webSearch: boolean;
  onRegenerate: (options: {
    body: { model: string; webSearch: boolean };
  }) => void;
}

export function MessageList({
  messages,
  status,
  error,
  selectedModel,
  webSearch,
  onRegenerate,
}: MessageListProps) {
  const router = useRouter();

  return (
    <ConversationContent>
      {messages.map((message, messageIndex) => (
        <ChatMessage
          key={message.id}
          message={message}
          messageIndex={messageIndex}
          onRegenerate={onRegenerate}
          selectedModel={selectedModel}
          status={(status === "error" ? "idle" : status) as ChatStatus}
          totalMessages={messages.length}
          webSearch={webSearch}
        />
      ))}

      {error && (
        <SystemMessage
          cta={{
            label: "Retry",
            onClick: () => router.refresh(),
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
