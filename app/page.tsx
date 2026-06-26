import HeroSection from "@/components/HeroSection";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import RecentPurchasesFeed from "@/components/RecentPurchasesFeed";
import TopDonators from "@/components/TopDonators";
import DiscordCTA from "@/components/DiscordCTA";
import { ranks, coins } from "@/lib/products";
import PixelIcon from "@/components/PixelIcon";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container mx-auto px-6 py-12 grid lg:grid-cols-4 gap-8">
        <Sidebar />
        <div className="lg:col-span-3 space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <PixelIcon name="sword" size={40} />
              <h2 className="font-pixel text-lg text-twmc-red glow-red">FEATURED RANKS</h2>
            </div>
            <ProductGrid products={ranks} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <PixelIcon name="coin-pile" size={40} />
              <h2 className="font-pixel text-lg text-twmc-gold glow-gold">COIN PACKS</h2>
            </div>
            <ProductGrid products={coins} />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <RecentPurchasesFeed />
            <TopDonators />
          </div>
          <DiscordCTA />
        </div>
      </section>
    </>
  );
}
