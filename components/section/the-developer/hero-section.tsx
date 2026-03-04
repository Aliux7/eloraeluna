import hero_background from "@/app/assets/the-developer/hero_backgrund.png";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import pakuwon_logo from "@/app/assets/pakuwon_logo.svg";
import { LinkPullUp } from "@/components/animation/link-pull-up";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative min-h-screen bg-[#414242]">
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
          <WordsPullUp
            text="COMMUNITIES THAT"
            className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold 2xl:font-semibold text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
          />
          <WordsPullUp
            text="REDEFINE"
            className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extralight text-[#F3F0E8] tracking-widest mb-3"
          />
          <WordsPullUp
            text="CITY LIVING"
            className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium 2xl:font-normal text-[#F3F0E8] tracking-widest ml-10 sm:ml-0 lg:ml-[5vw] mb-6 sm:mb-8"
          />

          <FadeSlide className="max-w-2xl 2xl:max-w-3xl text-sm sm:text-lg lg:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#F3F0E8] mb-8">
            Continuing to shape Indonesia's skyline, Pakuwon Group leads the
            industry with thoughtful design, cutting-edge innovation, and an
            unwavering commitment to excellence. By crafting spaces that inspire
            and endure, Pakuwon not only builds developments but creates
            enduring legacies in the urban landscape.
          </FadeSlide>

          <FadeSlide
            direction="up"
            className="flex justify-start items-start gap-3 h-10 md:h-13 2xl:h-16 w-fit mb-12"
          >
            <Image
              src={pakuwon_logo}
              alt=""
              className="object-contain w-full h-full"
            />
          </FadeSlide>

          <LinkPullUp
            href="https://www.pakuwon.com/"
            className="flex justify-center items-center cursor-pointer font-medium capitalize text-sm sm:text-base 2xl:text-lg pt-px w-52 2xl:w-70 h-11.25 2xl:h-14 text-[#F3F0E8] border border-[#9D7958] hover:text-[#9D7958] hover:bg-[#F3F0E8] transition-all duration-200 ease-in-out"
          >
            VISIT PAKUWON
          </LinkPullUp>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
