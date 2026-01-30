import content_1 from "@/app/assets/kota-kasablangka/discover_content_1.jpg";
import content_2 from "@/app/assets/kota-kasablangka/discover_content_2.jpg";
import content_3 from "@/app/assets/kota-kasablangka/discover_content_3.jpg";
import illustration_bottom from "@/app/assets/home/illustration_bottom.png";
import illustration from "@/app/assets/home/illustration.png";
import Image from "next/image";
import { FadeSlide } from "@/components/animation/fade-slide";
import { LinkPullUp } from "@/components/animation/link-pull-up";
import { WordsPullUp } from "@/components/animation/word-pull-up";

const DiscoverSection = () => {
  return (
    <section
      id="discover-section"
      className="relative bg-[#F3F0E8] min-h-screen px-5 sm:px-10 xl:px-48 pt-16 pb-32"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FadeSlide
          direction="right"
          className="absolute top-50 xl:top-7 -right-28 xl:right-16"
        >
          <Image
            src={illustration}
            alt=""
            className="w-80 sm:w-96 md:w-130 rotate-180"
          />
        </FadeSlide>
        <FadeSlide
          direction="right"
          className="absolute top-130 sm:top-96 -left-28 xl:left-16"
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
            text="KOTA KASABLANKA PHASE 4"
            className="text-xl sm:text-3xl text-[#9D7958] tracking-widest mb-4 sm:mb-8"
          />
          <WordsPullUp
            text="A WORLD CLASS"
            className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#9D7958] tracking-widest"
          />
          <WordsPullUp
            text="LIFESTYLE"
            className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#9D7958] tracking-widest mb-64 sm:mb-16"
          />

          <LinkPullUp
            href=""
            className="flex justify-center items-center cursor-pointer font-medium capitalize text-lg lg:text-xl pt-px w-40 h-11.25 text-[#9D7958] border border-[#9D7958] hover:text-[#F3F0E8] hover:bg-[#9D7958] transition-all duration-200 ease-in-out"
          >
            VISIT KOKAS
          </LinkPullUp>
        </div>
        <div className="relative flex justify-start xl:justify-center items-end lg:items-center">
          <FadeSlide className="w-full h-full lg:h-[80vh]">
            <Image
              src={content_1}
              alt=""
              className="w-full h-140 sm:h-200 lg:h-full object-cover xl:min-h-145"
              width={2000}
              height={2000}
            />
          </FadeSlide>
          <FadeSlide
            className="absolute xl:relative sm:mr-5 sm:mb-5 lg:mb-0 xl:mr-0 right-0 z-10"
            direction="left"
          >
            <div className="hidden xl:block absolute w-110 xl:h-131.5 bg-[#9D7958]/40 top-2.5 right-4 z-0"></div>
            <div className="-mr-5 -mb-15 sm:mb-0 sm:mr-0 relative w-80 sm:w-96 lg:w-110 xl:h-131.5 bg-[#9D7958]/90 sm:bg-[#9D7958] p-5 sm:p-8 flex flex-col justify-between gap-5 xl:gap-0 items-center">
              <h3 className="font-medium sm:text-lg lg:text-xl tracking-widest text-[#F3F0E8]">
                Since 2012, Kota Kasablanka has become one of Jakarta's most
                vibrant lifestyle destinations. Just steps from Elora and
                Eluna,it offers a curated blend of global fashion, beauty,
                dining, and entertainment—including family friendly zones, a
                rooftop pool, and the new Little Tokyo culinary hub.
              </h3>
              <p className="sm:text-lg lg:text-xl font-normal text-[#F3F0E8]">
                With complete amenities like a taxi lounge, nursery, function
                hall, and award-winning mosque, Kota Kasablanka is more than a
                shopping center—it's a dynamic lifestyle ecosystem seamlessly
                connected to your home.
              </p>
            </div>
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
