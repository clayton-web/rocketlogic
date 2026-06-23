import { Logo } from "@/components/brand/Logo";
import { InspectionDashboardPreview } from "@/components/hero/InspectionDashboardPreview";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COMPANY, ROUTES } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center pt-24 pb-16 lg:min-h-[90vh] lg:pt-28 lg:pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-1/4 mx-auto h-64 max-w-3xl rounded-full bg-rl-accent-secondary/[0.07] blur-3xl" />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Logo
            width={180}
            height={54}
            priority
            linked={false}
            className="mb-8 lg:mb-10"
          />

          <h1 className="text-4xl font-semibold tracking-tight text-rl-text sm:text-5xl lg:text-6xl">
            {COMPANY.shortName}
          </h1>

          <p className="mt-4 text-lg text-rl-accent-secondary sm:text-xl">
            {COMPANY.slogan}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-rl-text-muted sm:text-lg">
            {COMPANY.tagline}
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
            <Button href={ROUTES.inspection} className="w-full sm:w-auto">
              Launch Rocket Inspection
            </Button>
            <Button
              href="#ecosystem"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              Explore Products
            </Button>
          </div>
        </div>

        <div className="mt-14 lg:mt-20">
          <InspectionDashboardPreview />
        </div>
      </Container>
    </section>
  );
}
