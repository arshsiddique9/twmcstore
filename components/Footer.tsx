export default function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-twmc-red/40 bg-black/80">
      <div className="container mx-auto px-6 py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-pixel text-xs text-twmc-red glow-red mb-2">TWMC</h4>
          <p className="text-twmc-ash">The ultimate Minecraft experience. play.twmc.fun</p>
        </div>
        <div>
          <h4 className="font-pixel text-xs text-twmc-red mb-2">LINKS</h4>
          <ul className="space-y-1 text-twmc-ash">
            <li>Terms of Service</li><li>Refund Policy</li><li>Privacy</li><li>Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-pixel text-xs text-twmc-red mb-2">CONNECT</h4>
          <ul className="space-y-1 text-twmc-ash">
            <li>Discord · Twitter · YouTube · TikTok</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-[10px] text-twmc-ash py-4 border-t border-twmc-red/20">
        © {new Date().getFullYear()} TWMC. Not affiliated with Mojang AB.
      </div>
    </footer>
  );
}
