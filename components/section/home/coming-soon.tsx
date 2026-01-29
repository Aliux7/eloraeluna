import Image from "next/image";
import eluna_white from "@/app/assets/home/eluna_white.png";
import eloraeluna from "@/app/assets/eloraeluna_logo.png";
import illustration_1 from "@/app/assets/home/illustration_cs_1.png";
import illustration_2 from "@/app/assets/home/illustration_cs_2.png";
import { FadeSlide } from "@/components/animation/fade-slide";
import { WordsPullUp } from "@/components/animation/word-pull-up";
const CommingSoon = () => {
  return (
    <section className="relative bg-[#F3F0E8] p-5 sm:p-10 xl:py-20 xl:px-48 flex flex-col gap-10">
      <div className="relative bg-[#9D7958] w-full h-full p-5 md:p-10 xl:p-20 grid xl:grid-cols-2">
        <FadeSlide direction="right" className="absolute top-0 right-0">
          <Image
            src={illustration_2}
            alt=""
            className="w-40 sm:w-60 md:w-80 lg:w-90 xl:w-140 "
          />
        </FadeSlide>
        <FadeSlide direction="left" className="absolute bottom-0 left-0">
          <Image
            src={illustration_1}
            alt=""
            className="w-30 sm:w-40 md:w-50 lg:w-70 xl:w-80"
          />
        </FadeSlide>
        <div className="flex flex-col w-full sm:w-40 md:w-60 lg:w-auto gap-40 md:gap-56">
          <FadeSlide>
            <Image
              src={eluna_white}
              alt=""
              className="object-cover w-30 sm:w-full lg:w-90"
            />
          </FadeSlide>
          <div className="text-end w-full sm:w-fit">
            <FadeSlide className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#F3F0E8] tracking-widest text-nowrap">
              <span className="font-extralight">SOMETHING</span> SPECIAL
            </FadeSlide>
            <FadeSlide className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#F3F0E8] tracking-widest text-nowrap">
              <span className="font-thin">IS</span> COMING
            </FadeSlide>
            <FadeSlide className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#F3F0E8] tracking-widest">
              FOR YOU
            </FadeSlide>
          </div>
        </div>
        <div className="xl:pt-130 flex flex-col pb-64 xl:pb-80 sm:ml-auto xl:ml-0">
          <div className="border-t w-full border-white my-5 md:my-10"></div>
          <WordsPullUp
            text="0811 8999 6968"
            className="text-[#F3F0E8] text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 md:mb-5 pr-20"
          />
          <WordsPullUp
            text="marketing@elora-eluna.com"
            className="text-[#F3F0E8] text-2xl md:text-3xl lg:text-4xl font-extralight md:mb-2"
          />
          <WordsPullUp
            text="elora-eluna.com"
            className="text-[#F3F0E8] text-2xl md:text-3xl lg:text-4xl font-extralight"
          />
        </div>
        <FadeSlide className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2">
          <Image
            src={eloraeluna}
            alt=""
            width={1000}
            height={1000}
            className=" h-6.5 sm:h-8 lg:h-9 w-fit object-cover"
          />
        </FadeSlide>
      </div>
    </section>
  );
};

export default CommingSoon;
