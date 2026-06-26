"use client";
import { motion } from "framer-motion";
import { startTebexCheckout } from "@/lib/tebex";
import type { Product, Accent } from "@/lib/products";
import PixelIcon from "./PixelIcon";

const tierMap: Record<string, string> = {
  common: "from-gray-600 to-gray-800 text-gray-200",
  rare: "from-blue-700 to-blue-900 text-blue-200",
  epic: "from-purple-700 to-purple-900 text-purple-200",
  legendary: "from-red-700 to-red-900 text-red-200"
};

const accentTheme: Record<Accent, {
  border: string; ring: string; text: string; glow: string;
  btn: string; bg: string; shadow: string;
}> = {
  orange: {
    border: "border-orange-500/70",
    ring: "from-orange-500/30 to-orange-900/20",
    text: "text-orange-400",
    glow: "drop-shadow-[0_0_8px_rgba(255,140,0,0.7)]",
    btn: "bg-gradient-to-b from-orange-500 to-orange-800 border-orange-400 hover:shadow-[0_0_32px_rgba(255,140,0,0.85)]",
    bg: "from-orange-950/40 to-black",
    shadow: "shadow-[0_0_22px_rgba(255,140,0,0.45)]"
  },
  purple: {
    border: "border-purple-500/70",
    ring: "from-purple-500/30 to-purple-900/20",
    text: "text-purple-300",
    glow: "drop-shadow-[0_0_8px_rgba(180,80,255,0.7)]",
    btn: "bg-gradient-to-b from-purple-600 to-purple-900 border-purple-400 hover:shadow-[0_0_32px_rgba(180,80,255,0.85)]",
    bg: "from-purple-950/40 to-black",
    shadow: "shadow-[0_0_22px_rgba(180,80,255,0.45)]"
  },
  yellow: {
    border: "border-yellow-400/70",
    ring: "from-yellow-400/30 to-yellow-700/20",
    text: "text-yellow-300",
    glow: "drop-shadow-[0_0_8px_rgba(255,220,40,0.75)]",
    btn: "bg-gradient-to-b from-yellow-500 to-yellow-800 border-yellow-300 hover:shadow-[0_0_32px_rgba(255,220,40,0.9)] text-black",
    bg: "from-yellow-900/30 to-black",
    shadow: "shadow-[0_0_22px_rgba(255,220,40,0.45)]"
  },
  red: {
    border: "border-red-500/70",
    ring: "from-red-500/30 to-red-900/20",
    text: "text-red-400",
    glow: "drop-shadow-[0_0_8px_rgba(255,0,0,0.75)]",
    btn: "bg-gradient-to-b from-red-600 to-red-900 border-red-400 hover:shadow-[0_0_32px_rgba(255,0,0,0.9)]",
    bg: "from-red-950/40 to-black",
    shadow: "shadow-[0_0_22px_rgba(255,0,0,0.45)]"
  },
  gold: {
    border: "border-amber-400/80",
    ring: "from-amber-400/40 to-amber-800/20",
    text: "text-amber-300",
    glow: "drop-shadow-[0_0_10px_rgba(255,200,40,0.85)]",
    btn: "bg-gradient-to-b from-amber-400 to-amber-700 border-amber-300 hover:shadow-[0_0_36px_rgba(255,200,40,0.95)] text-black",
    bg: "from-amber-900/40 to-black",
    shadow: "shadow-[0_0_28px_rgba(255,200,40,0.55)]"
  }
};

export default function ProductCard({ p }: { p: Product }) {
  const t = accentTheme[p.accent];
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`relative overflow-hidden rounded-md p-5 bg-gradient-to-b ${t.bg} border-2 ${t.border} ${t.shadow} group`}
    >
      <div className={`absolute -inset-1 bg-gradient-to-br ${t.ring} opacity-30 blur-xl group-hover:opacity-60 transition`} />
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px)" }} />

      <div className="relative">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className={`font-pixel text-base ${t.text} ${t.glow}`}>{p.name}</h3>
            <p className="font-pixel text-[8px] text-twmc-ash mt-1 tracking-widest">SERVER RANKS</p>
          </div>
          <span className={`font-pixel text-[8px] px-2 py-1 rounded-sm bg-gradient-to-r ${tierMap[p.tier]}`}>
            {p.tier.toUpperCase()}
          </span>
        </div>

        <div className={`my-4 h-32 flex items-center justify-center bg-black/60 border ${t.border} rounded-sm relative overflow-hidden`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${t.ring} opacity-40`} />
          <div className="relative">
            <PixelIcon name={p.iconKey} size={96} />
          </div>
        </div>

        <div className="mb-3">
          <p className={`font-pixel text-[9px] ${t.text} mb-1 tracking-widest`}>INFORMATION</p>
          <p className="text-xs text-white/90">{p.desc}</p>
        </div>

        <div className="mb-4">
          <p className={`font-pixel text-[9px] ${t.text} mb-2 tracking-widest`}>FEATURES</p>
          <ul className="text-[11px] space-y-1">
            {p.perks.map((perk) => (
              <li key={perk} className="flex gap-2 text-twmc-ash/90 leading-snug">
                <span className={`${t.text} ${t.glow} mt-[1px]`}>◆</span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between gap-3 mt-5 pt-3 border-t border-white/10">
          <div>
            <p className="font-pixel text-[8px] text-twmc-ash tracking-widest">PRICE</p>
            <p className={`font-pixel text-xl ${t.text} ${t.glow} mt-1`}>[{p.price}]</p>
          </div>
          <button
            onClick={() => startTebexCheckout(p.tebexId || p.id)}
            className={`font-pixel text-[10px] px-4 py-3 rounded-sm border-2 text-white transition ${t.btn}`}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </motion.div>
  );
}
