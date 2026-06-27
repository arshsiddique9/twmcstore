export const USD_TO_INR_FALLBACK = 83.5;

export function formatINR(amount: number): string {
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

export function formatUSD(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function dualPrice(
  amount: number,
  currency: "INR" | "USD",
  rate: number = USD_TO_INR_FALLBACK
): { primary: string; secondary: string } {
  if (currency === "INR") {
    return { primary: formatINR(amount), secondary: formatUSD(amount / rate) };
  }
  return { primary: formatUSD(amount), secondary: formatINR(amount * rate) };
}
