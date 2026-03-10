"use client";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import arrow from "@/app/assets/arrow_gold.svg";
import { useRef, useState } from "react";
import { FadeSlide } from "@/components/animation/fade-slide";
import facilities1 from "@/app/assets/facilities/lists/Facilities-01---Private-Dining.jpg";
import facilities2 from "@/app/assets/facilities/lists/Facilities-02---Main-Lobby.jpg";
import facilities3 from "@/app/assets/facilities/lists/Facilities-03---Lobby-Lounge.jpg";
import facilities4 from "@/app/assets/facilities/lists/Facilities-04---Library.jpg";
import facilities5 from "@/app/assets/facilities/lists/Facilities-05---Function-Hall.jpg";
import facilities6 from "@/app/assets/facilities/lists/Facilities-06---Pool-Lounge.jpg";
import facilities7 from "@/app/assets/facilities/lists/Facilities-07---Blue-Lagoon.jpg";
import facilities8 from "@/app/assets/facilities/lists/Facilities-08---Lagoon-Pool.jpg";
import facilities9 from "@/app/assets/facilities/lists/Facilities-09---Cabana.jpg";
import facilities10 from "@/app/assets/facilities/lists/Facilities-10---Sunken-Lounge.jpg";
import facilities11 from "@/app/assets/facilities/lists/Facilities-11---BBQ-Lawn.jpg";
import facilities12 from "@/app/assets/facilities/lists/Facilities-12---Kids-Pool-&-Playgrounds.jpg";
import facilities13 from "@/app/assets/facilities/lists/Facilities-13---Kids-Room.jpg";
import facilities14 from "@/app/assets/facilities/lists/Facilities-14---Gym.jpg";
import facilities15 from "@/app/assets/facilities/lists/Facilities-15---Padel-Court.jpg";
import facilities16 from "@/app/assets/facilities/lists/Facilities-16---Jogging-Track.jpg";
import facilities17 from "@/app/assets/facilities/lists/Facilities-17---Pet-Park.jpg";
import facilities18 from "@/app/assets/facilities/lists/Facilities-18---Play-Area.jpg";
import facilities19 from "@/app/assets/facilities/lists/Facilities-19---Sky-View-Terrace.jpg";
import facilities20 from "@/app/assets/facilities/lists/Facilities-20---Zen-Garden.jpg";

const SharedSection = () => {
  const listFacilities = [
    {
      name: "Lagoon Pool",
      image: facilities8,
      description:
        "A serene extension of the pool, where tranquil waters and natural charm come together. Perfect for relaxing in harmony with the surroundings.",
      floor: "GF",
      pangkat: "",
    },
    {
      name: "Blue Lagoon",
      image: facilities7,
      description:
        "Where the horizon blurs, and serenity flows endlessly. A space to escape, reflect, and rejuvenate.",
      floor: "GF",
      pangkat: "",
    },
    {
      name: "Cabana",
      image: facilities9,
      description:
        "A serene escape with a touch of social charm. Relax, connect, and unwind in shaded elegance by the water.",
      floor: "GF",
      pangkat: "",
    },
    {
      name: "BBQ Lawn",
      image: facilities11,
      description:
        "A space to connect, unwind, and create lasting memories by the water. Where moments of joy and togetherness come to life.",
      floor: "GF",
      pangkat: "",
    },
    {
      name: "Kids Pool & Playground",
      image: facilities12,
      description:
        "A world of play and imagination, where laughter echoes and endless adventures await. Designed for the joy of every little explorer.",
      floor: "GF",
      pangkat: "",
    },
    {
      name: "Kids Room",
      image: facilities13,
      description:
        "A playful haven where imagination comes to life and creativity knows no bounds. A space for little ones to explore, learn, and create joyful moments in comfort and safety.",
      floor: "GF",
      pangkat: "",
    },
    {
      name: "Gym",
      image: facilities14,
      description:
        "A space where movement flows naturally and strength is built with intention. Designed to restore balance, energize the body, and elevate your daily rhythm",
      floor: "GF",
      pangkat: "",
    },
    {
      name: "Padel Court",
      image: facilities15,
      description:
        "Where movement meets connection in a lively yet balanced rhythm. A space to play, engage, and share moments of energy in a relaxed, social setting.",
      floor: "GF",
      pangkat: "",
    },
    {
      name: "Jogging Track",
      image: facilities16,
      description:
        "A gentle path where movement flows in harmony with nature. Designed for mindful strides, quiet moments, and a refreshing rhythm to start or end the day.",
      floor: "GF",
      pangkat: "",
    },

    {
      name: "Pet Park",
      image: facilities17,
      description:
        "A welcoming green space where pets can roam freely and moments of joy unfold naturally. Designed for play, connection, and shared time in a relaxed outdoor setting.",
      floor: "P12",
      pangkat: "",
    },
    {
      name: "Sunken Lounge",
      image: facilities10,
      description: "",
      floor: "",
      pangkat: "",
    },
  ];
  const [active, setActive] = useState(listFacilities[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const firstItem = container.children[0] as HTMLElement;

    const itemWidth = firstItem.offsetWidth;
    const gap = 48;

    const scrollAmount = itemWidth + gap;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <section
      id="design-section"
      className="relative bg-[#F3F0E8] min-h-screen py-16 lg:py-32 flex flex-col justify-between items-center gap-14  sm:gap-24"
    >
      <div className="px-5 sm:px-10 xl:px-48 space-y-8 flex flex-col lg:flex-row justify-between items-start w-full gap-0 lg:gap-20">
        <div>
          <WordsPullUp
            text="SHARED"
            className="text-3xl sm:text-5xl lg:text-6xl font-extralight text-[#9D7958] tracking-widest"
          />
          <WordsPullUp
            text="FACILITIES"
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#9D7958] tracking-widest ml-14 sm:ml-20"
          />
        </div>
        <FadeSlide className="text-base sm:text-lg xl:text-xl 2xl:text-xl w-full font-normal 2xl:font-light text-[#9D7958] max-w-xl 2xl:max-w-3xl">
          WHERE two worlds meet—spaces designed to connect, inspire, and elevate
          the everyday.
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
      <div className="px-5 sm:px-10 xl:px-48 space-y-8 lg:space-y-16 w-full min-h-96 flex flex-col justify-between items-center">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-2">
          <div className="flex lg:flex-col justify-center items-start w-fit gap-3 lg:gap-0">
            <WordsPullUp
              direction="left"
              text={active.name.split(" ")[0]}
              className="text-[#A4704F] font-light 2xl:font-extralight text-3xl sm:text-5xl xl:text-6xl tracking-widest uppercase"
            />
            <WordsPullUp
              direction="left"
              text={active.name.split(" ").slice(1).join(" ")}
              className="text-[#A4704F] font-medium 2xl:font-normal text-3xl sm:text-5xl xl:text-6xl tracking-widest xl:mr-20 uppercase"
            />
          </div>
          <FadeSlide className="text-base sm:text-lg xl:text-xl 2xl:font-light w-fit max-w-xl 2xl:max-w-3xl text-[#A4704F]">
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
            {listFacilities.map((facilities) => (
              <div
                onClick={() => setActive(facilities)}
                className="relative flex justify-start items-center aspect-video h-32 sm:h-45 2xl:h-80 transition-all duration-300 ease-in-out cursor-pointer p-px bg-transparent hover:bg-[#464948]"
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

export default SharedSection;
