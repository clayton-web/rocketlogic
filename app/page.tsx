import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ProductsSection } from "@/components/sections/ProductsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <MissionSection />
    </>
  );
}
