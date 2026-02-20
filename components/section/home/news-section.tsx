import news_1 from "@/app/assets/home/news_1.png";
import news_2 from "@/app/assets/home/news_2.png";
import news_3 from "@/app/assets/home/news_3.png";
import news_4 from "@/app/assets/home/news_4.png";
import arrow_1 from "@/app/assets/home/arrow_1.png";
import Image from "next/image";
import { LinkPullUp } from "@/components/animation/link-pull-up";

const NewsSection = () => {
  return (
    <section className="relative bg-[#F3F0E8] py-20 sm:py-36 px-5 sm:px-10 xl:px-48 flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 sm:gap-10">
        <h1 className="text-[#464948] text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-normal tracking-widest">
          NEWS & EVENTS
        </h1>
        <LinkPullUp
          href="/news-events"
          className="flex justify-center items-center cursor-pointer font-medium capitalize text-sm sm:text-base 2xl:text-lg pt-px w-32 sm:w-40 2xl:w-55 h-11.25 2xl:h-11 sm:h-14 border border-[#9D7958] hover:bg-[#9D7958]/10 text-[#9D7958] hover:text-[#9D7958] transition-all duration-200 ease-in-out"
        >
          SEE ALL
        </LinkPullUp>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 col-span-1">
          <Image
            src={news_1}
            alt=""
            className="w-full h-96 lg:h-118 2xl:h-200 object-cover"
          />
          <div className="absolute top-0 z-10 p-5 flex flex-col justify-between items-start h-full">
            <h3 className="text-3xl font-medium text-white">
              EXPERIENCE CITY LIVING LIKE NEVER BEFORE
            </h3>
            <LinkPullUp
              href="/news-detail"
              wfull={true}
              className="h-11 sm:h-14 border border-[#B38569] w-full flex justify-between items-center text-[#B38569] p-5 text-sm sm:text-base 2xl:text-lg bg-white/90 hover:bg-white transition-all duration-200 ease-in-out cursor-pointer"
            >
              <span>Read More</span>
              <Image
                src={arrow_1}
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </LinkPullUp>
          </div>
        </div>
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 col-span-1 xl:col-span-2">
          <Image
            src={news_2}
            alt=""
            className="w-full h-96 lg:h-118 2xl:h-200 object-cover"
          />
          <div className="absolute top-0 z-10 p-5 flex flex-col justify-between items-start h-full w-full">
            <h3 className="text-3xl font-medium text-white lg:w-105">
              LIVE WHERE EVERYTHING HAPPENS: URBAN LIVING AT ITS BEST
            </h3>
            <LinkPullUp
              href="/news-detail"
              wfull={true}
              className="h-11 sm:h-14 border border-[#B38569] w-full flex justify-between items-center text-[#B38569] p-5 text-sm sm:text-base 2xl:text-lg bg-white/90 hover:bg-white transition-all duration-200 ease-in-out cursor-pointer"
            >
              <span>Read More</span>
              <Image
                src={arrow_1}
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </LinkPullUp>
          </div>
        </div>
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 col-span-1 xl:col-span-2">
          <Image
            src={news_3}
            alt=""
            className="w-full h-96 lg:h-118 2xl:h-200 object-cover"
          />
          <div className="absolute top-0 z-10 p-5 flex flex-col justify-between items-start h-full w-full">
            <h3 className="text-3xl font-medium text-white lg:w-105">
              EXPERIENCE CITY LIVING LIKE NEVER BEFORE
            </h3>
            <LinkPullUp
              href="/news-detail"
              wfull={true}
              className="h-11 sm:h-14 border border-[#B38569] w-full flex justify-between items-center text-[#B38569] p-5 text-sm sm:text-base 2xl:text-lg bg-white/90 hover:bg-white transition-all duration-200 ease-in-out cursor-pointer"
            >
              <span>Read More</span>
              <Image
                src={arrow_1}
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </LinkPullUp>
          </div>
        </div>
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 col-span-1">
          <Image
            src={news_4}
            alt=""
            className="w-full h-96 lg:h-118 2xl:h-200 object-cover"
          />
          <div className="absolute top-0 z-10 p-5 flex flex-col justify-between items-start h-full">
            <h3 className="text-3xl font-medium text-white">
              LIVE WHERE EVERYTHING HAPPENS: URBAN LIVING AT ITS BEST
            </h3>
            <LinkPullUp
              href="/news-detail"
              wfull={true}
              className="h-11 sm:h-14 border border-[#B38569] w-full flex justify-between items-center text-[#B38569] p-5 text-sm sm:text-base 2xl:text-lg bg-white/90 hover:bg-white transition-all duration-200 ease-in-out cursor-pointer"
            >
              <span>Read More</span>
              <Image
                src={arrow_1}
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </LinkPullUp>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default NewsSection;
