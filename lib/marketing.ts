export const SUPPORT_URL =
  process.env.NEXT_PUBLIC_SUPPORT_URL || "https://wa.me/996226180075";
export const PLATFORM_URL = "https://harisa.site/login";

export function platformUrl(slotId?: string) {
  const url = new URL(PLATFORM_URL);
  if (slotId) url.searchParams.set("slot", slotId);
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    let promo = params.get("promo");
    try {
      promo ||= localStorage.getItem("harisa_promo");
    } catch {}
    if (promo && /^[a-zA-Z0-9_-]{1,64}$/.test(promo))
      url.searchParams.set("promo", promo.toUpperCase());
    for (const key of [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ]) {
      const value = params.get(key);
      if (value) url.searchParams.set(key, value.slice(0, 200));
    }
  }
  return url.toString();
}
