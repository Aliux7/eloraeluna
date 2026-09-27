"use client";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import map from "@/app/assets/the-design/map_design.png";
import eluna_gold from "@/app/assets/eluna_gold.svg";
import elora_gold from "@/app/assets/elora_gold.svg";
import eluna from "@/app/assets/the-design/eluna.svg";
import elora from "@/app/assets/the-design/elora.svg";
import { useState } from "react";
import ImageZoom from "@/components/ui/image-zoom";
import { units, elunaStructure, type StructureNode } from "@/constants/eluna-structure";

const MapSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [elunaElora, setElunaElora] = useState(true);
  const [activeUnit, setActiveUnit] = useState(units[0]);

  return (
    <section
      id="design-section"
      className="relative bg-[#464948] min-h-screen px-5 sm:px-10 xl:px-48 py-32"
    >
      <div className="relative z-10 flex flex-col justify-between items-start gap-2 sm:gap-4">
        <WordsPullUp
          text="WHERE TRANQUILITY MEETS"
          className="hidden sm:block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-[#F3F0E8] tracking-widest"
        />
        <WordsPullUp
          text="CONTEMPORARY GLAMOUR"
          className="hidden sm:block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium 2xl:font-normal text-[#F3F0E8] tracking-widest ml-0 lg:ml-20 mb-6 sm:mb-10"
        />
        <WordsPullUp
          text="WHERE TRANQUILITY"
          className="sm:hidden text-3xl sm:text-5xl lg:text-6xl font-extralight text-[#F3F0E8] tracking-widest"
        />
        <div className="flex justify-start items-center gap-3">
          <WordsPullUp
            text="MEETS"
            className="sm:hidden text-3xl sm:text-5xl lg:text-6xl font-extralight text-[#F3F0E8] tracking-widest"
          />
          <WordsPullUp
            text="CONTEMPORARY"
            className="sm:hidden text-3xl md:text-5xl lg:text-6xl font-medium 2xl:font-normal text-[#F3F0E8] tracking-widest"
          />
        </div>
        <WordsPullUp
          text="GLAMOUR"
          className="sm:hidden text-3xl md:text-5xl lg:text-6xl font-medium 2xl:font-normal text-[#F3F0E8] tracking-widest ml-auto lg:ml-20 mb-6 sm:mb-10"
        />
        <FadeSlide className="text-[#F3F0E8] font-normal 2xl:font-light text-lg sm:text-xl mb-14 lg:mb-16 max-w-sm sm:max-w-md 2xl:max-w-lg">
          Eluna & Elora is a refined sanctuary in the sky—where serene design
          and elevated living come together in quiet splendor.
        </FadeSlide>
        <div className="flex justify-between items-center w-full gap-5 sm:gap-10 lg:gap-28">
          <FadeSlide
            onClick={() => setElunaElora(true)}
            className={`${elunaElora ? "border-[#9D7958]" : "hover:border-[#9D7958] border-[#202020]/50"} relative group border h-10 sm:h-18 w-full flex justify-center items-center cursor-pointer duration-200 transition-all ease-in-out`}
          >
            {elunaElora ? (
              <Image
                src={eluna_gold}
                alt=""
                className="absolute w-24 lg:w-32 xl:w-44"
              />
            ) : (
              <div>
                <Image
                  src={eluna}
                  alt=""
                  className="absolute left-1/2 top-1/2 -translate-1/2 w-24 lg:w-32 xl:w-44 opacity-50 group-hover:opacity-0 transition-opacity duration-200 ease-in-out"
                />

                <Image
                  src={eluna_gold}
                  alt=""
                  className="absolute left-1/2 top-1/2 -translate-1/2  w-24 lg:w-32 xl:w-44 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
                />
              </div>
            )}
          </FadeSlide>
          <FadeSlide
            onClick={() => setElunaElora(false)}
            className={`${!elunaElora ? "border-[#9D7958]" : "hover:border-[#9D7958] border-[#1D2025]/50"} relative group border w-full flex justify-center items-center opacity-30 h-10 sm:h-18 cursor-pointer transition-all duration-200 ease-in-out`}
          >
            {!elunaElora ? (
              <div className="flex justify-center items-center gap-3">
                <Image
                  src={elora_gold}
                  alt=""
                  className="w-24 lg:w-32 xl:w-44"
                />

                <WordsPullUp
                  text="Coming Soon Phase 2"
                  className="hidden sm:block text-xs md:text-sm lg:text-xl text-[#9D7958]"
                />
              </div>
            ) : (
              <div>
                <Image
                  src={elora}
                  alt=""
                  className="absolute left-1/2 top-1/2 -translate-1/2 w-24 lg:w-32 xl:w-44 opacity-50 group-hover:opacity-0 transition-opacity duration-200 ease-in-out"
                />

                <Image
                  src={elora_gold}
                  alt=""
                  className="absolute left-1/2 top-1/2 -translate-1/2  w-24 lg:w-32 xl:w-44 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
                />
              </div>
            )}
          </FadeSlide>
        </div>
        <div className="mt-11.5 flex flex-col justify-center items-center w-full gap-4.5">
          <h1 className="text-center uppercase font-semibold text-[28px] leading-7.5 tracking-[0.2em] text-[#F3F0E8]">
            {elunaStructure.label} Floorplan Typical
          </h1>
          <div className="grid grid-cols-2 sm:flex justify-center items-center gap-3 sm:gap-7 w-full sm:w-auto">
            {(elunaStructure.children as StructureNode[]).map((node) => (
              <div
                key={node.id}
                className="cursor-pointer h-9 sm:h-11.25 w-full sm:w-25 bg-[#F3F0E8] border border-[#9D7958] text-[#9D7958] text-center uppercase font-medium text-sm sm:text-[20px] leading-none flex items-center justify-center"
              >
                {node.label}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8">
          <div className="relative w-full h-auto mt-10 flex flex-col justify-center items-center gap-8">
            <div className="relative w-full h-full flex justify-center items-center mx-auto">
              <ImageZoom src={map.src} alt="Map" />
            </div>
            <div className="flex justify-center items-center gap-10 sm:gap-20">
              <div className="flex items-center gap-3">
                <div className="size-6 sm:size-8 border border-[#AA7A56] bg-[#D4D0CA]" />
                <span className="text-[#AA7A56] text-sm sm:text-base font-semibold tracking-widest">
                  2 BEDROOM
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-6 sm:size-8 border border-[#AA7A56] bg-[#EDE3DC]" />
                <span className="text-[#AA7A56] text-sm sm:text-base font-semibold tracking-widest">
                  3 BEDROOM
                </span>
              </div>
            </div>
            <div
              className={`${!elunaElora ? "opacity-100 " : "opacity-0  pointer-events-none "} select-none z-10 flex justify-center items-center absolute w-full h-full bg-[#464948]/90 top-0 right-0 transition-all duration-500 ease-in-out`}
            >
              <WordsPullUp
                text="Coming Soon Phase 2"
                className="text-3xl sm:text-5xl lg:text-7xl text-[#9D7958]"
              />
            </div>
          </div>
          <div className="mt-20 sm:mt-12 flex flex-col justify-start items-start w-full h-fit">
            <WordsPullUp
              text="ELUNA FLOORPLAN TYPICAL 2-35"
              className="hidden sm:block pr-5 sm:pr-0 mb-10 font-semibold 2xl:font-normal text-2xl md:text-3xl 2xl:text-[32px] tracking-widest text-[#F3F0E8]"
            />
            <div className="relative flex flex-col-reverse lg:flex-row justify-between w-full h-full gap-10 sm:gap-16 xl:gap-32">
              <div className="sm:w-100">
                <div className="py-3">
                  <FadeSlide>
                    <button
                      onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                      className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer"
                    >
                      <h3 className="text-lg 2xl:text-xl font-medium text-white tracking-widest p-1">
                        M1 - M6
                      </h3>
                      <div className="mr-2 mt-1 text-xl font-light transition-transform duration-300">
                        <div
                          className={`${openIndex === 0 ? "rotate-135" : "-rotate-45"} border-l border-b border-white w-2.5 h-2.5`}
                        ></div>
                      </div>
                    </button>
                  </FadeSlide>

                  {/* <FadeSlide
                    className={`overflow-auto transition-all duration-300 ease-in-out pl-16 ${openIndex === 0 ? "opacity-100 mt-3" : "max-h-0 opacity-0"}`}
                  >
                    {units.map((unit) => (
                      <button
                        key={unit.code}
                        id={unit.code}
                        onClick={() => setActiveUnit(unit)}
                        className={`${activeUnit.code === unit.code ? "bg-[#AA7A56]" : "bg-transparent hover:bg-white/5"} w-full flex justify-between items-center text-left border-b border-white cursor-pointer px-3 py-3 text-white 2xl:text-lg`}
                      >
                        UNIT {unit.code}
                      </button>
                    ))}
                  </FadeSlide> */}
                </div>

                <div className="py-3">
                  <FadeSlide>
                    <button
                      onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                      className="w-full flex justify-between items-center text-left border-b border-white cursor-pointer"
                    >
                      <h3 className="text-lg 2xl:text-xl font-medium text-white tracking-widest p-1">
                        2<sup>nd</sup> - 35<sup>th</sup> Floor
                      </h3>
                      <div className="mr-2 mt-1 text-xl font-light transition-transform duration-300">
                        <div
                          className={`${openIndex === 1 ? "rotate-135 " : "-rotate-45"} border-l border-b border-white w-2.5 h-2.5`}
                        ></div>
                      </div>
                    </button>
                  </FadeSlide>

                  <FadeSlide
                    className={`overflow-auto transition-all duration-300 ease-in-out pl-16 grid grid-cols-2 grid-flow-col gap-x-4 ${openIndex === 1 ? "opacity-100 mt-3" : "max-h-0 opacity-0"}`}
                    style={{
                      gridTemplateRows: `repeat(${Math.ceil(units.length / 2)}, auto)`,
                    }}
                  >
                    {units.map((unit) => (
                      <button
                        key={unit.index}
                        id={unit.index}
                        onClick={() => setActiveUnit(unit)}
                        className={`${activeUnit.index === unit.index ? "bg-[#AA7A56]" : "bg-transparent hover:bg-white/5"} w-full flex justify-start items-center text-left border-b border-white cursor-pointer px-3 py-3 gap-2  text-white 2xl:text-lg`}
                      >
                        <div
                          className={`${activeUnit.index === unit.index ? "bg-white text-[#AA7A56]" : "bg-[#AA7A56] text-white"} size-6 flex justify-center items-center rounded-full`}
                        >
                          <span className="translate-px text-xs font-medium">
                            {unit.index}
                          </span>
                        </div>
                        <span className="pt-1">UNIT {unit.code}</span>
                      </button>
                    ))}
                  </FadeSlide>
                </div>
              </div>

              <WordsPullUp
                text="ELUNA FLOORPLAN TYPICAL 2-35"
                className="sm:hidden pr-5 sm:pr-0 mt-10 sm:mt-0 sm:mb-10 font-semibold text-2xl md:text-3xl 2xl:text-4xl tracking-widest text-[#F3F0E8]"
              />
              <FadeSlide className="relative flex-1 w-full h-fit sm:border-x-2 border-[#AA7A56] sm:p-10 2xl:px-20 flex flex-col gap-10">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col w-full">
                    <h1 className="text-2xl xl:text-3xl 2xl:text-4xl tracking-widest text-[#AA7A56] font-medium">
                      TYPE{" "}
                      <span className="text-4xl xl:text-5xl 2xl:text-6xl font-semibold">
                        {activeUnit.code}
                      </span>
                    </h1>
                    <h3 className="text-[#AA7A56] text-xs sm:text-base 2xl:text-2xl">
                      Semi Gross Area - {activeUnit.grossArea} M<sup>2</sup>
                    </h3>
                    <h3 className="text-[#AA7A56] text-xs sm:text-base 2xl:text-2xl">
                      Net Area - {activeUnit.netArea} M<sup>2</sup>
                    </h3>
                  </div>
                  <div className="w-full h-auto">
                    <Image
                      src={activeUnit.pathMap}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="relative px-0 w-full h-full mt-20 scale-none">
                  <ImageZoom src={activeUnit.pathUnit.src} alt="Map" />
                </div>
              </FadeSlide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
