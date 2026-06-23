import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COMPANY, ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rocket Inspection",
  description:
    "Streamline property inspections with structured workflows and instant reporting.",
};

export default function InspectionPage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm uppercase tracking-[0.08em] text-rl-accent-secondary">
        Rocket Logic Product
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-rl-text">
        Rocket Inspection
      </h1>
      <p className="mt-4 max-w-lg text-base text-rl-text-muted">
        The Rocket Inspection application lives here. Replace this placeholder
        with your production inspection app when ready.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={ROUTES.home} variant="ghost">
          Back to Home
        </Button>
        <Link
          href="mailto:contact@rocketlogic.com"
          className="inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-sm text-rl-text-muted transition-colors hover:text-rl-text"
        >
          Contact {COMPANY.shortName}
        </Link>
      </div>
    </Container>
  );
}
