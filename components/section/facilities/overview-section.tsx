import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import map from "@/app/assets/facilities/map.png";

const OverviewSection = () => {
  const listElunaFacilities = [
    "Main Lobby",
    "Lobby Lounge",
    "Library",
    "Private Dining",
    "Pool Lounge",
    "Function Hall",
    "Play Area",
    "Sky View Terrace",
    "Zen Garden",
  ];

  const listSharedFacilities = [
    "Lagoon Pool",
    "Blue Lagoon",
    "Cabana",
    "BBQ Lawn",
    "Kids Pool & Playground",
    "Kids Room",
    "Gym",
    "Padel Court",
    "Jogging Track",
    "Pet Park",
  ];
  return (
    <section
      id="overview-section"
      className="relative bg-[#F3F0E8] min-h-screen px-5 sm:px-10 xl:px-48 py-16 lg:py-32 flex flex-col justify-between items-center gap-16"
    >
      <div className="flex justify-between items-start w-full">
        <div className="flex justify-start items-start">
          <WordsPullUp
            text="01"
            className="text-9xl md:text-[170px] lg:text-[200px] xl:text-[260px] leading-[0.9] text-[#464948]"
          />
          <WordsPullUp
            text="ST"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-light text-[#464948]"
          />
        </div>
        <div className="flex flex-col justify-center items-end">
          <WordsPullUp
            direction="left"
            text="FACILITIES"
            className="text-[#9D7958] font-medium 2xl:font-normal text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-[67px] tracking-wider sm:mr-20"
          />
          <WordsPullUp
            direction="left"
            text="OVERVIEW"
            className="text-[#9D7958] font-light 2xl:font-extralight text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-[67px] tracking-wider"
          />
        </div>
      </div>
      <FadeSlide className="relative w-full sm:max-w-[60vw] 2xl:max-w-[50vw] flex justify-center items-center">
        <Image src={map} alt="" className="w-full h-full object-contain" />
      </FadeSlide>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <WordsPullUp
            text="ELUNA FACILITIES"
            className="text-3xl 2xl:text-[32px] tracking-[0.3em] text-[#9D7958] font-semibold 2xl:font-medium mb-8"
          />

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-[#9D7958]">
            {listElunaFacilities.map((facility) => (
              <WordsPullUp
                text={facility}
                className="text-lg 2xl:text-xl border-b border-[#9D7958] pb-2"
              />
            ))}
          </div>
        </div>

        <div>
          <WordsPullUp
            text="SHARED FACILITIES"
            className="text-3xl 2xl:text-[32px] tracking-[0.3em] text-[#9D7958] font-semibold 2xl:font-medium mb-8"
          />

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-[#9D7958]">
            {listSharedFacilities.map((facility) => (
              <WordsPullUp
                text={facility}
                className="text-lg 2xl:text-xl border-b border-[#9D7958] pb-2"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
