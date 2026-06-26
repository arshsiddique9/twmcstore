import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import { coins } from "@/lib/products";
import PixelIcon from "@/components/PixelIcon";

export default function Page() {
  return (
    <section className="container mx-auto px-6 py-12 grid lg:grid-cols-4 gap-8">
      <Sidebar />
      <div className="lg:col-span-3">
        <div className="flex items-center gap-4 mb-6">
          <PixelIcon name="coin-pile" size={56} />
          <div>
            <h1 className="font-pixel text-2xl text-twmc-gold glow-gold">COINS</h1>
            <p className="text-twmc-ash text-sm mt-1">In-game currency packs — instant delivery on purchase.</p>
          </div>
        </div>
        <ProductGrid products={coins} />
      </div>
    </section>
  );
}
