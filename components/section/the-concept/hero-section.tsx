import the_concept_background from "@/app/assets/the-concept/the_concept_background.png";
import Image from "next/image";
import eluna from "@/app/assets/eluna.svg";
import elora from "@/app/assets/elora.svg";
import and from "@/app/assets/and.svg";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import content_1 from "@/app/assets/the-concept/content_concept_1.jpg";
import content_2 from "@/app/assets/the-concept/content_concept_2.jpg";
import content_3 from "@/app/assets/the-concept/content_concept_3.jpg";
import content_4 from "@/app/assets/the-concept/content_concept_4.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full">
      <Image
        src={the_concept_background}
        alt=""
        className="w-full h-auto opacity-80 absolute top-0"
        priority
      />

      <div className="relative px-5 sm:px-10 xl:px-48 py-26 sm:py-36 space-y-16">
        <FadeSlide className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-10 lg:gap-20">
          <Image
            src={eluna}
            alt=""
            width={1000}
            height={1000}
            className="w-fit h-7 sm:h-9 3xl:h-14 object-contain"
          />
          <div className="border-t border-white flex-1 lg:w-full mt-4.5" />
          <div className="w-full lg:w-fit flex flex-col justify-start items-end">
            <WordsPullUp
              direction="left"
              text="THE SHIMMER"
              className="text-[#FFFFFF] font-light text-3xl sm:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] mr-16 sm:mr-24 lg:mr-28 text-nowrap"
            />
            <div className="flex justify-center items-center gap-4">
              <WordsPullUp
                direction="left"
                text="OF"
                className="text-[#FFFFFF] font-light text-3xl sm:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] text-nowrap"
              />{" "}
              <WordsPullUp
                direction="left"
                text="THE MOON"
                className="text-[#FFFFFF] font-medium text-3xl sm:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] text-nowrap"
              />
            </div>
          </div>
        </FadeSlide>

        <div className="relative flex justify-start xl:justify-center items-end lg:items-center">
          <FadeSlide
            className="absolute xl:relative sm:ml-5 sm:mb-5 lg:mb-0 xl:ml-0 z-10"
            direction="right"
          >
            <div className="hidden xl:block absolute w-80 3xl:w-130 xl:h-full bg-[#9D7958]/40 top-2.5 left-4 z-0"></div>
            <div className="-ml-5 -mb-15 sm:mb-0 sm:ml-0 relative w-80 sm:w-80 3xl:w-130 xl:h-fit bg-[#9D7958]/90 sm:bg-[#9D7958] p-5 sm:p-9 flex flex-col justify-between gap-5 xl:gap-0 items-center">
              <p className="sm:text-lg 3xl:text-3xl font-normal text-[#F3F0E8] flex justify-center items-center h-full">
                Eluna reflects the luminous allure of the moon, offering a
                lifestyle of elegance, rhythm, and refined luxury. It is a home
                for those who embrace elevated living—where thoughtful design
                and indulgent comfort meet in perfect harmony. Like the moon's
                enduring glow, Eluna brings balance and brilliance to everyday
                life.
              </p>
            </div>
          </FadeSlide>
          <FadeSlide className="w-full h-full lg:h-[80vh]">
            <Image
              src={content_1}
              alt=""
              className="w-full h-140 sm:h-200 lg:h-full object-cover xl:min-h-145"
              width={2000}
              height={2000}
            />
          </FadeSlide>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-16 mt-10 md:mt-16">
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

        <div className="flex flex-wrap lg:flex-nowrap flex-row justify-between items-start gap-8 lg:gap-20">
          <div className="flex flex-col justify-start xl:items-end">
            <WordsPullUp
              direction="left"
              text="THE ENERGY"
              className="text-[#FFFFFF] font-light text-3xl sm:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] mr-28 text-nowrap"
            />
            <div className="flex justify-center items-center gap-4">
              <WordsPullUp
                direction="left"
                text="OF"
                className="text-[#FFFFFF] font-light text-3xl sm:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] text-nowrap"
              />{" "}
              <WordsPullUp
                direction="left"
                text="THE SUN"
                className="text-[#FFFFFF] font-medium text-3xl sm:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] text-nowrap"
              />
            </div>
          </div>
          <FadeSlide className="flex sm:flex-wrap lg:flex-nowrap justify-center sm:justify-between items-center w-full gap-11">
            <div className="border-t border-white flex-1 hidden sm:block lg:w-full lg:hidden xl:block" />
            <Image
              src={elora}
              alt=""
              width={1000}
              height={1000}
              className="w-fit h-7 sm:h-9 3xl:h-14 object-contain"
            />
            <div className="flex flex-col justify-center items-start gap-0">
              <WordsPullUp
                direction="left"
                text="COMING SOON"
                className="text-[#F3F0E8] font-light text-xl 3xl:text-3xl tracking-widest text-nowrap"
              />{" "}
              <WordsPullUp
                direction="left"
                text="PHASE II"
                className="text-[#F3F0E8] font-medium text-xl 3xl:text-3xl tracking-widest text-nowrap"
              />
            </div>
          </FadeSlide>
        </div>

        <div>
          <FadeSlide className="text-[#FFFFFF] max-w-lg 3xl:max-w-xl sm:text-xl 3xl:text-2xl">
            Elora radiates the vitality of the sun, bringing warmth, light, and
            inspiration to those who call it home. It is a place where life
            thrives, filled with dynamic energy and opportunities to shine.
            Every detail reflects a modern, vibrant lifestyle that uplifts the
            spirit and celebrates the brilliance of living fully.
          </FadeSlide>
        </div>

        <div className="mt-32 sm:mt-64 space-y-16">
          <div className="hidden sm:flex flex-col justify-start items-start">
            <div className="flex justify-start items-center gap-4">
              <WordsPullUp
                direction="left"
                text="WHERE"
                className="text-[#FFFFFF] font-light text-3xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] text-nowrap"
              />{" "}
              <WordsPullUp
                direction="left"
                text="VIBRANCE"
                className="text-[#FFFFFF] font-medium text-3xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] text-nowrap"
              />
            </div>
            <div className="flex justify-start items-center gap-4 sm:ml-14 lg:ml-28">
              <WordsPullUp
                direction="left"
                text="MEETS"
                className="text-[#FFFFFF] font-light text-3xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] text-nowrap"
              />{" "}
              <WordsPullUp
                direction="left"
                text="TRANQUILITY"
                className="text-[#FFFFFF] font-medium text-3xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] text-nowrap"
              />
            </div>
          </div>

          <div className="relative flex flex-col sm:flex-row justify-start xl:justify-center items-end lg:items-center">
            <FadeSlide className="w-full h-full lg:h-[80vh]">
              <Image
                src={content_4}
                alt=""
                className="w-full h-96 sm:h-200 lg:h-full object-cover xl:min-h-145 object-right sm:object-center"
                width={2000}
                height={2000}
              />
            </FadeSlide>
            <FadeSlide
              className="relative sm:absolute xl:relative sm:mr-5 sm:mb-5 lg:mb-0 xl:mr-0 right-0"
              direction="left"
            >
              <div className="hidden xl:block absolute w-105 3xl:w-130 xl:h-full bg-[#9D7958]/40 top-2.5 right-4 z-0"></div>
              <div className="-mb-15 sm:mb-0 sm:mr-0 relative w-full sm:w-96 lg:w-105 3xl:w-130 xl:h-fit bg-[#9D7958]/90 sm:bg-[#9D7958] p-5 sm:p-8 flex flex-col justify-between gap-5 sm:gap-8 items-center">
                <div className="sm:hidden flex flex-col justify-start items-start">
                  <div className="flex justify-start items-center gap-2 sm:gap-4">
                    <WordsPullUp
                      direction="left"
                      text="WHERE"
                      className="text-[#FFFFFF] font-light text-2xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] text-nowrap"
                    />{" "}
                    <WordsPullUp
                      direction="left"
                      text="VIBRANCE"
                      className="text-[#FFFFFF] font-medium text-2xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] text-nowrap"
                    />
                  </div>
                  <div className="flex justify-start items-center gap-2 sm:gap-4 sm:ml-14 lg:ml-28">
                    <WordsPullUp
                      direction="left"
                      text="MEETS"
                      className="text-[#FFFFFF] font-light text-2xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] text-nowrap"
                    />{" "}
                    <WordsPullUp
                      direction="left"
                      text="TRANQUILITY"
                      className="text-[#FFFFFF] font-medium text-2xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl tracking-[0.5rem] text-nowrap"
                    />
                  </div>
                </div>
                <p className="text-sm sm:text-lg 3xl:text-3xl font-normal text-[#F3F0E8]">
                  Elora and Eluna embody the essential balance of life, inspired
                  by the sun and the moon. Elora channels the sun's energy
                  through bold architecture, luminous interiors, and a vibrant
                  sky lounge—connecting residents to the dynamic rhythm of the
                  city. Eluna, like the moon, radiates quiet allure with heated
                  pools, panoramic views, and an elegant sky lounge designed for
                  refined living. Together, these two distinct residences
                  harmonize vibrance and tranquility, creating a luxurious
                  sanctuary where life moves with purpose and grace.
                </p>
                <div className="flex justify-center items-center gap-7 h-8 lg:h-12">
                  <Image
                    src={elora}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-6"
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
                    className="w-full h-6"
                  />
                </div>
              </div>
            </FadeSlide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
