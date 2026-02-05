import DesignSection from "@/components/section/facilities/design-section";
import HeroSection from "@/components/section/facilities/hero-section";
import OverviewSection from "@/components/section/facilities/overview-section";
import QuotesSection from "@/components/section/facilities/quotes-section";
import SharedSection from "@/components/section/facilities/shared-section";

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <HeroSection />
      <OverviewSection />
      <DesignSection />
      <SharedSection />
      <QuotesSection />
    </main>
  );
};

export default page;
