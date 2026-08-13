import { FadeSlide } from "@/components/animation/fade-slide";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import Image from "next/image";
import property01 from "@/app/assets/the-developer/01 Gandaria City Superblock Jakarta Selatan.webp";
import property02 from "@/app/assets/the-developer/02 Pakuwon Mall Super Block Surabaya.webp";
import property03 from "@/app/assets/the-developer/03 Tunjungan Plaza Surabaya Pusat.webp";
import property04 from "@/app/assets/the-developer/04 Pakuwon Bekasi Superblock .webp";
import property05 from "@/app/assets/the-developer/05 Pakuwon Mall City Surabaya Timur.webp";
import property06 from "@/app/assets/the-developer/06 Grand Pakuwon Township.webp";
import property07 from "@/app/assets/the-developer/07 Pakuwon Mall Solo.webp";
import property08 from "@/app/assets/the-developer/08 Pakuwon City Township.webp";
import property09 from "@/app/assets/the-developer/09 Plaza Blok M.webp";
import property10 from "@/app/assets/the-developer/10 Royal Plaza- Surabaya.webp";

const properties = [
  { src: property01, title: "Gandaria City Superblock Jakarta Selatan" },
  { src: property02, title: "Pakuwon Mall Super Block Surabaya" },
  { src: property03, title: "Tunjungan Plaza Surabaya Pusat" },
  { src: property04, title: "Pakuwon Bekasi Superblock" },
  { src: property05, title: "Pakuwon Mall City Surabaya Timur" },
  { src: property06, title: "Grand Pakuwon Township" },
  { src: property07, title: "Pakuwon Mall Solo" },
  { src: property08, title: "Pakuwon City Township" },
  { src: property09, title: "Plaza Blok M" },
  { src: property10, title: "Royal Plaza Surabaya" },
];

const spanPattern = ["lg:col-span-2", "", "", "lg:col-span-2"];

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
          {properties.map((property, index) => (
            <FadeSlide
              key={index}
              className={`relative w-full h-full ${spanPattern[index % spanPattern.length]}`}
            >
              <Image
                src={property.src}
                alt={property.title}
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
              />
              <WordsPullUp
                text={property.title}
                className="absolute left-5 bottom-2 text-[#F3F0E8] text-xl sm:text-2xl text-balance"
              />
            </FadeSlide>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
