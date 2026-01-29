import HeroSection from "@/components/section/home/hero-section";
import DiscoverSection from "@/components/section/home/discover-section";
import DesignSection from "@/components/section/home/design-section";
import ConceptSection from "@/components/section/home/concept-section";
import FacilitiesSection from "@/components/section/home/facilities-section";
import LocationSection from "@/components/section/home/location-section";
import DeveloperSection from "@/components/section/home/developer-section";
import NewsSection from "@/components/section/home/news-section";
import CommingSoon from "@/components/section/home/coming-soon";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <HeroSection />
      <DiscoverSection />
      <DesignSection />
      <ConceptSection />
      <FacilitiesSection />
      <LocationSection />
      <DeveloperSection />
      <CommingSoon />
      {/* <NewsSection /> */}
    </main>
  );
}
