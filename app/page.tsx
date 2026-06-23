import { CredibilityLine } from "@/components/sections/CredibilityLine";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredibilityLine />
      <EcosystemSection />
      <MissionSection />
    </>
  );
}
