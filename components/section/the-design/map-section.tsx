"use client";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import map from "@/app/assets/the-design/map_design.svg";
import room from "@/app/assets/the-design/room_design.svg";
import mini_map from "@/app/assets/the-design/mini_map.png";
import eluna from "@/app/assets/eluna_gold.svg";
import elora from "@/app/assets/elora.svg";
import { useState } from "react";

const MapSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="design-section"
      className="relative bg-[#464948] min-h-screen px-5 sm:px-10 xl:px-48 py-32"
    >
      <div className="relative z-10 flex flex-col justify-between items-start gap-2 sm:gap-4">
        <WordsPullUp
          text="WHERE TRANQUILITY MEETS"
          className="text-3xl sm:text-5xl lg:text-6xl font-extralight text-[#F3F0E8] tracking-widest"
        />
        <WordsPullUp
          text="CONTEMPORARY GLAMOUR"
          className="text-3xl md:text-5xl lg:text-6xl font-medium text-[#F3F0E8] tracking-widest ml-0 lg:ml-20 mb-6 sm:mb-10"
        />
        <FadeSlide className="text-[#F3F0E8] font-normal text-lg sm:text-xl mb-14 lg:mb-16 max-w-sm">
          Eluna & Elora is a refined sanctuary in the sky—where serene design
          and elevated living come together in quiet splendor.
        </FadeSlide>
        <div className="flex justify-between items-center w-full gap-5 sm:gap-10 lg:gap-28">
          <FadeSlide className="border border-[#9D7958] h-14 sm:h-18 w-full flex justify-center items-center cursor-pointer hover:bg-[#9D7958]/20">
            <Image src={eluna} alt="" className="w-24 lg:w-32 xl:w-44" />
          </FadeSlide>
          <FadeSlide className="border border-[#F3F0E8] w-full flex justify-center items-center opacity-30 h-14 sm:h-18 cursor-pointer hover:border-[#9D7958] hover:bg-[#9D7958]/20">
            <Image src={elora} alt="" className="w-24 lg:w-32 xl:w-44" />
          </FadeSlide>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <Image
            src={map}
            alt=""
            className="w-[80%] mx-auto sm:w-full h-auto object-contain mt-20"
            priority
          />
          <div className="flex justify-center items-center gap-20 ">
            <FadeSlide className="flex justify-center items-center gap-2.5">
              <div className="bg-[#D9D9D9] border border-[#AA7A56] size-6"></div>
              <h1 className="text-[#AA7A56] font-bold text-xs sm:text-sm mt-1">
                2 BEDROOM
              </h1>
            </FadeSlide>
            <FadeSlide className="flex justify-center items-center gap-2.5">
              <div className="bg-[#D9D9D9] border border-[#AA7A56] size-6"></div>
              <h1 className="text-[#AA7A56] font-bold text-xs sm:text-sm mt-1">
                3 BEDROOM
              </h1>
            </FadeSlide>
          </div>
          <div className="mt-12 flex flex-col justify-start items-start w-full h-fit">
            <WordsPullUp
              text="ELUNA FLOORPLAN TYPICAL 2-38"
              className="mb-10 font-semibold text-2xl md:text-3xl tracking-widest text-[#F3F0E8]"
            />
            <div className="relative flex flex-col lg:flex-row justify-between w-full h-full gap-16 xl:gap-32">
              <div className="w-100">
                <div className="py-3">
                  <FadeSlide>
                    <button
                      onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                      className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer"
                    >
                      <h3 className="text-lg font-medium text-white tracking-widest p-1">
                        2<sup>nd</sup> - 19<sup>th</sup> Floor
                      </h3>
                      <div className="mr-2 mt-1 text-xl font-light transition-transform duration-300">
                        <div
                          className={`${openIndex === 0 ? "rotate-135" : "-rotate-45"} border-l border-b border-white w-2.5 h-2.5`}
                        ></div>
                      </div>
                    </button>
                  </FadeSlide>

                  <FadeSlide
                    className={`overflow-auto transition-all duration-300 ease-in-out pl-24 ${openIndex === 0 ? "opacity-100 mt-3" : "max-h-0 opacity-0"}`}
                  >
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 2BA
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 2BB
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 2BC
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 2BD
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 2BE
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 3BA
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 3BB
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 3BC
                    </button>
                  </FadeSlide>
                </div>

                <div className="py-3">
                  <FadeSlide>
                    <button
                      onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                      className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer"
                    >
                      <h3 className="text-lg font-medium text-white tracking-widest p-1">
                        21<sup>st</sup> - 35<sup>th</sup> Floor
                      </h3>
                      <div className="mr-2 mt-1 text-xl font-light transition-transform duration-300">
                        <div
                          className={`${openIndex === 1 ? "rotate-135 " : "-rotate-45"} border-l border-b border-white w-2.5 h-2.5`}
                        ></div>
                      </div>
                    </button>
                  </FadeSlide>

                  <FadeSlide
                    className={`overflow-auto transition-all duration-300 ease-in-out pl-24 ${openIndex === 1 ? "opacity-100 mt-3" : "max-h-0 opacity-0"}`}
                  >
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 2BA
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 2BB
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 2BC
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 2BD
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 2BE
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 3BA
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 3BB
                    </button>
                    <button className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-1 py-3 text-white">
                      UNIT 3BC
                    </button>
                  </FadeSlide>
                </div>
              </div>
              <div className="relative flex-1 w-full h-fit bg-[#333434] p-10 xl:p-20 flex flex-col gap-10">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <h1 className="text-2xl xl:text-3xl tracking-widest text-[#AA7A56] font-medium">
                      TYPE <span className="text-4xl xl:text-5xl font-semibold">2BA</span>
                    </h1>
                    <h3 className="text-[#AA7A56]">
                      Semi Gross Area - 93 M<sup>2</sup>
                    </h3>
                    <h3 className="text-[#AA7A56]">
                      Net Area - 78 M<sup>2</sup>
                    </h3>
                  </div>
                  <Image src={mini_map} alt="" className="w-[30%]" />
                </div>
                <Image src={room} alt="" className="w-full xl:w-[80%] mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
