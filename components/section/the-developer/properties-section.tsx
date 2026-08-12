import { FadeSlide } from "@/components/animation/fade-slide";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import Image from "next/image";
import developer_content1 from "@/app/assets/the-developer/developer_content1.jpg";
import developer_content2 from "@/app/assets/the-developer/developer_content2.jpg";
import developer_content3 from "@/app/assets/the-developer/developer_content3.jpg";
import developer_content4 from "@/app/assets/the-developer/developer_content4.jpg";
import developer_content5 from "@/app/assets/the-developer/developer_content5.jpg";
import developer_content6 from "@/app/assets/the-developer/developer_content6.jpg";

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
            className="text-[#D9D9D9] text-4xl sm:text-5xl xl:text-6xl font-light mr-10 md:mr-0"
          />
          <WordsPullUp
            text="SHOWCASE"
            className="text-[#F3F0E8] text-2xl sm:text-3xl font-bold 2xl:font-semibold"
          />
        </div>
        <FadeSlide className="font-medium 2xl:font-normal text-sm sm:text-lg lg:text-xl tracking-widest max-w-lg 2xl:max-w-xl text-[#F3F0E8]">
          Pakuwon Group develops malls, residences, offices, hospitality, and
          superblocks in Surabaya and Jakarta. We take pride in our leadership
          and remain committed to advancing sustainability across the industry
          and for our customers.
        </FadeSlide>
      </div>
      <div className="py-14 space-y-10">
        <div className="w-full grid lg:grid-cols-3 h-full gap-10 md:gap-16">
          <FadeSlide className="relative w-full h-full lg:col-span-2">
            <Image
              src={developer_content1}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
            <WordsPullUp
              text="Pakuwon Bekasi Superblock iBekasi Barat"
              className="absolute left-5 bottom-2 text-[#F3F0E8] text-xl sm:text-2xl"
            />
          </FadeSlide>
          <FadeSlide className="relative w-full h-full">
            <Image
              src={developer_content2}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
            <WordsPullUp
              text="Tunjungan Plaza Surabaya Pusat"
              className="absolute left-5 bottom-2 text-[#F3F0E8] text-xl sm:text-2xl text-balance"
            />
          </FadeSlide>
          <FadeSlide className="relative w-full h-full">
            <Image
              src={developer_content3}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
            <WordsPullUp
              text="Superblock"
              className="absolute left-5 bottom-2 text-[#F3F0E8] text-xl sm:text-2xl"
            />
          </FadeSlide>
          <FadeSlide className="relative w-full h-full lg:col-span-2">
            <Image
              src={developer_content4}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
            <WordsPullUp
              text="Gandaria City Superblock Jakarta Selatan"
              className="absolute left-5 bottom-2 text-[#F3F0E8] text-xl sm:text-2xl"
            />
          </FadeSlide>
          <FadeSlide className="relative w-full h-full lg:col-span-2">
            <Image
              src={developer_content5}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
            <WordsPullUp
              text="Superblock"
              className="absolute left-5 bottom-2 text-[#F3F0E8] text-xl sm:text-2xl"
            />
          </FadeSlide>
          <FadeSlide className="relative w-full h-full">
            <Image
              src={developer_content6}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
            <WordsPullUp
              text="Pakuwon Mall Superblock Surabaya Barat"
              className="absolute left-5 bottom-2 text-[#F3F0E8] text-xl sm:text-2xl text-balance"
            />
          </FadeSlide>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
