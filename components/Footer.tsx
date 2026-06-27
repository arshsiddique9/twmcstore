import Link from "next/link";

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
            <li>
              <Link href="/terms" className="hover:text-twmc-red transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/refund" className="hover:text-twmc-red transition">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-twmc-red transition">
                Privacy
              </Link>
            </li>
            <li>
              <a
                href="https://discord.gg/sY7DShejtr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-twmc-red transition"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-pixel text-xs text-twmc-red mb-2">CONNECT</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://discord.gg/sY7DShejtr"
              target="_blank"
              rel="noreferrer"
              className="text-twmc-ash hover:text-[#5865F2] transition-colors duration-200"
              aria-label="Discord"
            >
              {/* Discord SVG icon with fixed size and crisp rendering */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 127.14 96.36"
                width="28"
                height="28"
                fill="currentColor"
                className="block"
                style={{ imageRendering: "crispEdges" }}
              >
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49.06,6.83,72.37,72.37,0,0,0,45.7,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2.05a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2.05a68.42,68.42,0,0,1-10.85,5.18,77.7,77.7,0,0,0,6.89,11.11A105.73,105.73,0,0,0,126.6,80.22h0C129.24,52.84,122.09,28.11,107.7,8.07ZM42.45,65.23C36.18,65.23,31,59.47,31,52.37s5.01-12.87,11.43-12.87S54,46,53.89,52.37,48.71,65.23,42.45,65.23Zm42.24,0C78.41,65.23,73.25,59.47,73.25,52.37s5-12.87,11.43-12.87S96.23,46,96.11,52.37,91,65.23,84.69,65.23Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-[10px] text-twmc-ash py-4 border-t border-twmc-red/20">
        © {new Date().getFullYear()} TWMC. Not affiliated with Mojang AB.
      </div>
    </footer>
  );
}
