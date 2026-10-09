import location_shutter from "@/app/assets/home/location_shutter.webp";
import location from "@/app/assets/home/location.webp";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import { LinkPullUp } from "@/components/animation/link-pull-up";

const LocationSection = () => {
  return (
    <section className="relative bg-[#464948] sm:min-h-screen">
      <div className="h-full absolute inset-0 z-0 pointer-events-none flex justify-center items-center">
        <Image
          src={location_shutter}
          alt=""
          className="w-full h-1/2 sm:h-full object-cover opacity-70"
        />
      </div>

      <div className="relative z-10 pt-0 sm:pt-32 py-32 px-5 sm:px-10 xl:px-48 gap-16 flex flex-col lg:flex-row justify-between items-start">
        <WordsPullUp
          text="OUR LOCATION"
          className="font-medium tracking-widest text-lg sm:text-2xl xl:text-3xl 2xl:text-[32px] text-[#F3F0E8]"
        />
        <div className="sm:w-1/2 lg:w-3/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-20 lg:gap-0">
          <div className="flex flex-col gap-2 sm:gap-4">
            <WordsPullUp
              text="INFINITE"
              className="text-3xl sm:text-5xl lg:text-6xl font-extralight text-[#F3F0E8] tracking-widest"
            />

            <WordsPullUp
              text="CONNECTIVITY"
              className="text-3xl sm:text-5xl lg:text-6xl font-medium 2xl:font-normal text-[#F3F0E8] tracking-widest ml-16 sm:ml-20 mb-6 sm:mb-10"
            />

            <FadeSlide className="text-[#F3F0E8] font-normal 2xl:font-light ml-16 sm:ml-0 text-sm sm:text-xl mb-14 lg:mb-16 max-w-5xl">
              Surrounded by key business, entertainment, and lifestyle
              destinations, the location offers unparalleled accessibility and
              convenience. Whether for work or leisure, residents and visitors
              enjoy seamless connections to the best that Jakarta has to offer,
              making it the ideal base for a modern, urban lifestyle.
            </FadeSlide>

            <LinkPullUp
              href="/location-map"
              className="flex justify-center items-center cursor-pointer font-medium capitalize text-sm sm:text-base 2xl:text-lg pt-px w-44 sm:w-56 2xl:w-70 h-11.25 2xl:h-14 text-[#F3F0E8] border border-[#9D7958] hover:bg-[#F3F0E8]/90 hover:text-[#9D7958] transition-all duration-200 ease-in-out"
            >
              LOCATION MAP
            </LinkPullUp>
          </div>
        </div>
      </div>

      <Image
        src={location}
        alt=""
        className="relative w-full h-full object-cover z-10"
      />
    </section>
  );
};

export default LocationSection;
