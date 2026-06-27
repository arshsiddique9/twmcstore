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
              className="text-twmc-ash hover:text-[#5865F2] transition"
              aria-label="Discord"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.3973-.8742-.6083-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C2.8084 7.6662 1.7815 9.902 1.3223 12.1078a.1852.1852 0 0 0 .0632.1777c1.6904 1.2384 3.4288 1.9909 5.129 2.4766.0314.0072.0634-.0043.0835-.0257.4512-.5504.8508-1.1335 1.1906-1.7444a.0817.0817 0 0 0-.0357-.1137c-.3188-.1657-.6202-.3572-.9084-.5744a.066.066 0 0 1-.0204-.0842c.058-.0805.118-.1583.1799-.2339a.0692.0692 0 0 1 .0788-.0277c1.7291.7874 3.5986.7874 5.2882 0a.072.072 0 0 1 .0788.0277c.0619.0756.1219.1534.1799.2339a.066.066 0 0 1-.0204.0842c-.2881.2172-.5896.4087-.9084.5744a.0817.0817 0 0 0-.0357.1137c.3398.6109.7394 1.194 1.1906 1.7444.0201.0214.0521.0329.0835.0257 1.7002-.4857 3.4386-1.2382 5.129-2.4766a.1852.1852 0 0 0 .0632-.1777c-.4593-2.2058-1.4862-4.4416-2.8587-6.2772a.0702.0702 0 0 0-.0321-.0277zM8.5556 13.4055c-.9967 0-1.817-.9025-1.817-2.0087s.8108-2.0087 1.817-2.0087c1.0062 0 1.817.9025 1.817 2.0087s-.8108 2.0087-1.817 2.0087zm6.8889 0c-.9967 0-1.817-.9025-1.817-2.0087s.8108-2.0087 1.817-2.0087c1.0062 0 1.817.9025 1.817 2.0087s-.8108 2.0087-1.817 2.0087z"/>
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
