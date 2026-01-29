import facilities_background from "@/app/assets/home/facilities_background.png";
import Image from "next/image";

const FacilitiesSection = () => {
  return (
    <section
      id="facilities-section"
      className="relative bg-[#2B3036] min-h-screen"
    >
      <div className="absolute inset-0 z-0 pointer-events-none after:content-[''] after:absolute after:inset-0 after:bg-black/15">
        <Image
          src={facilities_background}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 pt-32 p-5 pb-10 xl:pb-16 sm:px-10 xl:px-48 gap-16 flex flex-col justify-end items-start min-h-screen">
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-[#F3F0E8] tracking-widest">
              OUR
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#F3F0E8] tracking-widest sm:ml-20 mb-6 lg:mb-10">
              FACILITIES
            </h2>

            <p className="text-[#F3F0E8] font-normal text-xl lg:text-2xl w-2/3 lg:w-140 mb-10 sm:mb-16 xl:mb-20">
              Where two worlds meet—spaces designed to connect, inspire, and
              elevate the everyday.
            </p>

            <button className="flex justify-center items-center cursor-pointer font-medium capitalize text-xl pt-px w-56 h-11.25 text-[#9D7958] bg-[#F3F0E8] border border-[#9D7958] hover:bg-[#9D7958]/90 hover:text-[#F3F0E8] transition-all duration-200 ease-in-out">
              SEE ALL FACILITIES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
