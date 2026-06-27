// INR ↔ USD live conversion (uses exchangerate.host - free, no key)
const USD_TO_INR = 83.5; // fallback (update from /api/rate)

export function formatPrice(amount: number, currency: "INR" | "USD"): string {
  if (currency === "INR") return `₹${amount.toLocaleString("en-IN")}`;
  return `$${amount.toFixed(2)}`;
}

export function convert(amount: number, from: "INR" | "USD", to: "INR" | "USD", rate = USD_TO_INR): number {
  if (from === to) return amount;
  if (from === "USD" && to === "INR") return amount * rate;
  return amount / rate;
}

export function dualPrice(amount: number, currency: "INR" | "USD", rate = USD_TO_INR): { primary: string; secondary: string } {
  if (currency === "INR") {
    return {
      primary: `₹${amount.toLocaleString("en-IN")}`,
      secondary: `$${(amount / rate).toFixed(2)}`
    };
  }
  return {
    primary: `$${amount.toFixed(2)}`,
    secondary: `₹${Math.round(amount * rate).toLocaleString("en-IN")}`
  };
}
