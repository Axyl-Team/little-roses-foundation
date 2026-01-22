import {
  Message,
  MessageAttachment,
  MessageAttachments,
  MessageContent,
  MessageResponse,
} from "@workspace/ui/components/ai-elements/message";
import type { UIMessage } from "ai";
import { renderDateTool, renderTimeTool } from "../tools";
import { MessageActionsBar } from "./message-actions-bar";
import { MessageReasoning } from "./message-reasoning";
import { MessageSources } from "./message-sources";

interface ChatMessageProps {
  message: UIMessage;
  isLastMessage: boolean;
  isStreaming: boolean;
  isReady: boolean;
  onRegenerate: () => void;
}

export function ChatMessage({
  message,
  isLastMessage,
  isStreaming,
  isReady,
  onRegenerate,
}: ChatMessageProps) {
  const fileParts = message.parts.filter((part) => part.type === "file");
  const textParts = message.parts.filter((part) => part.type === "text");
  const textContent = textParts.map((part) => part.text).join(" ");

  const showActions =
    message.role === "assistant" &&
    isLastMessage &&
    isReady &&
    textParts.length > 0;

  return (
    <div key={message.id}>
      <MessageReasoning
        isLastMessage={isLastMessage}
        isStreaming={isStreaming}
        message={message}
      />

      {renderDateTool(message)}
      {renderTimeTool(message)}

      <MessageSources message={message} />

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
              <MessageResponse>{textContent}</MessageResponse>
            </MessageContent>
          )}

          {showActions && (
            <MessageActionsBar
              onRegenerate={onRegenerate}
              textContent={textContent}
            />
          )}
        </Message>
      )}
    </div>
  );
}
