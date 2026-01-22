import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtHeader,
  ChainOfThoughtStep,
} from "@workspace/ui/components/ai-elements/chain-of-thought";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@workspace/ui/components/ai-elements/reasoning";
import type { UIMessage } from "ai";
import { BrainIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface MessageReasoningProps {
  message: UIMessage;
  isLastMessage: boolean;
  isStreaming: boolean;
}

export function MessageReasoning({
  message,
  isLastMessage,
  isStreaming,
}: MessageReasoningProps) {
  const reasoningParts = message.parts.filter(
    (part) => part.type === "reasoning"
  );

  const [showChainOfThought, setShowChainOfThought] = useState(false);

  const isDoneAndHasMultipleSteps = !isStreaming && reasoningParts.length > 1;

  useEffect(() => {
    if (isDoneAndHasMultipleSteps) {
      const timer = setTimeout(() => {
        setShowChainOfThought(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
    setShowChainOfThought(false);
  }, [isDoneAndHasMultipleSteps]);

  // No reasoning to show
  if (reasoningParts.length === 0) {
    return null;
  }

  const showReasoning = !showChainOfThought;
  const activeReasoningText = reasoningParts[reasoningParts.length - 1]?.text;

  return (
    <>
      {showReasoning && (
        <Reasoning
          className="w-full"
          isStreaming={isStreaming && isLastMessage}
        >
          <ReasoningTrigger />
          <ReasoningContent>{activeReasoningText}</ReasoningContent>
        </Reasoning>
      )}

      {showChainOfThought && (
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
                    status="complete"
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
    </>
  );
}
