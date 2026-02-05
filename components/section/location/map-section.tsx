import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import arrow from "@/app/assets/arrow_gold.svg";
import map from "@/app/assets/location/location_map.svg";
import lobby from "@/app/assets/facilities/lobby.jpg";
import pool from "@/app/assets/facilities/pool.jpg";
import dining from "@/app/assets/facilities/dining.jpg";
import gym from "@/app/assets/facilities/gym.jpg";
import { LinkPullUp } from "@/components/animation/link-pull-up";

const MapSection = () => {
  return (
    <section
      id="map-section"
      className="relative bg-[#F3F0E8] min-h-screen px-5 sm:px-10 xl:px-48 py-16 lg:py-32 flex flex-col justify-between items-center gap-16"
    >
      <div className="flex flex-col justify-center items-center">
        <WordsPullUp
          text="SCULPTED FOR"
          className="text-6xl font-medium text-[#9D7958]"
        />
        <WordsPullUp
          text="THE SOUL"
          className="text-6xl font-medium text-[#9D7958]"
        />
      </div>
      <FadeSlide
        direction="left"
        className="relative w-fit max-w-[80vw] flex justify-center items-center"
      >
        <Image src={map} alt="" className="w-fit h-182 object-contain border" />
      </FadeSlide>
      <LinkPullUp
        href="#"
        className="flex justify-center items-center cursor-pointer font-medium capitalize sm:text-lg pt-px w-47.5 h-11.25 text-[#9D7958] border border-[#9D7958] hover:bg-[#9D7958]/10 hover:text-[#9D7958] transition-all duration-200 ease-in-out"
      >
        VIEW IN MAPS
      </LinkPullUp>
      <div className="relative w-full">
        <Image
          src={arrow}
          alt=""
          className="block sm:hidden xl:block absolute sm:top-1/2 -translate-y-1/2 -left-5 sm:-left-10 xl:-left-16 cursor-pointer scale-70 sm:scale-100 z-10"
        />
        <Image
          src={arrow}
          alt=""
          className="block sm:hidden xl:block absolute sm:top-1/2 -translate-y-1/2 -right-5 sm:-right-10 xl:-right-16 rotate-180 cursor-pointer scale-70 sm:scale-100 z-10"
        />
        <WordsPullUp text="LEGEND" className="text-3xl uppercase tracking-widest text-[#9D7958]"/>
        <div className="flex justify-start items-center gap-12 overflow-auto no-scrollbar">
          <div className="relative flex justify-center items-center aspect-video h-45">
            <Image src={lobby} alt="" className="w-full h-full object-cover" />
            <span className="absolute bottom-1 text-[#F3F0E8] text-xl">
              Lobby Lounge
            </span>
          </div>
          <div className="relative flex justify-center items-center aspect-video h-45">
            <Image src={pool} alt="" className="w-full h-full object-cover" />
            <span className="absolute bottom-1 text-[#F3F0E8] text-xl">
              Pool Lounge
            </span>
          </div>
          <div className="relative flex justify-center items-center aspect-video h-45">
            <Image src={dining} alt="" className="w-full h-full object-cover" />
            <span className="absolute bottom-1 text-[#F3F0E8] text-xl">
              Private Dining
            </span>
          </div>
          <div className="relative flex justify-center items-center aspect-video h-45">
            <Image src={gym} alt="" className="w-full h-full object-cover" />
            <span className="absolute bottom-1 text-[#F3F0E8] text-xl">
              GYM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
