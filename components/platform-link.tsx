"use client";
import { useEffect, useState, type ReactNode } from "react";
import { platformUrl, PLATFORM_URL } from "@/lib/marketing";
export function PlatformLink({
  slotId,
  children,
  className,
}: {
  slotId?: string;
  children: ReactNode;
  className?: string;
}) {
  const [href, setHref] = useState(() =>
    slotId
      ? `${PLATFORM_URL}?slot=${encodeURIComponent(slotId)}`
      : PLATFORM_URL,
  );
  useEffect(() => {
    setHref(platformUrl(slotId));
  }, [slotId]);
  return (
    <a
      href={href}
      onClick={(e) => {
        e.currentTarget.href = platformUrl(slotId);
      }}
      data-track="registration_click"
      data-slot={slotId}
      className={className}
    >
      {children}
    </a>
  );
}
