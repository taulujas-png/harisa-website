"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
export function PromoTracker() {
  const searchParams = useSearchParams();
  useEffect(() => {
    const promo = searchParams.get("promo");
    if (promo && /^[a-zA-Z0-9_-]{1,64}$/.test(promo)) {
      try {
        localStorage.setItem("harisa_promo", promo.toUpperCase());
      } catch {}
    }
  }, [searchParams]);
  return null;
}
