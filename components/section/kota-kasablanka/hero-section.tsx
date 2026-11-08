import hero_background from "@/app/assets/kota-kasablanka/hero_background.webp";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative xl:flex xl:flex-col xl:aspect-video overflow-hidden bg-[#F3F0E8]"
    >
      <div className="relative xl:absolute xl:inset-0 z-0 pointer-events-none w-full aspect-video xl:aspect-auto xl:h-full mt-14 sm:mt-18 xl:mt-0 overflow-hidden overlay-hero after:content-[''] after:absolute after:inset-0 after:bg-linear-to-tr after:from-black/20 after:to-transparent after:pointer-events-none after:select-none">
        <Image
          src={hero_background}
          alt="Aerial view of Elora and Eluna towers at Kota Kasablanka"
          width={2000}
          height={2000}
          className="w-full h-full object-cover object-top"
          sizes="100vw"
          priority
        />
      </div>
      <div className="relative z-10 px-5 sm:px-10 xl:px-48 w-full xl:flex-1 xl:pt-24 xl:pb-16 flex flex-col justify-end items-start">
        <div className="py-8 xl:py-0">
          <div className="flex justify-start items-center gap-2.5 sm:gap-5">
            <WordsPullUp
              text="A"
              className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-light 2xl:font-extralight text-[#9D7958] xl:text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
            />
            <WordsPullUp
              text="LIFESTYLE"
              className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium 2xl:font-normal text-[#9D7958] xl:text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
            />
          </div>
          <div className="flex justify-start items-center gap-2.5 sm:gap-5 ml-10 sm:ml-0 lg:ml-[5vw]">
            <WordsPullUp
              text="OF"
              className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-light 2xl:font-extralight text-[#9D7958] xl:text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
            />
            <WordsPullUp
              text="DISTINCTION"
              className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium 2xl:font-normal text-[#9D7958] xl:text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
            />
          </div>

          <WordsPullUp
            text="Steps away from world-class fashion, dining, entertainment, and family-"
            className="hidden xl:block text-sm sm:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#9D7958] xl:text-[#F3F0E8]"
          />
          <WordsPullUp
            text="friendly experiences. Elora and Eluna offer direct access to the vibrant"
            className="hidden xl:block text-sm sm:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#9D7958] xl:text-[#F3F0E8]"
          />
          <WordsPullUp
            text="energy of Kota Kasablanka—where everything you need is within reach."
            className="hidden xl:block text-sm sm:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#9D7958] xl:text-[#F3F0E8] mb-16"
          />
          <FadeSlide className="xl:hidden ml-10  text-sm sm:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#9D7958] xl:text-[#F3F0E8]">
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
