"use client";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import arrow from "@/app/assets/arrow_gold.svg";
import map from "@/app/assets/location/location_map.svg";
import { LinkPullUp } from "@/components/animation/link-pull-up";
import illustration from "@/app/assets/home/illustration_2.png";
import illustration2 from "@/app/assets/home/illustration.png";
import { useRef } from "react";

const MapSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const wrapper = container.firstElementChild as HTMLElement;
    if (!wrapper) return;

    const firstItem = wrapper.firstElementChild as HTMLElement;
    if (!firstItem) return;

    const gap = 0; 
    const scrollAmount = firstItem.offsetWidth + gap;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="map-section"
      className="relative bg-[#F3F0E8] min-h-screen px-5 sm:px-10 xl:px-48 py-16 lg:py-32 flex flex-col justify-between items-center gap-10 md:gap-14 xl:gap-16 overflow-hidden"
    >
      <FadeSlide
        direction="right"
        className="absolute -top-14 -left-30 lg:left-8 xl:left-20"
      >
        <Image src={illustration} alt="" className="w-40 sm:w-60 md:w-80" />
      </FadeSlide>
      <FadeSlide
        direction="right"
        className="absolute top-40 -right-40 lg:-right-20"
      >
        <Image src={illustration2} alt="" className="w-50 sm:w-70 md:w-90" />
      </FadeSlide>
      <FadeSlide
        direction="right"
        className="absolute top-150 md:top-170 lg:top-230 xl:top-200 -left-40 md:-left-50 lg:-left-32"
      >
        <Image src={illustration2} alt="" className="w-50 sm:w-70 md:w-90" />
      </FadeSlide>
      <div className="flex flex-col justify-center items-center">
        <WordsPullUp
          text="SCULPTED FOR"
          className="text-3xl sm:text-5xl xl:text-6xl font-medium text-[#9D7958]"
        />
        <WordsPullUp
          text="THE SOUL"
          className="text-3xl sm:text-5xl xl:text-6xl font-medium text-[#9D7958]"
        />
      </div>
      <FadeSlide
        direction="left"
        className="relative w-fit max-w-[90vw] sm:max-w-[80vw] flex justify-center items-center z-10 h-fit"
      >
        <Image src={map} alt="" className="w-fit h-fit object-contain border" />
      </FadeSlide>
      <LinkPullUp
        href="#"
        className="flex justify-center items-center cursor-pointer font-medium capitalize sm:text-lg pt-px w-47.5 h-11.25 text-[#9D7958] border border-[#9D7958] hover:bg-[#9D7958]/10 hover:text-[#9D7958] transition-all duration-200 ease-in-out"
      >
        VIEW IN MAPS
      </LinkPullUp>
      <div className="relative w-full px-10 xl:px-0 mt-20">
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
        <WordsPullUp
          text="LEGEND"
          className="text-2xl lg:text-3xl uppercase tracking-[0.5rem] text-[#9D7958] font-semibold"
        />
        <div
          ref={scrollRef}
          className="flex justify-start items-start gap-12 overflow-auto no-scrollbar mt-10 w-full"
        >
          <div className="flex justify-start items-start">
            <div className="w-72">
              <div className="flex items-center justify-start gap-4 mb-3">
                <div className="flex flex-col justify-end items-end gap-1.5">
                  <div className="size-9 bg-[#006174] rounded-full"></div>
                  <div className="w-14 h-2 bg-[#006174] rounded-full"></div>
                </div>
                <span className="text-[#006174] text-lg lg:text-xl font-medium">
                  Commuter Line
                </span>
              </div>

              <div className="text-lg lg:text-xl text-gray-600 space-y-1 mt-8">
                <p>Sudirman & Manggarai</p>
              </div>
            </div>

            <div className="w-72">
              <div className="flex items-center justify-start gap-4 mb-3">
                <div className="flex flex-col justify-end items-end gap-1.5">
                  <div className="size-9 bg-[#79242D] rounded-full"></div>
                  <div className="w-14 h-2 bg-[#79242D] rounded-full"></div>
                </div>
                <span className="text-[#79242D] text-lg lg:text-xl font-medium">
                  LRT
                </span>
              </div>

              <div className="text-lg lg:text-xl text-gray-600 space-y-1 mt-8">
                <p>BNI City</p>
              </div>
            </div>

            <div className="w-72">
              <div className="flex items-center justify-start gap-4 mb-3">
                <div className="flex flex-col justify-end items-end gap-1.5">
                  <div className="size-9 bg-[#304A73] rounded-full"></div>
                  <div className="w-14 h-2 bg-[#304A73] rounded-full"></div>
                </div>
                <span className="text-[#304A73] text-lg lg:text-xl font-medium">
                  MRT
                </span>
              </div>

              <div className="text-lg lg:text-xl text-gray-600 space-y-1 mt-8">
                <p>BNI City</p>
              </div>
            </div>

            <div className="w-72">
              <div className="flex items-center justify-start gap-4 mb-3">
                <div className="flex flex-col justify-end items-end gap-1.5">
                  <div className="size-9 bg-[#304A73] rounded-full"></div>
                  <div className="w-14 h-2 bg-[#304A73] rounded-full"></div>
                </div>
                <span className="text-[#304A73] text-lg lg:text-xl font-medium">
                  MRT
                </span>
              </div>

              <div className="text-lg lg:text-xl text-gray-600 space-y-1 mt-8">
                <p>Kolase Kanisius</p>
                <p>IISS</p>
                <p>JIS Pattimura Elementary</p>
                <p>Al-Azhar</p>
                <p>Taraknita</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
