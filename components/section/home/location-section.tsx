import location_shutter from "@/app/assets/home/location_shutter.png";
import location from "@/app/assets/home/location.png";
import Image from "next/image";

const LocationSection = () => {
  return (
    <section className="relative bg-[#2B3036] min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={location_shutter}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 p-32 px-5 sm:px-10 xl:px-48 gap-16 flex flex-col lg:flex-row justify-between items-start">
        <h3 className="font-bold tracking-widest text-2xl sm:text-3xl text-[#F3F0E8]">
          OUR LOCATION
        </h3>
        <div className="w-1/2 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-20 lg:gap-0">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-[#F3F0E8] tracking-widest">
              INFINITE
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#F3F0E8] tracking-widest ml-16 sm:ml-20 mb-6 sm:mb-10">
              CONNECTIVITY
            </h2>

            <p className="text-[#F3F0E8] font-normal text-xl mb-14 lg:mb-16">
              Surrounded by key business, entertainment, and lifestyle
              destinations, the location offers unparalleled accessibility and
              convenience. Whether for work or leisure, residents and visitors
              enjoy seamless connections to the best that Jakarta has to offer,
              making it the ideal base for a modern, urban lifestyle.
            </p>

            <button className="flex justify-center items-center cursor-pointer font-medium capitalize text-xl pt-px w-56 h-11.25 text-[#9D7958] bg-[#F3F0E8] border border-[#9D7958] hover:bg-[#9D7958]/90 hover:text-[#F3F0E8] transition-all duration-200 ease-in-out">
              LOCATION MAP
            </button>
          </div>
        </div>
      </div>
      <Image
        src={location}
        alt=""
        className="relative w-full h-80 sm:h-full object-cover z-10"
      />
    </section>
  );
};

export default LocationSection;
