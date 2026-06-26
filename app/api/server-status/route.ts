import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch("https://api.mcsrvstat.us/3/play.twmc.net", {
      cache: "no-store",
      headers: { "User-Agent": "TWMC-Store/1.0" }
    });
    if (!res.ok) throw new Error("Upstream error");
    const data = await res.json();
    return NextResponse.json(data, {
      headers: { "Cache-Control": "s-maxage=15, stale-while-revalidate=30" }
    });
  } catch (e: any) {
    return NextResponse.json(
      { online: false, error: e?.message || "failed" },
      { status: 200 }
    );
  }
}
