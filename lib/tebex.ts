// Replace with your real Tebex store slug
export const TEBEX_STORE_URL = "https://your-store.tebex.io";

// Direct-to-checkout link pattern (Tebex Headless API or simple deep link)
export function startTebexCheckout(packageId: string) {
  if (!packageId || packageId.startsWith("TEBEX_")) {
    window.open(TEBEX_STORE_URL, "_blank");
    return;
  }
  window.open(`${TEBEX_STORE_URL}/package/${packageId}`, "_blank");
}
