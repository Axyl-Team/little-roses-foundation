import {
  MessageAction,
  MessageActions,
} from "@workspace/ui/components/ai-elements/message";
import { CopyIcon, RefreshCcwIcon } from "lucide-react";

interface MessageActionsBarProps {
  textContent: string;
  onRegenerate: () => void;
}

export function MessageActionsBar({
  textContent,
  onRegenerate,
}: MessageActionsBarProps) {
  return (
    <MessageActions>
      <MessageAction label="Retry" onClick={onRegenerate}>
        <RefreshCcwIcon className="size-3" />
      </MessageAction>
      <MessageAction
        label="Copy"
        onClick={() => navigator.clipboard.writeText(textContent)}
      >
        <CopyIcon className="size-3" />
      </MessageAction>
    </MessageActions>
  );
}
