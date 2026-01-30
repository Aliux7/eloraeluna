import HeroSection from "@/components/section/the-design/hero-section";
import DiscoverSection from "@/components/section/the-design/discover-section";
import PremiumSection from "@/components/section/the-design/premium-section"; 

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