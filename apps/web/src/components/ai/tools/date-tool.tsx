import { MessageResponse } from "@workspace/ui/components/ai-elements/message";
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "@workspace/ui/components/ai-elements/tool";
import type { ToolUIPart, UIMessage } from "ai";

type GetCurrentDateToolInput = Record<string, never>;

interface GetCurrentDateToolOutput {
  timestamp: number;
  iso: string;
  local: string;
  timezone: string;
  utc: string;
}

type GetCurrentDateToolUIPart = ToolUIPart<{
  getCurrentDate: {
    input: GetCurrentDateToolInput;
    output: GetCurrentDateToolOutput;
  };
}>;

export function renderDateTool(message: UIMessage) {
  const getCurrentDateTool = message?.parts?.find(
    (part) => part.type === "tool-getCurrentDate"
  ) as GetCurrentDateToolUIPart | undefined;

  if (!getCurrentDateTool) {
    return null;
  }

  return (
    <Tool>
      <ToolHeader state={getCurrentDateTool.state} type="tool-getCurrentDate" />
      <ToolContent>
        <ToolInput input={getCurrentDateTool.input} />
        <ToolOutput
          errorText={getCurrentDateTool.errorText}
          output={
            <MessageResponse>
              {JSON.stringify(getCurrentDateTool.output)}
            </MessageResponse>
          }
        />
      </ToolContent>
    </Tool>
  );
}
