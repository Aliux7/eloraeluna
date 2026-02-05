import Image from "next/image";
import facilities_background from "@/app/assets/home/facilities_background.png";
import lobby from "@/app/assets/facilities/lobby.jpg";
import pool from "@/app/assets/facilities/pool.jpg";
import dining from "@/app/assets/facilities/dining.jpg";
import gym from "@/app/assets/facilities/gym.jpg";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import arrow from "@/app/assets/arrow_gold.svg";

const SharedSection = () => {
  return (
    <section
      id="design-section"
      className="relative bg-[#F3F0E8] min-h-screen py-16 lg:py-32 flex flex-col justify-between items-center gap-24"
    >
      <div className="px-5 sm:px-10 xl:px-48 space-y-8 flex justify-between items-start w-full">
        <div>
          <WordsPullUp
            text="SHARED"
            className="text-3xl sm:text-5xl lg:text-6xl font-extralight text-[#9D7958] tracking-widest"
          />
          <WordsPullUp
            text="FACILITIES"
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#9D7958] tracking-widest ml-14 sm:ml-20 mb-6 sm:mb-10"
          />
        </div>
        <p className="text-2xl max-w-lg text-[#9D7958]">
          WHERE two worlds meet—spaces designed to connect, inspire, and elevate
          the everyday.
        </p>
      </div>
      <div className="relative w-full bg-white">
        <div className="flex justify-start items-start absolute top-10 right-10">
          <WordsPullUp
            text="01"
            className="text-[260px] leading-[0.9] text-[#F3F0E8]"
          />
          <WordsPullUp
            text="ST"
            className="text-8xl font-light text-[#F3F0E8]"
          />
        </div>
        <Image
          src={facilities_background}
          alt=""
          className="w-full h-140 object-cover"
        />
      </div>
      <div className="px-5 sm:px-10 xl:px-48 space-y-16 w-full">
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col justify-center items-start w-fit">
            <WordsPullUp
              direction="left"
              text="LAGOON"
              className="text-[#A4704F] font-light text-3xl sm:text-5xl xl:text-6xl tracking-wider"
            />
            <WordsPullUp
              direction="left"
              text="POOL"
              className="text-[#A4704F] font-medium text-3xl sm:text-5xl xl:text-6xl tracking-wider xl:mr-20"
            />
          </div>
          <p className="text-[22px] w-fit max-w-2xl text-[#A4704F] font-medium">
            A serene pool extension blending tranquil waters with natural
            charm—perfect for peaceful relaxation.
          </p>
        </div>
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
          <div className="flex justify-start items-center gap-12 overflow-auto no-scrollbar">
            <div className="relative flex justify-center items-center aspect-video h-45">
              <Image
                src={lobby}
                alt=""
                className="w-full h-full object-cover"
              />
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
              <Image
                src={dining}
                alt=""
                className="w-full h-full object-cover"
              />
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
      </div>
    </section>
  );
};

export default SharedSection;
