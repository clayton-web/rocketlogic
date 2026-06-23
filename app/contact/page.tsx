import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${COMPANY.name}.`,
};

export default function ContactPage() {
  return (
    <Container className="py-24 lg:py-32">
      <div className="mx-auto max-w-[640px]">
        <h1 className="text-3xl font-semibold tracking-tight text-rl-text sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-base leading-relaxed text-rl-text-muted">
          Reach out to the {COMPANY.shortName} team for product questions,
          partnerships, or support.
        </p>
        <div className="mt-8 rounded-2xl border border-rl-border bg-white/[0.03] p-6 backdrop-blur-sm">
          <p className="text-sm text-rl-text-muted">Email</p>
          <a
            href="mailto:contact@rocketlogic.com"
            className="mt-2 inline-flex min-h-11 items-center text-base font-medium text-rl-accent-secondary transition-colors hover:text-rl-text"
          >
            contact@rocketlogic.com
          </a>
        </div>
      </div>
    </Container>
  );
}
