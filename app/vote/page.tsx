const sites = [
  { name: "MinecraftServers.org",  url: "https://minecraftservers.org/vote/XXXXX",   reward: "1 Common Key" },
  { name: "Minecraft-MP",          url: "https://minecraft-mp.com/server/XXXXX/vote",reward: "1 Rare Key + $500" },
  { name: "PlanetMinecraft",       url: "https://planetminecraft.com/server/XXXXX",  reward: "XP Booster 1h" },
  { name: "TopG",                  url: "https://topg.org/minecraft-servers/server-XXXXX", reward: "100 Coins" },
];
export default function Vote() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="font-pixel text-2xl text-twmc-red glow-red mb-2">⭐ VOTE FOR TWMC</h1>
      <p className="text-twmc-ash mb-8">Vote daily on every site to earn rewards in-game.</p>
      <div className="grid md:grid-cols-2 gap-5">
        {sites.map((s) => (
          <a key={s.name} href={s.url} target="_blank"
            className="pixel-border p-5 rounded-md hover:shadow-glowStrong transition">
            <div className="font-pixel text-sm text-white">{s.name}</div>
            <div className="text-twmc-ember text-xs mt-2">Reward: {s.reward}</div>
            <div className="mt-4 btn-block inline-block font-pixel text-[10px] px-4 py-2 rounded-sm">VOTE NOW →</div>
          </a>
        ))}
      </div>
    </section>
  );
}
