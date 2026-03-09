"use client";
import hero_background from "@/app/assets/home/hero_background.jpg";
import Image from "next/image";
import arrow from "@/app/assets/home/arrow.png";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { LinkPullUp } from "@/components/animation/link-pull-up";
import { SwipeShiftButton } from "@/components/ui/swipeable-button";

const HeroSection = () => { 
  return (
    <section
      id="hero-section"
      className="relative sm:min-h-screen bg-[#464948]"
    >
      <div className="relative sm:absolute inset-0 z-0 pointer-events-none top-0 w-full pt-14 sm:pt-0 h-96 sm:h-screen overflow-hidden overlay-hero after:content-[''] after:absolute after:inset-0 after:bg-linear-to-tr after:from-black/40 after:to-transparent after:pointer-events-none after:select-none">
        <Image
          src={hero_background}
          alt=""
          width={2000}
          height={2000}
          className="w-full h-full object-cover object-top"
          priority
        />
        <Image
          src={arrow}
          alt=""
          className="z-20 block sm:hidden absolute top-[60%] sm:top-1/2 -translate-y-1/2 left-5 sm:left-10 xl:left-16 cursor-pointer scale-70 sm:scale-100"
        />
        <Image
          src={arrow}
          alt=""
          className="z-20 block sm:hidden absolute top-[60%] sm:top-1/2 -translate-y-1/2 right-5 sm:right-10 xl:right-16 rotate-180 cursor-pointer scale-70 sm:scale-100"
        />
      </div>
      <Image
        src={arrow}
        alt=""
        className="z-20 hidden sm:block absolute top-[60%] sm:top-1/2 -translate-y-1/2 left-5 sm:left-10 xl:left-16 cursor-pointer scale-70 sm:scale-100"
      />
      <Image
        src={arrow}
        alt=""
        className="z-20 hidden sm:block absolute top-[60%] sm:top-1/2 -translate-y-1/2 right-5 sm:right-10 xl:right-16 rotate-180 cursor-pointer scale-70 sm:scale-100"
      />
      <div className="relative z-10 px-5 sm:px-10 xl:px-48 py-8 sm:py-0 w-full sm:min-h-screen pb-10 lg:pb-16 flex flex-col justify-end items-start ">
        <WordsPullUp
          text="THE ECHOES"
          className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-light 2xl:font-extralight text-[#F3F0E8] tracking-widest mb-2 lg:mb-4"
        />
        <WordsPullUp
          text="OF SPLENDOR"
          className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium sm:font-bold 2xl:font-medium text-[#F3F0E8] tracking-widest ml-20 lg:ml-[10vw] xl:ml-64 mb-6 md:mb-10 xl:mb-14"
        />
        <WordsPullUp
          text="Eluna Is Where Elegance Lingers In Every Detail"
          className="hidden sm:block text-sm sm:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#F3F0E8]"
        />
        <WordsPullUp
          text="— A Quiet Statement Of Timeless Living For"
          className="hidden sm:block text-sm sm:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#F3F0E8]"
        />
        <WordsPullUp
          text="Those Who Seek Undersstand Luxury."
          className="hidden sm:block text-sm sm:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#F3F0E8] mb-16"
        />
        <WordsPullUp
          text="Eluna Is Where Elegance Lingers In Every Detail — A Quiet Statement Of Timeless Living For Those Who Seek Undersstand Luxury."
          className="sm:hidden text-sm sm:text-xl 2xl:text-2xl font-normal 2xl:font-light text-[#F3F0E8] my-16 ml-20"
        />

        <LinkPullUp
          href="/the-design"
          className="hidden sm:flex justify-center items-center cursor-pointer font-medium capitalize text-sm sm:text-base 2xl:text-lg pt-px w-40 sm:w-47.5 2xl:w-60 h-11.25 2xl:h-14 text-[#F3F0E8] border border-[#9D7958] hover:bg-[#F3F0E8]/90 hover:text-[#9D7958] transition-all duration-200 ease-in-out"
        >
          EXPLORE NOW
        </LinkPullUp>
        <SwipeShiftButton href="/the-design">EXPLORE NOW</SwipeShiftButton>
      </div>
    </section>
  );
};

export default HeroSection;
