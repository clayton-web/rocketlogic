import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { COMPANY, ROUTES } from "@/lib/constants";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="flex min-h-[88vh] flex-col justify-center pt-28 pb-20 lg:min-h-[92vh] lg:pt-32 lg:pb-28">
      <Container className="max-w-3xl">
        <div className="flex flex-col items-start">
          <Logo
            width={148}
            height={44}
            priority
            linked={false}
            className="mb-16 opacity-95"
          />

          <h1 className="max-w-2xl text-4xl font-medium tracking-[-0.03em] text-rl-text sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {COMPANY.slogan}
          </h1>

          <Link
            href={ROUTES.inspection}
            className="group mt-12 inline-flex min-h-11 items-center gap-2 text-sm text-rl-text-muted transition-colors hover:text-rl-text"
          >
            Rocket Inspection
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
