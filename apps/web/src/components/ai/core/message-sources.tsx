import {
  Source,
  SourceContent,
  SourceTrigger,
} from "@workspace/ui/components/ai-elements/sources";
import type { UIMessage } from "ai";
import { cn } from "@/lib/utils/ui";

interface MessageSourcesProps {
  message: UIMessage;
}

export function MessageSources({ message }: MessageSourcesProps) {
  const sourceParts = message.parts.filter(
    (part) => part.type === "source-url"
  );

  if (message.role !== "assistant" || sourceParts.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-2",
        sourceParts.length && "mb-2"
      )}
    >
      <div>
        {sourceParts.map((part) => (
          <Source href={part.url} key={part.url}>
            <SourceTrigger showFavicon />
            <SourceContent description={""} title={part.title || ""} />
          </Source>
        ))}
      </div>
    </div>
  );
}
