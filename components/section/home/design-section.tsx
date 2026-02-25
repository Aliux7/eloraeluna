import the_design from "@/app/assets/home/the_design.png";
import Image from "next/image";

import full_the_design from "@/app/assets/home/full_the_design.png";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import { LinkPullUp } from "@/components/animation/link-pull-up";

const DesignSection = () => {
  return (
    <section
      id="design-section"
      className="relative bg-[#464948] min-h-200 lg:min-h-screen max-h-300 lg:max-h-400 xl:max-h-none flex items-end justify-end"
    >
      <div className="absolute inset-0 z-10 pt-32 px-5 sm:px-10 py-16 xl:p-48 flex flex-col xl:gap-0 justify-between items-start">
        <WordsPullUp
          text="THE DESIGN"
          className="font-medium tracking-widest text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl text-[#F3F0E8]"
        /> 
        <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-10">
          <div className="w-full flex flex-col gap-2 sm:gap-4">
            <WordsPullUp
              text="SPACES CRAFTED"
              className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extralight text-[#F3F0E8] tracking-widest"
            />
            <FadeSlide direction="left">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium text-[#F3F0E8] tracking-widest text-nowrap ml-20 lg:ml-40 xl:ml-60">
                <span className="font-thin">FOR</span> REFINE
              </h2>
            </FadeSlide>
            <WordsPullUp
              text="LIVING"
              className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium text-[#F3F0E8] tracking-widest ml-20 lg:ml-40 xl:ml-60"
            />

            <FadeSlide
              direction="up"
              className="block xl:hidden lg:w-1/2 text-[#F3F0E8] font-normal text-sm sm:text-xl 2xl:text-2xl text-balance mt-5 sm:mt-10 ml-20 sm:ml-0"
            >
              An iconic development on 12.9 gectares of prime land, Kota
              Kasablanka redefines what a modern city hub can be bold, vibrant,
              and unforgetable.
            </FadeSlide>
            <LinkPullUp
              href="/the-design"
              className="flex justify-center items-center cursor-pointer font-medium capitalize text-sm sm:text-base 2xl:text-lg mt-10 sm:mt-20 pt-px w-56 sm:w-64 2xl:w-80 h-11.25 2xl:h-14 text-[#F3F0E8] border border-[#9D7958] hover:bg-[#F3F0E8]/90 hover:text-[#9D7958] transition-all duration-200 ease-in-out"
            >
              UNCOVER OUR DESIGN
            </LinkPullUp>
          </div>
          <FadeSlide className="hidden xl:block max-w-1/2 text-[#F3F0E8] font-normal text-sm sm:text-xl 2xl:text-2xl text-balance pl-10 ml-20 sm:ml-0">
            An iconic development on 12.9 gectares of prime land, Kota
            Kasablanka redefines what a modern city hub can be bold, vibrant,
            and unforgetable.
          </FadeSlide>
        </div>
      </div>
      <Image
        src={full_the_design}
        alt=""
        className="block inset-0 z-0 relative h-full xl:h-350 2xl:h-screen xl:w-full object-cover object-top 2xl:object-[50%_10%] opacity-70"
      />
    </section>
  );
};

export default DesignSection;
