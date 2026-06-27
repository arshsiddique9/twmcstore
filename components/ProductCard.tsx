"use client";
import { useState, useEffect } from "react";
import { dualPrice } from "@/lib/currency";
import { Product } from "@/lib/products";
import PixelIcon from "./PixelIcon";
import { startTebexCheckout } from "@/lib/tebex";

const tierColors = {
  common: "text-gray-400 border-gray-600",
  rare: "text-blue-400 border-blue-600",
  epic: "text-purple-400 border-purple-600",
  legendary: "text-yellow-400 border-yellow-600",
};

const accentGlow = {
  orange: "hover:shadow-orange-500/30",
  purple: "hover:shadow-purple-500/30",
  yellow: "hover:shadow-yellow-500/30",
  red: "hover:shadow-red-500/30",
  gold: "hover:shadow-yellow-400/30",
};

export default function ProductCard({ p }: { p: Product }) {
  const [rate, setRate] = useState(83.5);

  useEffect(() => {
    fetch("/api/rate")
      .then((r) => r.json())
      .then((d) => d?.usdToInr && setRate(d.usdToInr))
      .catch(() => {});
  }, []);

  // INR aur USD dono values le lo
  const { inr, usd } = dualPrice(p.priceNum, p.currency, rate);

  // ⭐ PRIMARY = INR (bada), SECONDARY = USD (chhota) — har product ke liye
  const primary = inr;
  const secondary = usd;

  const t = tierColors[p.tier as keyof typeof tierColors] || "text-white";
  const glow = accentGlow[p.accent as keyof typeof accentGlow] || "";

  return (
    <div
      className={`relative pixel-border rounded-md p-5 flex flex-col transition-all duration-300 hover:scale-[1.02] ${glow}`}
    >
      <div className="flex items-start justify-between">
        <PixelIcon name={p.iconKey} size={48} className="text-twmc-gold" />
        <span
          className={`font-pixel text-[9px] px-2 py-1 border rounded-sm ${t} uppercase bg-black/40`}
        >
          {p.tier}
        </span>
      </div>

      <h3 className="font-pixel text-sm md:text-base text-white mt-3 tracking-wider">
        {p.name}
      </h3>
      <p className="text-xs text-twmc-ash mt-1 leading-relaxed">{p.desc}</p>

      <ul className="mt-3 space-y-1 flex-grow">
        {p.perks.slice(0, 6).map((perk, i) => (
          <li key={i} className="text-[10px] text-twmc-ash flex items-center gap-2">
            <span className="text-twmc-red">◆</span> {perk}
          </li>
        ))}
      </ul>

      {/* ⭐ PRICE — brackets hata diye, sirf ₹299 / $0.62 */}
      <div className="mt-4 pt-3 border-t border-twmc-gray/40">
        <p className="font-pixel text-[8px] text-twmc-ash tracking-widest">PRICE</p>
        <p className={`font-pixel text-xl ${t} mt-1`}>{primary}</p>
        <p className="font-pixel text-[9px] text-twmc-ash mt-1">≈ {secondary}</p>
      </div>

      <button
        onClick={() => startTebexCheckout(p.tebexId || p.id)}
        className="mt-4 w-full btn-block text-center font-pixel text-[10px] py-3 rounded-sm text-white transition"
      >
        BUY NOW
      </button>
    </div>
  );
}
