import ConclusionSection from "@/components/section/the-design/conclusion-section";
import HeroSection from "@/components/section/the-design/hero-section";
import MapSection from "@/components/section/the-design/map-section";
import MasterplanSection from "@/components/section/the-design/masterplan-section";
import TowerSection from "@/components/section/the-design/tower-section";

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <HeroSection />
      <MasterplanSection />
      <TowerSection />
      <MapSection />
      <ConclusionSection />
    </main>
  );
};

export default page;
