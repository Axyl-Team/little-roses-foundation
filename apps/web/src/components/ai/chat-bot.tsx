"use client";

import { useChat } from "@ai-sdk/react";
import {
  Conversation,
  ConversationScrollButton,
} from "@workspace/ui/components/ai-elements/conversation";
import type { PromptInputMessage } from "@workspace/ui/components/ai-elements/prompt-input";
import { PromptSuggestion } from "@workspace/ui/components/ai-elements/suggestion";
import { useEffect, useState } from "react";
import { ChatInput } from "./chat-input";
import { MessageList } from "./message-list";
import { models } from "./models";
import type { ChatBotProps, ChatStatus } from "./types";

const suggestions = [
  "what's the current date?",
  "what time is it in Tokyo?",
  "give me the current time in Europe/Paris",
];

const ChatBot = ({
  variant = "page",
  onStatusChange,
  onTypingChange,
}: ChatBotProps) => {
  const [input, setInput] = useState("");
  const [webSearch, setWebSearch] = useState(false);
  const { messages, sendMessage, status, regenerate, error } = useChat({
    onError: (error) => {
      // Log error for debugging (optional)
      console.error("Chat error:", error);
    },
  });
  const [selectedModel, setSelectedModel] = useState<string>(
    models[0]?.id || "openai/gpt-oss-120b"
  );

  useEffect(() => {
    onStatusChange?.(status);
  }, [status, onStatusChange]);

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);
    if (!(hasText || hasAttachments)) {
      return;
    }

    sendMessage(
      {
        text: message.text || "Sent with attachments",
        files: message.files,
      },
      {
        body: {
          model: selectedModel,
          webSearch,
        },
      }
    );
    setInput("");
    onTypingChange?.(false);
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    onTypingChange?.(value.trim().length > 0);
  };

  const handleRegenerate = (options: {
    body: { model: string; webSearch: boolean };
  }) => {
    regenerate(options);
  };

  const isPopupVariant = variant === "popup";

  return (
    <div className="flex h-full min-h-0 flex-col">
      <Conversation className="min-h-0 flex-1">
        <MessageList
          error={error ?? null}
          messages={messages}
          onRegenerate={handleRegenerate}
          selectedModel={selectedModel}
          status={status as ChatStatus}
          webSearch={webSearch}
        />
        <ConversationScrollButton />
      </Conversation>
      {messages.length === 0 && (
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion) => (
            <PromptSuggestion
              key={suggestion}
              onClick={() => {
                handleSubmit({ text: suggestion, files: [] });
              }}
            >
              {suggestion}
            </PromptSuggestion>
          ))}
        </div>
      )}

      <ChatInput
        error={error ?? null}
        input={input}
        isPopupVariant={isPopupVariant}
        models={models}
        onInputChange={handleInputChange}
        onModelSelect={setSelectedModel}
        onSubmit={handleSubmit}
        onWebSearchToggle={() => setWebSearch(!webSearch)}
        selectedModel={selectedModel}
        status={status as ChatStatus}
        webSearch={webSearch}
      />
    </div>
  );
};

export default ChatBot;
