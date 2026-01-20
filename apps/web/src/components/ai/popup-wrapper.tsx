"use client";

import { usePathname } from "@/i18n/navigation";
import { Popup } from "./popup";

export const PopupWrapper = () => {
  const pathname = usePathname();

  // Only show popup when not on /ai page
  if (pathname === "/chat-bot") {
    return null;
  }

  return <Popup />;
};
