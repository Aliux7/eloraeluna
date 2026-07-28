import { FadeSlide } from "@/components/animation/fade-slide";
import HeroSection from "@/components/section/gallery/hero-section";
import RoomsSection from "@/components/section/gallery/rooms-section";
import illustration_bottom from "@/app/assets/home/illustration_bottom.png";
import Image from "next/image";

const page = () => {
  return (
    <main className="overflow-x-hidden relative bg-[#464948] pt-30 sm:pt-34 xl:pt-40 space-y-5 sm:space-y-10 xl:space-y-16 pb-5 sm:pb-10 xl:pb-16">
      <FadeSlide
        direction="right"
        className="absolute top-7 -right-13 sm:-right-20 z-20 pointer-events-none"
      >
        <Image
          src={illustration_bottom}
          alt=""
          className="w-68 sm:w-96 md:w-120"
        />
      </FadeSlide>
      <HeroSection />
      <RoomsSection />
    </main>
  );
};

export default page;
