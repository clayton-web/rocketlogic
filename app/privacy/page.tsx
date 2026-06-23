import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${COMPANY.name}.`,
};

export default function PrivacyPage() {
  return (
    <Container className="py-24 lg:py-32">
      <div className="mx-auto max-w-[640px]">
        <h1 className="text-3xl font-semibold tracking-tight text-rl-text sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-base leading-relaxed text-rl-text-muted">
          {COMPANY.name} is committed to protecting your privacy. This page
          will be updated with our full privacy policy. For questions, contact{" "}
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
