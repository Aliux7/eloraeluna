import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import map from "@/app/assets/facilities/map.svg";
import elora from "@/app/assets/elora_gold.svg";
import eluna from "@/app/assets/eluna_gold.svg";

const OverviewSection = () => {
  return (
    <section
      id="overview-section"
      className="relative bg-[#F3F0E8] min-h-screen px-5 sm:px-10 xl:px-48 py-16 lg:py-32 flex flex-col justify-between items-center gap-24"
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
            className="text-[#9D7958] font-medium text-3xl sm:text-4xl md:text-5xl xl:text-6xl tracking-wider sm:mr-20"
          />
          <WordsPullUp
            direction="left"
            text="OVERVIEW"
            className="text-[#9D7958] font-light text-3xl sm:text-4xl md:text-5xl xl:text-6xl tracking-wider"
          />
        </div>
      </div>
      <FadeSlide className="relative xl:mt-8 w-fit max-w-[65vw] xl:max-w-[80vw] flex justify-center items-center">
        <Image
          src={eluna}
          alt=""
          className="w-fit h-3.5 sm:h-5 object-contain absolute top-20 -left-15 sm:-left-20"
        />
        <Image src={map} alt="" className="w-fit xl:h-182 object-contain" />
        <Image
          src={elora}
          alt=""
          className="w-fit h-3.5 sm:h-5 object-contain absolute top-3/5 -right-14 sm:-right-16 lg:-right-10"
        />
      </FadeSlide>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <WordsPullUp
            text="ELUNA FACILITIES"
            className="text-3xl tracking-[0.3em] text-[#9D7958] font-semibold mb-8"
          />

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-[#9D7958]">
            <WordsPullUp
              text="Function Room"
              className="text-lg border-b border-[#9D7958] pb-2"
            />
            <WordsPullUp
              text="Family Lounge"
              className="text-lg border-b border-[#9D7958] pb-2"
            />

            <WordsPullUp
              text="Pre Function"
              className="text-lg border-b border-[#9D7958] pb-2"
            />
            <WordsPullUp
              text="Kids Room"
              className="text-lg border-b border-[#9D7958] pb-2"
            />

            <WordsPullUp
              text="Gym"
              className="text-lg border-b border-[#9D7958] pb-2"
            />
            <WordsPullUp
              text="Outside Lounge"
              className="text-lg border-b border-[#9D7958] pb-2"
            />

            <WordsPullUp
              text="Gym Class"
              className="text-lg border-b border-[#9D7958] pb-2"
            />
          </div>
        </div>

        <div>
          <WordsPullUp
            text="SHARED FACILITIES"
            className="text-3xl tracking-[0.3em] text-[#9D7958] font-semibold mb-8"
          />

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-[#9D7958]">
            <WordsPullUp
              text="Lap Pool"
              className="text-lg border-b border-[#9D7958] pb-2"
            />
            <WordsPullUp
              text="Lagoon Pool"
              className="text-lg border-b border-[#9D7958] pb-2"
            />

            <WordsPullUp
              text="Sun Bathing Pool Chair"
              className="text-lg border-b border-[#9D7958] pb-2"
            />
            <WordsPullUp
              text="Kids Pool"
              className="text-lg border-b border-[#9D7958] pb-2"
            />

            <WordsPullUp
              text="Cabana Deck"
              className="text-lg border-b border-[#9D7958] pb-2"
            />
            <WordsPullUp
              text="Children Play Ground"
              className="text-lg border-b border-[#9D7958] pb-2"
            />

            <WordsPullUp
              text="Sunken Seating"
              className="text-lg border-b border-[#9D7958] pb-2"
            />
            <WordsPullUp
              text="BBQ Area"
              className="text-lg border-b border-[#9D7958] pb-2"
            />

            <WordsPullUp
              text="Tennis Court"
              className="text-lg border-b border-[#9D7958] pb-2"
            />
            <WordsPullUp
              text="Jogging Track"
              className="text-lg border-b border-[#9D7958] pb-2"
            />

            <WordsPullUp
              text="Gazebo"
              className="text-lg border-b border-[#9D7958] pb-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
