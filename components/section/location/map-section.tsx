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
  const legends = [
    {
      category: "MRT",
      items: ["BNI City"],
    },
    {
      category: "LRT",
      items: ["BNI City"],
    },
    {
      category: "Mall & Shopping Area",
      items: [
        "Kuningan City",
        "Lotte Shopping Avenue",
        "Pacific Place",
        "Plaza Indonesia",
        "Grand Indonesia",
        "Plaza Senayan",
        "Senayan City",
      ],
    },
    {
      category: "Embassy",
      items: [
        "U.S.A Embassy",
        "Japan Embassy",
        "France Embassy",
        "German Embassy",
        "Russian Federation Embassy",
        "Malaysia Embassy",
        "U.A.E Embassy",
        "P.R.C Embassy",
        "Australia Embassy",
        "British Embassy",
        "Singapore Embassy",
        "Republic of Korea Embassy",
      ],
    },
    {
      category: "School",
      items: [
        "Kolose Kanisius",
        "IISS",
        "JIS Pattimura Elementary",
        "Al-Azhar",
        "Taraknita",
        "Santa Ursula",
      ],
    },
    {
      category: "Commuter Line",
      items: ["Sudirman Station", "Manggarai"],
    },
    {
      category: "Fly Over",
      items: ["Jakarta Inner Ring Road Toll"],
    },
    {
      category: "Hotel",
      items: [
        "Wyndham",
        "Westin",
        "JW Marriott",
        "Ritz-Carlton Mega Kuningan",
        "Ritz-Carlton Pacific Place",
        "Raffles",
        "Grand Melia",
        "The Langham",
        "Hotel Mulia",
        "Le Meridien",
        "Shangri-La",
        "St. Regis",
        "H.I Kempinsky",
        "Grand Hyatt",
        "Park Hyatt",
        "Four Seasons",
      ],
    },
    {
      category: "Hospital",
      items: [
        "MMC",
        "Mayapada Hospital",
        "RS Agung",
        "Brawijaya Hospital",
        "Tebet Hospital",
        "Medistra",
        "MRCC Siloam",
      ],
    },
  ];
  const scrollRef = useRef<HTMLDivElement>(null);
  const isSmall = typeof window !== "undefined" && window.innerWidth >= 640;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const firstItem = container.children[0] as HTMLElement;

    const itemWidth = firstItem.offsetWidth;
    const gap = 0;

    const scrollAmount = itemWidth + gap;

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
          className="text-3xl sm:text-5xl xl:text-6xl 2xl:text-8xl font-medium text-[#9D7958]"
        />
        <WordsPullUp
          text="THE SOUL"
          className="text-3xl sm:text-5xl xl:text-6xl 2xl:text-8xl font-medium text-[#9D7958]"
        />
      </div>
      <FadeSlide
        direction="left"
        className="relative w-full max-w-[90vw] sm:max-w-[70vw] 2xl:max-w-[50vw] flex justify-center items-center z-10 h-fit"
      >
        <Image
          src={map}
          alt=""
          className="w-[85%] 2xl:w-full h-fit object-contain border"
        />
      </FadeSlide>
      <LinkPullUp
        href="https://www.google.com/maps/place/Elora+%26+Eluna/data=!4m2!3m1!1s0x0:0x48f82199a0b90713?sa=X&ved=1t:2428&ictx=111"
        className="flex justify-center items-center cursor-pointer font-medium capitalize sm:text-base 2xl:text-2xl pt-px w-47.5 2xl:w-80 h-11.25 2xl:h-14 text-[#9D7958] border border-[#9D7958] hover:bg-[#9D7958]/10 hover:text-[#9D7958] transition-all duration-200 ease-in-out"
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
          className="flex justify-start items-start gap-0 overflow-hidden no-scrollbar px-0 transition-all duration-300 ease-in-out mt-10"
        >
          {legends.map((legend) => (
            <div 
              style={{
                minWidth: isSmall ? "320px" : "none",
                width: isSmall ? "33.333333%" : "99.9%",
                maxWidth: "500px",
                flexShrink: 0,
              }}
            >
              <div className="flex items-center justify-start gap-4 mb-3">
                <div className="flex flex-col justify-end items-end gap-3">
                  <div className="size-9 bg-[#006174] rounded-full"></div>
                  <div className="w-14 h-2 bg-[#006174] rounded-full"></div>
                </div>
                <span className="text-[#006174] text-lg 2xl:text-2xl font-medium text-nowrap">
                  {legend.category}
                </span>
              </div>

              <div className="text-lg text-gray-600 space-y-1 mt-8">
                {legend.items.map((item) => (
                  <p className="2xl:text-2xl">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
