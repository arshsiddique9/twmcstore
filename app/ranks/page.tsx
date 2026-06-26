import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import { ranks } from "@/lib/products";
export default function Page() {
  return (
    <section className="container mx-auto px-6 py-12 grid lg:grid-cols-4 gap-8">
      <Sidebar />
      <div className="lg:col-span-3">
        <h1 className="font-pixel text-2xl text-twmc-red glow-red mb-6">⚔ RANKS</h1>
        <ProductGrid products={ranks} />
      </div>
    </section>
  );
}
