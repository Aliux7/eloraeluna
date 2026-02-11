import Image from "next/image";
import eluna_white from "@/app/assets/home/eluna_white.png";
import and from "@/app/assets/and.svg";
import elora from "@/app/assets/elora.svg";
import eluna from "@/app/assets/eluna.svg";
import illustration_1 from "@/app/assets/home/illustration_cs_1.png";
import illustration_2 from "@/app/assets/home/illustration_cs_2.png";
import { FadeSlide } from "@/components/animation/fade-slide";
import { WordsPullUp } from "@/components/animation/word-pull-up";
const CommingSoon = () => {
  return (
    <section className="relative bg-[#F3F0E8] p-5 sm:p-10 xl:py-20 xl:px-48 flex flex-col gap-10">
      <div className="relative bg-[#9D7958] w-full h-full p-5 md:p-10 xl:p-20">
        <FadeSlide direction="right" className="absolute top-0 right-0">
          <Image
            src={illustration_2}
            alt=""
            className="w-40 sm:w-60 md:w-80 lg:w-90"
          />
        </FadeSlide>
        <FadeSlide direction="left" className="absolute bottom-0 left-0">
          <Image
            src={illustration_1}
            alt=""
            className="w-30 sm:w-40 md:w-50 lg:w-60"
          />
        </FadeSlide>
        <FadeSlide>
          <Image
            src={eluna_white}
            alt=""
            className="object-cover w-30 sm:w-40 lg:w-70"
          />
        </FadeSlide>
        <div className="flex flex-col 3xl:flex-row min-h-120 md:min-h-150 h-fit w-full justify-center items-center pb-10">
          <div className="w-full xl:text-end xl:mr-auto xl:w-1/2 space-y-2 3xl:pr-14 3xl:border-r 3xl:border-white">
            <FadeSlide className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-medium text-[#F3F0E8] tracking-widest text-nowrap">
              <span className="font-extralight">SOMETHING</span> SPECIAL
            </FadeSlide>
            <FadeSlide className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-medium text-[#F3F0E8] tracking-widest text-nowrap">
              <span className="font-thin">IS</span> COMING
            </FadeSlide>
            <FadeSlide className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-medium text-[#F3F0E8] tracking-widest">
              FOR YOU
            </FadeSlide>
          </div>
          <div className="h-fit w-full xl:w-1/2 p-0 flex flex-col xl:ml-auto text-end xl:text-start 3xl:pl-14">
            <div className="3xl:hidden border-t w-full border-white my-5 md:my-10"></div>
            <WordsPullUp
              text="0811 8999 6968"
              className="text-[#F3F0E8] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1 sm:mb-3 md:mb-5 text-nowrap"
            />
            <WordsPullUp
              text="marketing@elora-eluna.com"
              className="text-[#F3F0E8] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extralight md:mb-2"
            />
            <WordsPullUp
              text="elora-eluna.com"
              className="text-[#F3F0E8] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extralight"
            />
          </div>
        </div>
        <FadeSlide className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 flex justify-center items-center gap-5 h-7 lg:h-8">
          <Image
            src={elora}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-4.5"
          />
          <Image
            src={and}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full"
          />
          <Image
            src={eluna}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-4.5"
          />
        </FadeSlide>
      </div>
    </section>
  );
};

export default CommingSoon;
