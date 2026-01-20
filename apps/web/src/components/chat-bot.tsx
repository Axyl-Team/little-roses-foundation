"use client";

import { useChat } from "@ai-sdk/react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@workspace/ui/components/ai-elements/conversation";
import { Loader } from "@workspace/ui/components/ai-elements/loader";
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
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorLogo,
  ModelSelectorLogoGroup,
  ModelSelectorName,
  ModelSelectorTrigger,
} from "@workspace/ui/components/ai-elements/model-selector";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputHeader,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@workspace/ui/components/ai-elements/prompt-input";
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
import { Button } from "@workspace/ui/components/button";
import { CopyIcon, GlobeIcon, RefreshCcwIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type ChatStatus = ReturnType<typeof useChat>["status"];

const models = [
  {
    id: "gemini-2.5-flash-lite",
    name: "Gemini 2.5 Flash",
    chef: "Google",
    chefSlug: "google",
    providers: ["google", "google-vertex"],
  },
];

interface ChatBotProps {
  // 'page' = full model selector + web search, 'popup' = hides those controls
  variant?: "page" | "popup";
  onStatusChange?: (status: ChatStatus) => void;
  onTypingChange?: (isTyping: boolean) => void;
}

const ChatBot = ({
  variant = "page",
  onStatusChange,
  onTypingChange,
}: ChatBotProps) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [webSearch, setWebSearch] = useState(false);
  const { messages, sendMessage, status, regenerate } = useChat();
  const [selectedModel, setSelectedModel] = useState<string>(
    "gemini-2.5-flash-lite"
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

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setInput(value);
    onTypingChange?.(value.trim().length > 0);
  };

  const selectedModelData = useMemo(
    () => models.find((model) => model.id === selectedModel),
    [selectedModel]
  );

  const chefs = useMemo(
    () => Array.from(new Set(models.map((model) => model.chef))),
    []
  );

  const isPopupVariant = variant === "popup";

  return (
    <div className="flex h-full min-h-0 flex-col">
      <Conversation className="min-h-0 flex-1">
        <ConversationContent>
          {messages.map((message, messageIndex) => {
            const fileParts = message.parts.filter(
              (part) => part.type === "file"
            );
            const textParts = message.parts.filter(
              (part) => part.type === "text"
            );

            return (
              <div key={message.id}>
                {message.role === "assistant" &&
                  message.parts.filter((part) => part.type === "source-url")
                    .length > 0 && (
                    <Sources>
                      <SourcesTrigger
                        count={
                          message.parts.filter(
                            (part) => part.type === "source-url"
                          ).length
                        }
                      />
                      {message.parts
                        .filter((part) => part.type === "source-url")
                        .map((part) => (
                          <SourcesContent key={part.url}>
                            <Source href={part.url} title={part.title} />
                          </SourcesContent>
                        ))}
                    </Sources>
                  )}

                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case "reasoning":
                      return (
                        <Reasoning
                          className="w-full"
                          isStreaming={
                            status === "streaming" &&
                            i === message.parts.length - 1 &&
                            message.id === messages.at(-1)?.id
                          }
                          key={`${message.id}-${i}`}
                        >
                          <ReasoningTrigger />
                          <ReasoningContent>{part.text}</ReasoningContent>
                        </Reasoning>
                      );
                    default:
                      return null;
                  }
                })}

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
                      messageIndex === messages.length - 1 &&
                      textParts.length > 0 && (
                        <MessageActions>
                          <MessageAction
                            label="Retry"
                            onClick={() => regenerate()}
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
          })}
          {status === "submitted" && (
            <div>
              <Loader />
            </div>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>
      <PromptInput className="mt-4" globalDrop multiple onSubmit={handleSubmit}>
        <PromptInputHeader>
          <PromptInputAttachments>
            {(attachment) => <PromptInputAttachment data={attachment} />}
          </PromptInputAttachments>
        </PromptInputHeader>
        <PromptInputBody>
          <PromptInputTextarea onChange={handleInputChange} value={input} />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools>
            <PromptInputActionMenu>
              <PromptInputActionMenuTrigger />
              <PromptInputActionMenuContent>
                <PromptInputActionAddAttachments />
              </PromptInputActionMenuContent>
            </PromptInputActionMenu>

            {!isPopupVariant && (
              <>
                <PromptInputButton
                  onClick={() => setWebSearch(!webSearch)}
                  variant={webSearch ? "default" : "ghost"}
                >
                  <GlobeIcon size={16} />
                  <span className="hidden sm:block">Search</span>
                </PromptInputButton>

                <ModelSelector onOpenChange={setOpen} open={open}>
                  <ModelSelectorTrigger asChild>
                    <Button
                      className="justify-between"
                      size="sm"
                      variant="ghost"
                    >
                      {selectedModelData?.chefSlug && (
                        <ModelSelectorLogo
                          provider={selectedModelData.chefSlug}
                        />
                      )}
                      {selectedModelData?.name && (
                        <ModelSelectorName className="hidden sm:block">
                          {selectedModelData.name}
                        </ModelSelectorName>
                      )}
                    </Button>
                  </ModelSelectorTrigger>
                  <ModelSelectorContent>
                    <ModelSelectorInput placeholder="Search models..." />
                    <ModelSelectorList>
                      <ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
                      {chefs.map((chef) => (
                        <ModelSelectorGroup heading={chef} key={chef}>
                          {models
                            .filter((model) => model.chef === chef)
                            .map((model) => (
                              <ModelSelectorItem
                                key={model.id}
                                onSelect={() => {
                                  setSelectedModel(model.id);
                                  setOpen(false);
                                }}
                                value={model.id}
                              >
                                <ModelSelectorLogo provider={model.chefSlug} />
                                <ModelSelectorName>
                                  {model.name}
                                </ModelSelectorName>
                                <ModelSelectorLogoGroup>
                                  {model.providers.map((provider) => (
                                    <ModelSelectorLogo
                                      key={provider}
                                      provider={provider}
                                    />
                                  ))}
                                </ModelSelectorLogoGroup>
                              </ModelSelectorItem>
                            ))}
                        </ModelSelectorGroup>
                      ))}
                    </ModelSelectorList>
                  </ModelSelectorContent>
                </ModelSelector>
              </>
            )}
          </PromptInputTools>
          <PromptInputSubmit disabled={!(input || status)} status={status} />
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
};

export default ChatBot;
