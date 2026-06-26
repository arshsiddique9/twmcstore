import Link from "next/link";
import PixelIcon, { type IconKey } from "./PixelIcon";

const cats: { href: string; label: string; desc: string; icon: IconKey }[] = [
  { href: "/ranks", label: "RANKS", desc: "VIP / MVP / ELITE / GOD", icon: "sword" },
  { href: "/coins", label: "COINS", desc: "In-game currency packs", icon: "coin-pile" }
];

export default function Sidebar() {
  return (
    <aside className="lg:col-span-1 space-y-2">
      <h3 className="font-pixel text-xs text-twmc-red glow-red mb-3">▰ CATEGORIES</h3>
      {cats.map(({ href, label, desc, icon }) => (
        <Link key={href} href={href}
          className="flex items-center gap-3 pixel-border p-3 rounded-sm hover:shadow-glowStrong transition group">
          <PixelIcon name={icon} size={36} />
          <div>
            <div className="font-pixel text-[11px] text-white group-hover:text-twmc-red transition">{label}</div>
            <div className="text-[10px] text-twmc-ash mt-1">{desc}</div>
          </div>
        </Link>
      ))}
    </aside>
  );
}
