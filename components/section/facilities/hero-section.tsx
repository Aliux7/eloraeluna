import hero_background from "@/app/assets/facilities/hero_background.webp";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up"; 

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative xl:flex xl:flex-col xl:aspect-video overflow-hidden bg-[#F3F0E8]">
      <div className="relative xl:absolute xl:inset-0 z-0 pointer-events-none w-full aspect-video xl:aspect-auto xl:h-full mt-14 sm:mt-18 xl:mt-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/0">
        <Image
          src={hero_background}
          alt="Elora and Eluna towers at Kota Kasablanka illuminated at night"
          width={2000}
          height={2000}
          className="w-full h-full object-cover object-top"
          sizes="100vw"
          priority
        />
      </div>
      <div className="relative z-10 px-5 sm:px-10 xl:px-48 w-full xl:flex-1 xl:pt-24 xl:pb-16 flex flex-col justify-end items-start">
        <div className="py-8 xl:py-0">
          <WordsPullUp
            text="A LIFESTYLE"
            className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-6xl font-light 2xl:font-extralight text-[#9D7958] xl:text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
          />
          <WordsPullUp
            text="OF DISTINCTION"
            className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-6xl font-medium sm:font-bold 2xl:font-semibold text-[#9D7958] xl:text-[#F3F0E8] tracking-widest ml-10 sm:ml-0 lg:ml-[5vw] mb-6 md:mb-10 xl:mb-8"
          />

          <WordsPullUp
            text="Discover thoughtfully curated amenities designed to elevate comfort,"
            className="hidden xl:block text-sm sm:text-lg lg:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#9D7958] xl:text-[#F3F0E8]"
          />
          <WordsPullUp
            text="leisure, and modern luxury at Eluna."
            className="hidden xl:block text-sm sm:text-lg lg:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#9D7958] xl:text-[#F3F0E8]"
          />  

          <WordsPullUp
            text="Discover thoughtfully curated amenities designed to elevate comfort, leisure, and modern luxury at Eluna."
            className="ml-10 block xl:hidden text-sm sm:text-lg lg:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#9D7958] xl:text-[#F3F0E8]"
          />  
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
