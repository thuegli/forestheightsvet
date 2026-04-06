"use client";

import { ReactNode } from "react";

interface PhoneLinkProps {
  className?: string;
  children: ReactNode;
  number?: string;
  location?: string;
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export default function PhoneLink({
  className,
  children,
  number = "503-291-1757",
  location,
}: PhoneLinkProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "phone_click", {
        phone_number: number,
        click_location: location,
      });
    }
  };

  return (
    <a href={`tel:${number}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
