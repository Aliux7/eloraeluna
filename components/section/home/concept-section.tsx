import Image from "next/image";
import illustration_2 from "@/app/assets/home/illustration_2.png";
import concept_1 from "@/app/assets/home/concept_1.jpg";
import concept_2 from "@/app/assets/home/concept_2.jpg";
import { FadeSlide } from "@/components/animation/fade-slide";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { LinkPullUp } from "@/components/animation/link-pull-up";

const ConceptSection = () => {
  return (
    <section
      id="concept-section"
      className="relative bg-[#2B3036] min-h-screen 2xl:min-h-0"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FadeSlide
          direction="left"
          className="absolute top-0 sm:top-7 -left-36 sm:-left-40 lg:-left-28 rotate-19 w-70 sm:w-96 2xl:w-120 2xl:h-auto"
        >
          <Image src={illustration_2} alt="" className="w-full h-full" />
        </FadeSlide>
        <FadeSlide
          direction="right"
          className="absolute top-110 sm:top-72 -right-30 sm:-right-20 lg:top-20 lg:-right-12 rotate-6 sm:rotate-0 w-64 sm:w-96 2xl:w-120 2xl:h-auto"
        >
          <Image src={illustration_2} alt="" className="w-full h-full" />
        </FadeSlide>
        <FadeSlide className="absolute bottom-140 sm:bottom-12 -left-10 sm:left-120 2xl:left-1/3 2xl:-translate-x-1/3 w-64 sm:w-96 2xl:w-120 2xl:h-auto">
          <Image src={illustration_2} alt="" className="w-full h-full" />
        </FadeSlide>
      </div>
      <div className="relative z-10 p-32 px-5 sm:px-10 xl:p-48 gap-16 flex flex-col justify-between items-start">
        <WordsPullUp
          text="THE CONCEPT"
          className="font-medium tracking-widest text-lg sm:text-2xl xl:text-3xl 2xl:text-[32px] text-[#F3F0E8]"
        />
        <div className="flex flex-col lg:flex-row justify-between w-full items-start lg:items-center gap-20 lg:gap-0 min-h-162.5 xl:h-162.5 2xl:h-200">
          <div className="flex flex-col gap-2 sm:gap-4">
            <WordsPullUp
              text="THE BIRTH OF"
              className="text-3xl sm:text-5xl lg:text-6xl font-extralight text-[#F3F0E8] tracking-widest"
            />
            <WordsPullUp
              text="THE UNIVERSE"
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F3F0E8] tracking-widest ml-14 sm:ml-20 mb-6 sm:mb-10"
            />
            <FadeSlide className="text-[#F3F0E8] font-normal 2xl:font-light ml-14 sm:ml-0 text-sm sm:text-xl sm:w-110 2xl:w-145 mb-14 lg:mb-20">
              Elora and Eluna, inspired by the sun and moon, offer a harmonious
              blend of vibrance and tranqulity in South Jakarta's premier
              lifestyle hub.
            </FadeSlide>

            <LinkPullUp
              href="/the-concept"
              className="flex justify-center items-center cursor-pointer font-medium capitalize text-sm sm:text-base 2xl:text-lg pt-px w-60 sm:w-70.5 2xl:w-85 h-11.25 2xl:h-14 text-[#F3F0E8] border border-[#9D7958] hover:bg-[#F3F0E8]/90 hover:text-[#9D7958] transition-all duration-200 ease-in-out"
            >
              UNCOVER OUR CONCEPT
            </LinkPullUp>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col sm:flex-row justify-end items-center gap-10 sm:gap-2 xl:gap-5 2xl:gap-15 h-full xl:py-0">
            <FadeSlide
              direction="up"
              className="w-full sm:max-h-110 2xl:max-h-200 sm:aspect-9/16 sm:-mt-[20%]  2xl:-mt-[10%]"
            >
              <Image
                src={concept_1}
                alt=""
                width={1000}
                className="object-cover w-full h-full"
              />
            </FadeSlide>
            <FadeSlide
              direction="down"
              className="w-full sm:max-h-110 2xl:max-h-200 sm:aspect-9/16 sm:-mb-[20%] 2xl:-mb-[10%]"
            >
              <Image
                src={concept_2}
                alt=""
                width={1000}
                className="object-cover w-full h-full"
              />
            </FadeSlide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
