import hero_background from "@/app/assets/location/location_background.png";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up"; 

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative min-h-screen bg-[#F3F0E8]">
      <div className="relative sm:absolute inset-0 z-0 pointer-events-none top-0 w-full pt-18 sm:pt-0 h-96 sm:h-screen overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/30">
        <Image
          src={hero_background}
          alt=""
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="relative z-10 px-5 sm:px-10 xl:px-48 w-full sm:min-h-screen sm:pb-10 lg:pb-16 flex flex-col justify-end items-start">
        <div className="py-8 sm:py-0">
          <WordsPullUp
            text="INFINITE"
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#9D7958] sm:text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
          />
          <WordsPullUp
            text="CONNECTIVITY"
            className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#9D7958] sm:text-[#F3F0E8] tracking-widest ml-10 sm:ml-0 lg:ml-[5vw] mb-6 md:mb-10 xl:mb-8"
          /> 
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
