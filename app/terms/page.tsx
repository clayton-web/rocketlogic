import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${COMPANY.name}.`,
};

export default function TermsPage() {
  return (
    <Container className="py-24 lg:py-32">
      <div className="mx-auto max-w-[640px]">
        <h1 className="text-3xl font-semibold tracking-tight text-rl-text sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-base leading-relaxed text-rl-text-muted">
          These terms govern your use of {COMPANY.name} products and services.
          This page will be updated with our complete terms of service. For
          questions, contact{" "}
          <a
            href="mailto:contact@rocketlogic.com"
            className="text-rl-accent-secondary transition-colors hover:text-rl-text"
          >
            contact@rocketlogic.com
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
