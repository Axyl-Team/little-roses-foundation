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
import type { ChatStatus } from "ai";
import { GlobeIcon } from "lucide-react";
import { useState } from "react";
import { ModelSelectorTool } from "./model-selector-tool";
import type { Model } from "./models";

interface ChatInputProps {
  input: string;
  webSearch: boolean;
  error: Error | null | undefined;
  status: ChatStatus;
  models: Model[];
  selectedModel: string;
  isPopupVariant: boolean;
  onInputChange: (value: string) => void;
  onSubmit: (message: PromptInputMessage) => void;
  onWebSearchToggle: () => void;
  onModelSelect: (modelId: string) => void;
}

export function ChatInput({
  input,
  webSearch,
  error,
  status,
  models,
  selectedModel,
  isPopupVariant,
  onInputChange,
  onSubmit,
  onWebSearchToggle,
  onModelSelect,
}: ChatInputProps) {
  const [modelSelectorOpen, setModelSelectorOpen] = useState(false);

  return (
    <PromptInput className="mt-4" globalDrop multiple onSubmit={onSubmit}>
      <PromptInputHeader>
        <PromptInputAttachments>
          {(attachment) => <PromptInputAttachment data={attachment} />}
        </PromptInputAttachments>
      </PromptInputHeader>
      <PromptInputBody>
        <PromptInputTextarea
          onChange={(e) => onInputChange(e.target.value)}
          value={input}
        />
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
            <PromptInputButton
              onClick={onWebSearchToggle}
              variant={webSearch ? "default" : "ghost"}
            >
              <GlobeIcon size={16} />
              <span className="hidden sm:block">Search</span>
            </PromptInputButton>
          )}

          <ModelSelectorTool
            models={models}
            onModelSelect={onModelSelect}
            onOpenChange={setModelSelectorOpen}
            open={modelSelectorOpen}
            selectedModel={selectedModel}
          />
        </PromptInputTools>
        <PromptInputSubmit
          disabled={!(input || status) || error != null}
          status={status}
        />
      </PromptInputFooter>
    </PromptInput>
  );
}
