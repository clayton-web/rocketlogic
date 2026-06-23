import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
