import { NextResponse } from "next/server";

export const revalidate = 3600; 

export async function GET() {
  try {
    // Free API, koi key nahi chahiye
    const r = await fetch(
      "https://open.er-api.com/v6/latest/USD",
      { next: { revalidate: 3600 } }
    );
    const j = await r.json();
    const rate = j?.rates?.INR ?? 83.5;
    return NextResponse.json(
      { usdToInr: rate, updated: j?.time_last_update_utc ?? null },
      { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=7200" } }
    );
  } catch {
    // Agar API fail ho toh fallback rate bhejo
    return NextResponse.json({ usdToInr: 83.5, updated: null });
  }
}
