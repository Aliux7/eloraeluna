import { FadeSlide } from "@/components/animation/fade-slide";
import diamond_background from "@/app/assets/the-concept/diamond_background.png";
import w_hotel_logo from "@/app/assets/the-concept/w_hotel_logo.svg";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";

const IntegratedSection = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={diamond_background}
        alt=""
        className="w-full h-auto opacity-80 absolute top-120 sm:top-130 lg:top-120 xl:top-50"
        priority
      />
      <div className="relative px-5 sm:px-10 xl:px-48 py-40 space-y-16">
        <div className="flex flex-col gap-20 xl:gap-20 justify-between items-start mb-8 sm:mb-32">
          <FadeSlide
            direction="up"
            className="text-xl sm:text-3xl font-bold text-[#F3F0E8] tracking-widest"
          >
            INTEGRATED WITH
          </FadeSlide>
          <div className="flex flex-col xl:flex-row justify-start xl:justify-between gap-10 w-full">
            <div className="flex flex-col gap-1 sm:gap-4">
              <FadeSlide
                direction="left"
                className="text-3xl sm:text-5xl lg:text-6xl font-extralight text-[#F3F0E8] tracking-widest"
              >
                THE ICON
              </FadeSlide>
              <FadeSlide
                direction="left"
                className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F3F0E8] tracking-widest ml-14 sm:ml-20"
              >
                <span className="font-extralight">OF</span> BOLD
              </FadeSlide>
              <FadeSlide
                direction="left"
                className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F3F0E8] tracking-widest ml-24 sm:ml-32"
              >
                LUXURY LIVING
              </FadeSlide>
            </div>
            <FadeSlide className="max-w-md font-normal text-base sm:text-xl text-[#F3F0E8]">
              Connected to W Hotels—Forbes' most innovative brand—and Courtyard
              by Marriott, Elora and Eluna offer bold design, vibrant energy,
              and contemporary living at the heart of Kota Kasablanka.
            </FadeSlide>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start mt-56 sm:mt-80 xl:mt-120 gap-20 xl:gap-32">
          <div className="w-full lg:w-1/2">
            <div className="text-center w-fit mb-16">
              <WordsPullUp
                text="TRIBUTE"
                className="text-[#9D7958] font-semibold text-3xl sm:text-4xl tracking-[0.5rem] sm:tracking-[1rem]"
              />
              <WordsPullUp
                text="PORTOFOLIO"
                className="text-[#9D7958] font-semibold text-3xl sm:text-4xl tracking-[0.5rem] sm:tracking-[1rem]"
              />
            </div>
            <FadeSlide className="text-[#F3F0E8] text-lg sm:text-xl xl:text-[22px] font-light tracking-widest mb-4">
              Courtyard by marriot brings a fresh take on contemporary living to
              kota kasablanka.
            </FadeSlide>
            <FadeSlide className="text-[#F3F0E8] sm:text-lg xl:text-xl font-medium tracking-wider">
              Blending stylish comfort with intuitive spaces, it's designed for
              those who seek balance between momentum and mindfulness. with
              uplifting interiors, seamless service, and easy access to the
              city's best, Courtyard offers a stay that feels effortless,
              connected, and distincly modern.
            </FadeSlide>
          </div>
          <div className="w-full lg:w-1/2">
            <FadeSlide className="text-center h-25  w-fit mb-14">
              <Image src={w_hotel_logo} alt="" className="h-full w-full" />
            </FadeSlide>
            <FadeSlide className="text-[#F3F0E8] text-lg sm:text-xl xl:text-[22px] font-light tracking-widest mb-4">
              NAMED One of the world's most innovative hotel brand by forbes, W
              hotel is where vibrant energy meets visionary design
            </FadeSlide>
            <FadeSlide className="text-[#F3F0E8] sm:text-lg xl:text-xl font-medium tracking-wider">
              From New York to Jakarta, W redefines modern luxury with magnetic
              spaces, standout service, and a signature attitude that celebrates
              bold self-expression. More than a hotel, W is a lifestyle, where
              design, music, fashion, and culture collide to create experiences
              that are anything but ordinary. Now arriving at Kota Kasablanka, W
              brings its unmistakeable glamour and global spirit to Elora and
              Eluna.
            </FadeSlide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedSection;
