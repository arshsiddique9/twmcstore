export default function TermsPage() {
  return (
    <section className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="font-pixel text-2xl text-twmc-red glow-red mb-6">📜 TERMS OF SERVICE</h1>
      <div className="pixel-border p-6 rounded-md space-y-4 text-twmc-ash">
        <p className="text-white">By using the TWMC Store, you agree to the following terms:</p>

        <div>
          <h2 className="font-pixel text-sm text-twmc-gold">1. General</h2>
          <p>
            TWMC Store provides digital goods (ranks and coins) for the Minecraft server
            <strong className="text-white"> play.twmc.fun</strong>. All transactions are processed via
            <strong className="text-white"> Tebex</strong>.
          </p>
        </div>

        <div>
          <h2 className="font-pixel text-sm text-twmc-gold">2. Account Responsibility</h2>
          <p>
            You are responsible for your Minecraft account. Ranks and coins are bound to the
            <strong className="text-white"> Minecraft username</strong> you provide at checkout.
            We cannot transfer purchases between accounts.
          </p>
        </div>

        <div>
          <h2 className="font-pixel text-sm text-twmc-gold">3. Age Requirement</h2>
          <p>
            You must be <strong className="text-white">13 years or older</strong> to make purchases.
            If you are under 18, you confirm that you have parental/guardian consent.
          </p>
        </div>

        <div>
          <h2 className="font-pixel text-sm text-twmc-gold">4. Prohibited Conduct</h2>
          <p>
            Fraudulent transactions, chargebacks, or disputes will result in
            <strong className="text-red-400"> permanent ban</strong> from TWMC and all associated services.
          </p>
        </div>

        <div>
          <h2 className="font-pixel text-sm text-twmc-gold">5. Changes to Services</h2>
          <p>
            TWMC reserves the right to modify, suspend, or discontinue any product or service at any time
            with or without notice.
          </p>
        </div>

        <div>
          <h2 className="font-pixel text-sm text-twmc-gold">6. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall be resolved in Indian courts.
          </p>
        </div>

        <p className="text-xs text-twmc-ash mt-4">
          Last updated: June 2026
        </p>
      </div>
    </section>
  );
}