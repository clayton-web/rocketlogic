import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

export function CredibilityLine() {
  return (
    <section className="border-y border-rl-border/60 py-10">
      <Container>
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-rl-text-muted sm:text-base">
          {COMPANY.credibility}
        </p>
      </Container>
    </section>
  );
}
