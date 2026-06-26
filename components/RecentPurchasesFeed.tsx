"use client";
import { useEffect, useState } from "react";

const demo = [
  { user: "EnderSlayer",  item: "TITAN Rank",     time: "2m" },
  { user: "RedstoneKing", item: "15,600 Coins",   time: "5m" },
  { user: "BlockMaster",  item: "HUNTER Rank",    time: "12m" },
  { user: "NetherWalker", item: "ARCHER Rank",    time: "18m" },
  { user: "PixelLord",    item: "CHAMPION Rank",  time: "27m" },
  { user: "CraftQueen",   item: "WIZARD Rank",    time: "34m" },
  { user: "ShadowKnight", item: "5,660 Coins",    time: "41m" }
];

export default function RecentPurchasesFeed() {
  const [items, setItems] = useState(demo);
  useEffect(() => {
    const id = setInterval(() => setItems((p) => [...p.slice(1), p[0]]), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="pixel-border rounded-md p-5">
      <h3 className="font-pixel text-xs text-twmc-red glow-red mb-4">▰ RECENT PURCHASES</h3>
      <div className="space-y-2 max-h-72 overflow-hidden">
        {items.map((it, i) => (
          <div key={i} className="flex items-center justify-between text-sm bg-black/40 border border-twmc-red/30 px-3 py-2 rounded-sm">
            <div>
              <span className="text-twmc-red font-pixel text-[10px]">{it.user}</span>
              <span className="text-twmc-ash text-xs"> bought </span>
              <span className="text-white text-xs">{it.item}</span>
            </div>
            <span className="text-[10px] text-twmc-ash">{it.time} ago</span>
          </div>
        ))}
      </div>
    </div>
  );
}
