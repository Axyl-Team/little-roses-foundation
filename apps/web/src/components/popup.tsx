"use client";

import type { PersonaState } from "@workspace/ui/components/ai-elements/persona";
import { Persona } from "@workspace/ui/components/ai-elements/persona";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { MoreVertical, X } from "lucide-react";
import { useState } from "react";
import ChatBot from "@/components/chat-bot";
import { useRouter } from "@/i18n/navigation";

export const Popup = () => {
  const [open, setOpen] = useState(false);
  const [personaState, setPersonaState] = useState<PersonaState>("idle");
  const router = useRouter();

  // The floating button only supports 2 visual states: idle + listening.
  const floatingPersonaState: PersonaState =
    personaState === "thinking" ? "listening" : personaState;

  const handleTogglePopup = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className={`fixed right-6 bottom-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#226D4B] shadow-black/30 shadow-lg transition-opacity md:size-16 ${open ? "opacity-0 md:opacity-100" : ""}`}
        onClick={handleTogglePopup}
        type="button"
      >
        <Persona
          className="size-8 md:size-10"
          state={floatingPersonaState}
          variant="glint"
        />
      </button>

      {open ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 sm:p-6">
          <div className="flex h-full w-full max-w-md flex-col overflow-hidden bg-white text-zinc-900 shadow-black/40 shadow-xl sm:rounded-3xl">
            <div className="flex h-full min-h-0 flex-col">
              <header className="flex shrink-0 items-center justify-between border-zinc-200 border-b bg-[#226D4B] px-4 py-3 sm:px-6">
                <div className="flex items-center gap-2">
                  <Persona className="size-10" state={personaState} />
                  <div className="flex flex-col gap-0.5 text-white">
                    <span className="font-semibold text-sm">
                      Finch from LRF
                    </span>
                    <span className="text-xs">
                      We&apos;re here to help you explore.
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        aria-label="More options"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-white/80 hover:bg-white/10 hover:text-white"
                        type="button"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 text-xs">
                      <DropdownMenuItem
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        Close chat popup
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          setOpen(false);
                          router.push("/ai");
                        }}
                      >
                        Go to main chat page
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <button
                    aria-label="Close chat"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-white/80 hover:bg-white/10 hover:text-white"
                    onClick={() => setOpen(false)}
                    type="button"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </header>
              <div className="chat-scroll-container flex min-h-0 flex-1 flex-col p-4 sm:p-6">
                <ChatBot
                  onStatusChange={(status) => {
                    if (status === "streaming" || status === "submitted") {
                      setPersonaState("thinking");
                    } else if (status === "ready") {
                      setPersonaState("idle");
                    }
                  }}
                  onTypingChange={(isTyping) => {
                    setPersonaState(isTyping ? "listening" : "idle");
                  }}
                  variant="popup"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
