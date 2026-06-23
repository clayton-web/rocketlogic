import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

export function MissionSection() {
  return (
    <section id="mission" className="py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-rl-text sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-base leading-relaxed text-rl-text-muted sm:text-lg">
            {COMPANY.mission.lead}
          </p>
          <p className="mt-4 text-base leading-relaxed text-rl-text-muted sm:text-lg">
            {COMPANY.mission.body}
          </p>
          <p className="mt-6 text-lg font-medium text-rl-accent-secondary sm:text-xl">
            {COMPANY.mission.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}
