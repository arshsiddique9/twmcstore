export default function DiscordCTA() {
  return (
    <div className="pixel-border rounded-md p-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/20 via-transparent to-twmc-red/10 pointer-events-none" />
      <div className="relative">
        <h3 className="font-pixel text-xs text-twmc-red glow-red mb-2">▰ JOIN OUR DISCORD</h3>
        <p className="text-twmc-ash text-sm mb-4">Connect with the TWMC community, get support, giveaways, and event announcements.</p>
        <a href="https://discord.gg/DGRBG9R2ZB" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-[#5865F2] hover:bg-[#4752c4] transition rounded-sm font-pixel text-xs text-white shadow-[0_0_25px_rgba(88,101,242,0.55)]">
          discord.gg/DGRBG9R2ZB
        </a>
      </div>
    </div>
  );
}
