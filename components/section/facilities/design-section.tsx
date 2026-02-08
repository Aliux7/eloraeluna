import Image from "next/image";
import design_content_1 from "@/app/assets/facilities/the_design_content_1.png";
import lobby from "@/app/assets/facilities/lobby.jpg";
import pool from "@/app/assets/facilities/pool.jpg";
import dining from "@/app/assets/facilities/dining.jpg";
import gym from "@/app/assets/facilities/gym.jpg";
import eluna from "@/app/assets/eluna_gold.svg";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import arrow from "@/app/assets/home/arrow.png";

const DesignSection = () => {
  return (
    <section
      id="design-section"
      className="relative bg-[#464948] min-h-screen py-16 lg:py-32 flex flex-col justify-between items-center gap-14 sm:gap-24"
    >
      <div className="px-5 sm:px-10 xl:px-48 space-y-8">
        <WordsPullUp
          text="THE DESIGN"
          className="font-bold tracking-widest text-lg sm:text-2xl xl:text-3xl text-[#F3F0E8]"
        />
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-32 xl:gap-16">
          <Image src={eluna} alt="" className="w-fit h-12 lg:h-14 xl:h-16" />
          <p className="text-xl xl:text-2xl w-full text-[#F3F0E8]">
            WHERE ELEGANCE BECOMES A WAY OF LIFE BLENDING TRANQUILITY, COMFORT,
            AND A REFINED AESTHETIC INTO YOUR DAILY RHYTHM.
          </p>
        </div>
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
          src={design_content_1}
          alt=""
          className="w-full h-100 sm:h-140 object-cover"
        />
      </div>
      <div className="px-5 sm:px-10 xl:px-48 space-y-16 w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-6 lg:gap-3">
          <div className="flex lg:flex-col justify-center items-start w-fit gap-3 lg:gap-0">
            <WordsPullUp
              direction="left"
              text="PRIVATE"
              className="text-[#F3F0E8] font-light text-3xl sm:text-5xl xl:text-6xl tracking-wider"
            />
            <WordsPullUp
              direction="left"
              text="DINING"
              className="text-[#F3F0E8] font-medium text-3xl sm:text-5xl xl:text-6xl tracking-wider xl:mr-20"
            />
          </div>
          <p className="text-lg sm:text-xl xl:text-2xl w-fit max-w-2xl text-[#F3F0E8] font-medium">
            An elegant setting for intimate dining and grand celebrations, where
            every gathering is enriched by sophistication and seamless service.
          </p>
        </div>
        <div className="relative w-full">
          <Image
            src={arrow}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-0 xl:-left-16 cursor-pointer scale-70 sm:scale-100 z-20 opacity-50 hover:opacity-100"
          />
          <Image
            src={arrow}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 right-0 xl:-right-16 rotate-180 cursor-pointer scale-70 sm:scale-100 z-20 opacity-50 hover:opacity-100"
          />
 
          <div className="block xl:hidden pointer-events-none absolute -left-1 top-0 h-full w-16 sm:w-24 z-10 bg-linear-to-r from-[#464948] to-transparent" />
          <div className="block xl:hidden pointer-events-none absolute -right-1 top-0 h-full w-16 sm:w-24 z-10 bg-linear-to-l from-[#464948] to-transparent" />

          <div className="flex justify-start items-center gap-12 overflow-auto no-scrollbar px-[16vw] sm:px-0">
            <div className="relative flex justify-center items-center aspect-video h-32 sm:h-45">
              <Image
                src={lobby}
                alt=""
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 text-[#F3F0E8] text-xl">
                Lobby Lounge
              </span>
            </div>
            <div className="relative flex justify-center items-center aspect-video h-32 sm:h-45">
              <Image src={pool} alt="" className="w-full h-full object-cover" />
              <span className="absolute bottom-1 text-[#F3F0E8] text-xl">
                Pool Lounge
              </span>
            </div>
            <div className="relative flex justify-center items-center aspect-video h-32 sm:h-45">
              <Image
                src={dining}
                alt=""
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 text-[#F3F0E8] text-xl">
                Private Dining
              </span>
            </div>
            <div className="relative flex justify-center items-center aspect-video h-32 sm:h-45">
              <Image src={gym} alt="" className="w-full h-full object-cover" />
              <span className="absolute bottom-1 text-[#F3F0E8] text-xl">
                GYM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
