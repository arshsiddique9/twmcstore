export default function PrivacyPage() {
  return (
    <section className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="font-pixel text-2xl text-twmc-red glow-red mb-6">🔒 PRIVACY POLICY</h1>
      <div className="pixel-border p-6 rounded-md space-y-4 text-twmc-ash">
        <p className="text-white">We respect your privacy. Here’s how we handle your data:</p>

        <div>
          <h2 className="font-pixel text-sm text-twmc-gold">1. What We Collect</h2>
          <p>
            We collect your <strong className="text-white">Minecraft username</strong>, email address (for receipts),
            and payment information (processed securely by Tebex — we never store card details).
          </p>
        </div>

        <div>
          <h2 className="font-pixel text-sm text-twmc-gold">2. How We Use It</h2>
          <p>
            Your data is used solely for <strong className="text-white">delivering in-game items</strong>,
            sending purchase receipts, and communicating with you regarding your order.
          </p>
        </div>

        <div>
          <h2 className="font-pixel text-sm text-twmc-gold">3. Data Security</h2>
          <p>
            All payments are handled by <strong className="text-white">Tebex</strong> (PCI-DSS compliant).
            We do not store payment information on our servers.
          </p>
        </div>

        <div>
          <h2 className="font-pixel text-sm text-twmc-gold">4. Third Parties</h2>
          <p>
            We use <strong className="text-white">Tebex</strong> for payments and
            <strong className="text-white"> Vercel</strong> for hosting. Your data is not sold or shared
            with any other third parties.
          </p>
        </div>

        <div>
          <h2 className="font-pixel text-sm text-twmc-gold">5. Your Rights</h2>
          <p>
            You may request deletion of your data by contacting us on
            <a
              href="https://discord.gg/sY7DShejtr"
              target="_blank"
              rel="noreferrer"
              className="text-[#5865F2] hover:underline ml-1"
            >
              Discord
            </a>
            . We will respond within 30 days.
          </p>
        </div>

        <div>
          <h2 className="font-pixel text-sm text-twmc-gold">6. Cookies</h2>
          <p>
            We use essential cookies for cart/checkout functionality. No tracking cookies are used.
          </p>
        </div>

        <p className="text-xs text-twmc-ash mt-4">
          Last updated: June 2026
        </p>
      </div>
    </section>
  );
}