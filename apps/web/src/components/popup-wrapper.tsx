"use client";

import { usePathname } from "@/i18n/navigation";
import { Popup } from "./popup";

export const PopupWrapper = () => {
  const pathname = usePathname();

  // Only show popup when not on /ai page
  if (pathname === "/ai") {
    return null;
  }

  return <Popup />;
};
