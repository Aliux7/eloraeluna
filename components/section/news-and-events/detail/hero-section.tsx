import hero_background from "@/app/assets/facilities/hero_background.svg";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative sm:min-h-screen bg-[#F3F0E8]">
      <div className="relative sm:absolute inset-0 z-0 pointer-events-none top-0 w-full pt-18 sm:pt-0 h-96 sm:h-screen overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/30">
        <Image
          src={hero_background}
          alt=""
          width={2000}
          height={2000}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>
      <div className="relative z-10 px-5 sm:px-10 xl:px-48 w-full sm:min-h-screen sm:pb-10 lg:pb-16 flex flex-col justify-end items-center">
        <div className="py-8 sm:py-0 text-center">
          <WordsPullUp
            text="20 September 2025"
            className="text-lg sm:text-xl lg:text-2xl text-[#9D7958] sm:text-[#FFFFFF] tracking-widest mb-2 lg:mb-4"
          />
          <WordsPullUp
            text="EXPERIENCE CITY LIVING"
            className="text-2xl sm:text-3xl lg:text-4xl font-medium sm:font-bold text-[#9D7958] sm:text-[#F3F0E8] tracking-widest"
          />
          <WordsPullUp
            text="LIKE NEVER BEFORE"
            className="text-2xl sm:text-3xl lg:text-4xl font-medium sm:font-bold text-[#9D7958] sm:text-[#F3F0E8] tracking-widest mb-4"
          />
          <WordsPullUp
            text="Author: John Doe"
            className="text-sm sm:text-lg lg:text-xl font-normal text-[#9D7958] sm:text-[#F3F0E8]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
