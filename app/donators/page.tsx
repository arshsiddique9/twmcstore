import TopDonators from "@/components/TopDonators";
export default function Page() {
  return (
    <section className="container mx-auto px-6 py-12 max-w-2xl">
      <h1 className="font-pixel text-2xl text-twmc-red glow-red mb-6">👑 TOP DONATORS</h1>
      <p className="text-twmc-ash mb-6">Legends who keep TWMC alive. Eternal thanks. 🔥</p>
      <TopDonators />
    </section>
  );
}
