import facilities_background from "@/app/assets/home/facilities_background.webp";
import Image from "next/image";
import illustration_2 from "@/app/assets/home/illustration_2.webp";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import { LinkPullUp } from "@/components/animation/link-pull-up";

const FacilitiesSection = () => {
  return (
    <section
      id="facilities-section"
      className="relative bg-[#464948] min-h-screen flex flex-col"
    >
      <div className="relative sm:absolute inset-0 z-0 pointer-events-none after:content-[''] after:absolute after:inset-0 after:bg-black/15">
        <Image
          src={facilities_background}
          alt=""
          className="w-full h-96 sm:h-full object-cover"
        />
      </div>
      <div className="relative z-10 mt-10 sm:pt-32 p-5 pb-10 xl:pb-16 sm:px-10 xl:px-48 gap-16 flex flex-col justify-end items-start sm:min-h-screen">
        <div className="absolute block sm:hidden rotate-19 top-0 -right-20 w-fit z-0 pointer-events-none">
          <Image
            src={illustration_2}
            alt=""
            className="h-52 w-fit object-contain"
          />
        </div>
        <div className="absolute block sm:hidden rotate-19 -bottom-50 -left-25 w-fit z-0 pointer-events-none">
          <Image
            src={illustration_2}
            alt=""
            className="h-52 w-fit object-contain"
          />
        </div>
        <div className="flex justify-between w-full items-center z-10">
          <div className="flex flex-col gap-2 sm:gap-4">
            <WordsPullUp
              text="OUR"
              className="text-3xl sm:text-5xl lg:text-6xl font-extralight text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="FACILITIES"
              className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F3F0E8] tracking-widest ml-10 sm:ml-20 mb-6 lg:mb-10"
            />

            <FadeSlide className="text-[#F3F0E8] font-normal 2xl:font-light text-balance ml-10 sm:ml-0 text-sm sm:text-xl w-auto sm:w-2/3 lg:w-140 2xl:w-190 mb-10 sm:mb-16 xl:mb-20">
              Where two worlds meet—spaces designed to connect, inspire, and
              elevate the everyday.
            </FadeSlide>

            <LinkPullUp
              href="/facilities"
              className="flex justify-center items-center cursor-pointer font-medium capitalize text-sm sm:text-base 2xl:text-lg pt-px w-50 sm:w-56 2xl:w-70 h-11.25 2xl:h-14 text-[#F3F0E8] border border-[#9D7958] hover:bg-[#F3F0E8]/90 hover:text-[#9D7958] transition-all duration-200 ease-in-out"
            >
              SEE ALL FACILITIES
            </LinkPullUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
