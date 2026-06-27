// INR ↔ USD live conversion (free API)
const USD_TO_INR = 83.5; // fallback

export function formatPrice(amount: number, currency: "INR" | "USD"): string {
  if (currency === "INR") return `₹${amount.toLocaleString("en-IN")}`;
  return `$${amount.toFixed(2)}`;
}

export function convert(amount: number, from: "INR" | "USD", to: "INR" | "USD", rate = USD_TO_INR): number {
  if (from === to) return amount;
  if (from === "USD" && to === "INR") return amount * rate;
  return amount / rate;
}

// ⭐ AB YEH FUNCTION INR AUR USD DONO RETURN KARTA HAI
export function dualPrice(amount: number, currency: "INR" | "USD", rate = USD_TO_INR): { inr: string; usd: string } {
  if (currency === "INR") {
    return {
      inr: `₹${amount.toLocaleString("en-IN")}`,
      usd: `$${(amount / rate).toFixed(2)}`
    };
  }
  return {
    inr: `₹${Math.round(amount * rate).toLocaleString("en-IN")}`,
    usd: `$${amount.toFixed(2)}`
  };
}
