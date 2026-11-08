import hero_background from "@/app/assets/the-design/hero_background.webp";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import illustration_bottom from "@/app/assets/home/illustration_bottom.webp";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative xl:flex xl:flex-col xl:aspect-video overflow-hidden bg-[#464948]">
      <FadeSlide direction="right" className="absolute z-20 top-[55%] sm:top-20 left-0 -translate-y-3/5 sm:translate-y-0 -translate-x-[55%] scale-y-[-1] scale-x-[-1] w-72 xl:w-96 2xl:w-130">
        <Image src={illustration_bottom} alt="" sizes="(min-width: 1920px) 520px, (min-width: 1280px) 384px, 288px" />
      </FadeSlide>
      <FadeSlide direction="left" className="absolute z-20 bottom-17 sm:bottom-10 right-0 translate-x-2/5 sm:translate-x-1/5 scale-y-[-1] scale-x-[-1] w-72 xl:w-96 2xl:w-130">
        <Image src={illustration_bottom} alt="" sizes="(min-width: 1920px) 520px, (min-width: 1280px) 384px, 288px" />
      </FadeSlide>
      <div className="relative xl:absolute xl:inset-0 z-0 pointer-events-none w-full aspect-video xl:aspect-auto xl:h-full mt-14 sm:mt-18 xl:mt-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/0">
        <Image
          src={hero_background}
          alt="Aerial night view of Kota Kasablanka in South Jakarta"
          width={2000}
          height={2000}
          className="w-full h-full object-cover object-top"
          sizes="100vw"
          priority
        />
      </div>
      <div className="relative z-10 xl:z-20 px-5 sm:px-10 xl:px-48 w-full xl:flex-1 xl:pt-24 xl:pb-16 flex flex-col justify-end items-start">
        <div className="py-8 xl:py-0">
          <WordsPullUp
            text="A MASTERPLAN OF"
            className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-light 2xl:font-extralight text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
          />
          <WordsPullUp
            text="INTEGRATED LIVING"
            className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium sm:font-bold 2xl:font-medium text-[#F3F0E8] tracking-widest ml-10 sm:ml-0 lg:ml-[5vw] mb-6 sm:mb-16 md:mb-10 xl:mb-8"
          />

          <WordsPullUp
            text="The Kota Kasablanka master plan is a meticulously designed urban "
            className="hidden xl:block text-sm sm:text-lg lg:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#F3F0E8]"
          />
          <WordsPullUp
            text="tapestry, harmonizing luxury, convenience, and connectivity in Jakarta's"
            className="hidden xl:block text-sm sm:text-lg lg:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#F3F0E8]"
          />
          <WordsPullUp
            text="thriving business district."
            className="hidden xl:block text-sm sm:text-lg lg:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#F3F0E8] mb-16"
          />
          <FadeSlide className="xl:hidden text-sm sm:text-lg lg:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#F3F0E8]">
            The Kota Kasablanka master plan is a meticulously designed urban
            tapestry, harmonizing luxury, convenience, and connectivity in
            Jakarta's thriving business district.
          </FadeSlide>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
