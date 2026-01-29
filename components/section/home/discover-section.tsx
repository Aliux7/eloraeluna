import illustration_bottom from "@/app/assets/home/illustration_bottom.png";
import content_1 from "@/app/assets/home/content_1.png";
import content_2 from "@/app/assets/home/content_2.png";
import content_3 from "@/app/assets/home/content_3.png";
import illustration from "@/app/assets/home/illustration.png";
import Image from "next/image";

const DiscoverSection = () => {
  return (
    <section
      id="discover-section"
      className="relative bg-[#464948] min-h-screen px-5 sm:px-10 xl:p-48 pt-0 sm:pt-28 pb-32"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={illustration}
          alt=""
          className="absolute top-0 sm:top-20 xl:top-70 -right-28 xl:-left-20 w-80 sm:w-96 md:w-130"
        />
        <Image
          src={illustration_bottom}
          alt=""
          className="absolute bottom-0 -right-10 sm:right-16 w-96 md:w-120"
        />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col xl:flex-row gap-20 xl:gap-0 justify-between items-start mb-8 sm:mb-32">
          <h3 className="text-xl sm:text-2xl font-medium text-[#F3F0E8] tracking-widest">
            KOTA KASABLANKA <br /> PHASE IV
          </h3>
          <div className="flex flex-col xl:w-1/2 justify-start xl:justify-between gap-20 xl:gap-0 h-96">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F3F0E8] tracking-widest">
                <span className="font-extralight">A</span> LEGACY
              </h2>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F3F0E8] tracking-widest ml-14 sm:ml-20">
                <span className="font-extralight">OF</span> URBAN
              </h2>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F3F0E8] tracking-widest ml-24 sm:ml-40">
                EXCELLENCE
              </h2>
            </div>

            <button className="flex justify-center items-center cursor-pointer font-medium capitalize text-xl pt-px w-51.5 h-11.25 text-[#F3F0E8] border border-[#9D7958] hover:bg-[#F3F0E8]/90 hover:text-[#9D7958] transition-all duration-200 ease-in-out">
              DISCOVER MORE
            </button>
          </div>
        </div>
        <div className="relative flex justify-start xl:justify-center items-end lg:items-center">
          <div className="absolute xl:relative sm:ml-5 sm:mb-5 lg:mb-0 xl:ml-0">
            <div className="hidden xl:block absolute w-115.5 xl:h-131.5 bg-[#9D7958]/40 top-2.5 left-4 z-0"></div>
            <div className="-ml-5 -mb-15 sm:mb-0 sm:ml-0 relative w-80 sm:w-96 lg:w-115.5 xl:h-131.5 bg-[#9D7958]/90 sm:bg-[#9D7958] p-5 sm:p-9 lg:pt-15.5 lg:pr-17.75 pb-10.25 flex flex-col justify-between gap-5 xl:gap-0 items-center">
              <h3 className="font-medium sm:text-lg lg:text-xl tracking-widest text-[#F3F0E8]">
                POSITIONED AT THE HEART OF JAKARTA'S MOST DYNAMIC DISTRICT, THIS
                DEVELOPMENT CONNECTS YOU EFFORTLESSLY TO THE CITY'S PULSE.
              </h3>
              <p className="sm:text-lg lg:text-xl font-normal text-[#F3F0E8]">
                Surrounded by key business, entertainment, and lifestyle
                destinations, the location offers unparalleled accessibility and
                convenience. Whether for work or leisure, residents and visitors
                enjoy seamless connections to the best that Jakarta has to
                offer, making it the ideal base for a modern, urban lifestyle.
              </p>
            </div>
          </div>
          <div className="w-full h-full lg:h-[80vh]">
            <Image
              src={content_1}
              alt=""
              className="w-full h-140 sm:h-200 lg:h-full object-cover xl:min-h-145"
              width={2000}
              height={2000}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center h-full gap-10 md:gap-16 mt-10 md:mt-16">
          <div className="w-full">
            <Image
              src={content_2}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full">
            <Image
              src={content_3}
              alt=""
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </div> 
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
