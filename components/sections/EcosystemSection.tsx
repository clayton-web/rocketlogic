import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/ecosystem/ProductGrid";

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="border-t border-rl-border py-20 lg:py-28">
      <Container className="max-w-2xl">
        <p className="mb-10 text-xs uppercase tracking-[0.14em] text-rl-text-muted">
          Products
        </p>
        <ProductGrid />
      </Container>
    </section>
  );
}
