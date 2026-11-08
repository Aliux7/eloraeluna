import the_design from "@/app/assets/home/the_design.webp";
import Image from "next/image";

import illustration_bottom from "@/app/assets/home/illustration_bottom.webp";
import illustration from "@/app/assets/home/illustration.webp";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import content_1 from "@/app/assets/kota-kasablanka/premium_content_1.webp";
import content_2 from "@/app/assets/kota-kasablanka/premium_content_2.webp";
import content_3 from "@/app/assets/kota-kasablanka/premium_content_3.webp";
import content_4 from "@/app/assets/kota-kasablanka/premium_content_4.webp";
import mall_content_1 from "@/app/assets/kota-kasablanka/mall_content_1.webp";
import mall_content_2 from "@/app/assets/kota-kasablanka/mall_content_2.webp";
import mall_content_3 from "@/app/assets/kota-kasablanka/mall_content_3.webp";
import mall_content_4 from "@/app/assets/kota-kasablanka/mall_content_4.webp";
import mall_content_5 from "@/app/assets/kota-kasablanka/mall_content_5.webp";
import mall_content_6 from "@/app/assets/kota-kasablanka/mall_content_6.webp";

const PremiumSection = () => {
  return (
    <section
      id="design-section"
      className="relative bg-linear-to-b from-[#181919] via-[#575757] to-[#575757]  min-h-screen px-5 sm:px-10 xl:px-48 pt-16 pb-32"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FadeSlide
          direction="right"
          className="absolute top-10 sm:top-30 xl:top-7 -right-16 xl:right-16"
        >
          <Image
            src={illustration}
            alt=""
            className="w-68 sm:w-96 md:w-130 rotate-180"
            sizes="(min-width: 768px) 520px, (min-width: 640px) 384px, 272px"
          />
        </FadeSlide>
        <FadeSlide
          direction="right"
          className="absolute top-96 left-28 xl:left-16"
        >
          <Image
            src={illustration}
            alt=""
            className="w-68 sm:w-96 md:w-130"
            sizes="(min-width: 768px) 520px, (min-width: 640px) 384px, 272px"
          />
        </FadeSlide>
        <FadeSlide
          direction="right"
          className="absolute bottom-0 -right-10 sm:right-16 "
        >
          <Image
            src={illustration_bottom}
            alt=""
            className="w-68 sm:w-96 md:w-130"
            sizes="(min-width: 768px) 520px, (min-width: 640px) 384px, 272px"
          />
        </FadeSlide>
      </div>
      <div className="relative z-10 flex flex-col justify-start items-start gap-10 md:gap-16">
        <div className="w-full flex flex-col mb-8 sm:mb-32">
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
        <div className="w-full relative flex justify-start xl:justify-center items-end lg:items-center">
          <FadeSlide
            className="absolute sm:ml-5 sm:mb-5 lg:mb-0 xl:ml-0 z-10 left-0"
            direction="right"
          >
            <div className="-ml-5 mb-0 sm:ml-0 relative w-80 sm:w-96 lg:w-110 2xl:w-130 xl:h-fit bg-[#9D7958]/90 sm:bg-[#9D7958] p-5 sm:p-8 flex flex-col justify-center gap-5 xl:gap-0 items-center">
              <p className="sm:text-lg 2xl:text-[22px] tracking-widest text-[#F3F0E8] font-normal 2xl:font-extralight">
                Long recognized as one of Jakarta's most dynamic lifestyle
                destinations, Kota Kasablanka has established itself as a
                benchmark for integrated urban living—where upscale residences,
                luxury retail, fine dining, and hospitality converge in one
                vibrant superblock. Now, with the Phase 4 expansion, the vision
                ascends to new heights. Designed for those who seek privacy,
                prestige, and seamless connection to the city's finest
                offerings, Elora & Eluna are not just residences—they are the
                future of elevated urban life within the iconic Kota Kasablanka.
              </p>
            </div>
          </FadeSlide>
          <FadeSlide className="w-full h-full lg:h-[80vh] sm:pl-80 mb-100 sm:mb-0">
            <Image
              src={content_1}
              alt="Woman dining at a fine-dining restaurant"
              className="w-full h-90 object-[55%_50%] sm:object-center sm:h-200 lg:h-full object-cover xl:min-h-145"
              width={2000}
              height={2000}
              sizes="(min-width: 1280px) 1600px, (min-width: 640px) 1360px, 610px"
            />
          </FadeSlide>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center h-full gap-10 md:gap-16">
          <FadeSlide className="w-full h-fit aspect-square lg:aspect-4/3">
            <Image
              src={content_2}
              alt="Luxury car parked outside a designer boutique at night"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
              sizes="(min-width: 1280px) 45vw, (min-width: 1024px) 50vw, 150vw"
            />
          </FadeSlide>
          <FadeSlide className="w-full h-fit aspect-square lg:aspect-4/3">
            <Image
              src={content_3}
              alt="Guests in evening wear arriving at a gala"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
              sizes="(min-width: 1280px) 45vw, (min-width: 1024px) 50vw, 150vw"
            />
          </FadeSlide>
        </div>
        <FadeSlide className="w-full ">
          <Image
            src={content_4}
            alt="Woman in a red coat and sunglasses"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
            sizes="(min-width: 1280px) calc(121vw - 465px), 120vw"
          />
        </FadeSlide>

        <div className="w-full grid lg:grid-cols-3 h-full gap-10 md:gap-16">
          <FadeSlide className="w-full aspect-square lg:aspect-2/1 lg:col-span-2">
            <Image
              src={mall_content_1}
              alt="Aerial rendering of Kota Kasablanka landscaped podium and retail promenade"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
              sizes="(min-width: 1024px) 60vw, 175vw"
            />
          </FadeSlide>
          <FadeSlide className="w-full h-full">
            <Image
              src={mall_content_2}
              alt="Rendering of a Kota Kasablanka mall atrium with a sculptural skylight"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
              sizes="(min-width: 1024px) 33vw, 110vw"
            />
          </FadeSlide>
          <FadeSlide className="w-full h-full">
            <Image
              src={mall_content_3}
              alt="Rendering of a Kota Kasablanka mall interior with a digital ceiling"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
              sizes="(min-width: 1024px) 33vw, 110vw"
            />
          </FadeSlide>
          <FadeSlide className="w-full aspect-square lg:aspect-2/1 lg:col-span-2">
            <Image
              src={mall_content_4}
              alt="Rendering of Kota Kasablanka's green terraced retail courtyard"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
              sizes="(min-width: 1024px) 60vw, 175vw"
            />
          </FadeSlide>
          <FadeSlide className="w-full aspect-square lg:aspect-2/1 lg:col-span-2">
            <Image
              src={mall_content_5}
              alt="Rendering of Kota Kasablanka's open-air plaza with tree-like canopies"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
              sizes="(min-width: 1024px) 60vw, 175vw"
            />
          </FadeSlide>
          <FadeSlide className="w-full h-full">
            <Image
              src={mall_content_6}
              alt="Rendering of the Kota Kasablanka mall facade and towers"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
              sizes="(min-width: 1024px) 33vw, 110vw"
            />
          </FadeSlide>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
