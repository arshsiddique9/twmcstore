export default function RefundPage() {
  return (
    <section className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="font-pixel text-2xl text-twmc-red glow-red mb-6">🔁 REFUND POLICY</h1>
      <div className="pixel-border p-6 rounded-md space-y-4 text-twmc-ash">
        <p className="text-red-400 font-pixel text-sm">⚠️ ALL SALES ARE FINAL — NO REFUNDS</p>
        <p>
          All purchases made on the TWMC Store (<strong className="text-white">store.twmc.fun</strong>) are
          <strong className="text-red-400"> non-refundable and non-transferable</strong>. By completing a purchase,
          you agree to this policy.
        </p>
        <p>
          Due to the digital nature of our products (ranks, coins, and in-game items), we cannot offer refunds,
          exchanges, or cancellations once an order has been processed and delivered.
        </p>
        <p>
          In rare cases of <strong className="text-white">failed delivery</strong> (where the rank or coins are not
          received within 24 hours), please contact our <strong className="text-white">Support</strong> team on
          <a
            href="https://discord.gg/sY7DShejtr"
            target="_blank"
            rel="noreferrer"
            className="text-[#5865F2] hover:underline ml-1"
          >
            Discord
          </a>
          . We will investigate and resolve the issue.
        </p>
        <p>
          Chargebacks or payment disputes will result in <strong className="text-red-400">immediate permanent ban</strong>
          from the TWMC server and all associated services.
        </p>
        <p className="text-xs text-twmc-ash mt-4">
          Last updated: June 2026
        </p>
      </div>
    </section>
  );
}