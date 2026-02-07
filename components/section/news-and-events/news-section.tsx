import news_1 from "@/app/assets/home/news_1.png";
import news_2 from "@/app/assets/home/news_2.png";
import news_3 from "@/app/assets/home/news_3.png";
import news_4 from "@/app/assets/home/news_4.png";
import arrow_1 from "@/app/assets/home/arrow_1.png";
import Image from "next/image";

const NewsSection = () => {
  return (
    <section className="relative bg-[#F3F0E8] py-36 px-5 sm:px-10 xl:px-48 flex flex-col gap-10">
      <div className="flex justify-between items-center gap-10">
        <h1 className="text-[#464948] text-4xl sm:text-5xl lg:text-6xl font-normal tracking-widest">
          NEWS & EVENTS
        </h1> 
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 col-span-1">
          <Image src={news_1} alt="" className="w-full h-96 lg:h-118 object-cover" />
          <div className="absolute top-0 z-10 p-5 flex flex-col justify-between items-start h-full">
            <h3 className="text-3xl font-medium text-white">
              EXPERIENCE CITY LIVING LIKE NEVER BEFORE
            </h3>
            <button className="h-14 border border-[#B38569] w-full flex justify-between items-center text-[#B38569] p-5 text-lg bg-white/90 hover:bg-white transition-all duration-200 ease-in-out cursor-pointer">
              <span>Read More</span>
              <Image
                src={arrow_1}
                alt=""
                width={100}
                height={100}
                className="w-7"
              />
            </button>
          </div>
        </div>
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 col-span-1 xl:col-span-2">
          <Image src={news_2} alt="" className="w-full h-96 lg:h-118 object-cover" />
          <div className="absolute top-0 z-10 p-5 flex flex-col justify-between items-start h-full w-full">
            <h3 className="text-3xl font-medium text-white lg:w-105">
              LIVE WHERE EVERYTHING HAPPENS: URBAN LIVING AT ITS BEST
            </h3>
            <button className="h-14 border border-[#B38569] w-full flex justify-between items-center text-[#B38569] p-5 text-lg bg-white/90 hover:bg-white transition-all duration-200 ease-in-out cursor-pointer">
              <span>Read More</span>
              <Image
                src={arrow_1}
                alt=""
                width={100}
                height={100}
                className="w-7"
              />
            </button>
          </div>
        </div>
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 col-span-1 xl:col-span-2">
          <Image src={news_3} alt="" className="w-full h-96 lg:h-118 object-cover" />
          <div className="absolute top-0 z-10 p-5 flex flex-col justify-between items-start h-full w-full">
            <h3 className="text-3xl font-medium text-white lg:w-105">
              EXPERIENCE CITY LIVING LIKE NEVER BEFORE
            </h3>
            <button className="h-14 border border-[#B38569] w-full flex justify-between items-center text-[#B38569] p-5 text-lg bg-white/90 hover:bg-white transition-all duration-200 ease-in-out cursor-pointer">
              <span>Read More</span>
              <Image
                src={arrow_1}
                alt=""
                width={100}
                height={100}
                className="w-7"
              />
            </button>
          </div>
        </div>
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 col-span-1">
          <Image src={news_4} alt="" className="w-full h-96 lg:h-118 object-cover" />
          <div className="absolute top-0 z-10 p-5 flex flex-col justify-between items-start h-full">
            <h3 className="text-3xl font-medium text-white">
              LIVE WHERE EVERYTHING HAPPENS: URBAN LIVING AT ITS BEST
            </h3>
            <button className="h-14 border border-[#B38569] w-full flex justify-between items-center text-[#B38569] p-5 text-lg bg-white/90 hover:bg-white transition-all duration-200 ease-in-out cursor-pointer">
              <span>Read More</span>
              <Image
                src={arrow_1}
                alt=""
                width={100}
                height={100}
                className="w-7"
              />
            </button>
          </div>
        </div>
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 col-span-1">
          <Image src={news_1} alt="" className="w-full h-96 lg:h-118 object-cover" />
          <div className="absolute top-0 z-10 p-5 flex flex-col justify-between items-start h-full">
            <h3 className="text-3xl font-medium text-white">
              EXPERIENCE CITY LIVING LIKE NEVER BEFORE
            </h3>
            <button className="h-14 border border-[#B38569] w-full flex justify-between items-center text-[#B38569] p-5 text-lg bg-white/90 hover:bg-white transition-all duration-200 ease-in-out cursor-pointer">
              <span>Read More</span>
              <Image
                src={arrow_1}
                alt=""
                width={100}
                height={100}
                className="w-7"
              />
            </button>
          </div>
        </div>
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 col-span-1 xl:col-span-2">
          <Image src={news_2} alt="" className="w-full h-96 lg:h-118 object-cover" />
          <div className="absolute top-0 z-10 p-5 flex flex-col justify-between items-start h-full w-full">
            <h3 className="text-3xl font-medium text-white lg:w-105">
              LIVE WHERE EVERYTHING HAPPENS: URBAN LIVING AT ITS BEST
            </h3>
            <button className="h-14 border border-[#B38569] w-full flex justify-between items-center text-[#B38569] p-5 text-lg bg-white/90 hover:bg-white transition-all duration-200 ease-in-out cursor-pointer">
              <span>Read More</span>
              <Image
                src={arrow_1}
                alt=""
                width={100}
                height={100}
                className="w-7"
              />
            </button>
          </div>
        </div>
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 col-span-1 xl:col-span-2">
          <Image src={news_3} alt="" className="w-full h-96 lg:h-118 object-cover" />
          <div className="absolute top-0 z-10 p-5 flex flex-col justify-between items-start h-full w-full">
            <h3 className="text-3xl font-medium text-white lg:w-105">
              EXPERIENCE CITY LIVING LIKE NEVER BEFORE
            </h3>
            <button className="h-14 border border-[#B38569] w-full flex justify-between items-center text-[#B38569] p-5 text-lg bg-white/90 hover:bg-white transition-all duration-200 ease-in-out cursor-pointer">
              <span>Read More</span>
              <Image
                src={arrow_1}
                alt=""
                width={100}
                height={100}
                className="w-7"
              />
            </button>
          </div>
        </div>
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 col-span-1">
          <Image src={news_4} alt="" className="w-full h-96 lg:h-118 object-cover" />
          <div className="absolute top-0 z-10 p-5 flex flex-col justify-between items-start h-full">
            <h3 className="text-3xl font-medium text-white">
              LIVE WHERE EVERYTHING HAPPENS: URBAN LIVING AT ITS BEST
            </h3>
            <button className="h-14 border border-[#B38569] w-full flex justify-between items-center text-[#B38569] p-5 text-lg bg-white/90 hover:bg-white transition-all duration-200 ease-in-out cursor-pointer">
              <span>Read More</span>
              <Image
                src={arrow_1}
                alt=""
                width={100}
                height={100}
                className="w-7"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
