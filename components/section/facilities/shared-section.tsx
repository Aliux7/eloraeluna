"use client"
import Image from "next/image";
import facilities_background from "@/app/assets/home/facilities_background.png";
import lobby from "@/app/assets/facilities/lobby.jpg";
import pool from "@/app/assets/facilities/pool.jpg";
import dining from "@/app/assets/facilities/dining.jpg";
import gym from "@/app/assets/facilities/gym.jpg";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import arrow from "@/app/assets/arrow_gold.svg";
import { useRef } from "react";
import { FadeSlide } from "@/components/animation/fade-slide";

const SharedSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const firstItem = container.children[0] as HTMLElement;

    const itemWidth = firstItem.offsetWidth;
    const gap = 48; // gap-12 = 3rem = 48px

    const scrollAmount = itemWidth + gap;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <section
      id="design-section"
      className="relative bg-[#F3F0E8] min-h-screen py-16 lg:py-32 flex flex-col justify-between items-center gap-14"
    >
      <div className="px-5 sm:px-10 xl:px-48 space-y-8 flex flex-col lg:flex-row justify-between items-start w-full gap-0 lg:gap-20">
        <div>
          <WordsPullUp
            text="SHARED"
            className="text-3xl sm:text-5xl lg:text-6xl 3xl:text-7xl font-extralight text-[#9D7958] tracking-widest"
          />
          <WordsPullUp
            text="FACILITIES"
            className="text-3xl sm:text-5xl lg:text-6xl 3xl:text-7xl font-normal text-[#9D7958] tracking-widest ml-14 sm:ml-20"
          />
        </div>
        <FadeSlide className="text-2xl 3xl:text-3xl max-w-lg text-[#9D7958]">
          WHERE two worlds meet—spaces designed to connect, inspire, and elevate
          the everyday.
        </FadeSlide>
      </div>
      <div className="relative w-full bg-white">
        <div className="flex justify-start items-start absolute top-10 right-5 sm:right-10">
          <WordsPullUp
            text="01"
            className="text-9xl md:text-[170px] lg:text-[200px] xl:text-[260px] leading-[0.9] text-[#F3F0E8]"
          />
          <WordsPullUp
            text="ST"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-light text-[#F3F0E8]"
          />
        </div>
        <Image
          src={facilities_background}
          alt=""
          className="w-full h-140 3xl:h-230 object-cover"
        />
      </div>
      <div className="px-5 sm:px-10 xl:px-48 space-y-8 lg:space-y-16 w-full pt-8">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-2">
          <div className="flex flex-row lg:flex-col justify-center items-start w-fit gap-4">
            <WordsPullUp
              direction="left"
              text="LAGOON"
              className="text-[#A4704F] font-light text-3xl sm:text-5xl xl:text-6xl 3xl:text-7xl tracking-wider"
            />
            <WordsPullUp
              direction="left"
              text="POOL"
              className="text-[#A4704F] font-medium text-3xl sm:text-5xl xl:text-6xl 3xl:text-7xl tracking-wider xl:mr-20"
            />
          </div>
          <FadeSlide className="text-[22px] 3xl:text-3xl w-fit max-w-2xl text-[#A4704F] font-medium">
            A serene pool extension blending tranquil waters with natural
            charm—perfect for peaceful relaxation.
          </FadeSlide>
        </div>
        <div className="relative w-full">
          <Image
            src={arrow}
            alt=""
            onClick={() => scroll("left")}
            className="absolute top-1/2 -translate-y-1/2 left-0 xl:-left-16 cursor-pointer scale-70 sm:scale-100 z-20 opacity-50 hover:opacity-100"
          />
          <Image
            src={arrow}
            alt=""
            onClick={() => scroll("right")}
            className="absolute top-1/2 -translate-y-1/2 right-0 xl:-right-16 rotate-180 cursor-pointer scale-70 sm:scale-100 z-20 opacity-50 hover:opacity-100"
          />

          <div className="block xl:hidden pointer-events-none absolute -left-1 top-0 h-full w-16 sm:w-24 z-10 bg-linear-to-r from-[#F3F0E8] to-transparent" />
          <div className="block xl:hidden pointer-events-none absolute -right-1 top-0 h-full w-16 sm:w-24 z-10 bg-linear-to-l from-[#F3F0E8] to-transparent" />

          <div
            ref={scrollRef}
            className="flex justify-start items-center gap-12 overflow-hidden no-scrollbar px-[16vw] sm:px-0 transition-all duration-300 ease-in-out"
          >
            <FadeSlide className="relative flex justify-center items-center aspect-video h-32 sm:h-45 3xl:h-80 transition-all duration-300 ease-in-out">
              <Image
                src={lobby}
                alt=""
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 text-[#F3F0E8] text-xl">
                Lobby Lounge
              </span>
            </FadeSlide>
            <FadeSlide className="relative flex justify-center items-center aspect-video h-32 sm:h-45 3xl:h-80 transition-all duration-300 ease-in-out">
              <Image src={pool} alt="" className="w-full h-full object-cover" />
              <span className="absolute bottom-1 text-[#F3F0E8] text-xl">
                Pool Lounge
              </span>
            </FadeSlide>
            <FadeSlide className="relative flex justify-center items-center aspect-video h-32 sm:h-45 3xl:h-80 transition-all duration-300 ease-in-out">
              <Image
                src={dining}
                alt=""
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 text-[#F3F0E8] text-xl">
                Private Dining
              </span>
            </FadeSlide>
            <FadeSlide className="relative flex justify-center items-center aspect-video h-32 sm:h-45 3xl:h-80 transition-all duration-300 ease-in-out">
              <Image src={gym} alt="" className="w-full h-full object-cover" />
              <span className="absolute bottom-1 text-[#F3F0E8] text-xl">
                GYM
              </span>
            </FadeSlide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SharedSection;
