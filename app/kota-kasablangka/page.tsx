import HeroSection from "@/components/section/kota-kasablangka/hero-section";
import DiscoverSection from "@/components/section/kota-kasablangka/discover-section";
import PremiumSection from "@/components/section/kota-kasablangka/premium-section"; 

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