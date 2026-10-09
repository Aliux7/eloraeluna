import developer_ornament from "@/app/assets/home/developer_ornament.webp";
import developer_background from "@/app/assets/home/developer_background.webp";
import developer_logo from "@/app/assets/pakuwon_logo.svg";
import Image from "next/image";
import { WordsPullUp } from "@/components/animation/word-pull-up";
import { FadeSlide } from "@/components/animation/fade-slide";
import { LinkPullUp } from "@/components/animation/link-pull-up";

const DeveloperSection = () => {
  return (
    <section className="relative bg-[#464948] min-h-screen flex flex-col xl:flex-row">
      <div className="relative w-full xl:w-1/2 h-[66vh] min-h-144 sm:min-h-screen z-10">
        <Image
          src={developer_ornament}
          alt=""
          fill
          className="object-cover opacity-70"
        />

        <div className="absolute inset-0 z-10 flex flex-col justify-center sm:py-16 px-5 sm:px-10 xl:px-16 2xl:px-48">
          <WordsPullUp
            text="THE DEVELOPER"
            className="font-medium tracking-widest text-lg sm:text-2xl xl:text-3xl 2xl:text-[32px] text-[#F3F0E8] mb-20 sm:mb-32"
          />
          <FadeSlide className="relative h-10 sm:h-14 2xl:h-18 justify-start items-start w-auto mb-10 sm:mb-16">
            <Image
              src={developer_logo}
              alt=""
              width={1000}
              height={1000}
              className="w-auto h-full self-start"
            />
          </FadeSlide>

          <FadeSlide className="text-[#F3F0E8] font-normal 2xl:font-light text-sm sm:text-xl mb-14 lg:mb-16 max-w-140 2xl:max-w-200 sm:pr-10 2xl:pr-0 text-balance">
            Pakuwon Group is a pioneer in Indonesia's property scene, known for
            visionary superblocks that blend luxury living, vibrant retail, and
            world-class hospitality across major cities.
          </FadeSlide>

          <LinkPullUp
            href="/the-developer"
            className="flex justify-center items-center cursor-pointer font-medium capitalize text-sm sm:text-base 2xl:text-lg pt-px w-52 sm:w-56 2xl:w-75 h-11.25 2xl:h-14 border border-[#9D7958] hover:bg-[#F3F0E8]/90 text-[#F3F0E8] hover:text-[#9D7958] transition-all duration-200 ease-in-out"
          >
            MEET THE DEVELOPER
          </LinkPullUp>
        </div>
      </div>
      <div className="relative w-full xl:w-1/2 min-h-[70vh] xl:min-h-screen">
        <Image
          src={developer_background}
          alt=""
          fill
          className="object-cover object-[center_10%]"
        />
      </div>
    </section>
  );
};

export default DeveloperSection;
