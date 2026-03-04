"use client";
import Image from "next/image";
import eluna from "@/app/assets/eluna_gold.svg";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import arrow from "@/app/assets/home/arrow.png";
import { useRef, useState } from "react";
import { FadeSlide } from "@/components/animation/fade-slide";
import facilities1 from "@/app/assets/facilities/lists/Facilities-01---Private-Dining.jpg";
import facilities2 from "@/app/assets/facilities/lists/Facilities-02---Main-Lobby.jpg";
import facilities3 from "@/app/assets/facilities/lists/Facilities-03---Lobby-Lounge.jpg";
import facilities4 from "@/app/assets/facilities/lists/Facilities-04---Library.jpg";
import facilities5 from "@/app/assets/facilities/lists/Facilities-05---Function-Hall.jpg";
import facilities6 from "@/app/assets/facilities/lists/Facilities-06---Pool-Lounge.jpg";
import facilities18 from "@/app/assets/facilities/lists/Facilities-18---Play-Area.jpg";
import facilities19 from "@/app/assets/facilities/lists/Facilities-19---Sky-View-Terrace.jpg";
import facilities20 from "@/app/assets/facilities/lists/Facilities-20---Zen-Garden.jpg";

const DesignSection = () => {
  const listFacilities = [
    {
      name: "Main Lobby",
      image: facilities2,
      description:
        "Step into a world of sophistication, where every detail reflects timeless luxury. The journey begins with an arrival designed to inspire.",
      floor: "GF",
      pangkat: "",
    },
    {
      name: "Lobby Lounge",
      image: facilities3,
      description:
        "A serene welcome, where graceful design meets quiet luxury. The perfect beginning to a tranquil retreat.",
      floor: "GF",
      pangkat: "",
    },
    {
      name: "Library",
      image: facilities4,
      description:
        "A balanced space for mind. Reflect in quiet sophistication.",
      floor: "GF",
      pangkat: "",
    },

    {
      name: "Private Dining",
      image: facilities1,
      description:
        "A secluded space where connection deepens and every moment feels more personal. Perfect for sharing stories, celebrating quietly, and enjoying time without distraction.",
      floor: "01",
      pangkat: "ST",
    },
    {
      name: "Pool Lounge",
      image: facilities6,
      description:
        "An oasis of calm, where comfort meets style. Relax, unwind, and soak in the serene ambiance.",
      floor: "01",
      pangkat: "ST",
    },
    {
      name: "Function Hall",
      image: facilities5,
      description:
        "A versatile space where moments come together with ease and intention. Designed to host gatherings, celebrations, and meaningful connections in a refined setting.",
      floor: "01",
      pangkat: "ST",
    },

    {
      name: "Play Area",
      image: facilities18,
      description:
        "A lively space in the sky, blending fun and relaxation. Perfect for moments of connections and entertainment.",
      floor: "20",
      pangkat: "TH",
    },
    {
      name: "Sky View Terrace",
      image: facilities19,
      description:
        "An elevated space where open skies and distant horizons create a sense of calm. Designed for quiet moments, gentle gatherings, and a renewed perspective above it all.",
      floor: "20",
      pangkat: "TH",
    },
    {
      name: "Zen Garden",
      image: facilities20,
      description:
        "A tranquil sanctuary where stillness invites reflection and the mind finds clarity. Designed for quiet moments, gentle pauses, and a deeper sense of balance.",
      floor: "20",
      pangkat: "TH",
    },
  ];
  const [active, setActive] = useState(listFacilities[0]);
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
      className="relative bg-[#464948] min-h-screen py-16 lg:py-32 flex flex-col justify-between items-center gap-14 sm:gap-24"
    >
      <div className="px-5 sm:px-10 xl:px-48 space-y-8 w-full">
        <WordsPullUp
          text="THE DESIGN"
          className="font-medium tracking-widest text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl text-[#F3F0E8]"
        />
        <FadeSlide className="flex flex-col lg:flex-row justify-between w-full items-start gap-10 lg:gap-32 xl:gap-32">
          <Image
            src={eluna}
            alt=""
            className="w-fit h-12 lg:h-14 xl:h-16 2xl:h-20"
          />
          <p className="text-base sm:text-lg xl:text-xl font-normal 2xl:font-light w-full text-[#F3F0E8] max-w-xl 2xl:max-w-3xl">
            WHERE ELEGANCE BECOMES A WAY OF LIFE BLENDING TRANQUILITY, COMFORT,
            AND A REFINED AESTHETIC INTO YOUR DAILY RHYTHM.
          </p>
        </FadeSlide>
      </div>
      <div className="relative w-full bg-white">
        <div className="flex justify-start items-start absolute top-0 right-0">
          <WordsPullUp
            text={active.floor}
            className="text-7xl sm:text-9xl md:text-[170px] lg:text-[200px] xl:text-[260px] leading-[0.87] text-[#F3F0E8]"
          />
          <WordsPullUp
            text={active.pangkat}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-light leading-[0.87] text-[#F3F0E8]"
          />
        </div>
        <Image
          src={active.image}
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="px-5 sm:px-10 xl:px-48 space-y-16 w-full min-h-96 flex flex-col justify-between items-center">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-6 lg:gap-3">
          <div className="flex lg:flex-col justify-center items-start w-fit gap-3 lg:gap-0">
            <WordsPullUp
              direction="left"
              text={active.name.split(" ")[0]}
              className="text-[#F3F0E8] font-light 2xl:font-extralight text-3xl sm:text-5xl xl:text-6xl tracking-widest uppercase"
            />
            <WordsPullUp
              direction="left"
              text={active.name.split(" ").slice(1).join(" ")}
              className="text-[#F3F0E8] font-medium 2xl:font-normal text-3xl sm:text-5xl xl:text-6xl tracking-widest xl:mr-20 uppercase"
            />
          </div>
          <FadeSlide className="text-base sm:text-lg xl:text-xl font-normal 2xl:font-light w-fit max-w-xl 2xl:max-w-3xl text-[#F3F0E8]">
            {active.description}
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

          <div className="block xl:hidden pointer-events-none absolute -left-1 top-0 h-full w-16 sm:w-24 z-10 bg-linear-to-r from-[#464948] to-transparent" />
          <div className="block xl:hidden pointer-events-none absolute -right-1 top-0 h-full w-16 sm:w-24 z-10 bg-linear-to-l from-[#464948] to-transparent" />

          <div
            ref={scrollRef}
            className="flex justify-start items-center gap-12 overflow-hidden no-scrollbar px-[16vw] sm:px-0 transition-all duration-300 ease-in-out"
          >
            {listFacilities.map((facilities) => (
              <div
                onClick={() => setActive(facilities)}
                className="relative flex justify-center items-center aspect-video h-32 sm:h-45 2xl:h-80 transition-all duration-300 ease-in-out cursor-pointer p-px bg-transparent hover:bg-white"
              >
                <Image
                  src={facilities.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 text-[#F3F0E8] text-xl">
                  {facilities.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
