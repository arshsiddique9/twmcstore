const donors = [
  { name: "EnderSlayer",  amount: 487, badge: "👑" },
  { name: "RedstoneKing", amount: 312, badge: "💎" },
  { name: "BlockMaster",  amount: 245, badge: "🥉" },
  { name: "NetherWalker", amount: 198, badge: "⚔" },
  { name: "PixelLord",    amount: 156, badge: "🔥" },
];
export default function TopDonators() {
  return (
    <div className="pixel-border rounded-md p-5">
      <h3 className="font-pixel text-xs text-twmc-red glow-red mb-4">◆ TOP DONATORS</h3>
      <ol className="space-y-2">
        {donors.map((d, i) => (
          <li key={d.name} className="flex items-center justify-between bg-black/40 border border-twmc-red/30 px-3 py-2 rounded-sm">
            <div className="flex items-center gap-3">
              <span className="font-pixel text-[10px] text-twmc-red w-6">#{i+1}</span>
              <span className="text-xl">{d.badge}</span>
              <span className="font-pixel text-xs text-white">{d.name}</span>
            </div>
            <span className="font-pixel text-xs text-twmc-ember">${d.amount}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
