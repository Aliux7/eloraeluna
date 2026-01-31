import HeroSection from "@/components/section/kota-kasablanka/hero-section";
import DiscoverSection from "@/components/section/kota-kasablanka/discover-section";
import PremiumSection from "@/components/section/kota-kasablanka/premium-section"; 

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <HeroSection />
      <DiscoverSection />
      <PremiumSection />
    </main>
  );
}

export default page;