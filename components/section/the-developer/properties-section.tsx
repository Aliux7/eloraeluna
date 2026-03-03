import { FadeSlide } from "@/components/animation/fade-slide";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import Image from "next/image";
import mall_content_1 from "@/app/assets/kota-kasablanka/mall_content_1.jpg";
import mall_content_2 from "@/app/assets/kota-kasablanka/mall_content_2.jpg";
import mall_content_3 from "@/app/assets/kota-kasablanka/mall_content_3.jpg";
import mall_content_4 from "@/app/assets/kota-kasablanka/mall_content_4.jpg";
import mall_content_5 from "@/app/assets/kota-kasablanka/mall_content_5.jpg";
import mall_content_6 from "@/app/assets/kota-kasablanka/mall_content_6.jpg";

const PropertiesSection = () => {
  return (
    <section
      id="design-section"
      className="relative bg-[#414242] min-h-screen px-5 sm:px-10 xl:px-48 py-32"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-7 md:gap-20 lg:gap-0">
        <div className="flex flex-col justify-end items-end w-fit">
          <WordsPullUp
            text="PAKUWON"
            className="text-[#D9D9D9] text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-light mr-10 md:mr-0"
          />
          <WordsPullUp
            text="SHOWCASE"
            className="text-[#F3F0E8] text-2xl sm:text-3xl 2xl:text-4xl font-bold"
          />
        </div>
        <FadeSlide className="font-medium text-sm sm:text-lg lg:text-xl 2xl:text-2xl tracking-widest max-w-lg 2xl:max-w-xl text-[#F3F0E8]">
          Pakuwon Group develops malls, residences, offices, hospitality, and
          superblocks in Surabaya and Jakarta. We take pride in our leadership
          and remain committed to advancing sustainability across the industry
          and for our customers.
        </FadeSlide>
      </div>
      <div className="py-14 space-y-10">
        <div className="w-full grid lg:grid-cols-3 h-full gap-10 md:gap-16">
          <FadeSlide className="w-full aspect-square lg:aspect-2/1 lg:col-span-2">
            <Image
              src={mall_content_1}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
          <FadeSlide className="w-full h-full">
            <Image
              src={mall_content_2}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
          <FadeSlide className="w-full h-full">
            <Image
              src={mall_content_3}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
          <FadeSlide className="w-full aspect-square lg:aspect-2/1 lg:col-span-2">
            <Image
              src={mall_content_4}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
          <FadeSlide className="w-full aspect-square lg:aspect-2/1 lg:col-span-2">
            <Image
              src={mall_content_5}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </FadeSlide>
          <FadeSlide className="w-full h-full">
            <Image
              src={mall_content_6}
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

export default PropertiesSection;
