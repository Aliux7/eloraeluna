import illustration_bottom from "@/app/assets/home/illustration_bottom.png";
import content_1 from "@/app/assets/home/content_1.jpg";
import content_2 from "@/app/assets/home/content_2.jpg";
import content_3 from "@/app/assets/home/content_3.jpg";
import illustration from "@/app/assets/home/illustration.png";
import Image from "next/image";
import { FadeSlide } from "@/components/animation/fade-slide";
import { LinkPullUp } from "@/components/animation/link-pull-up";

const DiscoverSection = () => {
  return (
    <section
      id="discover-section"
      className="relative bg-[#464948] min-h-screen px-5 sm:px-10 xl:p-48 pt-28 sm:pt-28 pb-32"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FadeSlide
          direction="left"
          className="absolute -top-14 sm:top-20 xl:top-70 -right-24 xl:-left-20"
        >
          <Image src={illustration} alt="" className="w-68 sm:w-96 md:w-130" />
        </FadeSlide>
        <FadeSlide
          direction="right"
          className="absolute bottom-0 right-3 sm:right-16 "
        >
          <Image src={illustration_bottom} alt="" className="w-68 sm:w-96 md:w-120" />
        </FadeSlide>
      </div>
      <div className="relative z-10">
        <div className="flex flex-col xl:flex-row gap-20 xl:gap-0 justify-between items-start mb-8 sm:mb-32">
          <FadeSlide direction="up" className="text-xl sm:text-2xl 2xl:text-[26px] font-medium text-[#F3F0E8] tracking-widest">
              KOTA KASABLANKA <br /> PHASE IV 
          </FadeSlide>
          <div className="flex flex-col xl:w-1/2 justify-start xl:justify-between gap-20 xl:gap-0 h-96">
            <div className="flex flex-col gap-4">
              <FadeSlide direction="left" className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-[67px] font-medium 2xl:font-normal text-[#F3F0E8] tracking-widest">
                  <span className="font-extralight">A</span> LEGACY 
              </FadeSlide>
              <FadeSlide direction="left" className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-[67px] font-medium 2xl:font-normal text-[#F3F0E8] tracking-widest ml-14 sm:ml-20">
                  <span className="font-extralight">OF</span> URBAN 
              </FadeSlide>
              <FadeSlide direction="left" className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-[67px] font-medium 2xl:font-normal text-[#F3F0E8] tracking-widest ml-28 sm:ml-40">
                  EXCELLENCE 
              </FadeSlide>
            </div>

            <LinkPullUp
              href="/kota-kasablanka"
              className="flex justify-center items-center cursor-pointer font-medium capitalize text-sm sm:text-base 2xl:text-lg pt-px w-44 sm:w-51.5 2xl:w-60 h-11.25 2xl:h-14 text-[#F3F0E8] border border-[#9D7958] hover:text-[#9D7958] hover:bg-[#F3F0E8]/90 transition-all duration-200 ease-in-out"
            >
              DISCOVER MORE
            </LinkPullUp>
          </div>
        </div>
        <div className="relative flex justify-start xl:justify-center items-end lg:items-center">
          <FadeSlide
            className="absolute sm:ml-5 sm:mb-5 lg:mb-0 xl:ml-0 z-10 left-0"
            direction="right"
          > 
            <div className="-ml-5 mb-0 sm:ml-0 relative w-80 sm:w-96 lg:w-105 2xl:w-130 xl:h-fit bg-[#9D7958]/90 sm:bg-[#9D7958] p-5 sm:p-7 2xl:p-9 flex flex-col justify-between gap-5 xl:gap-8 items-center">
              <h3 className="font-light sm:font-medium 2xl:font-light sm:text-lg 2xl:text-[22px] tracking-widest text-[#F3F0E8]">
                POSITIONED AT THE HEART OF JAKARTA'S MOST DYNAMIC DISTRICT, THIS
                DEVELOPMENT CONNECTS YOU EFFORTLESSLY TO THE CITY'S PULSE.
              </h3>
              <p className="sm:text-lg 2xl:text-[22px] font-extralight sm:font-normal 2xl:font-extralight text-[#F3F0E8]">
                Surrounded by key business, entertainment, and lifestyle
                destinations, the location offers unparalleled accessibility and
                convenience. Whether for work or leisure, residents and visitors
                enjoy seamless connections to the best that Jakarta has to
                offer, making it the ideal base for a modern, urban lifestyle.
              </p>
            </div>
          </FadeSlide>
          <FadeSlide className="w-full h-full lg:h-[80vh] sm:pl-80 mb-96 sm:mb-0">
            <Image
              src={content_1}
              alt=""
              className="w-full h-120 sm:h-200 lg:h-full object-[75%_center] sm:object-center object-cover xl:min-h-145"
              width={2000}
              height={2000}
            />
          </FadeSlide>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center h-full gap-10 md:gap-16 mt-10 md:mt-16">
          <FadeSlide className="w-full aspect-4/3">
            <Image
              src={content_2}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
          <FadeSlide className="w-full aspect-4/3">
            <Image
              src={content_3}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
