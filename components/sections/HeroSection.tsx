import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_70%_55%_at_50%_-15%,rgba(31,111,235,0.07),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rl-border to-transparent"
      />

      <Container className="relative flex min-h-[calc(100dvh-3.5rem)] flex-col items-center justify-center py-16 text-center md:min-h-[calc(100dvh-4rem)] md:py-24">
        <div className="animate-fade-up mb-8 md:mb-10">
          <Logo
            linked={false}
            width={220}
            height={64}
            priority
            className="mx-auto w-[11rem] md:w-[13.75rem]"
          />
        </div>

        <h1 className="animate-fade-up animate-fade-up-delay-1 max-w-[16ch] text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-rl-text sm:max-w-none sm:text-4xl md:text-[3.25rem] md:leading-[1.08]">
          {COMPANY.slogan}
        </h1>

        <p className="animate-fade-up animate-fade-up-delay-2 mt-5 max-w-[28ch] text-sm leading-relaxed text-rl-text-muted sm:mt-6 sm:max-w-md sm:text-base">
          {COMPANY.description}
        </p>

        <div className="animate-fade-up animate-fade-up-delay-3 mt-9 sm:mt-11">
          <Button href="#products">Explore Products</Button>
        </div>
      </Container>
    </section>
  );
}
