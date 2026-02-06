import ConclusionSection from "@/components/section/location/conclusion-section";
import HeroSection from "@/components/section/location/hero-section";
import MapSection from "@/components/section/location/map-section";

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[#F3F0E8]">
      <HeroSection />
      <MapSection />
      <ConclusionSection />
    </main>
  );
};

export default page;
