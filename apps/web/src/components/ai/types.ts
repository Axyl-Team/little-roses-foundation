import type { ChatStatus as AIChatStatus } from "ai";

// Re-export ChatStatus from AI SDK for consistency
export type ChatStatus = AIChatStatus;

// Chat component props types
export interface ChatBotProps {
  onStatusChange?: (status: ChatStatus) => void;
  onTypingChange?: (isTyping: boolean) => void;
}
