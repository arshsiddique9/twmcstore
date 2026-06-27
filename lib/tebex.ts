// Sahi Tebex store URL — aapka real subdomain
export const TEBEX_STORE_URL = "https://twmc.tebex.io";

// Direct-to-checkout link pattern
export function startTebexCheckout(packageId: string) {
  // Agar koi placeholder ID ho (TEBEX_ se start), toh store home page kholo
  if (!packageId || packageId.startsWith("TEBEX_")) {
    window.open(TEBEX_STORE_URL, "_blank");
    return;
  }
  // Package ki specific checkout link kholo
  window.open(`${TEBEX_STORE_URL}/package/${packageId}`, "_blank");
}
