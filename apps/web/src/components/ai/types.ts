import type { ChatStatus as AIChatStatus } from "ai";

// Re-export ChatStatus from AI SDK for consistency
export type ChatStatus = AIChatStatus;

// Chat component props types
export interface ChatBotProps {
  // 'page' = full model selector + web search, 'popup' = hides those controls
  variant?: "page" | "popup";
  onStatusChange?: (status: ChatStatus) => void;
  onTypingChange?: (isTyping: boolean) => void;
}
