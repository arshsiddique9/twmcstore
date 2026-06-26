import { NextResponse } from "next/server";

export const revalidate = 3600; // 1 hour cache

export async function GET() {
  try {
    const r = await fetch("https://api.exchangerate.host/latest?base=USD&symbols=INR");
    const j = await r.json();
    return NextResponse.json({ usdToInr: j.rates?.INR || 83.5 });
  } catch {
    return NextResponse.json({ usdToInr: 83.5 });
  }
}
