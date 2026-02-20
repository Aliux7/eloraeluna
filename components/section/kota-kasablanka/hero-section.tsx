import hero_background from "@/app/assets/kota-kasablanka/hero_background.jpg";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative sm:min-h-screen bg-[#F3F0E8]">
      <div className="relative sm:absolute inset-0 z-0 pointer-events-none top-0 w-full pt-14 sm:pt-0 h-96 sm:h-screen overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/0">
        <Image
          src={hero_background}
          alt=""
          width={2000}
          height={2000}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>
      <div className="relative z-10 px-5 sm:px-10 xl:px-48 w-full sm:min-h-screen sm:pb-10 lg:pb-16 flex flex-col justify-end items-start">
        <div className="py-8 sm:py-0">
          <div className="flex justify-start items-center gap-2.5 sm:gap-5">
            <WordsPullUp
              text="A"
              className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-light text-[#9D7958] sm:text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
            />
            <WordsPullUp
              text="MASTERPLAN"
              className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium text-[#9D7958] sm:text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
            />
            <WordsPullUp
              text="OF"
              className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-light text-[#9D7958] sm:text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
            />
          </div>
          <WordsPullUp
            text="INTEGRATED LIVING"
            className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium sm:font-bold text-[#9D7958] sm:text-[#F3F0E8] tracking-widest ml-10 sm:ml-0 lg:ml-[5vw] mb-6 md:mb-10 xl:mb-8"
          />

          <WordsPullUp
            text="Steps away from world-class fashion, dining, entertainment, and family-"
            className="hidden sm:block text-sm sm:text-xl 2xl:text-3xl font-normal text-[#9D7958] sm:text-[#F3F0E8]"
          />
          <WordsPullUp
            text="friendly experiences. Elora and Eluna offer direct access to the vibrant"
            className="hidden sm:block text-sm sm:text-xl 2xl:text-3xl font-normal text-[#9D7958] sm:text-[#F3F0E8]"
          />
          <WordsPullUp
            text="energy of Kota Kasablanka—where everything you need is within reach."
            className="hidden sm:block text-sm sm:text-xl 2xl:text-3xl font-normal text-[#9D7958] sm:text-[#F3F0E8] mb-16"
          />
          <FadeSlide className="sm:hidden ml-10  text-sm sm:text-xl 2xl:text-3xl font-normal text-[#9D7958] sm:text-[#F3F0E8]">
            Steps away from world-class fashion, dining, entertainment, and
            family-friendly experiences. Elora and Eluna offer direct access to
            the vibrant energy of Kota Kasablanka—where everything you need is
            within reach.
          </FadeSlide>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
