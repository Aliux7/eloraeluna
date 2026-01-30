import the_design from "@/app/assets/home/the_design.png";
import Image from "next/image";

import illustration_bottom from "@/app/assets/home/illustration_bottom.png";
import illustration from "@/app/assets/home/illustration.png";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import content_1 from "@/app/assets/kota-kasablangka/premium_content_1.jpg";
import content_2 from "@/app/assets/kota-kasablangka/premium_content_2.png";
import content_3 from "@/app/assets/kota-kasablangka/premium_content_3.jpg";
import content_4 from "@/app/assets/kota-kasablangka/premium_content_4.jpg";
import { LinkPullUp } from "@/components/animation/link-pull-up";

const PremiumSection = () => {
  return (
    <section
      id="design-section"
      className="relative bg-linear-to-b from-[#181919] via-[#575757] to-[#575757]  min-h-screen px-5 sm:px-10 xl:px-48 pt-16 pb-32"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FadeSlide
          direction="right"
          className="absolute top-0 sm:top-30 xl:top-7 -right-16 xl:right-16"
        >
          <Image
            src={illustration}
            alt=""
            className="w-80 sm:w-96 md:w-130 rotate-180"
          />
        </FadeSlide>
        <FadeSlide
          direction="right"
          className="absolute top-96 left-28 xl:left-16"
        >
          <Image src={illustration} alt="" className="w-80 sm:w-96 md:w-130" />
        </FadeSlide>
        <FadeSlide
          direction="right"
          className="absolute bottom-0 -right-10 sm:right-16 "
        >
          <Image src={illustration_bottom} alt="" className="w-96 md:w-120" />
        </FadeSlide>
      </div>
      <div className="relative z-10">
        <div className="flex flex-col mb-8 sm:mb-32">
          <WordsPullUp
            text="REDEFINING PREMIUM LIVING IN"
            className="text-xl sm:text-3xl text-[#F3F0E8] tracking-widest mb-8"
          />
          <WordsPullUp
            text="THE HEART OF"
            className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F3F0E8] tracking-widest"
          />
          <WordsPullUp
            text="KOTA KASABLANKA"
            className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F3F0E8] tracking-widest mb-16"
          />
        </div>
        <div className="relative flex justify-start xl:justify-center items-end lg:items-center">
          <FadeSlide
            className="absolute xl:relative sm:ml-5 sm:mb-5 lg:mb-0 xl:ml-0 z-10"
            direction="right"
          >
            <div className="hidden xl:block absolute w-110 xl:h-131.5 bg-[#9D7958]/40 top-2.5 left-4 z-0"></div>
            <div className="-ml-5 -mb-15 sm:mb-0 sm:ml-0 relative w-80 sm:w-96 lg:w-110 xl:h-131.5 bg-[#9D7958]/90 sm:bg-[#9D7958] p-5 sm:p-8 flex flex-col justify-center gap-5 xl:gap-0 items-center">
              <h3 className="sm:text-lg tracking-widest text-[#F3F0E8]">
                Long recognized as one of Jakarta's most dynamic lifestyle
                destinations, Kota Kasablanka has established itself as a
                benchmark for integrated urban living—where upscale residences,
                luxury retail, fine dining, and hospitality converge in one
                vibrant superblock. Now, with the Phase 4 expansion, the vision
                ascends to new heights. Designed for those who seek privacy,
                prestige, and seamless connection to the city's finest
                offerings, Elora & Eluna are not just residences—they are the
                future of elevated urban life within the iconic Kota Kasablanka.
              </h3>
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
        <div className="flex flex-col lg:flex-row justify-between items-center h-full gap-10 md:gap-16 mt-10 md:mt-16">
          <FadeSlide className="w-full h-fit aspect-square lg:aspect-4/3">
            <Image
              src={content_2}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
          <FadeSlide className="w-full h-fit aspect-square lg:aspect-4/3">
            <Image
              src={content_3}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
        </div>
        <FadeSlide className="w-full mt-16">
          <Image
            src={content_4}
            alt=""
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </FadeSlide>

        <div className="grid lg:grid-cols-3 h-full gap-10 md:gap-16 mt-10 md:mt-16">
          <FadeSlide className="w-full aspect-square lg:aspect-2/1 lg:col-span-2">
            <Image
              src={content_2}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
          <FadeSlide className="w-full h-full">
            <Image
              src={content_3}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
          <FadeSlide className="w-full h-full">
            <Image
              src={content_3}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
          <FadeSlide className="w-full aspect-square lg:aspect-2/1 lg:col-span-2">
            <Image
              src={content_2}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
          <FadeSlide className="w-full aspect-square lg:aspect-2/1 lg:col-span-2">
            <Image
              src={content_2}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
          <FadeSlide className="w-full h-full">
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

export default PremiumSection;
