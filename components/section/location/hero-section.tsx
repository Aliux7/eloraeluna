import hero_background from "@/app/assets/location/location_background.webp";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up"; 

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative xl:flex xl:flex-col xl:aspect-video overflow-hidden bg-[#F3F0E8]">
      <div className="relative xl:absolute xl:inset-0 z-0 pointer-events-none w-full aspect-video xl:aspect-auto xl:h-full mt-14 sm:mt-18 xl:mt-0 overflow-hidden overlay-hero after:content-[''] after:absolute after:inset-0 after:bg-linear-to-tr after:from-black/20 after:to-transparent after:pointer-events-none after:select-none">
        <Image
          src={hero_background}
          alt="Aerial view of Elora and Eluna at Kota Kasablanka, South Jakarta"
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <div className="relative z-10 px-5 sm:px-10 xl:px-48 w-full xl:flex-1 xl:pt-24 xl:pb-16 flex flex-col justify-end items-start">
        <div className="py-8 xl:py-0">
          <WordsPullUp
            text="INFINITE"
            className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-normal text-[#9D7958] xl:text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
          />
          <WordsPullUp
            text="CONNECTIVITY"
            className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-light text-[#9D7958] xl:text-[#F3F0E8] tracking-widest ml-10 sm:ml-0 lg:ml-[5vw] mb-6 md:mb-10 xl:mb-8"
          /> 
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
