import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

export function MissionSection() {
  return (
    <section
      id="mission"
      className="scroll-mt-14 border-t border-rl-border py-20 md:scroll-mt-16 md:py-28"
    >
      <Container>
        <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-rl-text-subtle">
          Mission
        </h2>

        <div className="mt-10 max-w-2xl border-l border-rl-border-strong pl-6 md:mt-12 md:pl-8">
          <div className="space-y-6 text-lg leading-relaxed text-rl-text-muted md:text-xl md:leading-[1.65]">
            <p>{COMPANY.mission.lead}</p>
            <p>{COMPANY.mission.body}</p>
            <p className="font-semibold tracking-tight text-rl-text">
              {COMPANY.mission.closing}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
