export default function DiscordWidget() {
  return (
    <div className="pixel-border rounded-md p-5">
      <h3 className="font-pixel text-xs text-twmc-red glow-red mb-4">◆ JOIN OUR DISCORD</h3>
      <iframe
        src="https://discord.com/widget?id=YOUR_DISCORD_SERVER_ID&theme=dark"
        width="100%"
        height="320"
        allowTransparency
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        className="rounded-sm border border-twmc-red/40"
      />
      <p className="text-[10px] text-twmc-ash mt-2">
        Replace <code>YOUR_DISCORD_SERVER_ID</code> in DiscordWidget.tsx and enable widget in Discord → Server Settings → Widget.
      </p>
    </div>
  );
}
