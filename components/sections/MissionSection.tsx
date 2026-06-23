import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

export function MissionSection() {
  return (
    <section id="mission" className="border-t border-rl-border py-20 lg:py-28">
      <Container className="max-w-xl">
        <div className="space-y-5 text-base leading-[1.75] text-rl-text-muted sm:text-[1.0625rem]">
          <p>{COMPANY.mission.lead}</p>
          <p>{COMPANY.mission.body}</p>
          <p className="text-rl-text">{COMPANY.mission.closing}</p>
        </div>
      </Container>
    </section>
  );
}
