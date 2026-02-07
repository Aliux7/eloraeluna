import DescriptionSection from "@/components/section/news-and-events/detail/description-section";
import HeroSection from "@/components/section/news-and-events/detail/hero-section";

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <HeroSection />
      <DescriptionSection />
    </main>
  );
};

export default page;
