import HeroSection from "@/components/section/the-developer/hero-section";
import PropertiesSection from "@/components/section/the-developer/properties-section";

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <HeroSection />
      <PropertiesSection />
    </main>
  );
};

export default page;
