import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/ecosystem/ProductGrid";

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 lg:py-32">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-rl-text sm:text-4xl">
            Rocket Logic Ecosystem
          </h2>
          <p className="mt-4 text-base text-rl-text-muted">
            A growing suite of operational software designed to eliminate
            friction across your business workflows.
          </p>
        </div>

        <ProductGrid />
      </Container>
    </section>
  );
}
