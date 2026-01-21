import { MessageResponse } from "@workspace/ui/components/ai-elements/message";
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "@workspace/ui/components/ai-elements/tool";
import type { ToolUIPart, UIMessage } from "ai";

interface GetTimeToolInput {
  timezone: string;
}

interface GetTimeToolOutput {
  time: string;
  timezone: string;
  error?: string;
}

type GetTimeToolUIPart = ToolUIPart<{
  getTime: {
    input: GetTimeToolInput;
    output: GetTimeToolOutput;
  };
}>;

export function renderTimeTool(message: UIMessage) {
  const getTimeTool = message?.parts?.find(
    (part) => part.type === "tool-getTime"
  ) as GetTimeToolUIPart | undefined;

  if (!getTimeTool) {
    return null;
  }

  return (
    <Tool>
      <ToolHeader state={getTimeTool.state} type="tool-getTime" />
      <ToolContent>
        <ToolInput input={getTimeTool.input} />
        <ToolOutput
          errorText={getTimeTool.errorText}
          output={
            <MessageResponse>
              {JSON.stringify(getTimeTool.output)}
            </MessageResponse>
          }
        />
      </ToolContent>
    </Tool>
  );
}
