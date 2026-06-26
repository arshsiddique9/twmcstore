import { Product } from "@/lib/products";
export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((p) => <ProductCard key={p.id} p={p} />)}
    </div>
  );
}
